import { MockMethod } from 'vite-plugin-mock';
import { Random } from 'mockjs';
import { resultPageSuccess } from '../_util';

export const imageEntry = (id: number) => {
  return {
    id,
    url: '@url',
    full_url: Random.image('400x400', Random.color(), Random.color(), Random.first()),
  };
};

const imageList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push(imageEntry(index));
  }
  return result;
})();

export default [
  // mock user login
  {
    url: '/basic-api/img_category/admin/get_all_img',
    timeout: 200,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, imageList);
    },
  },
] as MockMethod[];
