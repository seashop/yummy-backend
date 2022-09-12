<template>
  <div class="p-4">
    <GrowCard :loading="loading" :growCardList="cards" class="enter-y" />
    <SiteAnalysis class="!my-4 enter-y" :loading="loading" :lines="charLines" />
    <div v-if="false" class="md:flex enter-y">
      <VisitRadar class="w-full md:w-1/3" :loading="loading" />
      <VisitSource class="md:w-1/3 !md:mx-4 !md:my-0 !my-4 w-full" :loading="loading" />
      <SalesProductPie class="w-full md:w-1/3" :loading="loading" />
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { AnalysisTableItemModel, GrowCardModel } from '/@/api/dashboard/model/growCardModel';
  import { getAnalysisQuotas, getAnalysisTable } from '/@/api/dashboard/statistic';
  import GrowCard from './components/GrowCard.vue';
  import SiteAnalysis from './components/SiteAnalysis.vue';
  import VisitSource from './components/VisitSource.vue';
  import VisitRadar from './components/VisitRadar.vue';
  import SalesProductPie from './components/SalesProductPie.vue';

  const loading = ref(true);
  const cards = ref<GrowCardModel[]>();
  const charLines = ref<AnalysisTableItemModel[]>();

  getAnalysisQuotas().then((resp) => {
    cards.value = resp.cards;
  });

  getAnalysisTable().then((resp) => {
    charLines.value = resp;
  });

  setTimeout(() => {
    loading.value = false;
  }, 1500);
</script>
