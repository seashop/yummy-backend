<template>
  <BasicModal
    v-bind="$attrs"
    @register="registerModal"
    showFooter
    :title="getTitle"
    width="500px"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>

<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { useDrawer } from '/@/components/Drawer';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema } from './level.data';
  import { BasicModal, useModalInner } from '/@/components/Modal';

  export default defineComponent({
    name: 'LevelModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const [registerDrawer, { openDrawer }] = useDrawer();

      const isUpdate = ref(true);
      const rowId = ref('');

      const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
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

      const getTitle = computed(() => (!unref(isUpdate) ? '新增分类' : '编辑分类'));

      function handlePictureDrawerSuccess({ ids }) {
        setFieldsValue({
          category_pic: ids?.length > 0 ? ids[0] : null,
        });
      }

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          // TODO custom api
          closeModal();
          emit('success', {
            isUpdate: unref(isUpdate),
            values: { ...values, id: unref(rowId), sort: 0 },
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
