<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增分类 </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'pic_full_url'">
          <Image :src="record.pic_full_url" :width="60" />
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
    <CategoryModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { Image } from 'ant-design-vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { createCategory, listCategory, updateCategory } from '/@/api/stores/category';

  import { useModal } from '/@/components/Modal';
  import CategoryModal from './CategoryModal.vue';

  import { columns, searchFormSchema } from './category.data';

  export default defineComponent({
    name: 'CategoryManagement',
    components: { BasicTable, CategoryModal, TableAction, Image },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: '分类列表',
        api: listCategory,
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

      function handleDelete(record: Recordable) {
        console.log(record);
      }

      function handleSuccess({ isUpdate, values }) {
        if (isUpdate) {
          const result = updateCategory(values);
          console.log(result);
        } else {
          const result = createCategory(values);
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
