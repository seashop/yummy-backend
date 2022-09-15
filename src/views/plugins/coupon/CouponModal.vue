<template>
  <BasicModal
    v-bind="$attrs"
    @register="registerModal"
    showFooter
    :title="getTitle"
    width="500px"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm">
      <template #time="{ model, field }">
        {{ model }}
        {{ field }}
      </template>
      </BasicForm>
  </BasicModal>
</template>

<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { Image } from 'ant-design-vue';
  import { useDrawer } from '/@/components/Drawer';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema } from './coupon.data';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import PictureDrawer from '/@/components/AssetPicker/PictureDrawer.vue';
  import BasicButton from '/@/components/Button/src/BasicButton.vue';

  export default defineComponent({
    name: 'CouponModal',
    components: { Image, BasicModal, BasicForm, PictureDrawer, BasicButton },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const [registerDrawer, { openDrawer }] = useDrawer();

      const isUpdate = ref(true);
      const rowId = ref('');

      const [registerForm, { resetFields, getFieldsValue, setFieldsValue, validate }] = useForm({
        labelWidth: 90,
        baseColProps: { span: 24 },
        schemas: formSchema,
        showActionButtonGroup: false,
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          rowId.value = data.record.id;
          setFieldsValue({
            ...data.record,
          });
        }
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增优惠券' : '编辑优惠券'));

      function handlePictureDrawerSuccess({ ids }) {
        setFieldsValue({
          category_pic: ids?.length > 0 ? ids[0] : null,
        });
      }

      async function handleSubmit() {
        console.log(getFieldsValue());
        return;
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          // TODO custom api
          closeModal();
          emit('success', {
            isUpdate: unref(isUpdate),
            values: { ...values, id: rowId.value },
          });
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return {
        registerModal,
        registerForm,
        getTitle,
        handleSubmit,
        registerDrawer,
        openDrawer,
        handlePictureDrawerSuccess,
      };
    },
  });
</script>
