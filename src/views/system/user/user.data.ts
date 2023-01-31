import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { User_Role, User_Status } from '/@/gen/yummy/v1/user';
import { selectEnumProps } from '/@/utils/pb';

export const columns: BasicColumn[] = [
  {
    title: '序号',
    dataIndex: 'id',
    width: 260,
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
  // {
  //   title: '分组',
  //   dataIndex: 'group_id',
  //   format: (_, record) => {
  //     return record?.group?.name;
  //   },
  //   width: 80,
  // },
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
    field: 'role',
    label: '角色',
    required: true,
    component: 'Select',
    componentProps: selectEnumProps(Object.entries(User_Role), function (item, value) {
      if (value < 1000) {
        item.disabled = true;
      }
      return item;
    }),
  },
  {
    field: 'status',
    label: '状态',
    required: true,
    component: 'Select',
    componentProps: selectEnumProps(Object.entries(User_Status)),
  },
  {
    field: 'description',
    label: '描述',
    required: true,
    component: 'Input',
  },
];
