import { listAdPositions } from '/@/api/plugins/advertising';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '序号',
    dataIndex: 'id',
    width: 200,
  },
  {
    title: '排序',
    dataIndex: 'sort',
    edit: true,
    editable: false,
    editComponent: 'InputNumber',
    editComponentProps: () => {
      return {
        min: 0,
      };
    },
    width: 200,
  },
  {
    title: '名称',
    dataIndex: 'key_word',
    width: 200,
  },
  {
    title: '广告位',
    dataIndex: 'banner_id',
    format: (_, record) => {
      return record?.banner.name;
    },
    width: 200,
  },
  {
    title: '跳转到',
    dataIndex: 'type',
    format: (_, record) => {
      switch (record.type) {
        case '':
          return '不跳转';
        case 'article':
          return '文章';
        default:
          break;
      }
    },
    width: 200,
  },
  {
    title: '缩略图',
    dataIndex: 'imgs',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'key_word',
    label: '名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'key_word',
    label: '广告名称',
    required: true,
    component: 'Input',
  },
  {
    field: 'banner_id',
    label: '选择广告位',
    required: true,
    component: 'ApiSelect',
    componentProps: {
      api: listAdPositions,
      resultField: 'items',
      params: {
        withRoot: true,
      },
      labelField: 'name',
      valueField: 'id',
    },
    defaultValue: 1,
  },
  {
    field: 'type',
    label: '跳转到',
    required: true,
    component: 'Select',
    componentProps: {
      options: [
        {
          label: '不跳转',
          value: 'silent',
          key: 'silent',
        },
        {
          label: '文章',
          value: 'article',
          key: 'article',
        },
      ],
    },
    defaultValue: 'silent',
  },
  {
    field: 'jump_id',
    label: '跳转选项',
    required: false,
    ifShow: ({ values }) => values.type !== 'silent',
    component: 'Select',
    componentProps: {
      options: [
        {
          label: '选项1',
          value: '1',
          key: '1',
        },
        {
          label: '选项2',
          value: '2',
          key: '2',
        },
      ],
    },
    defaultValue: 0,
  },
  {
    field: 'img_id',
    label: '广告图片',
    required: true,
    slot: 'picDrawer',
    component: 'Input',
  },
];
