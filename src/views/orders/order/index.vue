<template>
  <div style="background-color: #ffffff">
    <div class="p-4 mb-2 bg-white">
      <BasicForm @register="registerForm" />
      <BasicButton type="primary" @click="submitSearch"> 搜索 </BasicButton>
    </div>

    <div class="order">
      <div v-for="(item, index) of show_list" :key="index">
        <div class="order-01">
          <div>
            <Row style="line-height: 32px">
              <Col :span="4">
                <div><span class="cu">订单号：</span>{{ item.order_num }}</div>
              </Col>
              <Col :span="2">
                <div
                  ><span class="cu">折扣： </span>-{{
                    item.reduction_money * 1 + item.coupon_money * 1
                  }}</div
                >
              </Col>
              <Col :span="3">
                <div><span class="cu">应付金额：</span>{{ item.order_money }}</div>
              </Col>
              <Col :span="4" v-if="item.delivery_method == '配送'">
                <div
                  ><span class="cu">地址：</span
                  >{{ item.receiver_city + item.receiver_address }}</div
                >
              </Col>
              <Col :span="4" v-if="item.delivery_method == '店内就餐'">
                <div><span class="cu">桌号：</span>{{ item.table_num }}号桌</div>
              </Col>
              <Col :span="5">
                <div><span class="cu">日期：</span>{{ item.created_at }}</div>
              </Col>
            </Row>
            <Row style="margin-top: 10px; line-height: 42px">
              <Col :span="2">
                <div>
                  <!-- <span class="cu">支付状态：</span> -->

                  <BasicButton
                    size="mini"
                    type="info"
                    v-if="item.payment_state == 1"
                    :disabled="true"
                    >已支付</BasicButton
                  >
                  <BasicButton size="mini" v-else type="info" @click="zf(item.order_id)"
                    >待支付</BasicButton
                  >
                </div>
              </Col>
              <Col :span="2">
                <div v-if="item.payment_state == 1">
                  <!-- <span class="cu">配送状态：</span> -->
                  <BasicButton
                    size="mini"
                    type="info"
                    v-if="item.shipment_state == 0"
                    @click="send(item.order_id)"
                    >配送</BasicButton
                  >
                  <BasicButton
                    size="mini"
                    type="info"
                    v-else-if="item.shipment_state == 1"
                    :disabled="true"
                    >已配送</BasicButton
                  >
                  <BasicButton size="mini" type="info" v-else :disabled="true">已完成</BasicButton>
                </div>
              </Col>

              <Col :span="2">
                <div>
                  <BasicButton
                    style="margin-left: 10px"
                    v-if="item.state == 0 && item.shipment_state == 1"
                    type="info"
                    size="mini"
                    @click="qrysd(item.order_id)"
                    >确认已送达</BasicButton
                  >
                  <BasicButton size="mini" type="info" v-if="item.state == 1" :disabled="true"
                    >已收到</BasicButton
                  >
                </div>
              </Col>
              <Col :span="2">
                <div>
                  <BasicButton
                    style="margin-left: 10px"
                    type="info"
                    size="mini"
                    @click="print_tik(item.order_num)"
                    v-if="item.payment_state == 1"
                    >打印小票</BasicButton
                  >
                </div>
              </Col>
              <Col :span="1">
                <div>
                  <BasicButton
                    style="margin-left: 10px"
                    type="danger"
                    size="mini"
                    @click="del(item.order_id)"
                    >删除</BasicButton
                  >
                </div>
              </Col>
            </Row>
          </div>
          <div class="order-01-2">
            <div class="order-01-2-01" v-for="(ite, ogIdx) of item.ordergoods" :key="ogIdx">
              <div v-if="!ite.img">no pic</div>
              <Image v-else :width="80" :src="ite.img.full_url" />
              <div class="order-01-2-01-name">{{ ite.title }}&nbsp;x{{ ite.number }}</div>
            </div>
          </div>
        </div>
      </div>
      <Pagination
        style="padding-top: 60px; text-align: center"
        background
        layout="prev, pager, next"
        :total="total"
        :page-size="size"
        @current-change="jump_page"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Pagination, Image, Modal, Row, Col } from 'ant-design-vue';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import BasicButton from '/@/components/Button/src/BasicButton.vue';

  import {
    listOrders,
    printOrder,
    editOrderPay,
    editOrderCourier,
    editOrderReceive,
    deleteOrder,
  } from '/@/api/orders/order';
  import { OrderItem, selectParams } from '/@/api/orders/model/ordersModel';

  import { searchFormSchema } from './order.data';

  export default defineComponent({
    name: 'OrderManagement',
    components: {
      BasicForm,
      Pagination,
      Image,
      Row,
      Col,
      BasicButton,
    },
    setup() {
      const { createMessage } = useMessage();

      const [registerForm, { validate }] = useForm({
        labelWidth: 90,
        baseColProps: { span: 24 },
        schemas: searchFormSchema,
        showActionButtonGroup: false,
      });

      const size = ref(8);
      const total = ref(0);
      const list = ref<Array<OrderItem>>([]);
      const all = ref<Array<OrderItem>>([]);
      const show_list = ref<Array<OrderItem>>();
      const form = ref<selectParams>({
        playstate: -1,
      });

      function print_tik(order_num) {
        printOrder(order_num).then((_) => {
          createMessage.success('打印中...');
          setTimeout(() => {
            createMessage.success('打印成功');
          }, 4000);
        });
      }

      function jump_page(e) {
        let start = (e - 1) * size.value;
        let end = e * size.value;
        show_list.value = all.value.slice(start, end);
      }
      //点击配送
      function send(id) {
        Modal.confirm({
          title: '提示',
          content: '确认配送？',
          okText: '确定',
          onOk: () => {
            return editOrderCourier(id).then((_) => {
              createMessage.success('商品正在配送中');
              get_all_order();
            });
          },
          cancelText: '取消',
          type: 'warning',
        });
      }
      function zf(id) {
        Modal.confirm({
          title: '提示',
          content: '确认修改支付？',
          okText: '确定',
          onOk: () => {
            return editOrderPay(id).then((_) => {
              createMessage.success('修改支付状态');
              get_all_order();
            });
          },
          cancelText: '取消',
          type: 'warning',
        });
      }
      function qrysd(id) {
        Modal.confirm({
          title: '提示',
          content: '确认已配送到收货地址？',
          okText: '确定',
          onOk: () => {
            return editOrderReceive(id).then((_) => {
              createMessage.success('确认收货成功');
              get_all_order();
            });
          },
          cancelText: '取消',
          type: 'warning',
        });
      }

      function get_all_order() {
        listOrders().then((res) => {
          all.value = res.items;
          show_list.value = res.items.slice(0, size.value);
          total.value = res.items.length;
        });
      }
      get_all_order();

      function del(id) {
        Modal.confirm({
          title: '提示',
          content: '确定删除该订单',
          okText: '确定',
          onOk: () => {
            return deleteOrder(id).then((_) => {
              createMessage.success('删除成功!');
              get_all_order();
            });
          },
          cancelText: '取消',
          type: 'warning',
        });
      }

      async function submitSearch() {
        let data = await validate();
        // data.playstate = Number(data.playstate);
        listOrders(data).then((res) => {
          show_list.value = res.items;
        });
      }

      return {
        registerForm,
        size,
        total,
        list,
        all,
        show_list,
        form,
        print_tik,
        jump_page,
        send,
        zf,
        qrysd,
        get_all_order,
        del,
        submitSearch,
      };
    },
  });
</script>

<style lang="less">
  .search {
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;

    .col {
      display: flex;
      align-items: center;
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }

      > span {
        display: inline-block;
        flex-shrink: 0;
        color: #777;
        margin-right: 10px;
        font-size: 0.9rem;
      }
    }
  }

  .order {
    text-align: left;
    // color: #6F6F6F;

    .order-01 {
      margin: 20px 0;
      padding-left: 15px;

      .order-01-2 {
        display: flex;
        padding: 25px 0 0 15px;
        flex-wrap: wrap;

        .order-01-2-01 {
          margin-right: 50px;
          margin-bottom: 20px;

          img {
            margin-bottom: 15px;
          }
        }

        .order-01-2-01-name {
          height: 25px;
          line-height: 25px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }

    .BH10 {
      height: 10px;
      background-color: #f0f0f0;
    }

    .cu {
      // font-weight: 600;
      color: #777;
      font-size: 0.9rem;
    }
  }
</style>
