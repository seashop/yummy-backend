<template>
  <div class="management">
    <!-- 头部 -->
    <div class="table-header">
      <div class="header-item-box">
        <div
          class="table-header-item"
          :class="{ active: current === index }"
          v-for="(item, index) in 4"
          :key="item"
          @click="handleClick(index)"
        >
          <div class="item-content">{{ item }}楼大厅</div>
        </div>
      </div>
      <div class="update" @click="updateList">
        <SyncOutlined />
        <div>刷新</div>
      </div>
    </div>
    <!-- 内容 -->
    <div class="content">
      <TableItem :data="tableItem" @changeTable="handelClickOrder" />
    </div>
    <!-- 右下角图片 -->
    <div class="background_img"> </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, nextTick } from 'vue';
  import { useRouter } from 'vue-router';
  import { SyncOutlined } from '@ant-design/icons-vue';
  import { listDiningTables } from '/@/api/plugins/diningTable';
  import TableItem from './components/TableItem.vue';
  const router = useRouter();
  const tableItem: any = ref([]);
  const current = ref(0);
  const getListDiningTables = async () => {
    const res = await listDiningTables();
    tableItem.value = res.items;
  };
  onMounted(() => {
    // 获取页面元素 默认全屏
    if (document.querySelector('.vben-layout-header-action__item')) {
      if (document.querySelector('.vben-multiple-tabs-content__extra-fold'))
        document.querySelector('.vben-multiple-tabs-content__extra-fold')!.click();
    }
    nextTick(() => {
      if (document.querySelector('.vben-setting-drawer-feature')) {
        document.querySelector('.vben-setting-drawer-feature')!.style.display = 'none'; //隐藏设置图标
      }
    });

    getListDiningTables();
  });
  const handelClickOrder = (id: number) => {
    router.push({
      path: '/reception/central',
      query: {
        id,
      },
    });
  };
  const updateList = () => {
    // 获取最新桌台信息
    getListDiningTables();
  };
  const handleClick = (id) => {
    current.value = id;
  };
</script>

<style lang="less" scoped>
  .management {
    position: relative;
    padding: 10px;
    height: calc(100vh - 32px);
    background: #fff;
    .background_img {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 441px;
      height: 432px;
      background: url('/@/assets/images/Group705.png') no-repeat;
      background-size: cover;
    }
    .table-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 158px;
      padding: 10px;
      padding-top: 95px;
      padding-bottom: 0;
      border-bottom: 4px solid #061527;
      background: #fff;
      .header-item-box {
        flex: 1;
        display: flex;
        align-items: center;
        // justify-content: space-between;
        .table-header-item {
          // flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 180px;
          height: 61px;
          margin: 0 6px;
          opacity: 1;
          border-radius: 9px 9px 0 0;
          // background: #061527;
          // box-shadow: 0px -2px 7px 1px rgba(0, 0, 0, 0.25);
          // border-radius: 9px;
          opacity: 1;
          border: 2px solid #061527;

          // border-radius: 9px 0px 0px 9px;
          opacity: 1;
          .item-content {
            text-align: center;
            width: 80px;
            height: 31px;
            font-size: 22px;
            font-family: PingFang SC-Medium, PingFang SC;
            font-weight: 500;
            // color: #ffffff;
            line-height: 31px;
          }
        }
        .active {
          background: #061527;
          box-shadow: 0px -2px 7px 1px rgba(0, 0, 0, 0.25);
          .item-content {
            color: #fff;
          }
        }
      }

      .update {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 117px;
        height: 51px;
        background: #ffc165;
        border-radius: 8px 8px 8px 8px;
        opacity: 1;
      }
    }
    .content {
      display: flex;
      flex-wrap: wrap;
      padding: 10px;
    }
  }
</style>
