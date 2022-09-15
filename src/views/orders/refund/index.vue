<template>
  <div>
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'pic_full_url'">
          <Image :src="record.pic_full_url" :width="60" />
        </template>
        <template v-else-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: '驳回申请',
                onClick: handleReject.bind(null, record),
              },
              {
                label: '确认退款',
                popConfirm: {
                  title: '是否确认退款',
                  placement: 'left',
                  confirm: handleAccept.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <RejectModal @register="registerRejectModal" @success="handleRejectSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Image } from 'ant-design-vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { acceptRefunds, listRefunds, rejectRefunds } from '/@/api/orders/refund';
  import { useModal } from '/@/components/Modal';
  
  import RejectModal from './RejectModal.vue';
  import { columns, searchFormSchema } from './refund.data';

  export default defineComponent({
    name: 'EvaluateManagement',
    components: { BasicTable, RejectModal, TableAction, Image },
    setup() {
      const [registerRejectModal, { openModal: openRejectModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: '退款列表',
        api: listRefunds,
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
          width: 120,
          title: '操作',
          dataIndex: 'action',
          fixed: undefined,
        },
      });

      function handleReject(record: Recordable) {
        openRejectModal(true, { record });
      }

      async function handleRejectSuccess({ values }) {
        const result = await rejectRefunds(values);
        console.log(result);
        reload();
      }

      async function handleAccept(record: Recordable) {
        const result = await acceptRefunds(record.id);
        console.log(result);
        reload();
      }

      return {
        registerTable,
        registerRejectModal,
        handleReject,
        handleRejectSuccess,
        handleAccept,
      };
    },
  });
</script>
