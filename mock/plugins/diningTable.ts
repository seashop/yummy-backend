import { MockMethod } from 'vite-plugin-mock';
import { Random } from 'mockjs';
import { resultPageSuccess, resultSuccess } from '../_util';

export const diningTableEntry = (id: number) => {
  return {
    id,
    title: '@name()',
    remark: '@string',
    h5_img_url: Random.image('400x400', Random.color(), Random.color(), Random.first()),
    mp_img_url: Random.image('400x400', Random.color(), Random.color(), Random.first()),
    created_at: '@datetime',
    updated_at: '@datetime',
    deleted_at: '@datetime',
  };
};

const diningTableList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push(diningTableEntry(index));
  }
  return result;
})();

export default [
  // mock diningTable
  {
    url: '/basic-api/diningTable/admin',
    timeout: 200,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, diningTableList);
    },
  },
  {
    url: '/basic-api/diningTable/admin',
    timeout: 200,
    method: 'post',
    response: ({ data }) => {
      return resultSuccess(data);
    },
  },
  {
    url: '/basic-api/diningTable/admin/1/update',
    timeout: 200,
    method: 'post',
    response: ({ data }) => {
      return resultSuccess(data);
    },
  },
  {
    url: '/basic-api/diningTable/admin/1/delete',
    timeout: 200,
    method: 'put',
    response: ({ data }) => {
      return resultSuccess(data);
    },
  },
  {
    url: '/basic-api/diningTable/admin/1/codes',
    timeout: 200,
    method: 'put',
    response: ({ data }) => {
      return resultSuccess(data);
    },
  },
] as MockMethod[];
