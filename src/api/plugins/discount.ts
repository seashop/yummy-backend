import { defHttp } from '/@/utils/http/axios';
import {
  DiscountDetail,
  DiscountItem,
  DiscountsListResultModel,
  NoGoodsDiscountsListResultModel,
  selectParams,
} from './model/discountModel';

export enum Api {
  ListDiscounts = '/reduction/admin/get_all_reduction',
  DetailDiscount = '/reduction/get_one_reduction',
  NoGoodsDiscount = '/reduction/admin/get_no_goods',
  CreateDiscount = '/reduction/admin/add_reduction',
  UpdateDiscount = '/reduction/admin/edit_reduction',
  DeleteDiscount = '/reduction/admin/del_reduction',
}

/**
 * @description: discount management
 */

export const listDiscounts = (params?: selectParams) => {
  return defHttp.get<DiscountsListResultModel>({ url: Api.ListDiscounts, params });
};

export const detailDiscount = (id: number) => {
  return defHttp.get<DiscountDetail>({
    url: Api.DetailDiscount,
    params: {
      id,
    },
  });
};

export const noGoodsDiscount = (params: any) => {
  return defHttp.get<NoGoodsDiscountsListResultModel>({
    url: Api.NoGoodsDiscount,
    params,
  });
};

export const createDiscount = (data: DiscountItem) => {
  return defHttp.post<DiscountsListResultModel>({ url: Api.CreateDiscount, data });
};

export const updateDiscount = (data: DiscountItem) => {
  return defHttp.post<DiscountsListResultModel>({ url: Api.UpdateDiscount, data });
};

export const deleteDiscount = (id: number) => {
  return defHttp.put<DiscountsListResultModel>({
    url: Api.DeleteDiscount,
    params: {
      id,
    },
  });
};
