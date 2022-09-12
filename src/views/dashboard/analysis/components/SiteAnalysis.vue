<template>
  <Card
    :tab-list="tabListTitle"
    v-bind="$attrs"
    :active-tab-key="activeKey"
    @tab-change="onTabChange"
  >
    <p v-if="activeKey === 'tab1'">
      <VisitAnalysis :options="lineOptions" />
    </p>
    <p v-if="activeKey === 'tab2'">
      <VisitAnalysisBar />
    </p>
  </Card>
</template>
<script lang="ts" setup>
  import { computed, ref } from 'vue';
  import { Card } from 'ant-design-vue';
  import VisitAnalysis from './VisitAnalysis.vue';
  import VisitAnalysisBar from './VisitAnalysisBar.vue';

  const props = defineProps({
    lines: {
      type: Array,
      default: () => [],
    },
    bar: {
      type: Array,
      default: () => [],
    },
  });

  const tabListTitle = [
    {
      key: 'tab1',
      tab: '流量趋势',
    },
    // {
    //   key: 'tab2',
    //   tab: '访问量',
    // },
  ];

  const activeKey = ref('tab1');

  const lineOptions = computed(() => {
    return {
      xData: props.lines.map((item) => item.day),
      yData: {
        orders: props.lines.map((item) => item.order_num),
        users: props.lines.map((item) => item.user_num),
      },
    };
  });

  function onTabChange(key) {
    activeKey.value = key;
  }
</script>
