import { FormSchema } from '/@/components/Table';

export const searchFormSchema: FormSchema[] = [
  {
    field: 'payment_state',
    label: '支付状态',
    component: 'Select',
    componentProps: {
      options: [
        {
          label: '全部',
          value: '-1',
          key: '-1',
        },
        {
          label: '已支付',
          value: '1',
          key: '1',
        },
        {
          label: '待支付',
          value: '0',
          key: '0',
        },
      ],
    },
    colProps: { span: 8 },
  },
  {
    field: 'date_range',
    label: '日期范围',
    component: 'RangePicker',
    colProps: { span: 8 },
  },
  {
    field: 'title',
    label: '关键词',
    component: 'Input',
    colProps: { span: 8 },
  },
];
