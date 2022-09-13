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
            :src="getImageUrlById(image)"
            :width="60"
            :preview="false"
          />
          <BasicButton :onClick="() => (model[field] = 0)">删除</BasicButton>
        </template>
        <BasicButton v-else :onClick="() => openDrawer(true, { field })"> 选择图片 </BasicButton>
      </template>
      <template #sku="{}">
        <FormItemRest>
          <Sku :sub="sub" :del="sku_comfirm" :rdata="rdata" @pro_sku="pro_sku" />
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
  import { ImageModel } from '/@/api/asset/model/imageModel';
  import { GoodsModel, GoodsSkuArr } from '/@/api/stores/model/goodsModel';
  import { getGoods, updateGoods } from '/@/api/stores/goods';
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
      const img_list = ref<Array<number>>([]);
      const img_list_detail = ref<Array<number>>([]);

      const isUpdate = ref(true);
      const images = ref<Array<ImageModel>>([]);
      const rowId = ref<number>(0);

      const [registerForm, { resetFields, getFieldsValue, setFieldsValue, validate }] = useForm({
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
        images.value = await listImages();

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

      //提交 修改商品
      function onEdit() {
        const values = getFieldsValue() as GoodsModel;
        values.bannerimgs = img_list.value;
        values.detailimgs = img_list_detail.value;
        console.log('sda', values);
        updateGoods(values).then((_) => {
          createMessage.success('修改成功');
          rest();
        });
      }

      function rest() {
        emit('back');
      }

      //新增商品
      async function onSubmit() {
        // const values = getFieldsValue();
        // if (that.is_caiji == 1) {
        //   values.bannerimgs = await that.get_banner_id();
        // } else {
        //   values.bannerimgs = img_list.value;
        // }
        // if (!this.check_data()) {
        //   return;
        // }
        // if (values['sku'][0]) {
        //   values['price'] = values['sku'][0]['price'];
        //   values['stock'] = values['sku'][0]['stock_num'];
        // }
        // // if(this.show_sku == 1){
        // // 	values.sku = this.sku_obj
        // // }
        // values.detailimgs = img_list_detail.value;
        // values.video_id = this.video_id;
        // console.log(values);
        // proModel.add_pro(values).then((res) => {
        //   var res_code = res.status.toString(); //返回结果状态码转字符串取第一位数
        //   if (res_code.charAt(0) == 2) {
        //     this.$message({
        //       showClose: true,
        //       message: '新增成功',
        //       type: 'success',
        //     });
        //     this._clsForm(); //清空form数据
        //     this.upfile_list = []; //清空上传列表
        //     this.upfile_list_sku = []; //清空上传列表
        //     this.upfile_banner_list = []; //清空上传列表
        //     this.$emit('back');
        //   } else {
        //     that.$message({
        //       showClose: true,
        //       message: res.msg,
        //       type: 'error',
        //     });
        //   }
        // });
      }

      function pro_sku(e) {
        console.log('tree:', e.tree);
        console.log('list:', e.list);
        const values = getFieldsValue();
        // this.get_sku_data(e)
        if (values.show_sku == 1) {
          console.log('ssku:', values['sku']);
          values['sku'] = e['list'];
          values['sku_img_ids'] = e['sku_img_id'];
        } else {
          console.log('end--sku:', values['sku']);
          values['sku'] = [];
          values['sku_img_ids'] = [];
        }
        if (isUpdate.value) {
          console.log('km:');
          onEdit();
        } else {
          onSubmit();
        }
      }

      function getImageUrlById(id: Number) {
        for (let index = 0; index < images.value.length; index++) {
          const image = images.value[index];
          if (image.id == id) {
            return image.full_url;
          }
        }
        return '';
      }

      async function handlePictureDrawerRealod() {
        images.value = await listImages();
      }

      function handlePictureDrawerSuccess({ data, value }) {
        let payload = {};
        set(payload, data.field, value?.length > 0 ? [...value] : []);
        setFieldsValue(payload);
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
            values: { ...values, goods_id: rowId.value },
          });
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return {
        sub,
        sku_comfirm,
        rdata,
        pro_sku,
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
