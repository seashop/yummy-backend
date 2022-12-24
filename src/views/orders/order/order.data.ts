import { listLevels } from '/@/api/customers/level';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '序号',
    dataIndex: 'id',
    width: 200,
  },
  {
    title: '订单类型',
    dataIndex: 'nickname',
    width: 200,
  },
  {
    title: '商户',
    dataIndex: 'innId',
    width: 180,
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    width: 180,
  },
  {
    title: '顾客',
    dataIndex: 'accountId',
    width: 180,
  },
  {
    title: '订单金额',
    dataIndex: 'total',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'nickname',
    label: '昵称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'level_id',
    label: '等级',
    required: true,
    component: 'ApiSelect',
    componentProps: {
      api: listLevels,
      resultField: 'items',
      labelField: 'title',
      valueField: 'id',
    },
    defaultValue: 0,
  },
  {
    field: 'points',
    label: '积分',
    required: true,
    component: 'Input',
  },
  {
    field: 'money',
    label: '金额',
    required: true,
    component: 'Input',
  },
];
