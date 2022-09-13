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
      <template #sku="{ model, field }">
        <Sku :sub="sub" :del="sku_comfirm" :rdata="rdata" @pro_sku="pro_sku" />
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
  import Sku from './components/Sku.vue';
  import { formSchema } from './goods.data';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import PictureDrawer from '/@/components/AssetPicker/PictureDrawer.vue';
  import BasicButton from '/@/components/Button/src/BasicButton.vue';
  import { listImages } from '/@/api/asset/image';
  import { ImageModel } from '/@/api/asset/model/imageModel';
import { updateGoods } from '/@/api/stores/goods';

  export default defineComponent({
    name: 'GoodsDrawer',
    components: { Image, BasicModal, BasicForm, PictureDrawer, BasicButton, Sku },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const [registerDrawer, { openDrawer }] = useDrawer();

      const sub = ref(0);
      const sku_comfirm = ref(0);
      const rdata = ref({});

      const isUpdate = ref(true);
      const images = ref<ImageModel[]>([]);
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
        images.value = await listImages();

        if (unref(isUpdate)) {
          rowId.value = data.record.goods_id;
          setFieldsValue({
            ...data.record,
          });
        }
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增商品' : '编辑商品'));

      //提交 修改商品
      function onEdit() {
        const values = getFieldsValue();
        values.bannerimgs = this.img_list;
        values.detailimgs = this.img_list_detail;
        console.log('sda', values);
        updateGoods(values).then((res) => {
          this.$message({
            showClose: true,
            message: '修改成功',
            type: 'success',
          });
          that.rest();
          this.$emit('back');
        });
      }

      //新增商品
      async function onSubmit() {
        const values = getFieldsValue();
        if (that.is_caiji == 1) {
          values.bannerimgs = await that.get_banner_id();
        } else {
          values.bannerimgs = this.img_list;
        }
        if (!this.check_data()) {
          return;
        }
        if (values['sku'][0]) {
          values['price'] = values['sku'][0]['price'];
          values['stock'] = values['sku'][0]['stock_num'];
        }

        // if(this.show_sku == 1){
        // 	values.sku = this.sku_obj
        // }
        values.detailimgs = this.img_list_detail;
        values.video_id = this.video_id;
        console.log(values);
        proModel.add_pro(values).then((res) => {
          var res_code = res.status.toString(); //返回结果状态码转字符串取第一位数
          if (res_code.charAt(0) == 2) {
            this.$message({
              showClose: true,
              message: '新增成功',
              type: 'success',
            });
            this._clsForm(); //清空form数据
            this.upfile_list = []; //清空上传列表
            this.upfile_list_sku = []; //清空上传列表
            this.upfile_banner_list = []; //清空上传列表
            this.$emit('back');
          } else {
            that.$message({
              showClose: true,
              message: res.msg,
              type: 'error',
            });
          }
        });
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
          goods_pic: payload.length > 0 ? payload[0] : null,
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
