<template>
  <Row type="flex" :class="prefixCls">
    <Col :span="pageWidth > 1024 ? 7 : 9" class="cart_list">
      <!-- order Header -->
      <div class="order_header" @click="goTablePage"><LeftOutlined />返回</div>
      <div class="operate">
        <OrderOperate
          :tableNum="dintbl.title"
          :isPlaced="order_id > 0"
          :canClean="!dintbl.is_cleaned"
          :canChange="cartGoods.length > 0"
          @change-diners="changeDiners"
          @change-table="changeTable"
          @clear-table="openClearTableModal"
          @print-receipt="printReceipt"
        />
      </div>
      <!-- 购物车列表 -->
      <div class="cart_list_box">
        <template v-if="cartGoods.length && !canShowOrder">
          <!-- <template v-if="true">  -->
          <div class="cart_list_item" v-for="item in cartGoods" :key="item.id">
            <div class="godds_img_box">
              <div class="godds_img">
                <Image
                  :preview="false"
                  :src="getGoodsImage(item.goods_id)"
                  :fallback="defaultImg"
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
                <div class="num">{{ item.quantity }}</div>
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
      <div class="desc" v-if="cartGoods && cartGoods.length">
        <InputTextArea
          style="height: 46px"
          v-model:value="message"
          placeholder="请输入备注信息"
          :showCount="false"
          :rows="1"
        />
      </div>
      <!-- submitDishUp -->
      <div class="submit_order">
        <Col :span="24" class="settleSummary" v-show="showOrder">
          <div class="order_details_title">
            <!-- 已下单菜品 -->
            <div style="flex: 1">已下单菜品</div>
            <div @click="openOrderDetails"><DownOutlined /></div>
          </div>
          <div class="order_content">
            <div class="order_details_desc">
              <InputTextArea
                style="height: 46px"
                v-model:value="message"
                placeholder="请输入备注信息"
                :showCount="false"
                :rows="1"
              />
            </div>
            <div class="order_details_list">
              <div class="cart_list_item" v-for="item in cartGoods" :key="item.id">
                <div class="godds_img_box">
                  <div class="godds_img">
                    <Image
                      :preview="false"
                      :src="getGoodsImage(item.goods_id)"
                      :fallback="defaultImg"
                    />
                  </div>
                </div>
                <div class="goods_details">
                  <div class="goods_details_title">
                    <div class="title" v-if="goodsStack[item.goods_id].title">
                      {{ goodsStack[item.goods_id].title }}
                    </div>
                    <div class="goods_tag" v-if="goodsStack[item.goods_id].is_hot">
                      <Tag text="热门" color="#ff0000" v-if="goodsStack[item.goods_id].is_hot" />
                      <Tag text="新品" color="#42CFBE" v-if="goodsStack[item.goods_id].is_new" />
                    </div>
                  </div>
                  <div class="goods_price">${{ goodsStack[item.goods_id].price }}</div>
                </div>
                <!-- 操作 -->
                <div class="operations">
                  <!-- <div class="delete_icon" @click="handleDeleteGoods(item)">
                    <img src="/@/assets/icons/Group645.png" alt="" />
                  </div> -->
                  <div class="delete_icon"></div>
                  <div class="input_number">
                    <!-- <span @click="ChangeQuantity(item.id, --item.quantity)">
                      <img src="/@/assets/icons/Group620.png" alt="" />
                    </span> -->
                    <div class="num">x{{ item.quantity }}</div>
                    <!-- <span @click="ChangeQuantity(item.id, ++item.quantity)">
                      <img src="/@/assets/icons/Group621.png" alt="" />
                    </span> -->
                  </div>
                </div>
              </div>
            </div>
            <div class="order_details_total" v-if="cartGoods.length > 0">
              <div class="total_details">
                <span>小 计(subTotal):</span>
                <span>{{ settleSummary.sub_money }}</span>
              </div>
              <div class="total_details">
                <span>税 费(SVC){{ (getPreset.svc_rate * 100).toFixed(0) }}%:</span>
                <span>{{ settleSummary.svc_fee }}</span>
              </div>
              <div class="total_details">
                <span>服务费(GTS){{ (getPreset.gts_rate * 100).toFixed(0) }}%:</span>
                <span>{{ settleSummary.gts_fee }}</span>
              </div>
              <div class="total_details">
                <span>总 计(Total):</span>
                <span>{{ settleSummary.total_money }}</span>
              </div>
            </div>
          </div>
        </Col>
        <div class="total_price" @click="openOrderDetails">
          <div class="total_icon">
            <div class="total_icon_img">
              <span class="icon_num">
                {{ computedQuantity() }}
              </span>
              <img src="/@/assets/icons/Group664@2x.png" alt=""
            /></div>
          </div>
          <div class="total_text">
            <span> {{ settleSummary.total_money }} </span>
          </div>
        </div>
        <!-- //cartGoods.length  -->
        <div
          class="submit_order_btn"
          :class="{ op_disable: order_id > 0 || cart.dish_up }"
          @click="handleDishUpModal"
        >
          下单
        </div>
      </div>
      <!-- 结账 -->
      <div
        class="bill_please"
        :class="{ op_disable: order_id > 0 && order.state > 0 }"
        @click="openCheckoutModal"
      >
        结账
      </div>
    </Col>
    <!-- 商品分类 -->
    <Col :span="3" style="height: calc(100vh - 32px); overflow: auto">
      <ScrollContainer>
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
                    <img :src="demoImg" alt="" />
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
                    <img :src="category.img.full_url" alt="" />
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
          <div class="goods_mask" v-if="order_id > 0"></div>
          <List>
            <Row :gutter="16" v-if="goodsItems && goodsItems.length">
              <template v-for="goods in goodsItems" :key="goods.goods_id">
                <Col :span="pageWidth > 1024 ? 8 : 12">
                  <!-- <ListItem> -->
                  <ProductCard
                    :goods="goods"
                    :checkedGoods="cartGoods.find((item) => item.id == goods.goods_id)"
                    @selected="handleProdcutSelected"
                    @change-product="ChangeQuantity"
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
    <!-- 下单 -->
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
            <div class="btn_text" @click="submitDishUp"> 立即下单 </div>
          </div>
        </div>
      </div>
    </Modal>
    <!-- 结账 -->
    <Modal
      v-model:visible="closingVisible"
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
          <RadioGroup v-model:value="discountRate" button-style="solid">
            <RadioButton :value="75">7.5折</RadioButton>
            <RadioButton :value="85">8.5折</RadioButton>
            <RadioButton :value="90">9.折</RadioButton>
            <RadioButton :value="100">无折扣</RadioButton>
          </RadioGroup>
          <template v-if="order_id > 0 && order.edit_money != 0">
            已优惠金额：{{ order.edit_money }}
          </template>
        </div>
        <div class="modal_btn">
          <div class="btn">
            <div class="btn_text" @click="closingVisible = false"> 我再看看 </div>
          </div>
          <div class="confirm">
            <div class="btn_text" @click="goPay"> 立即结账 </div>
          </div>
        </div>
      </div>
    </Modal>
    <!-- 清台 -->
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
          <div class="tips">{{ dintbl.title }}</div>
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
    <PaymentModal @register="registerPaymentModal" @success="handlePaymentSuccess" />
  </Row>
</template>
<script lang="ts">
  import { computed, defineComponent, onMounted, reactive, ref, toRefs, watch } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import { Row, Col, List, Input, Modal, Image, Radio, message } from 'ant-design-vue';
  import { LeftOutlined, DownOutlined } from '@ant-design/icons-vue';
  import { listCategory } from '/@/api/stores/category';
  import { getGoods, listGoods } from '/@/api/stores/goods';
  import { CategoryItem } from '/@/api/stores/model/categoryModel';
  import { GoodsItem } from '/@/api/stores/model/goodsModel';
  import { useCentralStore } from '/@/store/modules/central';
  import { useYummyStore } from '/@/store/modules/yummy';
  import { defaultImg } from '/@/settings/yummySetting';
  import { ScrollContainer } from '/@/components/Container';
  import { getBrowser } from '/@/utils/getBrowser';
  import demoImg from '/@/assets/icons/Group 647@2x.png';
  import {
    listCarts,
    appendCart,
    createCart,
    deleteGoods,
    updateGoods,
    getDiningTable,
    placeDiningTable,
    calculateDiningTable,
    // PlaceDining,
    cleanDiningTable,
    updateCart,
    dishUpCart,
    printCartReceipt,
  } from '/@/api/reception/dining';
  import { listOrders, printOrderReceipt, updateOrderPrice } from '/@/api/orders/order';
  import {
    CalculateType,
    DiningCartItem,
    DiningGoodsItem,
  } from '/@/api/reception/model/diningModel';

  import { DiningTableItem } from '/@/api/plugins/model/diningTableModel';
  import { useModal } from '/@/components/Modal';
  import { useMenuSetting } from '/@/hooks/setting/useMenuSetting';
  import { useHeaderSetting } from '/@/hooks/setting/useHeaderSetting';
  import { triggerWindowResize } from '/@/utils/event';
  import { OrderItem } from '/@/api/orders/model/ordersModel';
  import { useTabs } from '/@/hooks/web/useTabs';

  import OrderOperate from './components/OrderOperate.vue';
  import ProductCard from './components/ProductCard.vue';
  import Tag from './components/Tag.vue';
  import PaymentModal from './PaymentModal.vue';

  export default defineComponent({
    components: {
      Row,
      Col,
      List,
      InputTextArea: Input.TextArea,
      Modal,
      Image,
      RadioGroup: Radio.Group,
      RadioButton: Radio.Button,
      ScrollContainer,
      OrderOperate,
      ProductCard,
      LeftOutlined,
      DownOutlined,
      Tag,
      PaymentModal,
    },
    props: {
      cartId: {
        type: Number as PropType<number>,
        default: 1,
      },
    },
    setup() {
      const router = useRouter();
      const route = useRoute();

      const [registerPaymentModal, { openModal: openPaymentModal }] = useModal();

      const dintbl_id = parseInt(route.query.id as string) || 0;
      console.log('------', dintbl_id);

      if (!dintbl_id) {
        router.push({ path: '/reception/management' });
      }

      const clearTablevisible = ref(false);
      const closingVisible = ref(false);
      const centralStore = useCentralStore();
      const { getPreset } = useYummyStore();
      const currentId = ref(0);
      const pageWidth: any = ref(undefined);
      const times: any = ref(null);

      const state = reactive({
        visible: false,
        dintbl: {} as DiningTableItem,
        discountRate: 100, // 折扣
        categoryItems: [] as Array<CategoryItem>,
        goodsItems: [] as Array<GoodsItem>,
        cart: {} as DiningCartItem,
        cartGoods: [] as Array<DiningGoodsItem>,
        goodsStack: [] as Array<GoodsItem>,
        order_id: 0,
        order: {} as OrderItem,
        diners: 1,
        message: '',
        settleSummary: {} as CalculateType,
        cartId: 0 as number,
        showOrder: false,
      });

      const goTablePage = () => {
        centralStore.$reset();
        router.push({ path: '/reception/management' });
      };

      const { setTitle } = useTabs();
      const { setMenuSetting } = useMenuSetting();
      const { setHeaderSetting } = useHeaderSetting();

      onMounted(async () => {
        const { width } = getBrowser();
        pageWidth.value = width;
        window.addEventListener('resize', () => {
          // 获取屏幕宽度
          const { width } = getBrowser();
          pageWidth.value = width;
        });

        // 默认全屏
        const isUnFold = false;
        setMenuSetting({
          show: isUnFold,
          hidden: !isUnFold,
        });
        setHeaderSetting({ show: isUnFold });
        triggerWindowResize();

        if (dintbl_id) {
          state.dintbl = await getDiningTable(dintbl_id);
          setTitle(state.dintbl.title + '桌');
        }
        console.log('dintbl', state.dintbl);
        state.categoryItems = (await listCategory()).items;
        // console.log('state.categoryItems ', state.categoryItems);
        state.goodsItems = (await listGoods()).items.filter((item: any) => item.state);
        await getCartList();
      });

      const canShowOrder = computed(() => {
        console.log('canShowOrder', state.cart?.dish_up, state.order_id);
        return state.cart?.dish_up || state.order_id > 0;
      });

      // 打开订单详情框
      const openOrderDetails = async () => {
        console.log('openOrderDetails', state.showOrder);
        if (!canShowOrder.value) {
          return;
        }
        // if (!state.order_id) return;
        // const res = await calculateDiningTable(dintbl_id);
        // const res = await listOrders({ dintbl_id, order_num: state.order_id });
        // const result = res.items.filter((item) => item.order_id == state.order_id);
        // console.log(result);
        // state.settleSummary = result[0];
        // state.settleSummary = res;
        state.showOrder = !state.showOrder;
      };

      // 获取购物车列表  查找 order_id为null的 证明没下单 然后拿到购物车id 往里面push商品
      // 接下来 下单  调取查询订单接口  展示总数总价格 结账后 清台 操作
      const getCartList = async () => {
        // 已经下单的购物车
        console.log('state.dintbl.is_cleaned', state.dintbl.is_cleaned);
        if (!state.dintbl.is_cleaned) {
          const resp = await listOrders({ dintbl_id, order_from: 'reception' });
          state.order = resp.items[0];
          console.log('state.order', state.order);
          state.order_id = state.order.order_id;
          state.cartGoods = state.order.ordergoods;
          console.log('state.cartGoods', state.cartGoods);
          state.settleSummary = {
            reduce: state.order.reduction_money,
            vmoney: 0,
            money: 0,
            sub_money: state.order.goods_money,
            svc_fee: state.order.svc_fee,
            gts_fee: state.order.gts_fee,
            total_money: state.order.order_money,
          };
          return;
        }

        // 加载餐车
        const resp = await listCarts({ dintbl_id, is_placed: false });
        console.log('getCartList', { resp });

        if (resp.items && resp.items.length) {
          const carts: any = resp.items;
          if (carts.at(-1)) {
            reloadCart(carts.at(-1));
          }
        }
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

      const getGoodsImage = (goods_id: number) => {
        return state.goodsStack[goods_id]?.img?.full_url;
      };

      watch(
        () => state.cartGoods,
        async (val) => {
          centralStore.changeCartList(val);
          console.log('watch', state.order_id);
          if (!state.order_id && state.cartId > 0) {
            const res = await calculateDiningTable(dintbl_id);
            state.settleSummary = res;
          }
          console.log('state.settleSummary', state.settleSummary);
        },
        {
          immediate: dintbl_id > 0,
        },
      );

      async function reloadCart(cart) {
        state.cart = cart;
        state.cartId = state.cart.id;
        state.order_id = state.cart.order_id ?? 0;
        const result = await listGoods({
          goods_ids: cart.goods.map((item) => item.goods_id),
        });
        result.items.forEach((item) => {
          state.goodsStack[item.goods_id] = item;
        });
        state.cartGoods = [...cart.goods];
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
        state.cartGoods = state.cartGoods.map((item) => {
          if (item.id == id) {
            item.quantity = goods.quantity;
            item.served_num = goods.served_num;
          }
          return item;
        });
        // console.log('state.cartGoods', state.cartGoods);
      }

      async function handleDeleteGoods({ id }) {
        await deleteGoods(id).then(() => {
          state.cartGoods = state.cartGoods.filter((item) => item.id != id);
        });
      }

      async function handleCategoryClick(id) {
        currentId.value = id;
        // console.log('点击了分类');
        state.goodsItems = (
          await listGoods({
            category_id: id,
          })
        ).items.filter((item: any) => item.state);
      }

      //创建购物车
      const ensureCart = async () => {
        if (state.cartId > 0) {
          return;
        }
        const resp = await createCart({
          dintbl_id: dintbl_id,
          diners: state.diners,
        });
        console.log('ensureCart', resp);
        state.cartId = resp.id;
      };

      async function handleProdcutSelected({ goods_id, sku }) {
        await ensureCart();

        const item = {
          goods_id: goods_id,
          sku_id: sku,
          quantity: 1,
          served_num: 0,
        };

        await appendCart(state.cartId, item)
          .then((cart) => {
            return reloadCart(cart);
          })
          .then(async () => {
            const goods = await getGoods(goods_id);
            state.goodsStack[goods.goods_id] = goods;
          });
      }

      const changeTable = () => {
        console.log('state---item', state.cartGoods);
      };

      const changeDiners = async (diners) => {
        state.diners = diners;
        if (state.cartId > 0) {
          await updateCart(state.cartId, {
            diners: state.diners,
          });
        }
      };

      const computedQuantity = () => {
        return state.cartGoods.reduce((prev, cur) => prev + cur.quantity, 0);
      };

      // 下单|餐车上菜 弹窗
      const handleDishUpModal = () => {
        if (state.cart.dish_up) return;
        if (state.order_id > 0) return;
        if (state.cartGoods && state.cartGoods.length) {
          state.visible = true;
        }
      };

      // 下单 | 餐车上菜
      const submitDishUp = async () => {
        console.log('执行下单操作');

        const cart = await dishUpCart(state.cartId);

        reloadCart(cart);

        state.visible = false;
      };

      // modal事件
      const handleMode = () => {
        // console.log('点击了确认');
      };

      function managementOrder() {
        router.push({
          path: '/reception/management',
        });
      }

      const openCheckoutModal = () => {
        console.log('openCheckoutModal', state.order?.state, state.cart);
        if (!state.order_id || !state.order?.state) {
          closingVisible.value = true;
        }
      };

      // 结账
      const goPay = async () => {
        closingVisible.value = false;
        //更改结账接口
        // const res = await editOrderPay(state.order_id);
        const data = {
          message: state.message,
        };
        state.visible = false;

        console.log('goPay', state.order_id);
        if (!state.order_id) {
          let result: any;
          await placeDiningTable(dintbl_id, data)
            .then((resp) => {
              result = resp;
              message.success('结账成功');
              return updateOrderPrice(resp.id, {
                discount_rate: state.discountRate,
              });
            })
            .then((_) => {
              message.success('打折成功');
            });
          state.cart.placed = true;
          if (result.id) {
            state.order_id = result.id;
          }
        } else if (state.order_id && state.discountRate < 100) {
          updateOrderPrice(state.order_id, {
            discount_rate: state.discountRate,
          });
        }

        openPaymentModal(true, { order_id: state.order_id });
      };

      // 清台
      const openClearTableModal = async () => {
        console.log('清台');
        if (!state.dintbl.is_cleaned) {
          clearTablevisible.value = true;
          console.log('clearTablevisible', clearTablevisible.value);
        }
      };

      // 打印小票
      const printReceipt = async () => {
        console.log('打印小票', state.order_id, state.cartId);
        var resp;
        if (state.order_id) {
          console.log('打印订单');
          resp = await printOrderReceipt(state.order_id);
        } else if (state.cartId) {
          console.log('打印餐车');
          resp = await printCartReceipt(state.cartId);
        }
        console.log(resp);
        message.success('打印成功');
      };

      const handleCleanDiningTable = async () => {
        clearTablevisible.value = false;
        const res = await cleanDiningTable(dintbl_id);
        if (res === null) message.success('清台成功');
        centralStore.$reset();
        router.push({
          path: '/reception/management',
        });
      };

      const handlePaymentSuccess = () => {
        state.order.state = 1;
        state.dintbl.is_cleaned = false;
        console.log('handlePaymentSuccess');
      };

      return {
        demoImg,
        prefixCls: 'central',
        ...toRefs(state),
        getPreset,
        registerPaymentModal,
        goPay,
        getGoodsList,
        getGoodsImage,
        defaultImg,
        currentId,
        pageWidth,
        canShowOrder,
        clearTablevisible,
        closingVisible,
        handelChangeQuantity,
        ChangeQuantity,
        handleDeleteGoods,
        handleCategoryClick,
        handleProdcutSelected,
        managementOrder,
        submitDishUp,
        goTablePage,
        handleMode,
        handleDishUpModal,
        changeTable,
        changeDiners,
        computedQuantity,
        handleCleanDiningTable,
        openClearTableModal,
        printReceipt,
        openOrderDetails,
        openCheckoutModal,
        handlePaymentSuccess,
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
          width: 100px;
          height: 100px;

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
          // width: 333px;
          height: 72px;
          padding: 8px 5px;
          margin: 10px 5px;
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
        .settleSummary {
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

  .op_disable {
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
    margin: 10px 5px;
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
    // op_disable
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
