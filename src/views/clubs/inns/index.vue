<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">
          {{ t('routes.clubs.createInn') }}
        </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:setting-twotone',
                onClick: handleEditConfig.bind(null, record),
              },
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
    <DetailModal @register="registerModal" @success="handleUpdateSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { listInns, updateInn } from '/@/api/clubs/inns';
  import { useModal } from '/@/components/Modal';
  import { useI18n } from '/@/hooks/web/useI18n';
  import DetailModal from './DetailModal.vue';
  import { columns, searchFormSchema } from './inn.data';
  import { ListInnsRequest } from '/@/gen/yummy/v1/club_service';
  import { useGo } from '/@/hooks/web/usePage';

  export default defineComponent({
    name: 'InnManagement',
    components: { BasicTable, DetailModal, TableAction },
    setup() {
      const { t } = useI18n();
      const go = useGo();

      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload, getForm }] = useTable({
        title: t('routes.clubs.listInns'),
        api: listInns,
        handleSearchInfoFn: buildListRequest,
        fetchSetting: {
          listField: 'inns',
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
          width: 160,
          title: '操作',
          dataIndex: 'action',
          fixed: undefined,
        },
      });

      function buildListRequest(): ListInnsRequest {
        const params = getForm().getFieldsValue();
        const filter = {
          title: {
            contains: params.title as string,
          },
        };
        return { filter };
      }

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

      function handleEditConfig(record: Recordable) {
        go(`/clubs/inns/${record.id}/config`);
      }

      function handleDelete(record: Recordable) {
        console.log(record);
      }

      async function handleUpdateSuccess({ values }) {
        const result = await updateInn(values.id, values);
        console.log(result);
        reload({
          searchInfo: buildListRequest(),
        });
      }

      return {
        t,
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleEditConfig,
        handleDelete,
        handleUpdateSuccess,
      };
    },
  });
</script>
