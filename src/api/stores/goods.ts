import { defHttp } from '/@/utils/http/axios';
import { GoodsItem, GoodsListResultModel, selectParams } from './model/goodsModel';
import { bindParams } from '../util';

enum Api {
  CreateGoods = '/product/admin/add_product',
  GetGoods = '/product/{id}',
  UpdateGoods = '/product/admin/edit_product',
  ListGoods = '/product/admin/all_goods_info',
  SwitchGoods = '/order/admin/update',
}

/**
 * @description: category management
 */

export const listGoods = (params?: selectParams) => {
  return defHttp.get<GoodsListResultModel>({ url: Api.ListGoods, params });
};

export const getGoods = (id: number) => {
  return defHttp.get<GoodsItem>({
    url: bindParams(Api.GetGoods, { id }),
  });
};

export const createGoods = (data: Partial<GoodsItem>) => {
  console.log(data);
  return defHttp.post<GoodsItem>({ url: Api.CreateGoods, data });
};

export const updateGoods = (data?: GoodsItem) => {
  return defHttp.post<GoodsItem>({ url: Api.UpdateGoods, data });
};

export const switchGoods = (id: number, field: string) => {
  return defHttp.put<GoodsItem>({
    url: Api.SwitchGoods,
    data: {
      db: 'goods',
      id,
      field,
    },
  });
};
