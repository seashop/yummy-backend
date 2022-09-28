<template>
  <div
    class="table_item"
    :class="{ item_active: item.status === 1, item_success: item.status === 2 }"
    v-for="(item, index) in data"
    :key="index"
    @click="handelClickOrder(item.id)"
  >
    <div class="table_title">
      <span class="title_img">
        <img :src="imags[item.status]" alt="" />
      </span>
    </div>
    <div class="table_content">
      <div class="table_num">{{ item.title }}</div>
      <div class="table_status"
        >空闲
        <span class="number_people">（{{ 8 }}）</span>
      </div>
    </div>
    <div class="table_price" v-if="item.status === 1 || item.status === 2">
      <strong :class="{ price: item.status === 1 }">$99.00</strong>
      <s v-if="item.status === 1">$199.00</s>
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
  const data = [
    { id: 1, title: 101, status: 0 },
    { id: 2, title: 102, status: 1 },
    { id: 3, title: 103, status: 2 },
    { id: 3, title: 103, status: 0 },
    { id: 3, title: 103, status: 0 },
    { id: 3, title: 103, status: 0 },
    { id: 3, title: 103, status: 0 },
  ];
  const imags = {
    0: '/@/assets/images/fi-sr-room-service.png',
    1: '/@/assets/images/fi-sr-utensils.png',
    2: '/@/assets/images/Group704.png',
  };
  const emit = defineEmits(['changeTable']);
  const handelClickOrder = (id: number) => {
    emit('changeTable', id);
  };
  // console.log(props.data);
</script>

<style lang="less" scoped>
  .table_item {
    display: flex;
    flex-direction: column;
    width: 154px;
    height: 176px;
    margin: 27px 21px;
    background: linear-gradient(157deg, #fbfafa 0%, rgba(255, 255, 255, 0) 100%);
    box-shadow: 0px 0px 13px 7px rgba(0, 0, 0, 0.05);
    border-radius: 10px 10px 10px 10px;
    opacity: 1;
    .table_title {
      display: flex;
      justify-content: space-between;

      padding: 15px 17px;
      .title_img {
        width: 24px;
        height: 24px;
        img {
          width: 100%;
        }
      }
    }
    // content
    .table_content {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      .table_num {
        text-align: center;
        font-size: 25px;
        font-weight: 500;
        color: #000000;
        line-height: 29px;
        margin-bottom: 5px;
      }
      .table_status {
        text-align: center;
        font-size: 13px;
        font-family: Inter-Regular, Inter;
        font-weight: 400;
        color: #000000;
        line-height: 15px;
        .number_people {
          width: 14px;
          height: 12px;
          font-size: 10px;
          font-family: Inter-Regular, Inter;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.5);
          line-height: 12px;
        }
      }
    }
    .table_price {
      height: 35px;
      text-align: center;
      .price {
        font-size: 14px;
        font-family: Inter-Semi Bold, Inter;
        font-weight: normal;
        color: #ff0000;
        line-height: 16px;
      }
      s {
        font-size: 10px;
        font-family: Inter-Regular, Inter;
        font-weight: 400;
        color: #ffffff;
        line-height: 12px;
      }
    }
  }
  .item_active {
    background: linear-gradient(156deg, #ff4921 0%, rgba(255, 180, 156, 0.33) 100%);
    .table_content {
      .table_num {
        color: #fff;
      }
      .table_status {
        color: #fff;
      }
    }
  }
  .item_success {
    background: linear-gradient(153deg, #cdeec1 0%, rgba(205, 238, 193, 0.6) 100%);
  }
</style>
