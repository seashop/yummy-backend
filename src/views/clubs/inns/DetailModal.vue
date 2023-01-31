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
      <template #picDrawer="{ model, field }">
        <template v-if="model[field]?.length > 0">
          <Image :src="imageUrl(model[field])" :width="60" :preview="false" />
          <BasicButton :onClick="() => (model[field] = 0)">删除</BasicButton>
        </template>
        <BasicButton v-else :onClick="() => openPictureDrawer()(true, { field })">
          选择图片
        </BasicButton>
      </template>
    </BasicForm>
  </BasicModal>
  <PictureDrawer
    :images="state.images"
    :limit="1"
    @register="registerDrawer"
    @reload="handlePictureDrawerRealod"
    @success="handlePictureDrawerSuccess"
  />
</template>

<script lang="ts" setup>
  import { Image } from 'ant-design-vue';
  import { reactive, ref, unref } from 'vue';
  import PictureDrawer from '/@/components/AssetPicker/PictureDrawer.vue';
  import BasicButton from '/@/components/Button/src/BasicButton.vue';
  import { useDrawer } from '/@/components/Drawer';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema } from './inn.data';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { imageUrl, listImages } from '/@/api/asset/image';
  import { Image as ImageItem } from '/@/gen/yummy/v1/storage';

  const emit = defineEmits(['success', 'register']);

  const [registerDrawer, { openDrawer }] = useDrawer();
  function openPictureDrawer() {
    handlePictureDrawerRealod();
    return openDrawer;
  }

  const state = reactive({
    isUpdate: ref(true),
    images: ref<ImageItem[]>([]),
    rowId: ref(''),
  });

  const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
    labelWidth: 90,
    baseColProps: { span: 24 },
    schemas: formSchema,
    showActionButtonGroup: false,
  });

  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    resetFields();
    setModalProps({ confirmLoading: false });
    state.isUpdate = !!data?.isUpdate;

    if (unref(state.isUpdate)) {
      state.rowId = data.record.id;
      setFieldsValue({
        ...data.record,
      });
    }
  });

  const getTitle = '详情';

  async function handlePictureDrawerRealod() {
    state.images = (await listImages({})).images ?? [];
  }

  function handlePictureDrawerSuccess({ ids }) {
    setFieldsValue({
      logoId: ids?.length > 0 ? ids[0] : null,
    });
  }

  async function handleSubmit() {
    try {
      const values = await validate();
      setModalProps({ confirmLoading: true });
      // TODO custom api
      console.log(values);
      closeModal();
      emit('success', {
        isUpdate: unref(state.isUpdate),
        values: { ...values, id: unref(state.isUpdate) ? state.rowId : undefined },
      });
    } finally {
      setModalProps({ confirmLoading: false });
    }
  }
</script>
