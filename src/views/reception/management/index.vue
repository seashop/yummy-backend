<template>
  <div class="management">
    <!-- 头部 -->
    <div class="table-header">
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
    <!-- 内容 -->
    <div class="content">
      <TableItem :data="tableItem" @changeTable="handelClickOrder" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
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
    console.log('onMounted');
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
  const handleClick = (id) => {
    current.value = id;
  };
</script>

<style lang="less" scoped>
  .management {
    padding: 10px;
    .table-header {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 158px;
      padding: 10px;
      padding-top: 95px;
      padding-bottom: 0;
      border-bottom: 4px solid #061527;
      background: #fff;
      .table-header-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 227px;
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
    .content {
      display: flex;
      flex-wrap: wrap;
      padding: 10px;
    }
  }
</style>
