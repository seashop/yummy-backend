import { BasicFetchResult } from '/@/api/model/baseModel';

export interface DiningTableItem {
  id: number;
  zh_num: string;
  bz: string;
  h5_img: string;
  xcx_img: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export interface DiningTableCodeItem {
  h5_img: string;
  xcx_img: string;
}

export interface selectParams {
  name: string;
}

export type DiningTablesListResultModel = BasicFetchResult<DiningTableItem>;
