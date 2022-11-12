<template>
  <div
    class="table_item"
    v-for="(table, index) in tables"
    :key="index"
    :class="table.status_label && dintblStatus[table.status_label].class_bg"
    @click="handelTable(table.id)"
  >
    <div class="table_title">
      <span class="title_img">
        <img v-if="table.status_label" :src="dintblStatus[table.status_label].icon" alt="" />
      </span>
    </div>
    <div class="table_content">
      <div class="table_num">{{ table.title }}</div>
      <div class="table_status">
        {{ table.status_label }}
        <span class="number_people">（{{ table.diners }}人）</span>
      </div>
    </div>
    <div class="table_price" v-if="table.calc_info">
      <strong :class="{ price: true }">$ {{ table.calc_info.total_money }}</strong>
      <!-- <s v-if="table.is_cleaned === 0">$199.00</s> -->
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, toRefs } from 'vue';
  import { DiningTableItem } from '/@/api/plugins/model/diningTableModel';

  const dintblStatus = {
    空闲: { class_bg: '', icon: '/@/assets/images/fi-sr-room-service.png' },
    已下单: { class_bg: 'table_item_dish_up', icon: '/@/assets/images/fi-sr-utensils.png' },
    待支付: { class_bg: 'table_item_placed', icon: '/@/assets/images/fi-sr-utensils.png' },
    待清台: { class_bg: 'table_item_clean', icon: '/@/assets/images/Group704.png' },
  };

  export default defineComponent({
    props: {
      tables: {
        type: Array as PropType<DiningTableItem[]>,
        default: () => [],
      },
    },
    emits: ['click'],
    setup(props, { emit }) {
      const handelTable = (id: number) => {
        emit('click', id);
      };

      return {
        ...toRefs(props),
        dintblStatus,
        handelTable,
      };
    },
  });
</script>

<style lang="less" scoped>
  .has_status() {
    .table_content {
      .table_num {
        color: #fff;
      }

      .table_status {
        color: #fff;
      }
    }
  }

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
        font-size: 20px;
        font-family: Inter-Semi Bold, Inter;
        font-weight: bold;
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

    &_dish_up {
      background: linear-gradient(156deg, #ff9674 0%, #fb6900 100%);
      .has_status();
    }

    &_placed {
      background: linear-gradient(156deg, #ff9674 0%, #fb6900 100%);
      .has_status();
    }

    &_clean {
      background: linear-gradient(135deg, #00d4c8 0%, #00af85 100%);
      .has_status();
    }
  }
</style>
