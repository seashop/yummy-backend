import { BasicFetchResult } from '/@/api/model/baseModel';

export interface RefundItem {
  id: number;
  order_num: string;
  refund_num: string;
  nickname: string;
  money: number;
  message: string;
  reason: string;
  status: number;
  created_at: Date;
  updated_at: Date;
}

export interface selectParams {
  status: number;
}

export type RefundsListResultModel = BasicFetchResult<RefundItem>;
