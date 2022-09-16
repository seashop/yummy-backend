import { MockMethod } from 'vite-plugin-mock';
import { Random } from 'mockjs';
import { resultPageSuccess, resultSuccess } from '../_util';

export const diningTableEntry = (id: number) => {
  return {
    id,
    zh_num: '@name()',
    bz: '@string',
    h5_img: Random.image('400x400', Random.color(), Random.color(), Random.first()),
    xcx_img: Random.image('400x400', Random.color(), Random.color(), Random.first()),
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
    url: '/basic-api/index/admin/get_all_zz',
    timeout: 200,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, diningTableList);
    },
  },
  {
    url: '/basic-api/index/admin/add_zz',
    timeout: 200,
    method: 'post',
    response: ({ data }) => {
      return resultSuccess(data);
    },
  },
  {
    url: '/basic-api/index/admin/edit_zz',
    timeout: 200,
    method: 'post',
    response: ({ data }) => {
      return resultSuccess(data);
    },
  },
  {
    url: '/basic-api/index/admin/del_zz',
    timeout: 200,
    method: 'put',
    response: ({ data }) => {
      return resultSuccess(data);
    },
  },
  {
    url: '/basic-api/order/admin/code_order',
    timeout: 200,
    method: 'put',
    response: ({ data }) => {
      return resultSuccess(data);
    },
  },
] as MockMethod[];
