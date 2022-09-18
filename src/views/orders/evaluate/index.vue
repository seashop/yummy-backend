<template>
  <div>
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: 'Reply',
                onClick: handleReply.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <ReplyModal @register="registerReplyModal" @success="handleReplySuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { addReply, deleteReply, listEvaluates } from '/@/api/orders/evaluate';
  import { useModal } from '/@/components/Modal';

  import ReplyModal from './ReplyModal.vue';
  import { columns, searchFormSchema } from './evaluate.data';

  export default defineComponent({
    name: 'EvaluateManagement',
    components: { BasicTable, ReplyModal, TableAction },
    setup() {
      const [registerReplyModal, { openModal: openReplyModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: '评价列表',
        api: listEvaluates,
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
          // slots: { customRender: 'action' },
          fixed: undefined,
        },
      });

      function handleCreate() {
        openReplyModal(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        openReplyModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleReply(record: Recordable) {
        openReplyModal(true, { record });
      }

      async function handleDelete(record: Recordable) {
        await deleteReply(record.id);
        console.log(record);
        reload();
      }

      async function handleReplySuccess({ values }) {
        const result = await addReply(values);
        console.log(result);
        reload();
      }

      return {
        registerTable,
        registerReplyModal,
        handleCreate,
        handleEdit,
        handleReply,
        handleDelete,
        handleReplySuccess,
      };
    },
  });
</script>
