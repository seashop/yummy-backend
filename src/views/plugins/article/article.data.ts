import { h } from 'vue';
import { Switch } from 'ant-design-vue';

import { useComponentRegister } from '/@/components/Form';
import { ComponentType } from '/@/components/Form/src/types';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { Tinymce } from '/@/components/Tinymce/index';
import { useMessage } from '/@/hooks/web/useMessage';
import { switchArticle } from '/@/api/plugins/article';

useComponentRegister('Tinymce' as ComponentType, Tinymce);

export const columns: BasicColumn[] = [
  {
    title: '序号',
    dataIndex: 'id',
    width: 200,
  },
  {
    title: '标题',
    dataIndex: 'title',
    width: 200,
  },
  {
    title: '缩略图',
    dataIndex: 'img',
    width: 180,
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    width: 180,
  },
  {
    title: '隐藏',
    dataIndex: 'is_hidden',
    width: 180,
    customRender: ({ record }) => {
      if (!Reflect.has(record, 'pendingStatus')) {
        record.pendingStatus = false;
      }
      return h(Switch, {
        checked: record.is_hidden,
        loading: record.pendingStatus,
        onChange(checked: boolean) {
          record.pendingStatus = true;
          const newStatus = checked ? true : false;
          const { createMessage } = useMessage();
          switchArticle(record.id, { is_hidden: newStatus })
            .then(() => {
              record.is_hidden = newStatus;
              createMessage.success(`已成功修改文章状态`);
            })
            .catch(() => {
              createMessage.error('修改文章状态失败');
            })
            .finally(() => {
              record.pendingStatus = false;
            });
        },
      });
    },
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
    field: 'title',
    label: '标题',
    required: true,
    component: 'Input',
  },
  {
    field: 'type',
    label: '类型',
    required: true,
    component: 'Select',
    componentProps: {
      options: [
        {
          label: '独立文章',
          value: 1,
          key: 1,
        },
        {
          label: '小程序跳转',
          value: 2,
          key: 2,
        },
        {
          label: '公告',
          value: 3,
          key: 3,
        },
        {
          label: '活动',
          value: 4,
          key: 4,
        },
        {
          label: '个人中心',
          value: 5,
          key: 5,
        },
      ],
    },
    defaultValue: 1,
  },
  {
    field: 'img_id',
    label: '缩略图',
    required: true,
    slot: 'picDrawer',
    component: 'Input',
  },
  {
    field: 'content',
    label: '内容',
    required: true,
    component: 'Tinymce' as ComponentType,
    componentProps: {
      showImageUpload: false,
    },
    defaultValue: '',
  },
];
