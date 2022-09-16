import { BasicFetchResult } from '/@/api/model/baseModel';

export interface SearchItem {
  id: number;
  name: string;
  num: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export interface SearchCodeItem {
  h5_img: string;
  xcx_img: string;
}

export interface selectParams {
  name: string;
}

export type SearchsListResultModel = BasicFetchResult<SearchItem>;
