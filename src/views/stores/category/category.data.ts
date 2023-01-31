import { listInns } from '../../../api/clubs/inns';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { dateUtil, formatToDateTime } from '/@/utils/dateUtil';

export const columns: BasicColumn[] = [
  {
    title: '序号',
    dataIndex: 'id',
    width: 200,
  },
  {
    title: '名称',
    dataIndex: 'title',
    width: 80,
  },
  {
    title: '所属商户',
    dataIndex: 'innTitle',
    width: 160,
  },
  {
    title: '排序',
    dataIndex: 'sortId',
    width: 60,
  },
  {
    title: '图片',
    dataIndex: 'imgId',
    width: 80,
  },
  {
    title: '更新时间',
    dataIndex: 'updatedAt',
    width: 180,
    format: (_, record) => {
      return record?.updatedAt ? formatToDateTime(dateUtil(record?.updatedAt)) : '-';
    },
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'innId',
    label: '商户',
    required: true,
    component: 'ApiSelect',
    componentProps: ({ schema, formModel }) => {
      console.log(formModel);
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
    field: 'innId',
    label: '商户',
    required: true,
    component: 'ApiSelect',
    componentProps: ({ schema, formModel }) => {
      console.log(formModel);
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
    field: 'title',
    label: '名称',
    required: true,
    component: 'Input',
  },
  {
    field: 'imgId',
    label: '图片',
    required: true,
    slot: 'picDrawer',
    component: 'Input',
  },
];
