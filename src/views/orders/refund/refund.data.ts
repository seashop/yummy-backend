import { BasicColumn, FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '序号',
    dataIndex: 'id',
    width: 36,
  },
  {
    title: '订单号',
    dataIndex: 'order_num',
    width: 80,
  },
  {
    title: '退款单号',
    dataIndex: 'tui_num',
    width: 80,
  },
  {
    title: '用户昵称',
    dataIndex: 'nickname',
    width: 180,
  },
  {
    title: '退款金额',
    dataIndex: 'money',
    width: 40,
  },
  {
    title: '商家回复',
    dataIndex: 'message',
    width: 120,
  },
  {
    title: '退款原因',
    dataIndex: 'because',
    width: 120,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 40,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'status',
    label: '状态',
    colProps: { span: 8 },
    component: 'Select',
    componentProps: {
      options: [
        {
          label: '退款中',
          value: '0',
          key: '0',
        },
        {
          label: '已退款',
          value: '1',
          key: '1',
        },
        {
          label: '已驳回',
          value: '2',
          key: '2',
        },
      ],
    },
  },
];

export const replyFormSchema: FormSchema[] = [
  {
    field: 'message',
    label: '回复',
    required: true,
    component: 'Input',
  },
];
