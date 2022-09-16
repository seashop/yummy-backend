<template>
  <Tabs v-model:activeKey="activeKey">
    <TabPane key="1" tab="第一步：选择商品">
      <FormItemRest>
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
      </FormItemRest>
    </TabPane>
    <TabPane key="2" tab="第二步：设置满减" :disabled="selected.length == 0">
      <FormItemRest>
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
      </FormItemRest>
    </TabPane>
  </Tabs>
</template>
<script lang="ts">
  import { defineComponent, PropType, ref, unref, watch } from 'vue';
  import { Tabs } from 'ant-design-vue';
  import { FormItemRest } from 'ant-design-vue/es/form';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { useRuleFormItem } from '/@/hooks/component/useFormItem';
  import { useAttrs } from '/@/hooks/core/useAttrs';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { noGoodsDiscount } from '/@/api/plugins/discount';
  import { selectGoodsStep1, selectGoodsStep1SearchFormSchema } from '../discount.data';

  export default defineComponent({
    name: 'DiscountGoodsSelect',
    components: {
      FormItemRest,
      Tabs,
      TabPane: Tabs.TabPane,
      BasicTable,
      TableAction,
    },
    props: {
      value: {
        type: Array as PropType<number[]>,
        default: () => [],
      },
    },
    emits: ['input'],
    setup(props, { emit }) {
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
          // width: 80,
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
          // width: 80,
          title: '操作',
          dataIndex: 'action',
        },
      });

      watch(
        () => activeKey.value,
        async () => {
          if (activeKey.value === '2') {
            emit('input', unref(selected));
            await reload();
          } else {
            emit('input', []);
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
