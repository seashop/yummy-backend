import { BasicFetchResult } from '/@/api/model/baseModel';

export interface CouponItem {
  id: number;
  type: number;
  name: string;
  status: number;
  is_show: boolean;
  stock: number;
  stock_type: number;
  full: number;
  reduce: number;
  start_time?: Date;
  end_time?: Date;
  day?: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export interface selectParams {
  name: string;
}

export type CouponsListResultModel = BasicFetchResult<CouponItem>;
