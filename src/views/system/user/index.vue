<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增管理员 </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'img'">
          <Image :src="record.img.full_url" :width="60" />
        </template>
        <template v-else-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:credit-card-twotone',
                onClick: handlePassword.bind(null, record),
              },
              {
                icon: 'clarity:note-edit-line',
                ifShow: () => false,
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
    <PasswordModal @register="registerPasswordModal" @success="handlePasswordSuccess" />
    <UserModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import {
    createUser,
    updateUser,
    deleteUser,
    listUsers,
    updateUserPassword,
  } from '/@/api/system/user';
  import { useModal } from '/@/components/Modal';

  import PasswordModal from './PasswordModal.vue';
  import UserModal from './UserModal.vue';
  import { columns, searchFormSchema } from './user.data';

  export default defineComponent({
    name: 'UserManagement',
    components: { BasicTable, TableAction, Image, PasswordModal, UserModal },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: '管理员列表',
        api: listUsers,
        fetchSetting: {
          listField: 'users',
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
          width: 120,
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
        await deleteUser(record.id).then(() => {
          reload();
        });
      }

      async function handleSuccess({ isUpdate, values }) {
        if (isUpdate) {
          const result = await updateUser(values.id, values);
          console.log(result);
        } else {
          const result = await createUser(values);
          console.log(result);
        }
        reload();
      }

      const [registerPasswordModal, { openModal: openPasswordModal }] = useModal();

      function handlePassword(record: Recordable) {
        openPasswordModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handlePasswordSuccess({ values }) {
        updateUserPassword(values.id, values).then(() => {
          reload();
        });
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handlePassword,
        handleDelete,
        handleSuccess,
        registerPasswordModal,
        handlePasswordSuccess,
      };
    },
  });
</script>
