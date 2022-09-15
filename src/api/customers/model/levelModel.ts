import { BasicFetchResult } from '/@/api/model/baseModel';

export interface LevelItem {
  id: number;
  name_l: string;
  discount: number;
  sort: number;
  created_at: Date;
  updated_at: Date;
}

export interface selectParams {
  name_l: string;
}

export type LevelsListResultModel = BasicFetchResult<LevelItem>;
