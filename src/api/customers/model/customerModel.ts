import { LevelItem } from './levelModel';
import { BasicFetchResult } from '/@/api/model/baseModel';

export interface CustomerItem {
  id: number;
  nickname: string;
  unionid?: string;
  openid_gzh?: string;
  openid_app?: string;
  openid?: string;
  money: number;
  sign_time: Date;
  sing_day: Date;
  level_id: number;
  headpic: string;
  mobile: string;
  user_name: string;
  invite_code: string;
  invite_url: string;
  points: number;
  level: LevelItem;
  created_at: Date;
  updated_at: Date;
}

export interface selectParams {
  name_l: string;
}

export type CustomersListResultModel = BasicFetchResult<CustomerItem>;
