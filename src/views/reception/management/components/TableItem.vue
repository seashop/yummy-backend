<template>
  <div
    class="table_item"
    :class="{
      item_active: item.status_label === '已下单',
      item_success: item.status_label === '待清台',
    }"
    v-for="(item, index) in props.data"
    :key="index"
    @click="handelClickOrder(item)"
  >
    <div class="table_title">
      <span class="title_img">
        <!-- <img :src="imags[item.is_cleaned]" alt="" /> -->
        <!-- 1表示空闲 0表示已下单  -->
        <template v-if="item.status_label === '空闲'">
          <img src="/@/assets/images/fi-sr-room-service.png" alt="" />
        </template>
        <template v-if="item.status_label === '已下单'">
          <img src="/@/assets/images/fi-sr-utensils.png" alt="" />
        </template>
        <template v-if="item.status_label === '待清台'">
          <img src="/@/assets/images/Group704.png" alt="" />
        </template>
      </span>
    </div>
    <div class="table_content">
      <div class="table_num">{{ item.title }}</div>
      <div class="table_status">
        <template v-if="item.status_label === '空闲'">空闲</template>
        <template v-else-if="item.status_label === '已下单'">已下单</template>
        <template v-else-if="item.status_label === '待清台'">已结算</template>
        <span class="number_people">（{{ item.diners }}人）</span>
      </div>
    </div>
    <div class="table_price" v-if="item.calc_info">
      <strong :class="{ price: true }">$ {{ item.calc_info && item.calc_info.total_money }}</strong>
      <!-- <s v-if="item.is_cleaned === 0">$199.00</s> -->
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
        font-size: 19px;
        font-family: Inter-Semi Bold, Inter;
        font-weight: normal;
        color: #fff;
        line-height: 16px;
      }
      strong {
        color: #fff;
      }
      s {
        font-size: 10px;
        font-family: Inter-Regular, Inter;
        font-weight: 400;
        line-height: 12px;
        height: 12px;
        color: rgba(255, 255, 255, 0.8);
      }
    }
  }
  .item_active {
    background: linear-gradient(156deg, #ff9674 0%, #fb6900 100%);
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
    background: linear-gradient(135deg, #00d4c8 0%, #00af85 100%);
    .table_content {
      .table_num {
        color: #fff;
      }
      .table_status {
        color: #fff;
      }
    }
  }
</style>
