export interface CategoryModel {
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
