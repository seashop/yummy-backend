import { useComponentRegister } from '/@/components/Form';
import { ComponentType } from '/@/components/Form/src/types';
import { BasicColumn, FormSchema } from '/@/components/Table';

import CouponTime from './components/CouponTime.vue';

useComponentRegister('CouponTime' as ComponentType, CouponTime);

export const columns: BasicColumn[] = [
  {
    title: '序号',
    dataIndex: 'id',
    fixed: 'left',
    width: 60,
  },
  {
    title: '名称',
    dataIndex: 'name',
    width: 200,
  },
  {
    title: '使用次数',
    dataIndex: 'status',
    format: (_, record) => {
      return record?.status === 1 ? '一次' : '不限';
    },
    width: 200,
  },
  {
    title: '类型',
    dataIndex: 'type',
    format: (_, record) => {
      return record?.type === 1 ? '店铺优惠券' : '其他';
    },
    width: 200,
  },
  {
    title: '满多少',
    dataIndex: 'full',
    width: 200,
  },
  {
    title: '减多少',
    dataIndex: 'reduce',
    width: 200,
  },
  {
    title: '有效期天数',
    dataIndex: 'day',
    width: 200,
  },
  {
    title: '起始时间',
    dataIndex: 'start_time',
    width: 200,
  },
  {
    title: '结束时间',
    dataIndex: 'end_time',
    width: 200,
  },
  {
    title: '库存',
    dataIndex: 'stock',
    format: (_, record) => {
      switch (record?.stock_type) {
        case 0:
          return record.stock;
        case 1:
          return '无限张';
        default:
          break;
      }
    },
    width: 200,
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'name',
    label: '名称',
    required: true,
    component: 'Input',
  },
  {
    field: 'stock',
    label: '发放总量',
    required: true,
    component: 'InputNumber',
    componentProps: ({ formModel }) => {
      return {
        onChange: () => {
          if (!formModel.stock) {
            formModel.stock_type = 0;
          } else {
            formModel.stock_type = 1;
          }
        },
      };
    },
  },
  {
    field: 'stock_type',
    label: '库存类型',
    required: true,
    component: 'InputNumber',
    show: false,
  },
  {
    field: 'full',
    label: '使用门槛',
    required: true,
    component: 'Input',
  },
  {
    field: 'reduce',
    label: '优惠价格',
    required: true,
    component: 'Input',
  },
  {
    field: 'couponTime',
    label: '用券时间',
    required: true,
    component: 'CouponTime' as ComponentType,
    componentProps: ({ formModel }) => {
      return {
        onEffect: (e: any) => {
          switch (e.state) {
            case 1:
              formModel.start_time = e.value[0];
              formModel.end_time = e.value[1];
              formModel.day = undefined;
              break;
            case 2:
              formModel.start_time = undefined;
              formModel.end_time = undefined;
              formModel.day = e.value;
              break;
            default:
              break;
          }
        },
      };
    },
    defaultValue: 1,
  },
  {
    field: 'day',
    label: '有效期天数',
    required: false,
    show: false,
    component: 'Input',
  },
  {
    field: 'start_time',
    label: '起始时间',
    required: false,
    show: false,
    component: 'Input',
  },
  {
    field: 'end_time',
    label: '结束时间',
    required: false,
    show: false,
    component: 'Input',
  },
  {
    field: 'status',
    label: '使用次数',
    required: true,
    component: 'RadioGroup',
    componentProps: {
      options: [
        {
          label: '有限',
          value: 1,
        },
        {
          label: '无限',
          value: 2,
        },
      ],
    },
    defaultValue: 1,
  },
];
