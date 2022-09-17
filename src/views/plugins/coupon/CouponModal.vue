<template>
  <BasicModal
    v-bind="$attrs"
    @register="registerModal"
    showFooter
    :title="getTitle"
    width="500px"
    @ok="handleSubmit"
  >
    <BasicForm v-if="getVisible" @register="registerForm" />
  </BasicModal>
</template>

<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { BasicModal, useModalInner } from '/@/components/Modal';

  import { formSchema } from './coupon.data';

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
            rowId.value = data.record.id;
            setFieldsValue({
              ...data.record,
            });
          }
        },
      );

      const getTitle = computed(() => (!unref(isUpdate) ? '新增优惠券' : '编辑优惠券'));

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          // TODO custom api
          closeModal();
          emit('success', {
            isUpdate: unref(isUpdate),
            values: { ...values, id: unref(isUpdate) ? rowId.value : undefined },
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
