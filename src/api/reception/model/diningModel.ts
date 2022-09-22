import { BasicFetchResult } from '/@/api/model/baseModel';

export interface DiningCartItem {
  id: number;
  dintbl_id: number;
  pick_code: string;
  placed: boolean;
  served: boolean;
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

export interface selectParams {
  dincart_id: number;
  goods_id: number;
}

export type DiningCartListResultModel = BasicFetchResult<DiningCartItem>;
