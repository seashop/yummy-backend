import { defHttp } from '/@/utils/http/axios';
import {
  DiningCartItem,
  DiningCartListResultModel,
  DiningGoodsItem,
  selectParams,
} from './model/diningModel';
import { bindParams } from '../util';

enum Api {
  ListCart = '/dining/admin/cart',
  CreateCart = '/dining/admin/cart',
  GetCart = '/dining/admin/cart/{id}/show',
  AppendCart = '/dining/admin/cart/{id}/append',
  UpdateGoods = '/dining/admin/goods/{id}/update',
}

/**
 * @description: category management
 */

export const listCart = (params?: selectParams) => {
  return defHttp.get<DiningCartListResultModel>({ url: Api.ListCart, params });
};

export const createCart = (data: Partial<DiningCartItem>) => {
  console.log(data);
  return defHttp.post<DiningCartItem>({ url: Api.CreateCart, data });
};

export const getCart = (id: number) => {
  return defHttp.get<DiningCartItem>({
    url: bindParams(Api.GetCart, { id }),
  });
};

export const appendCart = (id: number, data: Partial<DiningGoodsItem>) => {
  return defHttp.patch<DiningCartItem>({
    url: bindParams(Api.AppendCart, { id }),
    data,
  });
};

export const updateGoods = (id: number, data: Partial<DiningGoodsItem>) => {
  return defHttp.patch<DiningCartItem>({
    url: bindParams(Api.UpdateGoods, { id }),
    data,
  });
};
