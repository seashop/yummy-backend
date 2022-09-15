<template>
  <Tabs v-model:activeKey="activeKey">
    <TabPane key="1" tab="第一步：选择商品">
      <BasicTable @register="registerTableStep1" style="padding: 0px">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'action'">
            <TableAction
              :actions="[
                {
                  label: selected.indexOf(record.goods_id) === -1 ? '参加满减' : '取消参加',
                  onClick: toggleSelect.bind(null, record),
                },
              ]"
            />
          </template>
        </template>
      </BasicTable>
    </TabPane>
    <TabPane key="2" tab="第二步：设置满减">
      <BasicTable @register="registerTableStep2">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'action'">
            <TableAction
              :actions="[
                {
                  label: '取消',
                  onClick: toggleSelect.bind(null, record),
                },
              ]"
            />
          </template>
        </template>
      </BasicTable>
    </TabPane>
  </Tabs>
</template>
<script lang="ts">
  import { defineComponent, PropType, ref, unref, watch } from 'vue';
  import { Tabs } from 'ant-design-vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { useRuleFormItem } from '/@/hooks/component/useFormItem';
  import { useAttrs } from '/@/hooks/core/useAttrs';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { noGoodsDiscount } from '/@/api/plugins/discount';
  import { selectGoodsStep1, selectGoodsStep1SearchFormSchema } from '../discount.data';

  export default defineComponent({
    name: 'DiscountGoodsSelect',
    components: {
      TabPane: Tabs.TabPane,
      BasicTable,
      TableAction,
    },
    props: {
      value: {
        type: [String, Number, Boolean] as PropType<string | number | boolean>,
      },
    },
    emits: ['options-change', 'change'],
    setup(props) {
      const activeKey = ref('1');
      const loading = ref(false);
      const selected = ref<Array<number>>([]);

      const attrs = useAttrs();
      const { t } = useI18n();
      // Embedded in the form, just use the hook binding to perform form verification
      const [state] = useRuleFormItem(props);

      const [registerTableStep1] = useTable({
        title: '满减列表',
        api: noGoodsDiscount,
        columns: selectGoodsStep1,
        formConfig: {
          labelWidth: 120,
          schemas: selectGoodsStep1SearchFormSchema,
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        actionColumn: {
          width: 80,
          title: '操作',
          dataIndex: 'action',
        },
      });

      const [registerTableStep2, { reload }] = useTable({
        title: '满减列表',
        api: noGoodsDiscount,
        beforeFetch: (params) => {
          params['goods_ids'] = unref(selected);
          return params;
        },
        columns: selectGoodsStep1,
        formConfig: {
          labelWidth: 120,
          schemas: selectGoodsStep1SearchFormSchema,
        },
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        actionColumn: {
          width: 80,
          title: '操作',
          dataIndex: 'action',
        },
      });

      watch(
        () => activeKey.value,
        () => {
          if (activeKey.value === '2') {
            reload();
          }
        },
      );

      function toggleSelect(record) {
        console.log(record);
        const pos = selected.value.indexOf(record.goods_id);
        if (pos === -1) {
          selected.value.push(record.goods_id);
        } else {
          selected.value.splice(pos, 1);
        }
        if (activeKey.value === '2') {
          reload();
        }
      }

      return {
        registerTableStep1,
        registerTableStep2,
        activeKey,
        state,
        attrs,
        loading,
        t,
        props,
        toggleSelect,
        selected,
      };
    },
  });
</script>
