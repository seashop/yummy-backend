<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增餐桌 </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'img'">
          <Image :src="record.img.full_url" :width="60" />
        </template>
        <template v-else-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:note-edit-line',
                onClick: handleEdit.bind(null, record),
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
    <DiningTableModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Image } from 'ant-design-vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import {
    createDiningTable,
    deleteDiningTable,
    listDiningTables,
    updateDiningTable,
  } from '/@/api/plugins/diningTable';
  import { useModal } from '/@/components/Modal';

  import DiningTableModal from './DiningTableModal.vue';
  import { columns, searchFormSchema } from './diningTable.data';

  export default defineComponent({
    name: 'DiningTableManagement',
    components: { BasicTable, DiningTableModal, TableAction, Image },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: '餐桌列表',
        api: listDiningTables,
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
        openModal(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      async function handleDelete(record: Recordable) {
        await deleteDiningTable(record.id).then(() => {
          reload();
        });
      }

      async function handleSuccess({ isUpdate, values }) {
        if (isUpdate) {
          const result = await updateDiningTable(values);
          console.log(result);
        } else {
          const result = await createDiningTable(values);
          console.log(result);
        }
        reload();
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
      };
    },
  });
</script>
