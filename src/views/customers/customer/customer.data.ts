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
    title: '昵称',
    dataIndex: 'nickname',
    width: 200,
  },
  {
    title: '积分',
    dataIndex: 'points',
    width: 180,
  },
  {
    title: '余额',
    dataIndex: 'money',
    width: 180,
  },
  {
    title: '等级',
    dataIndex: 'level.name_l',
    format: (_, record) => {
      return record?.level?.name_l;
    },
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
      labelField: 'name_l',
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
