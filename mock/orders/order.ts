import { MockMethod } from 'vite-plugin-mock';
import { Random } from 'mockjs';
import { resultPageSuccess } from '../_util';

export const orderUser = (id: number) => {
  return {
    id: id,
    nickname: '@string()',
    headpic: Random.image('400x400', Random.color(), Random.color(), Random.first()),
  };
};

const orderList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push({
      id: index,
    });
  }
  return result;
})();

export default [
  // mock order
  {
    url: '/basic-api/order/admin/get_order',
    timeout: 200,
    method: 'post',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, orderList);
    },
  },
] as MockMethod[];
