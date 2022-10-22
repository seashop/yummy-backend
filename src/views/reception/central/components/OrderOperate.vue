<template>
  <div class="order_operate">
    <!-- title -->
    <div class="order_details">
      <div>
        <div class="table_num">{{ props.tableNum }}</div>
        <div class="order_time">Order Time {{ props.orderTime }}</div>
      </div>
      <div>
        <Select
          style="width: 180px"
          ref="select"
          @change="changeValue"
          :options="options"
          v-model:value="diners"
        />
      </div>
    </div>
    <!-- button -->
    <div class="operate_item_box">
      <div class="operate_item" :class="{ op_disable: props.isPlaced }" @click="reminder">
        催菜
      </div>
      <div class="operate_item item1" :class="{ op_disable: canChange }" @click="changeTable">
        换桌
      </div>
      <div class="operate_item item2" :class="{ op_disable: props.isPlaced }" @click="printReceipt">
        打印小票
      </div>
      <div class="operate_item item3" :class="{ op_disable: !props.canClean }" @click="clearTable">
        清台
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue';
  import { Select } from 'ant-design-vue';

  const options = [
    { label: '人数1/8', value: 1 },
    { label: '人数2/8', value: 2 },
    { label: '人数3/8', value: 3 },
    { label: '人数4/8', value: 4 },
    { label: '人数5/8', value: 5 },
    { label: '人数6/8', value: 6 },
    { label: '人数7/8', value: 7 },
    { label: '人数8/8', value: 8 },
  ];

  export default defineComponent({
    components: {
      Select,
    },
    props: {
      tableNum: {
        type: String,
        default: () => '',
      },
      orderTime: {
        type: String,
        default: () => '09:30',
      },
      isPlaced: {
        type: Boolean,
        default: () => true,
      },
      canChange: {
        type: Boolean,
        default: () => true,
      },
      canClean: {
        type: Boolean,
        default: () => true,
      },
    },
    emits: ['changeDiners', 'changeTable', 'clearTable', 'printReceipt', 'reminder'],
    setup(props, { emit }) {
      const state = reactive({
        diners: 1,
      });

      const reminder = () => {
        emit('reminder');
      };
      const changeTable = () => {
        emit('changeTable');
      };
      const printReceipt = () => {
        emit('printReceipt');
      };
      const clearTable = () => {
        emit('clearTable');
      };
      const changeValue = (val) => {
        emit('changeDiners', val);
      };

      return {
        props,
        ...toRefs(state),
        options,
        changeValue,
        reminder,
        changeTable,
        printReceipt,
        clearTable,
      };
    },
  });
</script>

<style lang="less" scoped>
  .order_operate {
    .order_details {
      display: flex;
      justify-content: space-between;

      .table_num {
        font-size: 30px;
        font-weight: 500;
        color: #061527;
      }

      .order_time {
        width: 122px;
        height: 21px;
        font-size: 12px;
        font-weight: 600;
        color: rgba(6, 21, 39, 0.5);
      }
    }
    // button
    .operate_item_box {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .operate_item {
        margin: 6px 0;
        // width: 143px;
        width: 46%;
        height: 36px;
        line-height: 36px;
        text-align: center;
        color: #fff;
        background: linear-gradient(141deg, #ffa462 0%, #ff8a1e 100%);
        border-radius: 28px;
        opacity: 1;
      }

      .item1 {
        background: linear-gradient(133deg, #3eaeff 0%, #038ef3 100%);
      }

      .item2 {
        background: linear-gradient(141deg, #a586ff 0%, #715aff 100%);
        // background: linear-gradient(141deg, #a586ff 0%, #715aff 100%);
      }

      .item3 {
        background: linear-gradient(133deg, #24c796 0%, #07ae9a 100%);
        // background: linear-gradient(133deg, #24c796 0%, #07ae9a 100%);
      }

      .op_disable {
        opacity: 0.5;
      }
    }
  }
</style>
