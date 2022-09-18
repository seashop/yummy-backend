import { GoodsItem } from '../../stores/model/goodsModel';
import { OrderUser } from './ordersModel';
import { BasicFetchResult } from '/@/api/model/baseModel';

export interface EvaluateItem {
  id: number;
  goods: GoodsItem;
  user: OrderUser;
  content: string;
  reply_content: string;
  rate: number;
  created_at: Date;
  updated_at: Date;
}

export interface ReplyItem {
  reply_content: string;
  reply_time: Date;
}

export interface selectParams {
  playstate: number;
  starttime?: Date;
  endtime?: Date;
  wordkey?: string;
}

export type EvaluatesListResultModel = BasicFetchResult<EvaluateItem>;
