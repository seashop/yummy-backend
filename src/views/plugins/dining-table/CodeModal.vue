<template>
  <BasicModal
    v-bind="$attrs"
    @register="registerModal"
    showFooter
    :title="getTitle"
    width="500px"
    @ok="handleSubmit"
  >
    <QrCode :vale="invite" alt="Invite Code" />
    <Image :src="codes.h5_img_url" alt="H5 Code" />
    <Image :src="codes.mp_img_url" alt="MP Code" />
  </BasicModal>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Image } from 'ant-design-vue';
  import { useDrawer } from '/@/components/Drawer';
  import { QrCode } from '/@/components/Qrcode/index';
  import { BasicModal, useModalInner } from '/@/components/Modal';

  export default defineComponent({
    name: 'CodeModal',
    components: { Image, BasicModal, QrCode },
    emits: ['success', 'register'],
    setup() {
      const invite = ref('');
      const codes = ref({
        h5_img_url: '',
        mp_img_url: '',
      });

      const [registerDrawer, { openDrawer }] = useDrawer();

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        setModalProps({ confirmLoading: false });
        console.log(codes);
        codes.value = { ...data.codes };
        invite.value = 'h5/#/pages/index/index?type=code_order&table_num=' + data.record.id;
      });

      const getTitle = '二维码';

      async function handleSubmit() {
        try {
          setModalProps({ confirmLoading: true });
          closeModal();
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return {
        registerModal,
        getTitle,
        handleSubmit,
        registerDrawer,
        openDrawer,
        invite,
        codes,
      };
    },
  });
</script>
