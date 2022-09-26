<template>
  <div
    class="table-item"
    v-for="(item, index) in props.data"
    :key="index"
    @click="handelClickOrder(item)"
  >
    <div class="table-title">
      <span>A00{{ item }}</span>
      <span>X</span>
    </div>
    <div class="table-content">
      <div class="table-status">空闲</div>
      <div>（{{ item }}人）</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { defineEmits, defineProps } from 'vue';
  const props = defineProps({
    data: {
      type: Array,
      default: () => [],
    },
  });
  const emit = defineEmits(['changeTable']);
  const handelClickOrder = (id: number) => {
    emit('changeTable', id);
  };
</script>

<style lang="less" scoped>
  .table-item {
    width: 200px;
    height: 100px;
    padding: 5px;
    margin: 5px;
    border-radius: 8px;
    border: 1px solid #ccc;
    background: #fff;
    .table-title {
      display: flex;
      justify-content: space-between;
    }
    .table-content {
      text-align: center;
    }
  }
</style>
