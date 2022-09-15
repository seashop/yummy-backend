import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '序号',
    dataIndex: 'id',
    width: 200,
  },
  {
    title: '商品名称',
    dataIndex: 'goods.title',
    format: (_, record) => {
      return record?.goods?.title;
    },
    width: 200,
  },
  {
    title: '用户名',
    dataIndex: 'user.nickname',
    format: (_, record) => {
      return record?.user?.nickname;
    },
    width: 180,
  },
  {
    title: '评语',
    dataIndex: 'content',
    width: 180,
  },
  {
    title: '回复',
    dataIndex: 'reply_content',
    width: 180,
  },
  {
    title: '评分',
    dataIndex: 'rate',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'search_key',
    label: '名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const replyFormSchema: FormSchema[] = [
  {
    field: 'textarea2',
    label: '内容',
    required: true,
    component: 'Input',
  },
];
