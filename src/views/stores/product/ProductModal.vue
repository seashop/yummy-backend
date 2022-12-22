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
          <Image
            v-for="id in model[field]"
            :key="id"
            :src="getImageUrlById(id)"
            :width="60"
            :preview="false"
          />
          <BasicButton :onClick="() => (model[field] = 0)">删除</BasicButton>
        </template>
        <BasicButton v-else :onClick="() => openDrawer(true, { field })"> 选择图片 </BasicButton>
      </template>
      <template #sku="{}">
        <FormItemRest>
          <Sku :rdata="rdata" @result="handleSkuResult" />
        </FormItemRest>
      </template>
    </BasicForm>
  </BasicModal>
  <PictureDrawer
    :innId="innId"
    :images="images"
    :limit="3"
    @register="registerDrawer"
    @reload="handlePictureDrawerRealod"
    @success="handlePictureDrawerSuccess"
  />
</template>

<script lang="ts">
  import { defineComponent, computed, unref, reactive, toRefs } from 'vue';
  import { Image } from 'ant-design-vue';
  import { FormItemRest } from 'ant-design-vue/es/form';
  import { useDrawer } from '/@/components/Drawer';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import Sku from './components/Sku.vue';
  import { formSchema } from './product.data';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import PictureDrawer from '/@/components/AssetPicker/PictureDrawer.vue';
  import BasicButton from '/@/components/Button/src/BasicButton.vue';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { imageUrl, listImages } from '/@/api/asset/image';
  import { Image as ImageItem } from '/@/gen/yummy/v1/storage';
  import { getProduct, createProduct, updateProduct } from '/@/api/stores/product';
  import { set } from 'lodash-es';

  export default defineComponent({
    name: 'ProductDrawer',
    components: {
      FormItemRest,
      Image,
      BasicModal,
      BasicForm,
      PictureDrawer,
      BasicButton,
      Sku,
    },
    emits: ['success', 'register', 'back'],
    setup(_, { emit }) {
      const { createMessage } = useMessage();
      const [registerDrawer, { openDrawer }] = useDrawer();

      const state = reactive({
        innId: '',
        sub: 0,
        sku_comfirm: 0,
        rdata: [] as Array<string> | undefined,
        isUpdate: true,
        images: [] as Array<ImageItem>,
        rowId: '' as string,
      });

      const [registerForm, { resetSchema, setFieldsValue, validate }] = useForm({
        labelWidth: 90,
        baseColProps: { span: 24 },
        schemas: formSchema,
        showActionButtonGroup: false,
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetSchema(formSchema);
        state.rdata = undefined;
        state.rowId = '';

        setModalProps({ confirmLoading: false });
        state.isUpdate = !!data?.isUpdate;

        if (unref(state.isUpdate)) {
          const record = await getProduct(data.record.innId, data.record.id);
          state.rowId = record.id;

          if (record?.skuAttrIds.length > 0) {
            setFieldsValue({
              hasSku: true,
            });
            state.rdata = record.skuAttrIds;
          }

          setFieldsValue({
            ...record,
          });
        }
      });

      const getTitle = computed(() => (!unref(state.isUpdate) ? '新增商品' : '编辑商品'));

      function fieldValueChange(k, v) {
        switch (k) {
          case 'innId':
            state.innId = v;
            break;
          default:
            break;
        }
      }

      function fillSkuInfo(values) {
        console.log(values, skuInfo);
        if (values?.show_sku) {
          values.sku = skuInfo['list'];
          values.sku_img_ids = skuInfo['sku_img_id'];
        } else {
          values.sku = [];
          values.sku_img_ids = [];
        }
        return values;
      }

      function getImageUrlById(id: String) {
        for (let index = 0; index < state.images?.length; index++) {
          const image = state.images[index];
          if (image.id == id) {
            return imageUrl(image.id);
          }
        }
        return '';
      }

      async function handlePictureDrawerRealod() {
        state.images = (await listImages()).images;
      }
      handlePictureDrawerRealod();

      function handlePictureDrawerSuccess({ data, items }) {
        let payload = {};
        set(payload, data.field, items?.length > 0 ? items.map((item) => item.id) : []);
        setFieldsValue(payload);
      }

      function checkData(values) {
        if (values.banner_imgs && !values.banner_imgs[0]) {
          console.log(values, values.banner_imgs);
          createMessage.error('未选择商品图片');
          return false;
        }
        if (values.fx_money * 1 > values.price * 1) {
          createMessage.error('分销佣金必须小于销售价格');
          return false;
        }
        // if (!values.delivery_id) {
        //   createMessage.error('请选择运费模板');
        //   return false
        // }
        return true;
      }

      //新增商品
      function doCreate(values) {
        if (!checkData(values)) {
          return;
        }
        if (values?.sku !== undefined) {
          values.price = values.sku[0].price;
          values.stock = values.sku[0].stock_num;
        }
        return values;
      }

      // 提交 修改商品
      function doUpdate(values) {
        return { ...values, id: state.rowId };
      }

      let skuInfo: Object = {};
      async function handleSkuResult(info: object) {
        skuInfo = { ...info };
      }

      async function handleSubmit() {
        try {
          let values = await validate();
          if (values.show_sku) {
            values = fillSkuInfo(values);
          }

          setModalProps({ confirmLoading: true });
          values = state.isUpdate ? doUpdate(values) : doCreate(values);
          if (values === undefined) {
            return;
          }
          const result = state.isUpdate ? await updateProduct(values) : await createProduct(values);

          // TODO custom api
          console.log(values, values?.value, '---');
          closeModal();
          emit('success', { result });
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return {
        ...toRefs(state),
        registerModal,
        registerForm,
        getTitle,
        fieldValueChange,
        handleSkuResult,
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
