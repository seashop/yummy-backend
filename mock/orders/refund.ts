import { MockMethod } from 'vite-plugin-mock';
import { resultPageSuccess, resultSuccess } from '../_util';

const refundList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push({
      id: index,
      order_num: '@string()',
      tui_num: '@string()',
      nickname: '@string()',
      money: '@integer()',
      message: '@string()',
      because: '@string()',
      status: '@integer(0,2)',
      created_at: '@datetime',
      updated_at: '@datetime',
    });
  }
  return result;
})();

export default [
  // mock refund
  {
    url: '/basic-api/order/admin/get_tui_all',
    timeout: 200,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, refundList);
    },
  },
  {
    url: '/basic-api/rate/admin/add_reply',
    timeout: 200,
    method: 'post',
    response: ({ body }) => {
      return resultSuccess(body);
    },
  },
  {
    url: '/basic-api/order/admin/tui_bohui',
    timeout: 200,
    method: 'post',
    response: ({ body }) => {
      return resultSuccess(body);
    },
  },
  {
    url: '/basic-api/order/admin/tui_money',
    timeout: 200,
    method: 'post',
    response: ({ body }) => {
      return resultSuccess(body);
    },
  },
] as MockMethod[];
