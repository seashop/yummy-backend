import { listAdPositions } from '/@/api/plugins/advertising';
import { listArticles } from '/@/api/plugins/article';
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
    editable: true,
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
        case 'no_jump':
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
    dataIndex: 'img',
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
          value: 'no_jump',
          key: 'no_jump',
        },
        {
          label: '文章',
          value: 'article',
          key: 'article',
        },
      ],
    },
    defaultValue: 'no_jump',
  },
  {
    field: 'jump_id',
    label: '跳转选项',
    required: ({ values }) => values.type !== 'no_jump',
    ifShow: ({ values }) => values.type !== 'no_jump',
    component: 'ApiSelect',
    componentProps: {
      api: listArticles,
      resultField: 'items',
      labelField: 'title',
      valueField: 'id',
    },
  },
  {
    field: 'img_id',
    label: '广告图片',
    required: true,
    slot: 'picDrawer',
    component: 'Input',
  },
];
