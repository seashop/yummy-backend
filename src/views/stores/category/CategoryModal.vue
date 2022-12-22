<template>
  <BasicModal
    v-bind="$attrs"
    @register="registerModal"
    showFooter
    :title="getTitle"
    width="500px"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm" @field-value-change="fieldValueChange">
      <template #picDrawer="{ model, field }">
        <template v-if="model[field]?.length > 0">
          <Image :src="getImageUrlById(model[field])" :preview="false" />
          <BasicButton :onClick="() => (model[field] = 0)">删除</BasicButton>
        </template>
        <BasicButton v-else :onClick="openDrawer">选择图片</BasicButton>
      </template>
    </BasicForm>
  </BasicModal>
  <PictureDrawer
    :innId="innId"
    :images="images"
    @register="registerDrawer"
    @reload="handlePictureDrawerRealod"
    @success="handlePictureDrawerSuccess"
  />
</template>

<script lang="ts">
  import { defineComponent, ref, computed, unref, reactive, toRefs } from 'vue';
  import { Image } from 'ant-design-vue';
  import { useDrawer } from '/@/components/Drawer';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema } from './category.data';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import PictureDrawer from '/@/components/AssetPicker/PictureDrawer.vue';
  import BasicButton from '/@/components/Button/src/BasicButton.vue';
  import { imageUrl, listImages } from '/@/api/asset/image';
  import { Image as ImageItem } from '/@/gen/yummy/v1/storage';

  export default defineComponent({
    name: 'CategoryModal',
    components: { Image, BasicModal, BasicForm, PictureDrawer, BasicButton },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const [registerDrawer, { openDrawer }] = useDrawer();

      const isUpdate = ref(true);
      const images = ref<ImageItem[]>([]);
      const rowId = ref('');

      const state = reactive({
        innId: '',
      });

      const [registerForm, { resetSchema, setFieldsValue, validate }] = useForm({
        labelWidth: 90,
        baseColProps: { span: 24 },
        schemas: formSchema,
        showActionButtonGroup: false,
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetSchema(formSchema);
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;
        images.value = (await listImages()).images;

        if (unref(isUpdate)) {
          rowId.value = data.record.id;
          setFieldsValue({
            ...data.record,
          });
        }
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增分类' : '编辑分类'));

      function fieldValueChange(k, v) {
        switch (k) {
          case 'innId':
            state.innId = v;
            break;
          default:
            break;
        }
      }

      function getImageUrlById(id: String) {
        for (let index = 0; index < images.value.length; index++) {
          const image = images.value[index];
          if (image.id == id) {
            return imageUrl(image.id);
          }
        }
        return '';
      }

      async function handlePictureDrawerRealod() {
        images.value = (await listImages()).images;
      }

      function handlePictureDrawerSuccess({ ids }) {
        setFieldsValue({
          imgId: ids?.length > 0 ? ids[0] : null,
        });
      }

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          closeModal();
          emit('success', {
            isUpdate: unref(isUpdate),
            values: { ...values, id: unref(isUpdate) ? rowId.value : undefined },
          });
        } catch (e) {
          console.log(e);
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return {
        ...toRefs(state),
        images,
        registerModal,
        registerForm,
        getTitle,
        handleSubmit,
        registerDrawer,
        openDrawer,
        fieldValueChange,
        getImageUrlById,
        handlePictureDrawerRealod,
        handlePictureDrawerSuccess,
      };
    },
  });
</script>
