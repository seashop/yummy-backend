import { MockMethod } from 'vite-plugin-mock';
import { resultPageSuccess, resultSuccess } from '../_util';

export const couponEntry = (id: number) => {
  return {
    id,
    type: '@integer(0,1)',
    name: '@name()',
    status: '@integer(0,1)',
    is_show: '@boolean',
    stock: '@integer(-1,5)',
    stock_limited: '@boolean',
    full: '@integer(1,200)',
    reduce: '@integer(1,20)',
    start_time: id % 2 == 1 ? null : '@datetime',
    end_time: id % 2 == 1 ? null : '@datetime',
    day: '@integer(1,60)',
    created_at: '@datetime',
    updated_at: '@datetime',
  };
};

const couponList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push(couponEntry(index));
  }
  return result;
})();

export default [
  // mock coupon
  {
    url: '/basic-api/coupon/admin/get_coupon',
    timeout: 200,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, couponList);
    },
  },
  {
    url: '/basic-api/coupon/admin/add_coupon',
    timeout: 200,
    method: 'post',
    response: ({ data }) => {
      return resultSuccess(data);
    },
  },
  {
    url: '/basic-api/coupon/admin/edit_coupon',
    timeout: 200,
    method: 'post',
    response: ({ data }) => {
      return resultSuccess(data);
    },
  },
  {
    url: '/basic-api/coupon/admin/del_coupon',
    timeout: 200,
    method: 'put',
    response: ({ data }) => {
      return resultSuccess(data);
    },
  },
] as MockMethod[];
