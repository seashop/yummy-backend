<template>
  <div>
    <BasicTable
      @register="registerTable"
      @edit-end="handleEditEnd"
      @edit-cancel="handleEditCancel"
      :beforeEditSubmit="beforeEditSubmit"
    >
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增广告 </a-button>
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
    <AdvertisingModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Image } from 'ant-design-vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { createAdContent, listAdContents, updateAdContent } from '/@/api/plugins/advertising';
  import { useModal } from '/@/components/Modal';

  import AdvertisingModal from './AdvertisingModal.vue';
  import { columns, searchFormSchema } from './advertising.data';
  import { set } from 'lodash-es';

  export default defineComponent({
    name: 'AdvertisingManagement',
    components: { BasicTable, AdvertisingModal, TableAction, Image },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: '广告列表',
        api: listAdContents,
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

      function handleEditEnd({ record, index, key, value }: Recordable) {
        console.log(record, index, key, value);
        return false;
      }

      async function beforeEditSubmit({ record, index, key, value }) {
        console.log('单元格数据正在准备提交', { record, index, key, value });
        const values = { id: record.id };
        set(values, key, value);
        handleSuccess({ isUpdate: true, values });
      }

      function handleEditCancel({ record, index, key, value }: Recordable) {
        console.log('cancel', record, index, key, value);
        return false;
      }

      function handleDelete(record: Recordable) {
        console.log(record);
      }

      async function handleSuccess({ isUpdate, values }) {
        if (isUpdate) {
          const result = await updateAdContent(values);
          console.log(result);
        } else {
          const result = await createAdContent(values);
          console.log(result);
        }
        reload();
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleEditEnd,
        beforeEditSubmit,
        handleEditCancel,
        handleDelete,
        handleSuccess,
      };
    },
  });
</script>
