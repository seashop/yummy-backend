import { useComponentRegister } from '/@/components/Form';
import { ComponentType } from '/@/components/Form/src/types';
import { BasicColumn, FormSchema } from '/@/components/Table';

import DiscountGoodsSelect from './components/DiscountGoodsSelect.vue';

useComponentRegister('DiscountGoodsSelect' as ComponentType, DiscountGoodsSelect);

export const columns: BasicColumn[] = [
  {
    title: '序号',
    dataIndex: 'id',
    fixed: 'left',
    width: 60,
  },
  {
    title: '名称',
    dataIndex: 'name',
    width: 200,
  },
  {
    title: '满多少',
    dataIndex: 'full',
    width: 200,
  },
  {
    title: '减多少',
    dataIndex: 'reduce',
    width: 200,
  },
  {
    title: '起始时间',
    dataIndex: 'start_time',
    width: 200,
  },
  {
    title: '结束时间',
    dataIndex: 'end_time',
    width: 200,
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    width: 180,
  },
];

export const selectGoodsStep1: BasicColumn[] = [
  {
    title: '商品信息',
    dataIndex: 'title',
    width: 200,
  },
  {
    title: '库存',
    dataIndex: 'stock',
    width: 200,
  },
];

export const selectGoodsStep1SearchFormSchema: FormSchema[] = [
  {
    field: 'title',
    label: '名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const selectGoodsStep2: BasicColumn[] = [
  {
    title: '商品信息',
    dataIndex: 'title',
    width: 200,
  },
  {
    title: '库存',
    dataIndex: 'stock',
    width: 200,
  },
  {
    title: '满减',
    dataIndex: 'discount',
    width: 200,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'divider-basic',
    label: '活动信息',
    component: 'Divider',
  },
  {
    field: 'name',
    label: '活动名称',
    required: true,
    component: 'Input',
  },
  {
    field: 'full',
    label: '满多少',
    required: true,
    component: 'InputNumber',
  },
  {
    field: 'reduce',
    label: '减多少',
    required: true,
    component: 'InputNumber',
  },
  {
    field: 'time_range',
    label: '生效时间',
    required: true,
    component: 'RangePicker',
    componentProps: ({ formModel }) => {
      return {
        onChange: (e: any) => {
          formModel.start_time = e[0];
          formModel.end_time = e[1];
        },
      };
    },
  },
  {
    field: 'divider-select-goods',
    label: '选择活动商品',
    component: 'Divider',
  },
  {
    field: 'reduce',
    label: '商品选择',
    required: true,
    component: 'DiscountGoodsSelect' as ComponentType,
  },
];
