<template>
  <Row type="flex" :class="prefixCls">
    <Col :span="pageWidth > 1024 ? 7 : 9" class="cart_list">
      <!-- order Header -->
      <div class="order_header" @click="goTablePage"><LeftOutlined /> 返回 </div>
      <div class="operate">
        <OrderOperate
          :tableNum="tableTitle"
          :status="false"
          :isChange="!!items && !!items.length"
        />
      </div>
      <!-- 购物车列表 -->
      <div class="cart_list_box">
        <template v-if="items && items.length">
          <!-- <template v-if="true">  -->
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
                <div
                  class="title"
                  v-if="goodsStack[item.goods_id] && goodsStack[item.goods_id].title"
                >
                  {{ goodsStack[item.goods_id].title }}
                </div>
                <div class="goods_tag">
                  <Tag text="热门" color="#ff0000" v-if="goodsStack[item.goods_id].is_hot" />
                  <Tag text="新品" color="#42CFBE" v-if="goodsStack[item.goods_id].is_new" />
                </div>
              </div>
              <div class="goods_price">$99.00</div>
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
          <!-- end -->
          <!-- div orderGoods -->
          <!-- <div class="cart_list_item" v-for="item in items" :key="item.id">
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
                  {{ item.title }}
                </div>
                <div class="goods_tag"> </div>
              </div>
              <div class="goods_price">{{ '$' + item.price || '$99.00' }}</div>
            </div>
            <div class="order_status_img">
              <img src="/@/assets/icons/Group710.png" alt="" />
            </div>
            <div class="operations">
              <div class="delete_icon" @click="handleDeleteGoods(item)">
                <img src="/@/assets/icons/Group645.png" alt="" />
              </div>
              <div class="input_number">
                <span @click="ChangeQuantity(item.id, --item.quantity)">
                  <img src="/@/assets/icons/Group620.png" alt="" />
                </span>
                <div class="num">{{ item.quantity || item.number }}</div>
                <span @click="ChangeQuantity(item.id, ++item.quantity)">
                  <img src="/@/assets/icons/Group621.png" alt="" />
                </span>
              </div>
            </div>
          </div> -->
        </template>
        <template v-else>
          <div class="order_null">
            <img src="/@/assets/images/Group721.png" alt="" />
            <div class="order_title">Welcome to order</div>
          </div>
        </template>
      </div>
      <!-- desc -->
      <div class="desc" v-if="items && items.length">
        <InputTextArea
          style="height: 46px"
          v-model:value="order_desc"
          placeholder="请输入备注信息"
          :showCount="false"
          :rows="1"
        />
      </div>
      <!-- submitOrder -->
      <div class="submit_order" :class="NoOrder || (items && items.length) ? '' : 'order_status'">
        <div class="total_price">
          <div class="total_icon">
            <div class="total_icon_img">
              <!-- <span class="icon_num"> {{ totalNum }} </span> -->
              <span class="icon_num"> {{ items.length }} </span>
              <img src="/@/assets/icons/Group664@2x.png" alt=""
            /></div>
          </div>
          <div class="total_text">
            <!-- <span>$99.00</span> -->
            <span>${{ items.reduce((all, item) => all + Number(item.price), 0) }}</span>
            <s>$199.00</s>
          </div>
        </div>
        <div class="submit_order_btn" @click="handleOpenModal">下单</div>
      </div>
      <!-- 结账 -->
      <div class="bill_please" :class="order_id ? '' : 'order_status'" @click="goPay"> 结账 </div>
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
          </ScrollContainer>
        </Col>
      </ScrollContainer>
    </Col>
    <!-- 商品展示区域 -->
    <Col :span="pageWidth > 1024 ? 14 : 12" class="goods_list">
      <ScrollContainer>
        <div :class="`${prefixCls}__content`">
          <List>
            <Row :gutter="16" v-if="goodsItems && goodsItems.length">
              <template v-for="goods in goodsItems" :key="goods.goods_id">
                <Col :span="pageWidth > 1024 ? 8 : 12">
                  <!-- <ListItem> -->
                  <ProductCard
                    :goods="goods"
                    :checkedGoods="items.find((item) => item.id == goods.goods_id)"
                    @selected="handleProdcutSelected"
                    @changeProduct="ChangeQuantity"
                  />
                  <!-- </ListItem> -->
                </Col>
              </template>
            </Row>
            <Row :gutter="16" v-else> 该分类下暂无菜品 </Row>
          </List>
        </div>
      </ScrollContainer>
    </Col>
    <!-- 对话框 -->
    <Modal
      v-model:visible="visible"
      centered
      width="600"
      :closable="false"
      :footer="null"
      @ok="handleMode"
    >
      <div class="modal_box">
        <div class="modal_title">
          <div class="tips">下单提示</div>
          <p>是否现在下单</p>
        </div>
        <div class="modal_btn">
          <div class="btn">
            <div class="btn_text" @click="visible = false"> 我再看看 </div>
          </div>
          <div class="confirm">
            <div class="btn_text" @click="submitOrder"> 立即下单 </div>
          </div>
        </div>
      </div>
    </Modal>
  </Row>
</template>
<script lang="ts">
  import { defineComponent, onMounted, reactive, ref, toRefs, watch } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import { Row, Col, List, Input, Modal, message } from 'ant-design-vue';
  import { LeftOutlined } from '@ant-design/icons-vue';
  import { useCentralStore } from '/@/store/modules/central';
  import { listCategory } from '/@/api/stores/category';
  import { getGoods, listGoods } from '/@/api/stores/goods';
  import { CategoryItem } from '/@/api/stores/model/categoryModel';
  import { GoodsItem } from '/@/api/stores/model/goodsModel';
  import { ScrollContainer } from '/@/components/Container';
  import { getBrowser } from '/@/utils/getBrowser';
  import OrderOperate from './components/OrderOperate.vue';
  import ProductCard from './components/ProductCard.vue';
  import Tag from './components/tag.vue';
  import {
    // listCart,
    appendCart,
    createCart,
    deleteGoods,
    getCart,
    updateGoods,
    // PlaceDining,
  } from '/@/api/reception/dining';
  import { PlaceOrder, listOrders } from '/@/api/orders/order';
  import { DiningCartItem, DiningGoodsItem } from '/@/api/reception/model/diningModel';
  import { editOrderPay } from '/@/api/orders/order';
  export default defineComponent({
    components: {
      Row,
      Col,
      List,
      Modal,
      ScrollContainer,
      OrderOperate,
      ProductCard,
      LeftOutlined,
      Tag,
      InputTextArea: Input.TextArea,
    },
    props: {
      cartId: {
        type: Number as PropType<number>,
        default: 1,
      },
    },
    setup() {
      const visible = ref(false);
      const NoOrder = ref(false);
      const order_id = ref(0);
      const tableTitle: any = ref('');
      const CentralStore = useCentralStore();
      const cartId: any = ref(undefined);
      const currentId = ref(0);
      const order_desc = ref('');
      const pageWidth: any = ref(undefined);
      const defaultIma =
        'https://img2.baidu.com/it/u=305065602,2110439559&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1664038800&t=0c25038a0b97628f7cc9a0727162a0dc';
      const router = useRouter();
      const route = useRoute();
      const times: any = ref(null);
      const totalNum = ref(0);
      const dintbl_id = route.query.id ?? undefined;
      tableTitle.value = route.query.title ?? undefined;
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
        CentralStore.$reset();
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
        if (document.querySelector('.vben-setting-drawer-feature')) {
          document.querySelector('.vben-setting-drawer-feature')!.style.display = 'none'; //隐藏设置图标
        }
        state.categoryItems = (await listCategory()).items;
        // console.log('state.categoryItems ', state.categoryItems);
        state.goodsItems = (await listGoods()).items;
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
        // console.log('getCreateCart', cartId.value);
      };

      const getOrderList = async () => {
        const OrderList = await listOrders({
          dintbl_id,
        });
        console.log('OrderList', OrderList);
        if (OrderList && OrderList.items.length) {
          if (OrderList.items[0].payment_state) {
            getCreateCart();
            return;
          }
          state.items = OrderList.items[0].ordergoods.concat(OrderList.items[1].ordergoods);
          // const list = []
          // state.items = []
          console.log('state.items', state.items);
        } else {
          getCreateCart(); //创建购物车
        }
      };
      //ListCart
      getOrderList();
      watch(
        [() => cartId.value],
        async ([id]) => {
          if (!id) return;
          const cart = await getCart(id);
          // console.log('cartId', cart);
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
            const result = val.reduce((all, item) => all + item.quantity, 0);
            // console.log(result);
            totalNum.value = result;
          }
          CentralStore.changeCartList(val);
          // console.log('watch---state.items', val);
        },
      );

      async function reloadCart(cart) {
        state.cart = cart;
        // (
        //   await listGoods({
        //     goods_ids: cart.goods.map((item) => item.goods_id),
        //   })
        // ).items.forEach((item) => {
        //   // console.log('ListGoods', item);
        //   state.goodsStack[item.goods_id] = item;
        // });
        const result = await listGoods({
          goods_ids: cart.goods.map((item) => item.goods_id),
        });
        result.items.forEach((item) => {
          state.goodsStack[item.goods_id] = item;
        });
        // console.log('goods_ids: cart.goods.map(', result);
        // console.log('state.cart', state.cart);
        // console.log('[...cart.goods]', [...cart.goods]);
        state.items = [...cart.goods];
      }
      // 购物车防抖
      const ChangeQuantity = (id, quantity) => {
        if (quantity <= 0) {
          handleDeleteGoods({ id });
          return;
        }
        if (times.value) clearTimeout(times.value);
        times.value = setTimeout(() => {
          handelChangeQuantity(id, quantity);
        }, 300);
      };
      async function handelChangeQuantity(id, quantity) {
        const goods = await updateGoods(id, { quantity });
        // console.log('goods', goods);
        state.items = state.items.map((item) => {
          if (item.id == id) {
            item.quantity = goods.quantity;
            item.served_num = goods.served_num;
          }
          return item;
        });
        // console.log('state.items', state.items);
      }

      async function handleDeleteGoods({ id }) {
        await deleteGoods(id).then(() => {
          state.items = state.items.filter((item) => item.id != id);
        });
      }

      async function handleCategoryClick(id) {
        currentId.value = id;
        // console.log('点击了分类');
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
            console.log('appendCart', goods);
            state.goodsStack[goods.goods_id] = goods;
          });
      }
      // 下单
      async function submitOrder() {
        // return;
        // console.log('下单');
        // const data = {
        // dintbl_id: 1,
        // pick_code: 0,
        // user_id: 0,
        // message: '我是备注信息',
        // invite_code: '',
        // };
        // console.log('dintbl_id', dintbl_id);
        const data = {
          message: '我是备注',
        };
        const res = await PlaceOrder(dintbl_id, data);
        console.log('placeOrder', res);
        if (res.id) {
          order_id.value = res.id;
          message.success('下单成功');
          visible.value = false;
        }
        // const res = await PlaceOrder(1);
        console.log(res);
      }
      // 下单弹窗
      const handleOpenModal = () => {
        if (state.items && state.items.length) {
          visible.value = true;
        }
      };
      // modal事件
      const handleMode = () => {
        console.log('点击了确认');
      };
      // // 订单结算
      function settlementOrder() {
        router.push({ path: '/orders/order' });
      }
      function managementOrder() {
        router.push({
          path: '/reception/management',
        });
      }
      // 结账
      const goPay = async () => {
        const res = await editOrderPay(order_id.value);
        console.log('goPay', res);
        message.success('结账成功');
      };
      return {
        ...toRefs(state),
        // ...toRefs(compState),
        visible,
        order_id,
        goPay,
        tableTitle,
        NoOrder,
        defaultIma,
        dintbl_id,
        currentId,
        order_desc,
        pageWidth,
        totalNum,
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
        handleMode,
        handleOpenModal,
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
      //
      justify-content: space-around;
      height: calc(100vh - 32px);
      // padding-right: 25px;
      padding: 0 2%;
      // padding: 0 67px;
      background: #fff;
      .order_header {
        margin: 20px 0;
      }
      .cart_list_box {
        margin-top: 16px;
        height: 478px;
        overflow: auto;
        .order_null {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          img {
            width: 160px;
            height: 92px;
          }
          .order_title {
            margin-top: 22px;
            font-size: 20px;
            font-weight: 400;
            color: rgba(6, 21, 39, 0.5);
            line-height: 28px;
          }
        }
        // padding: 12px;
        .cart_list_item {
          display: flex;
          // width: 343px;
          width: 333px;
          height: 72px;
          padding: 8px 5px;
          margin: 10px 0;
          background: #ffffff;
          // box-shadow: 0px 0px 12px 3px rgba(0, 0, 0, 0.05);
          box-shadow: 0 0px 3px 4px rgba(0, 0, 0, 0.05);
          border-radius: 7px 7px 7px 7px;
          opacity: 1;
          .godds_img_box {
            // width: 120px;
            display: flex;
            align-items: center;
            // padding: 12px;
            .godds_img {
              width: 79px;
              height: 54px;
              img {
                width: 100%;
              }
            }
          }

          .goods_details {
            flex: 1;
            display: flex;
            // padding: 8px 5px;
            padding-left: 11px;
            flex-direction: column;
            justify-content: space-between;
            .goods_details_title {
              .title {
                height: 11px;
                font-size: 9px;
                font-weight: 400;
                color: #000000;
                line-height: 11px;
                // height: 31px;
                // font-size: 12px;
                // font-weight: 400;
                // color: #000000;
                // line-height: 28px;
              }
              .goods_tag {
                display: flex;
                margin-top: 3px;
              }
            }
            .goods_price {
              height: 12px;
              font-size: 10px;
              font-weight: normal;
              color: #000000;
              line-height: 12px;
            }
          }
          // order_status
          .order_status_img {
            display: flex;
            align-items: center;
            width: 33px;

            img {
              width: 100%;
            }
          }
          .operations {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-end;
            width: 60px;
            // padding: 8px 5px;
            .delete_icon {
              width: 16px;
              height: 16px;
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
      // submit_order
      .submit_order {
        display: flex;
        align-items: center;
        height: 77px;
        background: #193557;
        border-radius: 108px;
        overflow: hidden;

        .total_price {
          display: flex;
          align-items: flex-end;
          width: 70%;
          .total_icon {
            display: flex;
            align-items: center;
            margin-left: 30px;
            width: 42px;
            height: 39px;
            .total_icon_img {
              position: relative;
              .icon_num {
                position: absolute;
                top: -1px;
                right: -1px;
                display: flex;
                align-items: center;
                justify-content: center;
                // padding: 2px;
                width: 18px;
                height: 18px;
                color: #fff;
                text-align: center;
                background: #e95851;
                border-radius: 50%;
              }
            }
          }
          .total_text {
            // color: #fff;
            margin-left: 16px;
            // margin-bottom: 7px;
            // width: 74px;
            font-size: 20px;
            font-weight: normal;
            color: #ffffff;
            line-height: 23px;
            span {
              font-size: 25px;
              font-weight: 400;
            }
            s {
              font-size: 15px;
              font-family: Inter-Regular, Inter;
              font-weight: 400;
              color: #999797;
              line-height: 18px;
            }
          }
        }
        .submit_order_btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 30%;
          height: 100%;
          background: #ffc165;
          font-size: 20px;
          font-family: PingFang SC-Medium, PingFang SC;
          font-weight: 500;
          color: #061527;
        }
      }
      // bill_please
      .bill_please {
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 28px;
        font-weight: bold;
        color: #ffffff;
        // background: rgba(255, 107, 0, 0.5);
        background: #ff6b00;
        border-radius: 35px;
        // opacity: 1;
      }
    }
    .goods_list {
      height: calc(100vh - 32px);
      overflow-y: auto;
      background: #ffc165;
    }
  }
  .order_status {
    opacity: 0.5;
  }
  // modal_box style
  .modal_box {
    width: 600px;
    height: 320px;
    padding: 54px 95px 58px 95px;
    background: #ffffff;
    border-radius: 12px 12px 12px 12px;
    opacity: 1;

    .modal_title {
      text-align: center;
      .tips {
        font-size: 32px;
        font-weight: bold;
        color: #000000;
        line-height: 45px;
      }
      p {
        margin-top: 29px;
        height: 36px;
        font-size: 26px;
        // font-weight: 500;
        color: #000000;
        line-height: 36px;
      }
    }
    .modal_btn {
      display: flex;
      justify-content: center;
      text-align: center;
      margin-top: 45px;

      .btn {
        margin-right: 30px;
        width: 190px;
        height: 53px;
        line-height: 53px;
        background: #ffffff;
        border-radius: 12px 12px 12px 12px;
        opacity: 1;
        border: 1px solid #ffc165;
      }
      .confirm {
        width: 190px;
        height: 53px;
        line-height: 53px;
        background: #ffc165;
        border-radius: 12px 12px 12px 12px;
        opacity: 1;
      }
      .btn_text {
        font-size: 26px;
        // font-family: PingFang SC-Medium, PingFang SC;
        // font-weight: 500;
        color: #000000;
        line-height: 53px;
      }
    }
  }
  // .ant-card-bordered:active{

  // }
  ::v-deep .ant-card-body {
    padding: 15px;
    // height: 389px;
  }

  ::v-deep .ant-card-bordered {
    border-radius: 7px;
  }
  .ant-modal-root ::v-deep .ant-modal-body {
    padding: 0;
  }
  .ant-modal-root :deep(.ant-modal) {
    border-radius: 12px;
    overflow: hidden;
  }
</style>
