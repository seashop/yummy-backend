import { BasicFetchResult } from '/@/api/model/baseModel';

export interface UserItem {
  id: number;
  key: string;
  value: string;
  title: string;
  desc: string;
  component: string;
  props: object;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export interface selectParams {
  username: string;
}

export type UsersListResultModel = BasicFetchResult<UserItem>;
