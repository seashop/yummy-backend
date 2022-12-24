<template>
  <div>
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:note-edit-line',
                onClick: handleEdit.bind(null, record),
              },
              // {
              //   icon: 'clarity:note-edit-line',
              //   onClick: handleEdit.bind(null, record),
              // },
              // {
              //   icon: 'ant-design:delete-outlined',
              //   color: 'error',
              //   popConfirm: {
              //     title: '是否确认删除',
              //     placement: 'left',
              //     confirm: handleDelete.bind(null, record),
              //   },
              // },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <DetailModal @register="registerModal" @success="handleUpdateSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { listOrders } from '/@/api/orders/order';
  import { useModal } from '/@/components/Modal';

  import DetailModal from './DetailModal.vue';
  import { columns, searchFormSchema } from './order.data';

  export default defineComponent({
    name: 'OrderManagement',
    components: { BasicTable, DetailModal, TableAction },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: '订单列表',
        api: listOrders,
        fetchSetting: {
          listField: 'orders',
        },
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        actionColumn: {
          width: 80,
          title: '操作',
          dataIndex: 'action',
          fixed: undefined,
        },
      });

      function handleEdit(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable) {
        console.log(record);
      }

      async function handleUpdateSuccess({ values }) {
        const result = await updateOrder(values.id, values);
        console.log(result);
        reload();
      }

      return {
        registerTable,
        registerModal,
        handleEdit,
        handleDelete,
        handleUpdateSuccess,
      };
    },
  });
</script>
