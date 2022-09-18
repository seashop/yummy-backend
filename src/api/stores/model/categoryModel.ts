import { ImageItem } from '../../asset/model/imageModel';
import { BasicFetchResult } from '/@/api/model/baseModel';

export interface CategoryItem {
  category_id: number;
  title: string;
  short_name: string;
  pid: number;
  level: number;
  is_visible: string;
  img_id: string;
  img: ImageItem;
}

export interface selectParams {
  withRoot: boolean;
  title: string;
}

export type CategoryListResultModel = BasicFetchResult<CategoryItem>;
