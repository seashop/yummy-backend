<template>
  <BasicModal
    v-bind="$attrs"
    @register="registerModal"
    :footer="null"
    :title="getTitle"
    width="500px"
  >
    <div>
      <div class="discountInfo" v-if="Number(order_money) !== 0">
        Discount Money: {{ edit_money }}
      </div>
      <div class="discountInfo" v-if="Number(order_money) !== 0">
        Order Money: <span>{{ order_money }}</span>
      </div>
      <BasicButton
        v-for="(payment, index) in payments"
        :key="index"
        @click="handleClick(payment.value)"
      >
        {{ payment.label }}
      </BasicButton>
    </div>
  </BasicModal>
</template>

<script lang="ts">
  import { defineComponent, h, reactive, toRefs } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import BasicButton from '/@/components/Button/src/BasicButton.vue';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { editOrderPay } from '/@/api/orders/order';

  const payments = [
    { label: 'PayPal', value: 'paypal' },
    { label: 'GrabPay', value: 'grabpay' },
    { label: 'SG QR', value: 'sgqr' },
    { label: 'Cash', value: 'cash' },
  ];

  export default defineComponent({
    name: 'PaymentModal',
    components: {
      BasicModal,
      BasicButton,
    },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const { t } = useI18n();

      const state = reactive({
        order_id: 0,
        edit_money: 0,
        order_money: 0,
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        setModalProps({ confirmLoading: false });

        const { order_id, edit_money, order_money } = data;
        state.order_id = order_id;
        state.edit_money = edit_money;
        state.order_money = order_money;
        console.log('model', data, order_id, edit_money, order_money);
      });

      const { createConfirm, createMessage } = useMessage();

      const handleClick = (payment_type: string) => {
        createConfirm({
          iconType: 'warning',
          title: () => h('span', t('sys.app.logoutTip')),
          content: () => h('span', '请确认已付款'),
          onOk: async () => {
            await editOrderPay(state.order_id, { payment_type })
              .then(() => {
                createMessage.success('操作成功');
                closeModal();
                emit('success');
              })
              .finally(() => {
                setModalProps({ confirmLoading: false });
              });
          },
        });
      };

      return {
        getTitle: '支付信息',
        registerModal,
        payments,
        handleClick,
        ...toRefs(state),
      };
    },
  });
</script>
<style scoped lang="less">
  .discountInfo {
    width: 100%;
    height: 50px;
    line-height: 50px;

    span {
      color: red;
      font-weight: 600;
      font-size: 30px;
    }
  }
</style>
