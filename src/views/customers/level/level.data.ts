import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '序号',
    dataIndex: 'id',
    width: 200,
  },
  {
    title: '等级',
    dataIndex: 'name_l',
    width: 200,
  },
  {
    title: '折扣',
    dataIndex: 'discount',
    width: 200,
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name_l',
    label: '等级',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'name_l',
    label: '等级',
    required: true,
    component: 'Input',
  },
  {
    field: 'discount',
    label: '折扣',
    required: true,
    component: 'Input',
  },
];
