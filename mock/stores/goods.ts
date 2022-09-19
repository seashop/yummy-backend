import { MockMethod } from 'vite-plugin-mock';
import Mock from 'mockjs';
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

const generateSkuArr = () => {
  return {
    tree: [generateSpecItem(), generateSpecItem()],
    list: function () {
      const res: Array<any> = [];
      let num = 0;
      if (this.tree.length > 0) {
        num = 1;
      }
      for (let index = 0; index < this.tree.length; index++) {
        num *= this.tree[index].v.length;
      }
      for (let index = 0; index < num; index++) {
        res.push({
          price: Mock.mock('@float(1,20,2,2)'),
          stock_num: Mock.mock('@integer(1,100)'),
        });
      }
      return res;
    },
  };
};

export const goodsItem = (id: number) => {
  let imageIdx = id * 100;
  return {
    goods_id: id,
    title: '@title(3)',
    category_id: '@integer(1,20)',
    market_price: '@float(1,20,2,2)',
    price: '@integer(1,20)',
    vip_price: '@integer(1,20)',
    sales: '@integer(1,20)',
    collects: '@integer(1,20)',
    star: '@integer(1,20)',
    evaluate_cnt: '@integer(1,20)',
    img_id: '@integer(1,20)',
    video_id: '@integer(1,20)',
    video: imageEntry(imageIdx++),
    keywords: '@string()',
    description: '@string()',
    content: '@string)',
    img: imageEntry(imageIdx++),
    banner_imgs: [imageEntry(imageIdx++), imageEntry(imageIdx++), imageEntry(imageIdx++)],
    detail_imgs: [imageEntry(imageIdx++), imageEntry(imageIdx++), imageEntry(imageIdx++)],
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
    sku_arr: generateSkuArr(),
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
