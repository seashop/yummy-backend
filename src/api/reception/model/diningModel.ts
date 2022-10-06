import { BasicFetchResult } from '/@/api/model/baseModel';

export interface DiningCartItem {
  id: number;
  dintbl_id: number;
  pick_code: string;
  order_id: number;
  diners: number;
  dish_up: boolean | number;
  placed: boolean | number;
  served: boolean | number;
  description: string;
  goods: Array<DiningGoodsItem>;
  created_at: Date;
}

export interface DiningGoodsItem {
  id: number;
  dincart_id: number;
  goods_id: number;
  sku_id: number;
  quantity: number;
  served_num: number;
  description: string;
}

export interface CalculateType {
  reduce: number;
  vmoney: number;
  money: number;
  sub_money: number;
  svc_fee: number;
  gts_fee: number;
  total_money: number;
}

export interface listCartsParams {
  dintbl_id: number;
  pick_code: string;
  is_ordered: boolean | number;
}

export type DiningCartListResultModel = BasicFetchResult<DiningCartItem>;
