<template>
  <Row type="flex" :class="prefixCls">
    <Col :flex="2">
      <PageWrapper :class="prefixCls" title="下单">
        <div :class="`${prefixCls}__top`">
          <Row :gutter="12">
            <Col :span="8" :class="`${prefixCls}__top-col`">
              <div>下单时间</div>
              <p>{{ cart.created_at }}</p>
            </Col>
            <Col :span="8" :class="`${prefixCls}__top-col`">
              <div>桌号</div>
              <p>001</p>
            </Col>
            <Col :span="8" :class="`${prefixCls}__top-col`">
              <div>未上菜数</div>
              <p>2个</p>
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
                      :src="goodsStack[item.goods_id].img.full_url"
                    />
                  </template>
                  <template #title>
                    <span>{{ goodsStack[item.goods_id].title }}</span>
                    <div class="extra"> 已上餐 </div>
                  </template>
                  <template #description>
                    <div class="description">
                      {{ goodsStack[item.goods_id].description }}
                    </div>
                    <div class="info">
                      <div><span>Owner</span>{{ item.author }}</div>
                      <div><span>点餐时间</span>{{ item.datetime }}</div>
                    </div>
                    <div class="progress">
                      <span>{{ item.served_num }}</span> /
                      <InputNumber
                        v-model:value="item.quantity"
                        :min="item.served_num"
                        @change="(quantity) => handelChangeQuantity(item.id, quantity)"
                      />
                    </div>
                  </template>
                </ListItemMeta>
              </ListItem>
            </template>
          </List>
          <div>
            <BasicButton @click="submit">提交</BasicButton>
          </div>
        </div>
      </PageWrapper>
    </Col>
    <Col :flex="1">
      <ScrollContainer>
        <template v-for="index in 8" :key="index">
          <BasicButton>Action{{ index }}</BasicButton>
          <br />
        </template>
      </ScrollContainer>
    </Col>
    <Col :flex="2">
      <ScrollContainer>
        <BasicButton @click="() => handleCategoryClick(0)">全部</BasicButton>
        <BasicButton
          v-for="(category, index) in categoryItems"
          :key="index"
          @click="() => handleCategoryClick(category.category_id)"
        >
          {{ category.title }}
        </BasicButton>

        <div :class="`${prefixCls}__content`">
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
  </Row>
</template>
<script lang="ts">
  import { defineComponent, onMounted, reactive, toRefs, watch } from 'vue';
  import { Row, Col, List, InputNumber, Image } from 'ant-design-vue';
  import { listCategory } from '/@/api/stores/category';
  import { getGoods, listGoods } from '/@/api/stores/goods';
  import { CategoryItem } from '/@/api/stores/model/categoryModel';
  import { GoodsItem } from '/@/api/stores/model/goodsModel';
  import BasicButton from '/@/components/Button/src/BasicButton.vue';
  import { ScrollContainer } from '/@/components/Container';
  import { PageWrapper } from '/@/components/Page';

  import ProductCard from './components/ProductCard.vue';
  import { appendCart, createCart, getCart, updateGoods } from '/@/api/reception/dining';
  import { DiningCartItem, DiningGoodsItem } from '/@/api/reception/model/diningModel';

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
    },
    props: {
      cartId: {
        type: Number as PropType<number>,
        default: 1,
      },
    },
    setup(props) {
      const state = reactive({
        categoryItems: [] as Array<CategoryItem>,
        goodsItems: [] as Array<GoodsItem>,
        cart: {} as DiningCartItem,
        items: [] as Array<Partial<DiningGoodsItem>>,
        goodsStack: [] as Array<GoodsItem>,
      });

      onMounted(async () => {
        state.categoryItems = (await listCategory()).items;
        state.goodsItems = (await listGoods()).items;
      });

      watch(
        [() => props.cartId],
        async ([id]) => {
          if (!id) {
            return;
          }
          const cart = await getCart(id);
          await reloadCart(cart);
        },
        {
          immediate: true,
        },
      );

      async function reloadCart(cart) {
        state.cart = cart;
        (
          await listGoods({
            goods_ids: cart.goods.map((item) => item.goods_id),
          })
        ).items.forEach((item) => {
          state.goodsStack[item.goods_id] = item;
        });

        state.items = [...cart.goods];
      }

      async function handelChangeQuantity(id, quantity) {
        await updateGoods(id, { quantity });
      }

      async function handleCategoryClick(id) {
        state.goodsItems = (
          await listGoods({
            category_id: id,
          })
        ).items;
      }

      async function handleProdcutSelected({ goods_id, sku }) {
        const item = {
          goods_id: goods_id,
          sku_id: sku,
          quantity: 1,
          served_num: 0,
        };
        appendCart(props.cartId, item)
          .then((cart) => {
            return reloadCart(cart);
          })
          .then(async () => {
            const goods = await getGoods(goods_id);
            state.goodsStack[goods.goods_id] = goods;
            state.items.push(item);
          });
      }

      return {
        ...toRefs(state),
        prefixCls: 'central',
        handelChangeQuantity,
        handleCategoryClick,
        handleProdcutSelected,
        submit: async () => {
          await createCart({
            dintbl_id: props.cartId,
            goods: state.items as Array<DiningGoodsItem>,
          });
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
          }
        }
      }

      .progress {
        display: inline-block;
        // width: 15%;
        // vertical-align: top;
      }
    }
  }
</style>
