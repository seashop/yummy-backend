<template>
  <Row type="flex" :class="prefixCls">
    <Col :span="9" class="cart_list">
      <!-- <Col :xs="24" :sm="24" :md="24" :lg="24" :xl="9" class="cart_list"> -->
      <PageWrapper :class="prefixCls" title="下单">
        <div :class="`${prefixCls}__top`">
          <Row :gutter="10">
            <Col :span="6" :class="`${prefixCls}__top-col`">
              <div>下单时间</div>
              <p>{{ cart.created_at }}</p>
            </Col>
            <Col :span="6" :class="`${prefixCls}__top-col`">
              <div>桌号</div>
              <p>001</p>
            </Col>
            <Col :span="6" :class="`${prefixCls}__top-col`">
              <div>未上菜数</div>
              <p>2个</p>
            </Col>
            <Col :span="6" :class="`${prefixCls}__top-col`">
              <div>总价格</div>
              <p>¥99.00</p>
            </Col>
          </Row>
        </div>
        <div :class="`${prefixCls}__content`">
          <List>
            <template v-for="item in items" :key="item.id">
              <ListItem class="list">
                <ListItemMeta>
                  <template #avatar>
                    <Image
                      class="icon"
                      v-if="goodsStack[item.goods_id].img"
                      :src="goodsStack[item.goods_id].img.full_url && defaultIma"
                      :width="60"
                    />
                  </template>
                  <template #title>
                    <span>{{ goodsStack[item.goods_id].title }}</span>
                    <div class="extra">
                      <BasicButton type="link" danger @click="() => handleDeleteGoods(item)">
                        删除
                      </BasicButton>
                      <BasicButton type="link">待上餐</BasicButton>
                    </div>
                  </template>
                  <template #description>
                    <div class="description">
                      {{ goodsStack[item.goods_id].description }}
                    </div>
                    <div class="info">
                      <div><span>Owner</span>{{ item.author }}</div>
                      <div><span>点餐时间</span>2022/09/22 18:00{{ item.datetime }}</div>
                      <div><span>价格</span>$99.99{{ item.price }}</div>
                    </div>
                    <div class="progress">
                      <span>{{ item.served_num }}</span> /
                      <InputNumber
                        v-model:value="item.quantity"
                        :min="1"
                        @change="(quantity) => ChangeQuantity(item.id, quantity)"
                      />
                      <!-- @change="(quantity) => handelChangeQuantity(item.id, quantity)" -->
                    </div>
                  </template>
                </ListItemMeta>
              </ListItem>
            </template>
          </List>
        </div>
      </PageWrapper>
    </Col>
    <!-- 商品分类 -->
    <Col :span="3">
      <ScrollContainer>
        <BasicButton @click="cartPlace">上菜</BasicButton>
        <BasicButton @click="submitOrder">下单</BasicButton>

        <!-- <BasicButton @click="settlementOrder">去结算</BasicButton> -->
        <Col :span="24">
          <ScrollContainer>
            <div class="category_style">
              <BasicButton type="primary" @click="() => handleCategoryClick(0)">全部</BasicButton>
              <div v-for="(category, index) in categoryItems" :key="index">
                <BasicButton
                  style="margin: 5px 0"
                  type="primary"
                  @click="() => handleCategoryClick(category.category_id)"
                >
                  {{ category.title }}
                </BasicButton>
              </div>
            </div>
            <div :class="`${prefixCls}__content`" v-if="false">
              <List>
                <Row :gutter="16">
                  <template v-for="goods in goodsItems" :key="goods.goods_id">
                    <Col :span="6">
                      <ListItem>
                        <ProductCard :goods="goods" @selected="handleProdcutSelected" />
                      </ListItem>
                    </Col>
                  </template>
                </Row>
              </List>
            </div>
          </ScrollContainer>
        </Col>
        <div v-if="false">
          <template v-for="index in 8" :key="index">
            <BasicButton>Action{{ index }}</BasicButton>
            <br />
          </template>
        </div>
      </ScrollContainer>
    </Col>
    <!-- 商品展示区域 -->
    <Col :span="12" class="goods_list">
      <ScrollContainer>
        <template v-if="false">
          <BasicButton @click="() => handleCategoryClick(0)">全部</BasicButton>
          <BasicButton
            v-for="(category, index) in categoryItems"
            :key="index"
            @click="() => handleCategoryClick(category.category_id)"
          >
            {{ category.title }}
          </BasicButton>
        </template>
        <div :class="`${prefixCls}__content`">
          <List>
            <Row :gutter="16" v-if="goodsItems && goodsItems.length">
              <template v-for="goods in goodsItems" :key="goods.goods_id">
                <Col :span="6">
                  <ListItem>
                    <ProductCard :goods="goods" @selected="handleProdcutSelected" />
                  </ListItem>
                </Col>
              </template>
            </Row>
            <Row :gutter="16" v-else> 该分类下暂无菜品 </Row>
          </List>
        </div>
      </ScrollContainer>
    </Col>
  </Row>
  <Loading :loading="loading" :absolute="absolute" tip="加载中" />
</template>
<script lang="ts">
  import { defineComponent, onMounted, reactive, ref, toRefs, watch } from 'vue';
  import { useRouter } from 'vue-router';
  import { Row, Col, List, InputNumber, Image } from 'ant-design-vue';
  import { listCategory } from '/@/api/stores/category';
  import { getGoods, listGoods } from '/@/api/stores/goods';
  import { CategoryItem } from '/@/api/stores/model/categoryModel';
  import { GoodsItem } from '/@/api/stores/model/goodsModel';
  import BasicButton from '/@/components/Button/src/BasicButton.vue';
  import { ScrollContainer } from '/@/components/Container';
  import { PageWrapper } from '/@/components/Page';

  import ProductCard from './components/ProductCard.vue';
  import {
    appendCart,
    createCart,
    deleteGoods,
    getCart,
    updateGoods,
    PlaceDining,
  } from '/@/api/reception/dining';
  import { PlaceOrder } from '/@/api/orders/order';
  import { DiningCartItem, DiningGoodsItem } from '/@/api/reception/model/diningModel';
  import { Loading } from '/@/components/Loading';
  export default defineComponent({
    components: {
      Row,
      Col,
      List,
      ListItem: List.Item,
      ListItemMeta: List.Item.Meta,
      InputNumber,
      Image,
      BasicButton,
      ScrollContainer,
      PageWrapper,
      ProductCard,
      Loading,
    },
    props: {
      cartId: {
        type: Number as PropType<number>,
        default: 1,
      },
    },
    setup(props) {
      const compState = reactive({
        absolute: false,
        loading: false,
        tip: '加载中...',
      });
      const defaultIma =
        'https://img2.baidu.com/it/u=305065602,2110439559&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1664038800&t=0c25038a0b97628f7cc9a0727162a0dc';
      const router = useRouter();
      const times: any = ref(null);
      function openLoading(absolute: boolean) {
        compState.absolute = absolute;
        compState.loading = true;
      }
      const state = reactive({
        categoryItems: [] as Array<CategoryItem>,
        goodsItems: [] as Array<GoodsItem>,
        cart: {} as DiningCartItem,
        items: [] as Array<Partial<DiningGoodsItem>>,
        goodsStack: [] as Array<GoodsItem>,
      });

      onMounted(async () => {
        openLoading(true);
        state.categoryItems = (await listCategory()).items;
        state.goodsItems = (await listGoods()).items;
        compState.loading = false;
      });

      watch(
        [() => props.cartId],
        async ([id]) => {
          openLoading(true);
          if (!id) {
            return;
          }
          const cart = await getCart(id);
          await reloadCart(cart);
          compState.loading = false;
        },
        {
          immediate: true,
        },
      );

      async function reloadCart(cart) {
        openLoading(true);
        state.cart = cart;
        (
          await listGoods({
            goods_ids: cart.goods.map((item) => item.goods_id),
          })
        ).items.forEach((item) => {
          state.goodsStack[item.goods_id] = item;
        });

        state.items = [...cart.goods];
        compState.loading = false;
      }
      // 购物车防抖
      const ChangeQuantity = (id, quantity) => {
        if (times.value) clearTimeout(times.value);
        times.value = setTimeout(() => {
          handelChangeQuantity(id, quantity);
        }, 300);
      };
      async function handelChangeQuantity(id, quantity) {
        openLoading(true);
        const goods = await updateGoods(id, { quantity });
        state.items = state.items.map((item) => {
          if (item.id == id) {
            item.quantity = goods.quantity;
            item.served_num = goods.served_num;
          }
          return item;
        });
        compState.loading = false;
      }

      async function handleDeleteGoods({ id }) {
        openLoading(true);
        await deleteGoods(id).then(() => {
          state.items = state.items.filter((item) => item.id != id);
        });
        compState.loading = false;
      }

      async function handleCategoryClick(id) {
        openLoading(true);
        state.goodsItems = (
          await listGoods({
            category_id: id,
          })
        ).items;
        compState.loading = false;
      }

      async function handleProdcutSelected({ goods_id, sku }) {
        openLoading(true);
        const item = {
          goods_id: goods_id,
          sku_id: sku,
          quantity: 1,
          served_num: 0,
        };
        await appendCart(props.cartId, item)
          .then((cart) => {
            return reloadCart(cart);
          })
          .then(async () => {
            const goods = await getGoods(goods_id);
            state.goodsStack[goods.goods_id] = goods;
          });
        compState.loading = false;
      }
      // 下单
      async function submitOrder() {
        const res = await PlaceDining(1);
        console.log(res);
      }
      // // 订单结算
      // function settlementOrder() {
      //   router.push({ path: '/orders/order' });
      // }
      return {
        ...toRefs(state),
        ...toRefs(compState),
        defaultIma,
        prefixCls: 'central',
        handelChangeQuantity,
        ChangeQuantity,
        handleDeleteGoods,
        handleCategoryClick,
        handleProdcutSelected,
        // settlementOrder,
        submitOrder,
        PlaceOrder,
        cartPlace: async () => {
          openLoading(true);
          await createCart({
            dintbl_id: props.cartId,
            goods: state.items as Array<DiningGoodsItem>,
          });
          compState.loading = false;
        },
      };
    },
  });
</script>
<style lang="less" scoped>
  .central {
    &__top {
      padding: 24px;
      text-align: center;
      background-color: @component-background;

      &-col {
        &:not(:last-child) {
          border-right: 1px dashed @border-color-base;
        }

        div {
          margin-bottom: 12px;
          font-size: 14px;
          line-height: 22px;
          color: @text-color;
        }

        p {
          margin: 0;
          font-size: 24px;
          line-height: 32px;
          color: @text-color;
        }
      }
    }

    &__content {
      padding: 24px;
      margin-top: 12px;
      background-color: @component-background;

      .list {
        position: relative;
      }

      .icon {
        font-size: 40px !important;
      }

      .extra {
        position: absolute;
        top: 20px;
        right: 15px;
        font-weight: normal;
        color: @primary-color;
        cursor: pointer;
      }

      .description {
        display: inline-block;
        width: 40%;
      }

      .info {
        display: inline-block;
        width: 30%;
        text-align: center;

        div {
          display: inline-block;
          padding: 0 20px;

          span {
            display: block;
            color: #000;
          }
        }
      }

      .progress {
        display: inline-block;
        // width: 15%;
        // vertical-align: top;
      }
    }
    .category_style {
      margin-top: 10px;
      background: #0960bd;
    }
    .cart_list {
      height: 1000px;
      overflow-y: auto;
    }
    .goods_list {
      height: 1000px;
      overflow-y: auto;
    }
  }
</style>
