<template>
  <BasicModal
    v-bind="$attrs"
    @register="registerModal"
    showFooter
    :title="getTitle"
    width="800px"
    @ok="handleSubmit"
  >
    <BasicForm v-if="getVisible" @register="registerForm" />
    <!-- <template #insertFooter>
      <a-button type="primary" danger>上一步</a-button>
      <a-button type="primary" danger>下一步</a-button>
    </template> -->
  </BasicModal>
</template>

<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { BasicModal, useModalInner } from '/@/components/Modal';

  import { formSchema } from './discount.data';
  import { getDiscount } from '/@/api/plugins/discount';

  export default defineComponent({
    name: 'CouponModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const rowId = ref('');

      const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
        labelWidth: 90,
        baseColProps: { span: 24 },
        schemas: formSchema,
        showActionButtonGroup: false,
      });

      const [registerModal, { getVisible, setModalProps, closeModal }] = useModalInner(
        async (data) => {
          resetFields();
          setModalProps({ confirmLoading: false });
          isUpdate.value = !!data?.isUpdate;

          if (unref(isUpdate)) {
            const record = await getDiscount(data.record.id);
            rowId.value = data.record.id;
            setFieldsValue({
              ...record,
            });
          }
        },
      );

      const getTitle = computed(() => (!unref(isUpdate) ? '新增活动' : '编辑活动'));

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          // TODO custom api
          closeModal();
          emit('success', {
            isUpdate: unref(isUpdate),
            values: { ...values, id: isUpdate.value ? rowId.value : undefined },
          });
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return {
        getVisible,
        registerModal,
        registerForm,
        getTitle,
        handleSubmit,
      };
    },
  });
</script>
