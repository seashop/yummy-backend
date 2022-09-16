import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '序号',
    dataIndex: 'id',
    width: 200,
  },
  {
    title: '桌号',
    dataIndex: 'zh_num',
    width: 200,
  },
  {
    title: '备注',
    dataIndex: 'bz',
    width: 180,
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'zh_num',
    label: '桌号',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'zh_num',
    label: '桌号',
    required: true,
    component: 'Input',
  },
  {
    field: 'bz',
    label: '备注',
    required: true,
    component: 'Input',
  },
];
