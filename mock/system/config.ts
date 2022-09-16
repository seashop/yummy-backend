import { MockMethod } from 'vite-plugin-mock';
import Mock from 'mockjs';
import { resultPageSuccess, resultSuccess } from '../_util';

export const configGroupEntry = (id: number) => {
  return {
    id,
    scope: '@string()',
    'title|1': ['基础设置', '商家信息', '微信', '打印机', '短信'],
    created_at: '@datetime',
    updated_at: '@datetime',
    deleted_at: '@datetime',
  };
};

export const configEntry = (id: number) => {
  return {
    id,
    key: '@string()',
    value: function () {
      const type = this.type as String;
      switch (type) {
        case 'Input':
          return Mock.mock('@word()');
        case 'Switch':
          return Mock.mock('@integer(0,1)');
        case 'RadioGroup':
          return Mock.mock('@integer(1,3)');
        default:
          break;
      }
    },
    title: '@cname()',
    desc: '@title(3,5)',
    'type|1': ['Input', 'Switch', 'RadioGroup'],
    props: function () {
      const type = this.type as String;
      switch (type) {
        case 'RadioGroup':
          return {
            options: [
              { value: 1, label: Mock.mock('@cname') },
              { value: 2, label: Mock.mock('@cname') },
              { value: 3, label: Mock.mock('@cname') },
            ],
          };
        default:
          break;
      }
    },
    created_at: '@datetime',
    updated_at: '@datetime',
    deleted_at: '@datetime',
  };
};

const configGroupList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 6; index++) {
    result.push(configGroupEntry(index));
  }
  return result;
})();

const configList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push(configEntry(index));
  }
  return result;
})();

export default [
  // mock config
  {
    url: '/basic-api/cms/get_config_groups',
    timeout: 200,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, configGroupList);
    },
  },
  {
    url: '/basic-api/cms/get_config',
    timeout: 200,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, configList);
    },
  },
  {
    url: '/basic-api/cms/edit_config',
    timeout: 200,
    method: 'post',
    response: ({ data }) => {
      return resultSuccess(data);
    },
  },
] as MockMethod[];
