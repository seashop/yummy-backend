<template>
  <slot></slot>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    showFooter
    :title="getTitle"
    width="500px"
    :onVisibleChange="handleVisibleChange"
    @ok="handleSubmit"
  >
    <Tabs v-model:activeKey="state.activeKey">
      <TabPane key="1" tab="全部" />
    </Tabs>
    <Upload
      name="attachment"
      :action="CreateImageUrl"
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
        :src="imageUrl(image.id)"
        :width="80"
        :preview="false"
        :class="tabCss(image)"
        @click="chooseImg(image)"
      />
    </div>
  </BasicDrawer>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue';
  import type { UploadChangeParam } from 'ant-design-vue';
  import { Image, Tabs, Button, Upload } from 'ant-design-vue';
  import { UploadOutlined } from '@ant-design/icons-vue';
  import { createImage } from '/@/api/asset/image';
  import { CreateImageUrl, imageUrl } from '/@/api/asset/image';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { Image as ImageItem, Image_From } from '/@/gen/yummy/v1/storage';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { getToken } from '/@/utils/auth';

  const TabPane = Tabs.TabPane;

  const props = defineProps({
    value: {
      type: [String, Array<String>],
    },
    limit: {
      type: Number as PropType<number>,
      default: 1,
    },
    images: {
      type: Array as PropType<ImageItem[]>,
      default() {
        return [];
      },
    },
  });

  const emit = defineEmits(['success', 'reload', 'register', 'update:value']);

  const upfileHeaders = {
    authorization: getToken() as string,
  };

  const state = reactive({
    activeKey: '1',
    ids: [] as Array<string>,
    items: [] as Array<ImageItem>,
    data: null as any,
  });

  const { createMessage } = useMessage();

  const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (payload) => {
    state.data = payload;
    handleVisibleChange();
  });

  const getTitle = '图库管理';

  async function handleSubmit() {
    try {
      const { limit } = props;
      if (limit > 1) {
        emit('update:value', state.ids);
      } else {
        emit('update:value', state.ids.length > 0 ? state.ids[0] : null);
      }
      setDrawerProps({ confirmLoading: true });
      closeDrawer();
      emit('success', { data: state.data, ids: state.ids, items: state.items });
    } finally {
      setDrawerProps({ confirmLoading: false });
    }
  }

  function handleVisibleChange() {
    state.ids = [];
    state.items = [];
    setDrawerProps({ confirmLoading: false });
  }

  function handleUploadChange(info: UploadChangeParam) {
    if (info.file.status === 'done') {
      createImage({
        id: info.file.response.id as string,
        from: Image_From.FROM_USER,
        disk: 'cos',
      })
        .then((_) => {
          emit('reload');
        })
        .catch((err) => {
          throw err;
        });
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

  //选择一张图片进入选择列表
  function chooseImg(item: ImageItem) {
    const { limit } = props;
    if (!item.id) {
      return;
    }
    if (limit > 1) {
      if (state.ids.indexOf(item.id) !== -1) {
        let index = state.ids.indexOf(item.id);
        state.ids.splice(index, 1);
        state.items.splice(index, 1);
      } else if (state.ids.length < limit) {
        state.ids.push(item.id);
        state.items.push({ ...item });
      } else if (state.ids.length === 1) {
      } else {
        createMessage.warn('最多选择' + limit + '张图片');
        return;
      }
    } else {
      if (state.ids.indexOf(item.id) !== -1) {
        state.ids = [];
        state.items = [];
      } else {
        state.ids = [item.id];
        state.items = [item];
      }
    }
  }

  //选中图片时的样式
  function tabCss(item: ImageItem) {
    if (item.id && state.ids.indexOf(item.id) > -1) {
      return 'pic-box';
    } else {
      return 'pic-default';
    }
  }
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
