import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { Inn_Runway, Inn_Status } from '/@/gen/yummy/v1/club';
import { selectEnumProps } from '/@/utils/pb';

export const columns: BasicColumn[] = [
  {
    title: '序号',
    dataIndex: 'id',
    width: 200,
  },
  {
    title: '商户名称',
    dataIndex: 'title',
    width: 200,
  },
  {
    title: '商户类型',
    dataIndex: 'runway',
    width: 180,
  },
  {
    title: '商户手机号',
    dataIndex: 'phone',
    width: 180,
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    width: 180,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 180,
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'title',
    label: '商户名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'title',
    label: '商户名称',
    required: true,
    component: 'Input',
  },
  {
    field: 'runway',
    label: '商户类型',
    required: true,
    component: 'Select',
    componentProps: selectEnumProps(Object.entries(Inn_Runway)),
  },
  {
    field: 'phone',
    label: '商户手机号',
    required: true,
    component: 'Input',
  },
  {
    field: 'email',
    label: '邮箱',
    required: true,
    component: 'Input',
  },
  {
    field: 'status',
    label: '状态',
    required: true,
    component: 'Select',
    componentProps: selectEnumProps(Object.entries(Inn_Status)),
  },
];
