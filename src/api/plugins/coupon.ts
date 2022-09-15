import { defHttp } from '/@/utils/http/axios';
import { CouponItem, CouponsListResultModel, selectParams } from './model/couponModel';

export enum Api {
  ListCoupons = '/coupon/admin/get_coupon',
  CreateCoupon = '/coupon/admin/add_coupon',
  UpdateCoupon = '/coupon/admin/edit_coupon',
  DeleteCoupon = '/coupon/admin/del_coupon',
}

/**
 * @description: coupon management
 */

export const listCoupons = (params?: selectParams) => {
  return defHttp.get<CouponsListResultModel>({ url: Api.ListCoupons, params });
};

export const createCoupon = (data: CouponItem) => {
  return defHttp.post<CouponsListResultModel>({ url: Api.CreateCoupon, data });
};

export const updateCoupon = (data: CouponItem) => {
  return defHttp.post<CouponsListResultModel>({ url: Api.UpdateCoupon, data });
};

export const deleteCoupon = (id: number) => {
  return defHttp.put<CouponsListResultModel>({
    url: Api.DeleteCoupon,
    params: {
      id,
    },
  });
};
