<template>
  <BasicModal
    v-bind="$attrs"
    @register="registerModal"
    :footer="null"
    :title="getTitle"
    width="500px"
  >
    <BasicButton @click="handleClick">PayPal</BasicButton>
    <BasicButton @click="handleClick">GrabPay</BasicButton>
    <BasicButton @click="handleClick">SG QR</BasicButton>
    <BasicButton @click="handleClick">Cash</BasicButton>
  </BasicModal>
</template>

<script lang="ts">
  import { defineComponent, h, reactive } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import BasicButton from '/@/components/Button/src/BasicButton.vue';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { t } from '/@/hooks/web/useI18n';
  import { editOrderPay } from '/@/api/orders/order';

  export default defineComponent({
    name: 'PaymentModal',
    components: {
      BasicModal,
      BasicButton,
    },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const state = reactive({
        order_id: 0,
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        setModalProps({ confirmLoading: false });

        const { order_id } = data;
        state.order_id = order_id;
        console.log('model', data, order_id);
      });

      const { createConfirm, createMessage } = useMessage();

      const handleClick = () => {
        createConfirm({
          iconType: 'warning',
          title: () => h('span', t('sys.app.logoutTip')),
          content: () => h('span', '请确认已付款'),
          onOk: async () => {
            await editOrderPay(state.order_id)
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
        getTitle: '支付方式',
        registerModal,
        handleClick,
      };
    },
  });
</script>
