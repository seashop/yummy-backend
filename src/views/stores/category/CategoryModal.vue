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
        <template v-if="model[field] > 0">
          <Image :src="getImageUrlById(model[field])" :preview="false" />
          <BasicButton :onClick="() => (model[field] = 0)">删除</BasicButton>
        </template>
        <BasicButton v-else :onClick="openDrawer">选择图片</BasicButton>
      </template>
    </BasicForm>
  </BasicModal>
  <PictureDrawer
    :images="images"
    @register="registerDrawer"
    @reload="handlePictureDrawerRealod"
    @success="handlePictureDrawerSuccess"
  />
</template>

<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { Image } from 'ant-design-vue';
  import { useDrawer } from '/@/components/Drawer';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema } from './category.data';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import PictureDrawer from '/@/components/AssetPicker/PictureDrawer.vue';
  import BasicButton from '/@/components/Button/src/BasicButton.vue';
  import { listImages } from '/@/api/asset/image';
  import { ImageModel } from '/@/api/asset/model/imageModel';

  export default defineComponent({
    name: 'CategoryDrawer',
    components: { Image, BasicModal, BasicForm, PictureDrawer, BasicButton },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const [registerDrawer, { openDrawer }] = useDrawer();

      const isUpdate = ref(true);
      const images = ref<ImageModel[]>([]);
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
        images.value = await listImages();

        if (unref(isUpdate)) {
          rowId.value = data.record.category_id;
          setFieldsValue({
            ...data.record,
          });
        }
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增分类' : '编辑分类'));

      function getImageUrlById(id: Number) {
        for (let index = 0; index < images.value.length; index++) {
          const image = images.value[index];
          if (image.id == id) {
            console.log(image.full_url);
            return image.full_url;
          }
        }
        return '';
      }

      async function handlePictureDrawerRealod() {
        images.value = await listImages();
      }

      function handlePictureDrawerSuccess(payload: Array<Number>) {
        setFieldsValue({
          category_pic: payload.length > 0 ? payload[0] : null,
        });
        console.log(payload);
      }

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          // TODO custom api
          console.log(values);
          closeModal();
          emit('success', {
            isUpdate: unref(isUpdate),
            values: { ...values, category_id: rowId.value },
          });
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return {
        images,
        registerModal,
        registerForm,
        getTitle,
        handleSubmit,
        registerDrawer,
        openDrawer,
        getImageUrlById,
        handlePictureDrawerRealod,
        handlePictureDrawerSuccess,
      };
    },
  });
</script>
