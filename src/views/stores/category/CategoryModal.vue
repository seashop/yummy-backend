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
          <Image :src="imageUrl(model[field])" :preview="false" />
          <BasicButton :onClick="() => (model[field] = 0)">删除</BasicButton>
        </template>
        <BasicButton v-else :onClick="openDrawer">选择图片</BasicButton>
      </template>
    </BasicForm>
  </BasicModal>
  <PictureDrawer
    v-model:value="imgId"
    :images="state.images"
    @register="registerDrawer"
    @reload="handlePictureDrawerRealod"
    @success="handlePictureDrawerSuccess"
  />
</template>

<script lang="ts" setup>
  import { ref, computed, reactive } from 'vue';
  import { Image } from 'ant-design-vue';
  import { imageUrl, listImages } from '/@/api/asset/image';
  import { useDrawer } from '/@/components/Drawer';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import PictureDrawer from '/@/components/AssetPicker/PictureDrawer.vue';
  import BasicButton from '/@/components/Button/src/BasicButton.vue';
  import { Image as ImageItem } from '/@/gen/yummy/v1/storage';
  import { formSchema } from './category.data';
  import { get } from 'lodash-es';

  const emit = defineEmits(['success', 'register']);
  const state = reactive({
    isUpdate: ref(true),
    images: ref<ImageItem[]>([]),
    rowId: ref(''),
  });

  const [registerDrawer, { openDrawer }] = useDrawer();

  const [registerForm, { resetSchema, getFieldsValue, setFieldsValue, validate }] = useForm({
    labelWidth: 90,
    baseColProps: { span: 24 },
    schemas: formSchema,
    showActionButtonGroup: false,
  });

  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    resetSchema(formSchema);
    setModalProps({ confirmLoading: false });
    state.isUpdate = !!data?.isUpdate;
    state.images = (await listImages()).images ?? [];

    if (state.isUpdate) {
      state.rowId = data.record.id;
      setFieldsValue({
        ...data.record,
      });
    }
  });

  const getTitle = computed(() => (!state.isUpdate ? '新增分类' : '编辑分类'));

  const imgId = computed({
    get: () => {
      console.log(getFieldsValue());
      return get(getFieldsValue(), 'imgId');
    },
    set: (val) => {
      setFieldsValue({
        imgId: val,
      });
    },
  });

  async function handlePictureDrawerRealod() {
    state.images = (await listImages()).images ?? [];
  }

  function handlePictureDrawerSuccess({ ids }) {
    console.log(ids);
    // setFieldsValue({
    //   imgId: ids?.length > 0 ? ids[0] : null,
    // });
  }

  async function handleSubmit() {
    try {
      const values = await validate();
      setModalProps({ confirmLoading: true });
      closeModal();
      emit('success', {
        isUpdate: state.isUpdate,
        values: { ...values, id: state.isUpdate ? state.rowId : undefined },
      });
    } catch (e) {
      console.log(e);
    } finally {
      setModalProps({ confirmLoading: false });
    }
  }
</script>
