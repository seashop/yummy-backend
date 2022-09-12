import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '序号',
    dataIndex: 'goods_id',
    width: 200,
  },
  {
    title: '名称',
    dataIndex: 'title',
    width: 200,
  },
  {
    title: '价格',
    dataIndex: 'price',
    width: 180,
  },
  {
    title: '总库存',
    dataIndex: 'stock',
    width: 180,
  },
  {
    title: '销量',
    dataIndex: 'sales',
    width: 180,
  },
  {
    title: '是否热销',
    dataIndex: 'is_hot',
    width: 180,
    edit: true,
    editable: true,
  },
  {
    title: '是否新品',
    dataIndex: 'is_new',
    width: 180,
    edit: true,
    editable: true,
  },
  {
    title: '是否推荐',
    dataIndex: 'is_recommend',
    width: 180,
    edit: true,
    editable: true,
  },
  {
    title: '是否下架',
    dataIndex: 'state',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'category_name',
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
    field: 'category_id',
    label: '分类',
    required: true,
    component: 'Input',
  },
  {
    field: 'description',
    label: '商品促销语',
    required: true,
    component: 'Input',
  },
  {
    field: 'price',
    label: '销售价格',
    required: true,
    component: 'InputNumber',
  },
  {
    field: 'market_price',
    label: '市场价格',
    required: true,
    component: 'InputNumber',
  },
  {
    field: 'fx_money',
    label: '分销佣金',
    required: true,
    component: 'InputNumber',
  },
  {
    field: 'stock',
    label: '总库存',
    required: true,
    component: 'InputNumber',
  },
  {
    field: 'sales',
    label: '基础销量',
    required: true,
    component: 'InputNumber',
  },
  {
    field: 'bannerimgs',
    label: '商品轮播图',
    required: true,
    slot: 'picDrawer',
    component: 'Input',
  },
  {
    field: 'detailimgs',
    label: '商品详情图',
    required: true,
    slot: 'picDrawer',
    component: 'Input',
  },
  {
    field: 'video_id',
    label: '商品视频',
    required: true,
    slot: 'picDrawer',
    component: 'Input',
  },
  {
    field: 'show_sku',
    label: '使用SKU',
    required: true,
    component: 'Switch',
  },
  {
    field: 'sku',
    label: '规格类型',
    required: false,
    ifShow: ({ values }) => values.show_sku,
    slot: 'sku',
    component: 'Input',
  },
  {
    field: 'content',
    label: '商品详情',
    required: true,
    component: 'Input',
  },
];
