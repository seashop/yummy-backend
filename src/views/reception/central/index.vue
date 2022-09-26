<template>
  <Row type="flex" :class="prefixCls">
    <Col :span="9" class="cart_list">
      <!-- <Col :xs="24" :sm="24" :md="24" :lg="24" :xl="9" class="cart_list"> -->
      <PageWrapper :class="prefixCls" title="下单" v-if="false">
        <div :class="`${prefixCls}__top`" v-if="false">
          <Row :gutter="10">
            <Col :span="6" :class="`${prefixCls}__top-col`">
              <div>下单时间</div>
              <p>{{ cart.created_at }}</p>
            </Col>
            <Col :span="6" :class="`${prefixCls}__top-col`">
              <div>桌号</div>
              <p>{{ dintbl_id }}</p>
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
        <div :class="`${prefixCls}__content`" v-if="false">
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
                      <BasicButton type="link" danger @click="handleDeleteGoods(item)">
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
      <!-- order Header -->
      <div class="order_header">
        <div class="header_title"> 下单 </div>
        <div class=""> 桌号</div>
        <div class=""> 人数 </div>
      </div>
      <!-- 购物车列表 -->
      <div class="cart_list_box">
        <div class="cart_list_item" v-for="item in items" :key="item.id">
          <div class="godds_img_box">
            <div class="godds_img">
              <img
                src="https://img2.baidu.com/it/u=305065602,2110439559&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1664038800&t=0c25038a0b97628f7cc9a0727162a0dc"
                alt=""
              />
            </div>
          </div>
          <div class="goods_details">
            <div class="goods_details_title">
              <div class="title">
                {{ goodsStack[item.goods_id].title }}
              </div>
              <div class="goods_tag">
                <Tag text="9折" color="#FF0000" size="mini" />
                <Tag text="新品" color="#42CFBE" size="mini" />
              </div>
            </div>
            <div>2022.09.25</div>
          </div>
          <!-- 操作 -->
          <div class="operations">
            <div class="delete_icon" @click="handleDeleteGoods(item)">
              <img src="/@/assets/icons/Group645.png" alt="" />
            </div>
            <div class="input_number">
              <span @click="ChangeQuantity(item.id, --item.quantity)">
                <img src="/@/assets/icons/Group620.png" alt="" />
              </span>
              <div class="num">{{ item.quantity }}</div>
              <span @click="ChangeQuantity(item.id, ++item.quantity)">
                <img src="/@/assets/icons/Group621.png" alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <!-- desc -->
      <div class="desc">
        <InputTextArea
          v-model:value="order_desc"
          placeholder="请输入备注信息"
          :showCount="false"
          :rows="3"
        />
      </div>
      <div class="operate">
        <div class="operate_item">催菜</div>
        <div class="operate_item">换桌</div>
        <div class="operate_item">结账</div>
      </div>
      <!-- submitOrder -->
      <div class="submit_order">
        <div class="total_price">
          <div class="total_icon">
            <img
              src="https://img1.baidu.com/it/u=3006115626,1399856917&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
              alt=""
            />
          </div>
          <div class="total_text">
            <span>$99.00</span>
            <s>$199.00</s>
          </div>
        </div>
        <div class="submit_order_btn">下单</div>
      </div>
    </Col>
    <!-- 商品分类 -->
    <Col :span="3" style="height: 100vh; overflow: auto">
      <ScrollContainer>
        <!-- <BasicButton @click="submitOrder">下单</BasicButton>
        <BasicButton @click="settlementOrder">去结算</BasicButton>
        <BasicButton @click="managementOrder">桌台管理</BasicButton> -->
        <Col :span="24">
          <ScrollContainer>
            <div class="category_style">
              <!-- <BasicButton type="primary" @click="() => handleCategoryClick(0)">全部</BasicButton> -->
              <template v-if="false">
                <div v-for="(category, index) in categoryItems" :key="index">
                  <BasicButton
                    style="margin: 5px 0"
                    type="primary"
                    @click="() => handleCategoryClick(category.category_id)"
                  >
                    {{ category.title }}
                  </BasicButton>
                </div>
              </template>
              <!-- ------------------------------- -->
              <div
                class="category_item"
                :class="{ active_class: 0 == currentId }"
                @click="handleCategoryClick(0)"
              >
                <div class="category_item_img">
                  <div class="item_img">
                    <img src="/@/assets/icons/Juice.png" alt="" />
                  </div>
                </div>
                <div class="category_item_title"> 全部</div>
              </div>
              <div
                class="category_item"
                :class="{ active_class: category.category_id == currentId }"
                v-for="(category, index) in categoryItems"
                :key="index"
                @click="handleCategoryClick(category.category_id)"
              >
                <div class="category_item_img">
                  <div class="item_img">
                    <img src="/@/assets/icons/Juice.png" alt="" />
                  </div>
                </div>
                <div class="category_item_title"> {{ category.title }}</div>
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
                <Col :span="8">
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
    <Loading :loading="loading" :absolute="absolute" tip="加载中" />
  </Row>
</template>
<script lang="ts">
  import { defineComponent, onMounted, reactive, ref, toRefs, watch } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import { Row, Col, List, Input, InputNumber, Image } from 'ant-design-vue';
  import { listCategory } from '/@/api/stores/category';
  import { getGoods, listGoods } from '/@/api/stores/goods';
  import { CategoryItem } from '/@/api/stores/model/categoryModel';
  import { GoodsItem } from '/@/api/stores/model/goodsModel';
  import BasicButton from '/@/components/Button/src/BasicButton.vue';
  import { ScrollContainer } from '/@/components/Container';
  import { PageWrapper } from '/@/components/Page';

  import ProductCard from './components/ProductCard.vue';
  import Tag from './components/tag.vue';
  import {
    appendCart,
    // createCart,
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
      Tag,
      InputTextArea: Input.TextArea,
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
      const currentId = ref(0);
      const order_desc = ref('');
      const defaultIma =
        'https://img2.baidu.com/it/u=305065602,2110439559&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1664038800&t=0c25038a0b97628f7cc9a0727162a0dc';
      const router = useRouter();
      const route = useRoute();
      const times: any = ref(null);
      function openLoading(absolute: boolean) {
        compState.absolute = absolute;
        compState.loading = true;
      }
      const dintbl_id = route.query.id ?? '';
      if (!dintbl_id) router.push({ path: '/reception/management' });
      console.log('dintbl_id', dintbl_id);
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
        currentId.value = id;
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
      function settlementOrder() {
        router.push({ path: '/orders/order' });
      }
      function managementOrder() {
        router.push({
          path: '/reception/management',
        });
      }
      return {
        ...toRefs(state),
        ...toRefs(compState),
        defaultIma,
        dintbl_id,
        currentId,
        order_desc,
        prefixCls: 'central',
        handelChangeQuantity,
        ChangeQuantity,
        handleDeleteGoods,
        handleCategoryClick,
        handleProdcutSelected,
        settlementOrder,
        managementOrder,
        submitOrder,
        PlaceOrder,
        // cartPlace: async () => {
        //   openLoading(true);
        //   await createCart({
        //     dintbl_id: props.cartId,
        //     goods: state.items as Array<DiningGoodsItem>,
        //   });
        //   compState.loading = false;
        // },
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
      // background-color: @component-background;

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
      // margin-top: 10px;
      // background: #0960bd;
    }
    .category_item {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 192px;
      margin: 15px 0;
      background: #061527;

      border-top-left-radius: 17px;
      border-bottom-left-radius: 17px;
      opacity: 1;
      .category_item_img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
        background-color: #fff;
        border-radius: 50%;
        .item_img {
          width: 30px;
          height: 30px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .category_item_title {
        margin-top: 10px;
        color: #fff;
      }
    }
    .active_class {
      height: 400px;
      background-color: #ffc165;
    }
    .cart_list {
      height: 100vh;
      overflow-y: auto;
      background: #fff;
      // order_header
      .order_header {
        display: flex;
        height: 60px;
        margin: 10px 50px;
        border: 1px solid #ffc165;
        border-radius: 30px;
        .header_title {
          margin-left: 30px;
          font-size: 30px;
          font-weight: 700;
          border-left: 3px solid #ffc165;
        }
      }
      .cart_list_box {
        height: 600px;
        overflow: auto;
        padding: 12px;
        .cart_list_item {
          display: flex;
          height: 90px;
          margin: 10px;
          // padding: 12px;
          border: 1px solid #ccc;
          box-shadow: 0 0px 3px 4px rgb(236, 236, 236);
          -webkit-box-shadow: 0 0px 3px 4px rgba(236, 236, 236); //Google Chrome
          -moz-box-shadow: 0 0px 3px 4px rgba(236, 236, 236); //Firefix
          -o-box-shadow: 0 0px 3px 4px rgba(236, 236, 236); //opera
          -ms-box-shadow: 0 0px 3px 4px rgba(236, 236, 236); //IE
          .godds_img_box {
            width: 120px;
            display: flex;
            align-items: center;
            // padding: 12px;
            .godds_img {
              width: 120px;
              img {
                width: 100%;
              }
            }
          }

          .goods_details {
            flex: 1;
            display: flex;
            padding: 8px 5px;
            flex-direction: column;
            justify-content: space-between;
            .goods_details_title {
              .title {
                height: 31px;
                font-size: 14px;
                font-weight: 400;
                color: #000000;
                // line-height: 28px;
              }
              .goods_tag {
                display: flex;
              }
            }
          }
          .operations {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-end;
            width: 60px;
            padding: 8px 5px;
            .delete_icon {
              width: 30px;
              height: 30px;
            }
            .input_number {
              display: flex;
              align-items: center;
              span {
                width: 15px;
                height: 15px;
                text-align: center;
                img {
                  width: 100%;
                }
              }
              .num {
                padding: 0 10px;
                font-size: 16px;
                font-weight: 700;
                text-align: center;
              }
            }
            // background: #ccc;
          }
        }
      }
      .desc {
        margin-top: 20px;
        margin-bottom: 50px;
        border-radius: 5px;
        .desc_title {
          height: 42px;
          font-size: 30px;
          font-weight: 600;
          color: #061527;
          line-height: 42px;
        }
        ::v-deep textarea.ant-input {
          border-radius: 10px;
        }
      }
      // operate
      .operate {
        display: flex;
        justify-content: space-around;
        margin-bottom: 30px;
        .operate_item {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100px;
          height: 100px;
          font-size: 20px;
          font-weight: 700;
          border-radius: 50%;
          border: 3px solid #193557;
        }
        .operate_item:active {
          color: #fff;
          background: #505b67;
        }
      }
      // submit_order
      .submit_order {
        display: flex;
        align-items: center;
        height: 100px;
        background: #193557;
        border-radius: 54px;
        overflow: hidden;
        .total_price {
          display: flex;
          align-items: flex-end;
          width: 70%;
          .total_icon {
            margin-left: 30px;
            width: 80px;
            height: 80px;
          }
          .total_text {
            color: #fff;
            margin-left: 10px;
            span {
              font-size: 40px;
              font-weight: 400;
            }
            s {
              color: #ccc;
            }
          }
        }
        .submit_order_btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 30%;
          height: 100%;
          font-size: 26px;
          font-weight: 700;

          background: #ffc165;
        }
      }
    }
    .goods_list {
      height: 100vh;
      overflow-y: auto;
      background: #ffc165;
    }
  }
  // .ant-card-bordered:active{

  // }
  ::v-deep .ant-card-body {
    padding: 15px;
    // height: 389px;
  }
  ::v-deep .ant-card-body:active {
    border: 8px solid #000;
    border-radius: 20px;
    background: #000;
  }
  ::v-deep .ant-card-bordered {
    border-radius: 7px;
  }
</style>
