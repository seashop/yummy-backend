import { MockMethod } from 'vite-plugin-mock';
import { resultPageSuccess, resultSuccess } from '../_util';

export const searchEntry = (id: number) => {
  return {
    id,
    name: '@name()',
    num: '@integer(0,100)',
    created_at: '@datetime',
    updated_at: '@datetime',
    deleted_at: '@datetime',
  };
};

const searchList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push(searchEntry(index));
  }
  return result;
})();

export default [
  // mock search
  {
    url: '/basic-api/search/record',
    timeout: 200,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, searchList);
    },
  },
  {
    url: '/basic-api/search/admin/add_record',
    timeout: 200,
    method: 'post',
    response: ({ data }) => {
      return resultSuccess(data);
    },
  },
  {
    url: '/basic-api/search/admin/del_record',
    timeout: 200,
    method: 'put',
    response: ({ data }) => {
      return resultSuccess(data);
    },
  },
] as MockMethod[];
