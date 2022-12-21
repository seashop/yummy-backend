import { listInns } from '/@/api/customers/inn';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '序号',
    dataIndex: 'id',
    width: 200,
  },
  {
    title: '名称',
    dataIndex: 'title',
    width: 200,
  },
  {
    title: '图片',
    dataIndex: 'imgId',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'innId',
    label: '商户',
    required: true,
    component: 'ApiSelect',
    componentProps: {
      api: listInns,
      resultField: 'inns',
      labelField: 'title',
      valueField: 'id',
    },
    colProps: { span: 8 },
  },
  {
    field: 'title',
    label: '名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'innId',
    label: '商户',
    required: true,
    component: 'ApiSelect',
    componentProps: {
      api: listInns,
      resultField: 'inns',
      labelField: 'title',
      valueField: 'id',
    },
    defaultValue: null,
  },
  {
    field: 'title',
    label: '名称',
    required: true,
    component: 'Input',
  },
  {
    field: 'imgId',
    label: '图片',
    required: true,
    slot: 'picDrawer',
    component: 'Input',
  },
];
