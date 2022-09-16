import { imageEntry } from '../asset/image';
import { MockMethod } from 'vite-plugin-mock';
import { resultPageSuccess, resultSuccess } from '../_util';

export const couponEntry = (id: number) => {
  return {
    id,
    type: '@integer(0,1)',
    title: '@name()',
    summary: '@string()',
    content: '@string()',
    img_id: '@integer(0,10)',
    img: imageEntry(id),
    is_hidden: '@boolean',
    auth: '@name()',
    created_at: '@datetime',
    updated_at: '@datetime',
    deleted_at: '@datetime',
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
    url: '/basic-api/article/admin/get_all_article',
    timeout: 200,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, couponList);
    },
  },
  {
    url: '/basic-api/article/admin/add_article',
    timeout: 200,
    method: 'post',
    response: ({ data }) => {
      return resultSuccess(data);
    },
  },
  {
    url: '/basic-api/article/admin/edit_article',
    timeout: 200,
    method: 'post',
    response: ({ data }) => {
      return resultSuccess(data);
    },
  },
  {
    url: '/basic-api/article/admin/del_article',
    timeout: 200,
    method: 'put',
    response: ({ data }) => {
      return resultSuccess(data);
    },
  },
  {
    url: '/basic-api/order/admin/update',
    timeout: 200,
    method: 'put',
    response: ({ data }) => {
      return resultSuccess(data);
    },
  },
] as MockMethod[];
