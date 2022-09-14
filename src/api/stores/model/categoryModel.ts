import { BasicFetchResult } from '/@/api/model/baseModel';

export interface CategoryItem {
  category_id: number;
  category_name: string;
  short_name: string;
  pid: number;
  level: number;
  is_visible: string;
  category_pic: string;
  pic_full_url: string;
}

export interface selectParams {
  withRoot: boolean;
  category_name: string;
}

export type CategoryListResultModel = BasicFetchResult<CategoryItem>;
