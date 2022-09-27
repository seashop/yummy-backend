<template>
  <div class="management">
    <!-- 头部 -->
    <div class="table-header">
      <div class="table-header-item" v-for="item in 1" :key="item">
        <div class="item-right">X</div>
        <div class="item-content">{{ item }}楼大厅</div>
      </div>
    </div>
    <!-- 内容 -->
    <div class="content">
      <TableItem :data="tableItem" @changeTable="handelClickOrder" />
    </div>
    <Loading :loading="compState.loading" :absolute="compState.absolute" tip="加载中" />
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { listDiningTables } from '/@/api/plugins/diningTable';
  import { Loading } from '/@/components/Loading';

  import TableItem from './components/TableItem.vue';
  const router = useRouter();
  const tableItem: any = ref([]);
  const compState = reactive({
    absolute: false,
    loading: false,
    tip: '加载中...',
  });
  function openLoading(absolute: boolean) {
    compState.absolute = absolute;
    compState.loading = true;
  }
  const getListDiningTables = async () => {
    const res = await listDiningTables();
    tableItem.value = res.items;
  };
  onMounted(() => {
    console.log('onMounted');
    openLoading(true);
    console.log('compState.loading', compState.loading);
    getListDiningTables();
    compState.loading = false;
  });
  const handelClickOrder = (id: number) => {
    router.push({
      path: '/reception/central',
      query: {
        id,
      },
    });
  };
</script>

<style lang="less" scoped>
  .management {
    padding: 10px;
    .table-header {
      display: flex;
      align-items: center;
      height: 100px;
      padding: 10px;
      background: #fff;
      .table-header-item {
        width: 100px;
        height: 70px;
        padding: 5px;
        margin: 0 5px;
        border-radius: 8px;
        background: #2882ef;

        .item-right {
          text-align: right;
          color: #fff;
        }
        .item-content {
          text-align: center;
          color: #fff;
        }
      }
    }
    .content {
      display: flex;
      flex-wrap: wrap;
      padding: 10px;
    }
  }
</style>
