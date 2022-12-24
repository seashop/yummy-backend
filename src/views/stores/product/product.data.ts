import { listInns } from '../../../api/clubs/inns';
import { listCategory } from '/@/api/stores/category';
import { useComponentRegister } from '/@/components/Form';
import { ComponentType } from '/@/components/Form/src/types';
import { BasicColumn, FormSchema } from '/@/components/Table';
import { Tinymce } from '/@/components/Tinymce/index';

useComponentRegister('Tinymce' as ComponentType, Tinymce);

export const columns: BasicColumn[] = [
  {
    title: '序号',
    dataIndex: 'id',
    width: 200,
  },
  {
    title: '名称',
    dataIndex: 'title',
    width: 200,
  },
  {
    title: '商户',
    dataIndex: 'innId',
    width: 200,
  },
  {
    title: '分类',
    dataIndex: 'catId',
    width: 180,
  },
  {
    title: '使用SKU',
    dataIndex: 'hasSku',
    width: 180,
  },
  {
    title: '发布时间',
    dataIndex: 'createdAt',
    width: 180,
  },
  {
    title: '价格',
    dataIndex: 'price',
    width: 180,
  },
  {
    title: '排序',
    dataIndex: 'sortId',
    width: 180,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 180,
  },
  // {
  //   title: '总库存',
  //   dataIndex: 'stock',
  //   width: 180,
  // },
  // {
  //   title: '销量',
  //   dataIndex: 'sales',
  //   width: 180,
  // },
  // {
  //   title: '是否热销',
  //   dataIndex: 'is_hot',
  //   width: 180,
  //   edit: true,
  //   editable: true,
  // },
  // {
  //   title: '是否新品',
  //   dataIndex: 'is_new',
  //   width: 180,
  //   edit: true,
  //   editable: true,
  // },
  // {
  //   title: '是否推荐',
  //   dataIndex: 'is_recommend',
  //   width: 180,
  //   edit: true,
  //   editable: true,
  // },
  // {
  //   title: '是否下架',
  //   dataIndex: 'state',
  //   width: 180,
  // },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'innId',
    label: '商户',
    required: true,
    component: 'ApiSelect',
    componentProps: ({ formModel }) => {
      console.log(formModel);
      return {
        api: listInns,
        resultField: 'inns',
        labelField: 'title',
        valueField: 'id',
        onOptionsChange: (options) => {
          if (options.length > 0) {
            formModel.innId = options[0].value;
          }
        },
      };
    },
    colProps: { span: 8 },
  },
  {
    field: 'title',
    label: '名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'title',
    label: '名称',
    required: true,
    component: 'Input',
  },
  {
    field: 'imgIds',
    label: '餐品图片',
    required: true,
    slot: 'picDrawer',
    component: 'Input',
  },
  {
    field: 'innId',
    label: '所属商户',
    required: true,
    component: 'ApiSelect',
    componentProps: ({ formModel, schema }) => {
      return {
        api: listInns,
        resultField: 'inns',
        labelField: 'title',
        valueField: 'id',
        onOptionsChange: (options) => {
          if (options.length > 0) {
            schema.defaultValue = options[0].value;
            formModel.innId = options[0].value;
          }
        },
      };
    },
  },
  {
    field: 'catId',
    label: '所属分类',
    required: true,
    component: 'ApiSelect',
    componentProps: ({ formModel, schema }) => {
      if (!formModel.innId) {
        return {};
      }
      return {
        api: listCategory,
        params: {
          innId: formModel.innId,
        },
        resultField: 'productCats',
        labelField: 'title',
        valueField: 'id',
        onOptionsChange: (options) => {
          if (options.length > 0) {
            schema.defaultValue = options[0].value;
            formModel.catId = options[0].value;
          }
        },
      };
    },
  },
  {
    field: 'sortId',
    label: '排序',
    required: true,
    component: 'InputNumber',
    colProps: {
      span: 8,
    },
    defaultValue: 0,
  },
  {
    field: 'hasSku',
    label: '是否使用SKU',
    required: true,
    component: 'Switch',
    defaultValue: false,
  },
  {
    field: 'price',
    label: '销售价格',
    required: true,
    component: 'InputNumber',
    colProps: {
      span: 8,
    },
  },
  {
    field: 'stock',
    label: '总库存',
    required: true,
    component: 'InputNumber',
    colProps: {
      span: 12,
    },
  },
  {
    field: 'content',
    label: '商品详情',
    required: true,
    component: 'Tinymce' as ComponentType,
    componentProps: {
      showImageUpload: false,
    },
    defaultValue: '',
  },
];
