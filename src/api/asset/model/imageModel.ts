import { BasicFetchResult } from '/@/api/model/baseModel';

export interface ImageItem {
  id: number;
  url: string;
  full_url: string;
}

export type ImageListResultModel = BasicFetchResult<ImageItem>;
