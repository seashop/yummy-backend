<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增商品 </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="['is_hot', 'is_recommend', 'is_new', 'state'].indexOf(column.key) !== -1">
          <Switch v-model:checked="record[column.key]" @change="toggleSwitch(record, column.key)" />
        </template>
        <template v-else-if="column.key === 'title'">
          <div style="display: flex">
            <div class="product-img" v-if="record.img_id">
              <Image :src="record.imgs.full_url" :width="50" />
            </div>
            <div class="product-mes">
              <p>{{ record.title }}</p>
              <p>{{ record.description }}</p>
            </div>
          </div>
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
    <GoodsModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { Image, Switch } from 'ant-design-vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { listGoods, switchGoods } from '/@/api/stores/goods';

  import { useModal } from '/@/components/Modal';
  import GoodsModal from './GoodsModal.vue';

  import { columns, searchFormSchema } from './goods.data';
  import { GoodsItem } from '/@/api/stores/model/goodsModel';

  export default defineComponent({
    name: 'GoodsManagement',
    components: { BasicTable, GoodsModal, TableAction, Image, Switch },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: '产品列表',
        api: listGoods,
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

      function toggleSwitch(record: GoodsItem, key: string) {
        switchGoods(record.goods_id, key);
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

      function handleDelete(record: Recordable) {
        console.log(record);
      }

      function handleSuccess() {
        reload();
      }

      return {
        registerTable,
        registerModal,
        toggleSwitch,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
      };
    },
  });
</script>

<style lang="less">
  .pro_list {
    .pro-list {
      line-height: 30px;
      text-align: left;
    }

    .list-a {
      line-height: 30px;
      background-color: #fff;

      text-align: left;
    }

    .tab-btn {
      margin: 0 0 20px;
    }

    .list {
      line-height: 30px;
      text-align: left;
    }

    .list-head {
      padding-bottom: 10px;
      display: flex;
    }

    .liat-head-02 {
      font-size: 14px;
      padding-left: 10px;
    }

    .product-img {
      display: inline-block;
      width: 60px;
    }

    .product-img img {
      height: 60px;
      width: 60px;
      margin: 10px;
      margin-bottom: 20px;
    }

    .product-mes {
      display: inline-block;
      // width: 220px;
      margin-left: 30px;
    }

    .product-mes p {
      line-height: 30px;
      margin-top: 2px;
      overflow: hidden;
      height: 30px;
    }

    .product-mes-name {
      line-height: 30px;
      overflow: hidden;
      height: 30px;
    }

    .order-back {
      line-height: 30px;
      padding-bottom: 10px;
      text-align: left;
      padding-left: 50px;
    }
  }
</style>
