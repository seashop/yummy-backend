<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增文章 </a-button>
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
    <ArticleModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Image } from 'ant-design-vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import {
    createArticle,
    deleteArticle,
    listArticles,
    updateArticle,
  } from '/@/api/plugins/article';
  import { useModal } from '/@/components/Modal';

  import ArticleModal from './ArticleModal.vue';
  import { columns, searchFormSchema } from './article.data';

  export default defineComponent({
    name: 'ArticleManagement',
    components: { BasicTable, ArticleModal, TableAction, Image },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: '文章列表',
        api: listArticles,
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
        await deleteArticle(record.id).then(() => {
          reload();
        });
      }

      async function handleSuccess({ isUpdate, values }) {
        if (isUpdate) {
          const result = await updateArticle(values);
          console.log(result);
        } else {
          const result = await createArticle(values);
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
