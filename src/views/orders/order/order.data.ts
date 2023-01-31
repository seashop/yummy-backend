import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { dateUtil, formatToDateTime } from '/@/utils/dateUtil';

export const columns: BasicColumn[] = [
  {
    title: '序号',
    dataIndex: 'id',
    width: 270,
  },
  {
    title: '订单类型',
    dataIndex: 'needPack',
    width: 80,
    format: (_, record) => {
      return record?.needPack ? '打包' : '堂食';
    },
  },
  {
    title: '商户',
    dataIndex: 'innTitle',
    width: 180,
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
    width: 180,
    format: (_, record) => {
      return record?.createdAt ? formatToDateTime(dateUtil(record?.createdAt)) : '-';
    },
  },
  {
    title: '顾客',
    dataIndex: 'accountTitle',
    width: 180,
  },
  {
    title: '订单金额',
    dataIndex: 'total',
    width: 80,
  },
  {
    title: '状态',
    dataIndex: 'status',
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
    field: 'total',
    label: '订单金额',
    required: true,
    component: 'InputNumber',
  },
];
