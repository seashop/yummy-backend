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
          <Image
            v-for="image in model[field]"
            :key="image"
            :src="image.full_url"
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
    :images="images"
    :limit="3"
    @register="registerDrawer"
    @reload="handlePictureDrawerRealod"
    @success="handlePictureDrawerSuccess"
  />
</template>

<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { Image } from 'ant-design-vue';
  import { FormItemRest } from 'ant-design-vue/es/form';
  import { useDrawer } from '/@/components/Drawer';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import Sku from './components/Sku.vue';
  import { formSchema } from './goods.data';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import PictureDrawer from '/@/components/AssetPicker/PictureDrawer.vue';
  import BasicButton from '/@/components/Button/src/BasicButton.vue';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { listImages } from '/@/api/asset/image';
  import { ImageItem } from '/@/api/asset/model/imageModel';
  import { GoodsSkuArr } from '/@/api/stores/model/goodsModel';
  import { getGoods, createGoods, updateGoods } from '/@/api/stores/goods';
  import { set } from 'lodash-es';

  export default defineComponent({
    name: 'GoodsDrawer',
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

      const sub = ref(0);
      const sku_comfirm = ref(0);
      const rdata = ref<GoodsSkuArr>();

      const isUpdate = ref(true);
      const images = ref<Array<ImageItem>>([]);
      const rowId = ref<number>(0);

      const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
        labelWidth: 90,
        baseColProps: { span: 24 },
        schemas: formSchema,
        showActionButtonGroup: false,
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();
        rdata.value = undefined;
        rowId.value = 0;

        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          const record = await getGoods(data.record.goods_id);
          rowId.value = record.goods_id;

          if (record?.sku_arr?.tree?.length > 0) {
            setFieldsValue({
              show_sku: true,
            });
            rdata.value = record.sku_arr;
          }

          setFieldsValue({
            ...record,
          });
        }
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增商品' : '编辑商品'));

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

      function getImageUrlById(id: Number) {
        for (let index = 0; index < images?.value?.length; index++) {
          const image = images.value[index];
          if (image.id == id) {
            return image.full_url;
          }
        }
        return '';
      }

      async function handlePictureDrawerRealod() {
        images.value = (await listImages()).items;
      }
      handlePictureDrawerRealod();

      function handlePictureDrawerSuccess({ data, items }) {
        let payload = {};
        set(payload, data.field, items?.length > 0 ? [...items] : []);
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
        return { ...values, goods_id: rowId.value };
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
          values = isUpdate.value ? doUpdate(values) : doCreate(values);
          if (values === undefined) {
            return;
          }
          const result = isUpdate.value ? await updateGoods(values) : await createGoods(values);

          // TODO custom api
          console.log(values, values?.value, '---');
          closeModal();
          emit('success', { result });
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return {
        sub,
        sku_comfirm,
        rdata,
        images,
        registerModal,
        registerForm,
        getTitle,
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
