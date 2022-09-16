import { ImageItem } from '../../asset/model/imageModel';
import { BasicFetchResult } from '/@/api/model/baseModel';

export interface ArticleItem {
  id: number;
  type: number;
  title: string;
  summary: string;
  content: string;
  img_id: number;
  img: ImageItem;
  is_hidden: boolean;
  author: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export interface selectParams {
  name: string;
}

export type ArticlesListResultModel = BasicFetchResult<ArticleItem>;
