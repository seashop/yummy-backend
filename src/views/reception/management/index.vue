<template>
  <div class="management">
    <!-- 头部 -->
    <div class="table-header">
      <div class="table-header-item" v-for="item in 2" :key="item">
        <div class="item-right">X</div>
        <div class="item-content">{{ item }}楼大厅</div>
      </div>
    </div>
    <!-- 内容 -->
    <div class="content">
      <TableItem :data="[1, 2, 3, 4, 5, 6, 7, 8]" @changeTable="handelClickOrder" />
    </div>
  </div>
</template>

<script setup lang="ts">
  // import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import TableItem from './components/TableItem.vue';
  const router = useRouter();
  const handelClickOrder = (id) => {
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
