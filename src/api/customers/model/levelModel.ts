import { BasicFetchResult } from '/@/api/model/baseModel';

export interface LevelItem {
  id: number;
  title: string;
  discount: number;
  sort: number;
  created_at: Date;
  updated_at: Date;
}

export interface selectParams {
  title: string;
}

export type LevelsListResultModel = BasicFetchResult<LevelItem>;
