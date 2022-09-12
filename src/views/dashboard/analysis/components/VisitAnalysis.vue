<template>
  <div ref="chartRef" :style="{ height, width }"></div>
</template>
<script lang="ts">
  import { basicProps } from './props';
  import { concat, max } from 'lodash-es';
</script>
<script lang="ts" setup>
  import { onMounted, ref, Ref } from 'vue';
  import { useECharts } from '/@/hooks/web/useECharts';

  const props = defineProps({
    ...basicProps,
    options: {
      type: Object,
      default: () => {},
    },
  });
  const chartRef = ref<HTMLDivElement | null>(null);
  const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);

  onMounted(() => {
    setOptions({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          lineStyle: {
            width: 1,
            color: '#019680',
          },
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: props.options.xData ?? [],
        splitLine: {
          show: true,
          lineStyle: {
            width: 1,
            type: 'solid',
            color: 'rgba(226,226,226,0.5)',
          },
        },
        axisTick: {
          show: false,
        },
      },
      yAxis: [
        {
          type: 'value',
          max: max(concat(props.options.yData.orders, props.options.yData.users)),
          splitNumber: 4,
          axisTick: {
            show: false,
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ['rgba(255,255,255,0.2)', 'rgba(226,226,226,0.2)'],
            },
          },
        },
      ],
      grid: { left: '1%', right: '1%', top: '2  %', bottom: 0, containLabel: true },
      series: [
        {
          name: 'Orders',
          smooth: true,
          data: props.options.yData.orders ?? [],
          type: 'line',
          areaStyle: {},
          itemStyle: {
            color: '#5ab1ef',
          },
        },
        {
          name: 'Users',
          smooth: true,
          data: props.options.yData.users ?? [],
          type: 'line',
          areaStyle: {},
          itemStyle: {
            color: '#019680',
          },
        },
      ],
    });
  });
</script>
