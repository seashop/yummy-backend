import { MockMethod } from 'vite-plugin-mock';
import { resultPageSuccess, resultSuccess } from '../_util';

export const levelEntry = (id: number) => {
  return {
    id,
    name_l: '@name()',
    discount: '@float(0,1,1,1)',
    sort: 0,
    created_at: '@datetime',
    updated_at: '@datetime',
  };
};

const levelList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push(levelEntry(index));
  }
  return result;
})();

export default [
  // mock level
  {
    url: '/basic-api/level/admin/get_all_level',
    timeout: 200,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, levelList);
    },
  },
  {
    url: '/basic-api/level/admin/add_level',
    timeout: 200,
    method: 'post',
    response: ({ data }) => {
      return resultSuccess(data);
    },
  },
  {
    url: '/basic-api/level/admin/edit_level',
    timeout: 200,
    method: 'post',
    response: ({ data }) => {
      return resultSuccess(data);
    },
  },
  {
    url: '/basic-api/level/admin/del_level',
    timeout: 200,
    method: 'put',
    response: ({ data }) => {
      return resultSuccess(data);
    },
  },
] as MockMethod[];
