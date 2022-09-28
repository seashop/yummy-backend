<template>
  <Row type="flex" :class="prefixCls">
    <Col :span="pageWidth > 1024 ? 7 : 9" class="cart_list">
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
        <div class=""> 桌号:{{ dintbl_id }}</div>
        <div class=""> 人数 </div>
        <button @click="goTablePage">回到桌台</button>
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
                <Tag
                  text="热门"
                  color="#ff0000"
                  size="mini"
                  v-if="goodsStack[item.goods_id].is_hot"
                />
                <Tag
                  text="新品"
                  color="#42CFBE"
                  size="mini"
                  v-if="goodsStack[item.goods_id].is_new"
                />
              </div>
            </div>
            <!-- <div>2022.09.25</div> -->
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
            <img src="/@/assets/icons/Group664@2x.png" alt="" />
          </div>
          <div class="total_text">
            <span>$99.00</span>
            <s>$199.00</s>
          </div>
        </div>
        <div class="submit_order_btn" @click="submitOrder">下单</div>
      </div>
    </Col>
    <!-- 商品分类 -->
    <Col :span="3" style="height: calc(100vh - 32px); overflow: auto">
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
                style="margin-top: 0"
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
    <Col :span="pageWidth > 1024 ? 14 : 12" class="goods_list">
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
                <Col :span="pageWidth > 1024 ? 8 : 12">
                  <!-- <ListItem> -->
                  <ProductCard :goods="goods" @selected="handleProdcutSelected" />
                  <!-- </ListItem> -->
                </Col>
              </template>
            </Row>
            <Row :gutter="16" v-else> 该分类下暂无菜品 </Row>
          </List>
        </div>
      </ScrollContainer>
    </Col>
  </Row>
</template>
<script lang="ts">
  import { defineComponent, onMounted, reactive, ref, toRefs, watch, nextTick } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import { Row, Col, List, Input, InputNumber, Image } from 'ant-design-vue';
  import { listCategory } from '/@/api/stores/category';
  import { getGoods, listGoods } from '/@/api/stores/goods';
  import { CategoryItem } from '/@/api/stores/model/categoryModel';
  import { GoodsItem } from '/@/api/stores/model/goodsModel';
  // import { listDiningTables } from '/@/api/plugins/diningTable';
  import BasicButton from '/@/components/Button/src/BasicButton.vue';
  import { ScrollContainer } from '/@/components/Container';
  import { PageWrapper } from '/@/components/Page';
  import { getBrowser } from '/@/utils/getBrowser';

  import ProductCard from './components/ProductCard.vue';
  import Tag from './components/tag.vue';
  import {
    // ListCart,
    appendCart,
    createCart,
    deleteGoods,
    getCart,
    updateGoods,
    // PlaceDining,
  } from '/@/api/reception/dining';
  import { PlaceOrder } from '/@/api/orders/order';
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
      const cartId: any = ref(undefined);
      const currentId = ref(0);
      const order_desc = ref('');
      const pageWidth: any = ref(undefined);
      const defaultIma =
        'https://img2.baidu.com/it/u=305065602,2110439559&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1664038800&t=0c25038a0b97628f7cc9a0727162a0dc';
      const router = useRouter();
      const route = useRoute();
      const times: any = ref(null);

      const dintbl_id = route.query.id ?? undefined;
      if (!dintbl_id) router.push({ path: '/reception/management' });
      // console.log('dintbl_id', dintbl_id);
      const state = reactive({
        categoryItems: [] as Array<CategoryItem>,
        goodsItems: [] as Array<GoodsItem>,
        cart: {} as DiningCartItem,
        items: [] as Array<Partial<DiningGoodsItem>>,
        goodsStack: [] as Array<GoodsItem>,
      });
      const goTablePage = () => {
        router.push({ path: '/reception/management' });
      };
      onMounted(async () => {
        const { width } = getBrowser();
        pageWidth.value = width;
        window.addEventListener('resize', () => {
          Browser();
        });
        // 获取页面元素 默认全屏
        if (document.querySelector('.vben-layout-header-action__item')) {
          if (document.querySelector('.vben-multiple-tabs-content__extra-fold'))
            document.querySelector('.vben-multiple-tabs-content__extra-fold')!.click();
        }
        state.categoryItems = (await listCategory()).items;
        // console.log('state.categoryItems ', state.categoryItems);
        state.goodsItems = (await listGoods()).items;
        nextTick(() => {
          if (document.querySelector('.vben-setting-drawer-feature')) {
            document.querySelector('.vben-setting-drawer-feature')!.style.display = 'none'; //隐藏设置图标
          }
        });
      });
      function Browser() {
        // 执行了
        const { width } = getBrowser();
        pageWidth.value = width;
      }
      // 获取所有桌台
      // const getListDiningTables = async () => {
      //   const res = await listDiningTables();
      //   console.log('getListDiningTables', res);
      // };
      // getListDiningTables();
      // 创建购物车
      const getCreateCart = async () => {
        if (!dintbl_id) return;
        const res = await createCart({
          dintbl_id: dintbl_id,
        });
        cartId.value = res.id;
        console.log('getCreateCart', cartId.value);
      };
      getCreateCart();
      watch(
        [() => cartId.value],
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

      watch(
        () => state.items,
        (val) => {
          if (val && val.length) {
            // const result = val.reduce((all,item)=>{})
          }
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
        console.log('state.cart', state.cart);
        console.log('[...cart.goods]', [...cart.goods]);
        state.items = [...cart.goods];
      }
      // 购物车防抖
      const ChangeQuantity = (id, quantity) => {
        if (times.value) clearTimeout(times.value);
        times.value = setTimeout(() => {
          handelChangeQuantity(id, quantity);
        }, 300);
      };
      async function handelChangeQuantity(id, quantity) {
        const goods = await updateGoods(id, { quantity });
        state.items = state.items.map((item) => {
          if (item.id == id) {
            item.quantity = goods.quantity;
            item.served_num = goods.served_num;
            item.price = goods.price;
          }
          return item;
        });
        console.log('state.items', state.items);
      }

      async function handleDeleteGoods({ id }) {
        await deleteGoods(id).then(() => {
          state.items = state.items.filter((item) => item.id != id);
        });
      }

      async function handleCategoryClick(id) {
        currentId.value = id;
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
        await appendCart(cartId.value, item)
          .then((cart) => {
            return reloadCart(cart);
          })
          .then(async () => {
            const goods = await getGoods(goods_id);
            state.goodsStack[goods.goods_id] = goods;
          });
      }
      // 下单
      async function submitOrder() {
        // console.log('下单');
        // const data = {
        //   dintbl_id: 1,
        //   // pick_code: 0,
        //   // user_id: 0,
        //   message: '我是备注信息',
        //   // invite_code: '',
        // };
        const res = await PlaceOrder(1);
        // const res = await PlaceOrder(1);
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
        // ...toRefs(compState),
        defaultIma,
        dintbl_id,
        currentId,
        order_desc,
        pageWidth,
        prefixCls: 'central',
        handelChangeQuantity,
        ChangeQuantity,
        handleDeleteGoods,
        handleCategoryClick,
        handleProdcutSelected,
        settlementOrder,
        managementOrder,
        submitOrder,
        goTablePage,
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
      background: #fff;
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
        text-align: center;
        margin-top: 10px;
        padding: 0 5px;
        color: #fff;
      }
    }
    .active_class {
      height: 400px;
      background-color: #ffc165;
    }
    .cart_list {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      height: calc(100vh - 32px);
      // padding-right: 25px;
      padding: 0 2%;
      background: #fff;
      .order_header {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 60px;
        margin: 10px 50px;
        border: 1px solid #ffc165;
        border-radius: 30px;
        .header_title {
          // margin-left: 30px;
          font-size: 20px;
          font-weight: 700;
          // border-left: 3px solid #ffc165;
        }
      }
      .cart_list_box {
        height: 478px;
        overflow: auto;
        // padding: 12px;
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
          overflow: hidden;
          border-radius: 8px;

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
                font-size: 12px;
                font-weight: 400;
                color: #000000;
                // line-height: 28px;
              }
              .goods_tag {
                display: flex;
                margin-top: 3px;
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
        // margin-bottom: 50px;
        // border-radius: 5px;
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
        // margin-bottom: 30px;
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
            display: flex;
            align-items: center;
            margin-left: 30px;
            width: 66px;
            height: 75px;
          }
          .total_text {
            color: #fff;
            margin-left: 10px;
            margin-bottom: 7px;
            span {
              font-size: 25px;
              font-weight: 400;
            }
            s {
              font-size: 12px;
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
      height: calc(100vh - 32px);
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
    // border: 8px solid #000;
    // border-radius: 20px;
    // background: #000;
  }
  ::v-deep .ant-card-bordered {
    border-radius: 7px;
  }
</style>
