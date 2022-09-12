<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    showFooter
    :title="getTitle"
    width="500px"
    @ok="handleSubmit"
  >
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="全部" />
    </a-tabs>

    <Upload
      name="img"
      :action="uploadUrl"
      :headers="upfileHeaders"
      :showUploadList="false"
      @change="handleUploadChange"
    >
      <Button>
        <UploadOutlined />
        上传图片
      </Button>
    </Upload>

    <div class="picutre-drawer-list">
      <Image
        v-for="image of images"
        :key="image.id"
        :src="image.full_url"
        :width="80"
        :preview="false"
        :class="tabCss(image.id)"
        @click="chooseImg(image.id)"
      />
    </div>
  </BasicDrawer>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Image, Tabs, Button, Upload } from 'ant-design-vue';
  import { UploadOutlined } from '@ant-design/icons-vue';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { ImageModel } from '/@/api/asset/model/imageModel';
  import { CreateImageUrl } from '/@/api/asset/image';
  import { getToken } from '/@/utils/auth';
  import type { UploadChangeParam } from 'ant-design-vue';

  export default defineComponent({
    name: 'PictureDrawer',
    components: {
      BasicDrawer,
      Image,
      [Tabs.name]: Tabs,
      [Tabs.TabPane.name]: Tabs.TabPane,
      Button,
      Upload,
      UploadOutlined,
    },
    props: {
      limit: {
        type: Number as PropType<Number>,
        default: 1,
      },
      images: {
        type: Array as PropType<ImageModel[]>,
        default() {
          return [];
        },
      },
    },
    emits: ['success', 'reload', 'register'],
    setup(props, { emit }) {
      const activeKey = ref('1');
      const checkList = ref<Number[]>([]);

      const { createMessage } = useMessage();

      const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
        console.log(data);
        setDrawerProps({ confirmLoading: false });
      });

      const getTitle = '图库管理';

      //选择一张图片进入选择列表
      function chooseImg(id: Number) {
        const { limit } = props;
        if (checkList.value.indexOf(id) > -1) {
          let index = checkList.value.indexOf(id);
          checkList.value.splice(index, 1);
        } else {
          if (checkList.value.length < limit) {
            checkList.value.push(id);
          } else {
            createMessage.warn('最多选择' + limit + '张图片');
            return;
          }
        }
      }

      //选中图片时的样式
      function tabCss(id: Number) {
        if (checkList.value.indexOf(id) > -1) {
          return 'pic-box';
        } else {
          return 'pic-default';
        }
      }

      async function handleSubmit() {
        try {
          setDrawerProps({ confirmLoading: true });
          closeDrawer();
          emit('success', checkList.value);
        } finally {
          setDrawerProps({ confirmLoading: false });
        }
      }

      function handleUploadChange(info: UploadChangeParam) {
        if (info.file.status === 'done') {
          emit('reload');
        }
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          createMessage.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          createMessage.error(`${info.file.name} file upload failed.`);
        }
      }

      return {
        registerDrawer,
        getTitle,
        activeKey,
        chooseImg,
        tabCss,
        uploadUrl: CreateImageUrl,
        upfileHeaders: {
          authorization: getToken() as string,
        },
        handleUploadChange,
        handleSubmit,
      };
    },
  });
</script>

<style lang="less">
  .about {
    text-align: left;
    padding: 20px;
  }

  .picutre-drawer-list {
    padding: 0 10px 0px;

    .el-upload--picture-card {
      width: 120px;
      height: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .btn {
      margin-bottom: 20px;
    }

    .pic-default {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 10px 0;

      border: 1px solid #bfbfbf;
      border-radius: 3px;
    }

    .pic-box {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 10px 0;

      border: 3px solid #409eff !important;
      border-radius: 3px;
      background: #409eff !important;

      .black {
        background-color: #000000;
        position: absolute;
        top: 4px;
        left: 4px;
        opacity: 0.6;
        width: 104px;
        height: 104px;
        z-index: 999;
      }
    }

    .con {
      overflow-y: scroll;
      overflow-x: hidden;
      height: 600px;
      width: 100%;
    }

    .footbtn {
      text-align: right;
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #fff;
      z-index: 99;
    }
  }
</style>
