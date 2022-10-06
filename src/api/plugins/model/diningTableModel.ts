import { BasicFetchResult } from '/@/api/model/baseModel';

export interface DiningTableItem {
  id: number;
  title: string;
  is_cleaned: boolean;
  remark: string;
  h5_img_url: string;
  mp_img_url: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  status_label?: string;
  diners?: number;
  calc_info?: any;
}

export interface DiningTableCodeItem {
  h5_img: string;
  mp_img: string;
}

export interface selectParams {
  name: string;
}

export type DiningTablesListResultModel = BasicFetchResult<DiningTableItem>;
