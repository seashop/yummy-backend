<template>
  <Row type="flex" :class="prefixCls">
    <Col :span="pageWidth > 1024 ? 7 : 9" class="cart_list">
      <!-- order Header -->
      <div class="order_header" @click="goTablePage"><LeftOutlined /> 返回 </div>
      <div class="operate">
        <OrderOperate
          :tableNum="tableTitle"
          :status="false"
          :clearStatus="isClearTable"
          :isChange="!!items && !!items.length"
          @changeDiners="changeDiners"
          @changeTable="changeTable"
          @clearTable="openClearTableModal"
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
                <div class="title" v-if="true">
                  {{ goodsStack[item.goods_id].title }}
                </div>
                <div class="goods_tag">
                  <Tag text="热门" color="#ff0000" v-if="goodsStack[item.goods_id].is_hot" />
                  <Tag text="新品" color="#42CFBE" v-if="goodsStack[item.goods_id].is_new" />
                </div>
              </div>
              <div class="goods_price">${{ goodsStack[item.goods_id].price }}</div>
            </div>
            <!-- 操作 -->
            <div class="operations" v-if="!order_id">
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
          </div>
          <!-- end -->
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
      <div class="submit_order">
        <!-- <div class="submit_order" :class="items && items.length && !order_id ? '' : 'order_status'"> -->
        <!-- order_details -->
        <!-- <div class="order_details" :span="pageWidth > 1024 ? 7 : 9">
          <div class="order_details_title">121222222222</div>
        </div> -->
        <!-- :span="pageWidth > 1024 ? 7 : 9" -->
        <Col :span="24" class="order_details" v-show="isShowOrder">
          <div class="order_details_title">
            <!-- 已下单菜品 -->
            <div style="flex: 1">已选择菜品</div>
            <div @click="isShowOrder = false"><DownOutlined /></div>
          </div>
          <div class="order_content">
            <div class="order_details_desc">
              <InputTextArea
                style="height: 46px"
                v-model:value="order_desc"
                placeholder="请输入备注信息"
                :showCount="false"
                :rows="1"
              />
            </div>
            <div class="order_details_list">
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
                    <div class="title" v-if="true">
                      {{ goodsStack[item.goods_id].title }}
                    </div>
                    <div class="goods_tag">
                      <Tag text="热门" color="#ff0000" v-if="goodsStack[item.goods_id].is_hot" />
                      <Tag text="新品" color="#42CFBE" v-if="goodsStack[item.goods_id].is_new" />
                    </div>
                  </div>
                  <div class="goods_price">${{ goodsStack[item.goods_id].price }}</div>
                </div>
                <!-- 操作 -->
                <div class="operations" v-if="false">
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
              </div>
            </div>
            <div class="order_details_total">
              <div class="total_details">
                <span>小 计(subTotal):</span>

                <span>{{ order_details.sub_money || order_details.goods_money }}</span>
              </div>
              <div class="total_details">
                <span> 税 费(SVC)10%:</span>
                <span>{{ order_details.svc_fee }}</span>
              </div>
              <div class="total_details">
                <span>服务费(GTS)7%:</span>
                <span>{{ order_details.gts_fee }}</span>
              </div>
              <div class="total_details">
                <span> 总 计(Total):</span>
                <span>{{ order_details.total_money || order_details.order_money }}</span>
              </div>
            </div>
          </div>
        </Col>

        <div class="total_price" @click="openOrderDetails">
          <div class="total_icon">
            <div class="total_icon_img">
              <!-- <span class="icon_num"> {{ totalNum }} </span> -->
              <span class="icon_num">
                {{ items.reduce((all, item) => all + item.quantity, 0) || 0 }}
              </span>
              <img src="/@/assets/icons/Group664@2x.png" alt=""
            /></div>
          </div>
          <div class="total_text">
            <!-- <span>{{ goodsStack[item.goods_id].price }}</span> -->
            <!-- market_price -->
            <span>
              {{ order_details.total_money }}
              <!-- {{
                items
                  .reduce(
                    (all, item) =>
                      all + Number(goodsStack[item.goods_id].price).toFixed(2) * item.quantity,
                    0,
                  )
                  .toFixed(2)
              }} -->
            </span>
            <s>$199.99 </s>
          </div>
        </div>
        <div
          class="submit_order_btn"
          :class="items && items.length && !order_id ? '' : 'order_status'"
          @click="handleOpenModal"
          >下单</div
        >
      </div>
      <!-- 结账 -->
      <div
        class="bill_please"
        :class="order_status == 0 && !isClearTable ? '' : 'order_status'"
        @click="openClosingModal"
      >
        结账
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
          <div class="goods_mask" v-if="order_id"></div>
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
    <Modal
      v-model:visible="ClosingVisible"
      centered
      width="600"
      :closable="false"
      :footer="null"
      @ok="handleMode"
    >
      <div class="modal_box">
        <div class="modal_title">
          <div class="tips">结账提示</div>
          <p>是否立即结账</p>
        </div>
        <div class="modal_btn">
          <div class="btn">
            <div class="btn_text" @click="ClosingVisible = false"> 我再看看 </div>
          </div>
          <div class="confirm">
            <div class="btn_text" @click="goPay"> 立即结账 </div>
          </div>
        </div>
      </div>
    </Modal>
    <Modal
      v-model:visible="clearTablevisible"
      centered
      width="600"
      :closable="false"
      :footer="null"
      @ok="handleMode"
    >
      <div class="modal_box">
        <div class="modal_title">
          <div class="tips">{{ tableTitle }}</div>
          <p>是否现在清台？</p>
        </div>
        <div class="modal_btn">
          <div class="btn" style="border: 1px solid #1cc097">
            <div class="btn_text" style="color: #1cc097" @click="clearTablevisible = false">
              我再看看
            </div>
          </div>
          <div class="confirm" style="background: #1cc097">
            <div class="btn_text" style="color: #fff" @click="handleCleanDiningTable">
              立即清台
            </div>
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
  import { LeftOutlined, DownOutlined } from '@ant-design/icons-vue';
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
    listCart,
    appendCart,
    createCart,
    deleteGoods,
    updateGoods,
    // PlaceDining,
  } from '/@/api/reception/dining';
  import { CleanDiningTable } from '/@/api/plugins/diningTable';
  import { PlaceOrder, CalculateDiningTable, listOrders } from '/@/api/orders/order';
  import { DiningCartItem, DiningGoodsItem } from '/@/api/reception/model/diningModel';
  import LocalCache from '/@/api/LocalCache/index';
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
      DownOutlined,
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
      const isShowOrder = ref(false);
      const clearTablevisible = ref(false);
      const ClosingVisible = ref(false);
      const isClearTable = ref(false);
      const order_id = ref(0);
      const tableTitle: any = ref('');
      const CentralStore = useCentralStore();
      const cartId: any = ref(undefined);
      const currentId = ref(0);
      const diners = ref('1');
      const order_desc = ref('');
      const pageWidth: any = ref(undefined);
      const defaultIma =
        'https://img2.baidu.com/it/u=305065602,2110439559&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1664038800&t=0c25038a0b97628f7cc9a0727162a0dc';
      const router = useRouter();
      const route = useRoute();
      const times: any = ref(null);
      const order_details = ref({});
      const totalNum = ref(0);
      const dintbl_id = route.query.id ?? undefined;
      tableTitle.value = route.query.title ?? undefined;
      const status: any = route.query.status ?? undefined;
      console.log('router.status', status);
      const settlement = route.query.settlement ?? undefined;
      // console.log('settlement', settlement);
      if (settlement == 'true') {
        isClearTable.value = true;
      }
      let order_status: any = ref(status);
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
      // 获取屏幕宽度
      function Browser() {
        const { width } = getBrowser();
        pageWidth.value = width;
      }
      // 获取购物车列表  查找 order_id为null的 证明没下单 然后拿到购物车id 往里面push商品
      // 接下来 下单  调取查询订单接口  展示总数总价格 结账后 清台 操作
      const getCartList = async () => {
        // const res = await listCart({ dintbl_id });
        // 通过route传参数  0表示 已经有订单 查询已下单的购物车
        const res = await listCart({ dintbl_id, is_ordered: order_status.value == 0 ? 1 : 0 });
        // console.log('getCartList', res);
        if (res.items && res.items.length) {
          const result: any = res.items;
          if (result.at(-1)) {
            cartId.value = result.at(-1).id;
            if (result.at(-1).goods && result.at(-1).goods.length)
              state.items = result.at(-1).goods;
            order_id.value = result.at(-1).order_id;
          }
        }
      };
      getCartList();
      // 创建购物车
      const getCreateCart = async () => {
        if (!dintbl_id) return;
        const res = await createCart({
          dintbl_id: dintbl_id,
          diners: diners.value,
        });
        cartId.value = res.id;
        // console.log('cartId.value ', cartId.value);
        return cartId.value;
      };
      // 获取所有产品信息
      const getGoodsList = async () => {
        const res = await listGoods();
        res.items.forEach((item) => {
          state.goodsStack[item.goods_id] = item;
        });
      };
      getGoodsList();
      // 根据桌台查询订单列表  获取订单

      watch(
        () => state.items,
        async (val) => {
          if (val && val.length) {
            const result = val.reduce((all, item) => all + item.quantity, 0);
            // console.log(result);
            totalNum.value = result;
          }
          CentralStore.changeCartList(val);
          let res;
          if (isClearTable.value) {
            console.log(1);
            res = await listOrders({ dintbl_id, order_num: order_id.value });
            const result = res.items.filter((item) => item.order_id == order_id.value);
            order_details.value = result[0];
            order_details.value = res;
          } else {
            console.log(2);
            res = await CalculateDiningTable(dintbl_id);
            order_details.value = res;
          }
          // isShowOrder.value = !isShowOrder.value;
          // console.log('order_details.value', order_details.value);
          // console.log('watch---state.items', val);
        },
        {
          // immediate: true,
        },
      );

      async function reloadCart(cart) {
        state.cart = cart;
        const result = await listGoods({
          goods_ids: cart.goods.map((item) => item.goods_id),
        });
        result.items.forEach((item) => {
          state.goodsStack[item.goods_id] = item;
        });
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
        // console.log('item', item);
        // await getCreateCart();
        if (!cartId.value) await getCreateCart(); //创建购物车
        await appendCart(cartId.value, item)
          .then((cart) => {
            return reloadCart(cart);
          })
          .then(async () => {
            const goods = await getGoods(goods_id);
            state.goodsStack[goods.goods_id] = goods;
          });
      }

      const changeTable = () => {
        console.log('state---item', state.items);
      };
      const changeDiners = (val) => {
        diners.value = val;
        // console.log('diners', diners.value);
      };
      const computedTotal = () => {
        return state.items.reduce((all, item) => all + Number(goodsStack[item.goods_id].price), 0);
      };
      // 打开订单详情框
      const openOrderDetails = async () => {
        // console.log('open');
        // if (!order_id.value) return;
        // const res = await CalculateDiningTable(dintbl_id);
        // const res = await listOrders({ dintbl_id, order_num: order_id.value });
        // const result = res.items.filter((item) => item.order_id == order_id.value);
        // console.log(result);
        // order_details.value = result[0];
        // order_details.value = res;
        isShowOrder.value = !isShowOrder.value;
      };
      // 下单弹窗
      const handleOpenModal = () => {
        if (isClearTable.value) return;
        if (state.items && state.items.length) {
          visible.value = true;
        }
      };
      // 下单
      async function submitOrder() {
        message.success('下单成功');
        order_id.value = 1;
        visible.value = false;
        order_status.value = 0;
        // console.log('order_status', order_status);
        const placeList = LocalCache.getCache('placeList') ?? [];
        if (placeList.includes(dintbl_id)) return;
        placeList.push(dintbl_id);
        LocalCache.setCache('placeList', placeList);

        // console.log('placeList', placeList);
        // const data = {
        //   message: order_desc.value,
        // };
        // visible.value = false;
        // const res: any = await PlaceOrder(dintbl_id, data);
        // console.log('placeOrder', res);
        // if (res.id) {
        //   order_id.value = res.id;
        //   NoOrder.value = true;
        //   order_details.value.payment_state = 0; // payment
        //   message.success('下单成功');
        // }
        // const res = await PlaceOrder(1);
        // console.log(res);
      }
      // modal事件
      const handleMode = () => {
        // console.log('点击了确认');
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

      const openClosingModal = () => {
        if (!order_id.value) return;
        if (isClearTable.value) return;
        ClosingVisible.value = true;
      };

      // 结账
      const goPay = async () => {
        ClosingVisible.value = false;
        //更改结账接口
        // const res = await editOrderPay(order_id.value);
        const data = {
          message: order_desc.value,
        };
        visible.value = false;
        const res: any = await PlaceOrder(dintbl_id, data);
        // console.log('placeOrder', res);
        if (res.id) {
          order_id.value = res.id;
          NoOrder.value = true;
          // order_details.value.payment_state = 0; // payment
        }
        // console.log('goPay', res);
        // message.success('结账成功');
        isClearTable.value = res;
        // const result = LocalCache.getCache('placeList') ?? [];
        // const order_list = result;
        // result.forEach((item, index) => {
        //   if (item == dintbl_id) {
        //     console.log('符合');
        //     console.log('index', index);
        //     order_list.splice(index, 1);
        //   }
        // });
        // console.log(order_list);
        // LocalCache.setCache('placeList', order_list);
      };
      // 清台
      const openClearTableModal = () => {
        clearTablevisible.value = true;
      };
      const handleCleanDiningTable = async () => {
        // const data = {
        //   id: dintbl_id,
        // };
        clearTablevisible.value = false;
        // console.log('dintbl_id', dintbl_id);
        const res = await CleanDiningTable(dintbl_id);
        if (res === null) message.success('清台成功');
        const result = LocalCache.getCache('placeList') ?? [];
        const order_list = result;
        result.forEach((item, index) => {
          if (item == dintbl_id) {
            order_list.splice(index, 1);
          }
        });
        // console.log(order_list);
        LocalCache.setCache('placeList', order_list);
        CentralStore.$reset();
        router.push({
          path: '/reception/management',
        });
      };

      return {
        ...toRefs(state),
        // ...toRefs(compState),
        visible,
        order_id,
        order_status,
        goPay,
        tableTitle,
        NoOrder,
        defaultIma,
        dintbl_id,
        currentId,
        order_desc,
        pageWidth,
        totalNum,
        isShowOrder,
        clearTablevisible,
        ClosingVisible,
        isClearTable,
        order_details,
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
        changeTable,
        changeDiners,
        computedTotal,
        handleCleanDiningTable,
        openClearTableModal,
        openOrderDetails,
        openClosingModal,
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
      position: relative;
      padding: 24px;
      margin-top: 12px;
      // background-color: @component-background;
      .goods_mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgb(7 7 7 / 46%);
        z-index: 999;
      }

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
        position: relative;
        display: flex;
        align-items: center;
        height: 77px;
        background: #193557;
        border-radius: 108px;
        // overflow: hidden;

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
          border-radius: 0 108px 108px 0;
          background: #ffc165;
          font-size: 20px;
          font-family: PingFang SC-Medium, PingFang SC;
          font-weight: 500;
          color: #061527;
        }
        // position
        .order_details {
          position: absolute;
          z-index: 999;
          left: 0;
          top: -442px;
          width: 399px;
          height: 442px;
          background: #fff;
          // 239px
          // padding: 0 2%;
          // background: #666;
          .order_details_title {
            display: flex;
            height: 36px;
            line-height: 36px;
            background: #ffd597;
            border-radius: 15px 15px 0px 0px;
            margin-bottom: 14px;
            padding-right: 18px;
            text-align: center;
            font-size: 15px;
            font-weight: 500;
            color: #000000;
          }
          .order_content {
            padding: 0 2%;
          }
          .order_details_desc {
          }
          .order_details_list {
            height: 233px;
            overflow-y: auto;
          }
          .order_details_total {
            padding: 0 10px;
            .total_details {
              display: flex;
              justify-content: space-between;
            }
          }
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
  // order_detai_list
  .cart_list_item {
    display: flex;
    // width: 343px;
    // width: 333px;
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
</style>
