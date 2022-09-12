import { defHttp } from '/@/utils/http/axios';
import { GoodsModel, selectParams } from './model/goodsModel';

enum Api {
  CreateGoods = '/product/admin/add_product',
  UpdateGoods = '/product/admin/edit_product',
  ListGoods = '/product/admin/all_category',
}

/**
 * @description: category management
 */

export const listGoods = (params?: selectParams) => {
  return defHttp.get<GoodsModel>({ url: Api.ListGoods, params });
};

export const createGoods = (data?: GoodsModel) => {
  return defHttp.post<GoodsModel>({ url: Api.CreateGoods, data });
};

export const updateGoods = (data?: GoodsModel) => {
  return defHttp.post<GoodsModel>({ url: Api.UpdateGoods, data });
};
