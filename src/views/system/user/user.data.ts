import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '序号',
    dataIndex: 'id',
    width: 240,
  },
  {
    title: '用户名',
    dataIndex: 'loginName',
    width: 120,
  },
  {
    title: '角色',
    dataIndex: 'role',
    width: 200,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 200,
  },
  {
    title: '描述',
    dataIndex: 'description',
    width: 200,
  },
  {
    title: '分组',
    dataIndex: 'group_id',
    format: (_, record) => {
      return record?.group?.name;
    },
    width: 80,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'loginName',
    label: '用户名',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'loginName',
    label: '用户名',
    required: true,
    component: 'Input',
  },
  {
    field: 'password',
    label: '密码',
    required: true,
    component: 'InputPassword',
  },
  {
    field: 'description',
    label: '描述',
    required: true,
    component: 'Input',
  },
];
