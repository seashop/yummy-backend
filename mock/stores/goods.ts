import { MockMethod } from 'vite-plugin-mock';
import { Random } from 'mockjs';
import { resultPageSuccess } from '../_util';

const goodsList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push({
      goods_id: `${index}`,
      title: '@cname()',
      market_price: '@cname()',
      price: '@number()',
      stock: '@cname()',
      sales: '@cname()',
      is_hot: '@cname()',
      is_recommend: '@cname()',
      is_new: '@cname()',
      state: '@cname()',
      img_id: '@cname()',
      img: {
        full_url: Random.image('400x400', Random.color(), Random.color(), Random.first()),
      },
      sort: '@cname()',
    });
  }
  return result;
})()

export default [
  // mock user login
  {
    url: '/basic-api/product/admin/all_goods_info',
    timeout: 200,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, goodsList);
    },
  },
] as MockMethod[];
