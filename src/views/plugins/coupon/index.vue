<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <Button type="primary" @click="handleCreate"> 新增优惠券 </Button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:note-edit-line',
                ifShow: false,
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
    <CouponModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Button } from 'ant-design-vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { createCoupon, listCoupons, updateCoupon } from '/@/api/plugins/coupon';
  import { useModal } from '/@/components/Modal';
  
  import CouponModal from './CouponModal.vue';
  import { columns, searchFormSchema } from './coupon.data';

  export default defineComponent({
    name: 'CouponManagement',
    components: { BasicTable, CouponModal, TableAction, Button },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: '优惠券列表',
        api: listCoupons,
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

      async function handleSuccess({ isUpdate, values }) {
        if (isUpdate) {
          const result = await updateCoupon(values);
          console.log(result);
        } else {
          const result = await createCoupon(values);
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
