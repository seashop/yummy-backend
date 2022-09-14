import { listCategory } from '/@/api/stores/category';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '序号',
    dataIndex: 'category_id',
    width: 200,
  },
  {
    title: '名称',
    dataIndex: 'category_name',
    width: 200,
  },
  {
    title: '图片',
    dataIndex: 'pic_full_url',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'category_name',
    label: '名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'pid',
    label: '父级',
    required: true,
    component: 'ApiSelect',
    componentProps: {
      api: listCategory,
      resultField: 'items',
      params: {
        withRoot: true,
      },
      labelField: 'category_name',
      valueField: 'category_id',
    },
    defaultValue: 0,
  },
  {
    field: 'category_name',
    label: '名称',
    required: true,
    component: 'Input',
  },
  {
    field: 'short_name',
    label: '简称',
    required: true,
    component: 'Input',
  },
  {
    field: 'category_pic',
    label: '图片',
    required: true,
    slot: 'picDrawer',
    component: 'Input',
  },
];
