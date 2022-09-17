import { BasicFetchResult } from '/@/api/model/baseModel';

export interface DiningTableItem {
  id: number;
  dt_code: string;
  remark: string;
  h5_img: string;
  mp_img: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export interface DiningTableCodeItem {
  h5_img: string;
  mp_img: string;
}

export interface selectParams {
  name: string;
}

export type DiningTablesListResultModel = BasicFetchResult<DiningTableItem>;
