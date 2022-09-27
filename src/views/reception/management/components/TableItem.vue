<template>
  <div
    class="table-item"
    v-for="(item, index) in props.data"
    :key="index"
    @click="handelClickOrder(item.id)"
  >
    <div class="table-title">
      <span>{{ item.title }}</span>
      <span>X</span>
    </div>
    <div class="table-content">
      <div>{{ item.title }}</div>
      <div class="table-status">空闲（{{ 8 }}人）</div>
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
  // console.log(props.data);
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
