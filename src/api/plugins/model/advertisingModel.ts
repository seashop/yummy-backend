import { BasicFetchResult } from '/@/api/model/baseModel';

export interface AdPositionItem {
  id: number;
  name: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export interface AdContentItem {
  id: number;
  key_word: string;
  position_id: number;
  type: string;
  jump_id: number;
  img_id: number;
  is_visible: boolean;
  sort: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export interface selectParams {
  name: string;
}

export type AdPositionsListResultModel = BasicFetchResult<AdPositionItem>;

export type AdContentsListResultModel = BasicFetchResult<AdContentItem>;
