import { MockMethod } from 'vite-plugin-mock';
import { resultPageSuccess, resultSuccess } from '../_util';
import { levelEntry } from './level';

export const customerEntry = (id: number) => {
  return {
    id: id,
    nickname: '@string()',
    unionid: '@string()',
    openid_gzh: '@string()',
    openid_app: '@string()',
    openid: '@string()',
    money: '@integer(1, 10000)',
    sign_time: '@datetime',
    sing_day: '@datetime',
    level_id: '@integer(1, 10)',
    avatar: '@string()',
    mobile: '@string()',
    username: '@string()',
    invite_code: '@string()',
    invite_url: '@string()',
    points: '@integer(1, 10000)',
    level: levelEntry(id),
    created_at: '@datetime',
    updated_at: '@datetime',
  };
};

const customerList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push(customerEntry(index));
  }
  return result;
})();

export default [
  // mock customer
  {
    url: '/basic-api/user/admin/get_all',
    timeout: 200,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, customerList);
    },
  },
  {
    url: '/basic-api/user/admin/edit_user',
    timeout: 200,
    method: 'post',
    response: ({ data }) => {
      return resultSuccess(data);
    },
  },
] as MockMethod[];
