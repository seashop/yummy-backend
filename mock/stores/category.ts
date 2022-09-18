import { MockMethod } from 'vite-plugin-mock';
import { Random } from 'mockjs';
import { resultPageSuccess } from '../_util';

const categoryList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push({
      category_id: index,
      title: '@name()',
      short_name: '@name()',
      pid: 0,
      level: 1,
      is_visible: '@boolean',
      img_id: '@string()',
      pic_full_url: Random.image('400x400', Random.color(), Random.color(), Random.first()),
      created_at: '@datetime',
      updated_at: '@datetime',
    });
  }
  return result;
})();

export default [
  // mock category
  {
    url: '/basic-api/category/admin/all_category',
    timeout: 200,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, categoryList);
    },
  },
] as MockMethod[];
