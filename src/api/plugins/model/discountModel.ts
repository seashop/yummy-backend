import { ProductItem } from '../../stores/model/productModel';
import { BasicFetchResult } from '/@/api/model/baseModel';

export interface DiscountItem {
  id: number;
  name: string;
  status: number;
  full: number;
  reduce: number;
  start_time: Date;
  end_time: Date;
  day?: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export interface DiscountDetail {
  reduction: DiscountDetail;
  goods: Array<ProductItem>;
}

export interface selectParams {
  name: string;
}

export type DiscountsListResultModel = BasicFetchResult<DiscountItem>;

export type NoGoodsDiscountsListResultModel = BasicFetchResult<ProductItem>;
