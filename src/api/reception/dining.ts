import { defHttp } from '/@/utils/http/axios';
import {
  CalculateType,
  DiningCartItem,
  DiningCartListResultModel,
  DiningProductItem,
  listCartsParams,
} from './model/diningModel';
import { bindParams } from '../util';
import { DiningTableItem, DiningTablesListResultModel } from '../plugins/model/diningTableModel';

enum Api {
  ListDiningTables = '/dining/admin/table',
  GetDiningTable = '/dining/admin/table/{id}/show',
  CleanDiningTable = '/dining/admin/table/{id}/clean',
  PlaceDiningTable = '/dining/admin/table/{id}/place',
  CalculateDiningTable = '/dining/admin/table/{id}/calculate',
  ListCarts = '/dining/admin/cart',
  CreateCart = '/dining/admin/cart',
  GetCart = '/dining/admin/cart/{id}/show',
  UpdateCart = '/dining/admin/cart/{id}/update',
  DishUpCart = '/dining/admin/cart/{id}/dishUp',
  PlaceCart = '/dining/admin/cart/{id}/place',
  AppendCart = '/dining/admin/cart/{id}/append',
  PrintCartReceipt = '/dining/admin/cart/{id}/print/receipt',
  UpdateGoods = '/dining/admin/goods/{id}/update',
  DeleteGoods = '/dining/admin/goods/{id}/delete',
}
/**
 * @description: category management
 */

export const listCarts = (params?: Partial<listCartsParams>) => {
  if (params?.is_placed !== undefined) {
    params.is_placed = params.is_placed ? 1 : 0;
  }
  return defHttp.get<DiningCartListResultModel>({ url: Api.ListCarts, params });
};

export const createCart = (data: Partial<DiningCartItem>) => {
  // console.log(data);
  return defHttp.post<DiningCartItem>({ url: Api.CreateCart, data });
};

export const placeCart = (data: Partial<DiningCartItem>) => {
  // console.log(data);
  return defHttp.post<DiningCartItem>({ url: Api.CreateCart, data });
};

export const getCart = (id: number) => {
  return defHttp.get<DiningCartItem>({
    url: bindParams(Api.GetCart, { id }),
  });
};

export const updateCart = (id: number, data: any) => {
  return defHttp.patch<DiningCartItem>({
    url: bindParams(Api.UpdateCart, { id }),
    data,
  });
};

export const dishUpCart = (id: number) => {
  return defHttp.patch<DiningCartItem>({
    url: bindParams(Api.DishUpCart, { id }),
  });
};

export const appendCart = (id: number, data: Partial<DiningProductItem>) => {
  return defHttp.patch<DiningCartItem>({
    url: bindParams(Api.AppendCart, { id }),
    data,
  });
};

export const printCartReceipt = (id: number) => {
  return defHttp.post<DiningCartItem>({
    url: bindParams(Api.PrintCartReceipt, { id }),
  });
};

export const updateProduct = (id: number, data: Partial<DiningProductItem>) => {
  return defHttp.patch<DiningProductItem>({
    url: bindParams(Api.UpdateGoods, { id }),
    data,
  });
};

export const deleteProduct = (id: number) => {
  return defHttp.delete<DiningCartItem>({
    url: bindParams(Api.DeleteGoods, { id }),
  });
};

export const placeDiningTable = (id: number, data: any) => {
  return defHttp.post<DiningCartItem>({
    url: bindParams(Api.PlaceDiningTable, { id }),
    data,
  });
};

export const cleanDiningTable = (id: number) => {
  return defHttp.post({ url: bindParams(Api.CleanDiningTable, { id }) });
};

export const listDiningTables = (params: any) => {
  return defHttp.get<DiningTablesListResultModel>({
    url: Api.ListDiningTables,
    params,
  });
};

export const getDiningTable = (id: number) => {
  return defHttp.get<DiningTableItem>({
    url: bindParams(Api.GetDiningTable, { id }),
  });
};

export const calculateDiningTable = (id: number) => {
  return defHttp.post<CalculateType>({ url: bindParams(Api.CalculateDiningTable, { id }) });
};
