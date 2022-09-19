import { MockMethod } from 'vite-plugin-mock';
import { resultPageSuccess, resultSuccess } from '../_util';
import { goodsItem } from '../stores/goods';
import { orderUser } from './order';

const evaluateList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push({
      id: index,
      goods: goodsItem(index),
      user: orderUser(index),
      content: '@string()',
      reply_content: '@string()',
      rate: '@integer(0,5)',
      created_at: '@datetime',
      updated_at: '@datetime',
    });
  }
  return result;
})();

export default [
  // mock evaluate
  {
    url: '/basic-api/evaluate/admin/get_all_rate',
    timeout: 200,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, evaluateList);
    },
  },
  {
    url: '/basic-api/evaluate/admin/add_reply',
    timeout: 200,
    method: 'post',
    response: ({ body }) => {
      return resultSuccess(body);
    },
  },
] as MockMethod[];
