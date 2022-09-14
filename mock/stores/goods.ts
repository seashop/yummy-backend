import { MockMethod } from 'vite-plugin-mock';
import { resultPageSuccess, resultSuccess } from '../_util';
import { imageEntry } from '../asset/image';

const generateSpecValue = () => {
  return {
    id: '@integer(100,200)',
    name: '@cword()',
  };
};

const generateSpecItem = () => {
  return {
    k: '@cword()',
    v: [generateSpecValue(), generateSpecValue()],
    k_s: '@cname()',
  };
};

const goodsItem = (id: number) => {
  let imageIdx = id * 100;
  return {
    goods_id: id,
    bannerimgs: [imageEntry(imageIdx++), imageEntry(imageIdx++), imageEntry(imageIdx++)],
    title: '@title(3)',
    category_id: '@integer(1,20)',
    market_price: '@float(1,20,2,2)',
    price: '@integer(1,20)',
    vip_price: '@integer(1,20)',
    sales: '@integer(1,20)',
    collects: '@integer(1,20)',
    star: '@integer(1,20)',
    evaluates: '@integer(1,20)',
    img_id: '@integer(1,20)',
    img: imageEntry(imageIdx++),
    video_id: '@integer(1,20)',
    video: imageEntry(imageIdx++),
    keywords: '@string()',
    description: '@string()',
    content: '@string)',
    detailimgs: [imageEntry(imageIdx++), imageEntry(imageIdx++), imageEntry(imageIdx++)],
    is_hot: '@boolean',
    is_recommend: '@boolean',
    stock: '@integer(1,20)',
    sort: '@integer(1,20)',
    is_new: '@cname()',
    state: '@cname()',
    ucid: '@integer(1,20)',
    fx_money: '@float(1,20,2,2)',
    rate: [],
    rate_fen: '@float(0,5)',
    rate_num: '@integer(1,20)',
    sku_arr: {
      tree: [generateSpecItem(), generateSpecItem()],
      list: [],
    },
  };
};

const goodsList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push(goodsItem(index));
  }
  return result;
})();

export default [
  // mock goods list
  {
    url: '/basic-api/product/admin/all_goods_info',
    timeout: 200,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, goodsList);
    },
  },
  // mock goods get
  {
    url: '/basic-api/product/get_product',
    timeout: 200,
    method: 'get',
    response: ({ query }) => {
      const item = goodsItem(query.id);
      return resultSuccess(item);
    },
  },
  // mock goods edit
  {
    url: '/basic-api/product/admin/edit_product',
    timeout: 200,
    method: 'post',
    response: ({ body }) => {
      console.log(body);
      return resultSuccess(body);
    },
  },
] as MockMethod[];
