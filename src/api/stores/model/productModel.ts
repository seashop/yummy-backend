import { ImageItem } from '/@/api/asset/model/imageModel';
import { BasicFetchResult } from '/@/api/model/baseModel';

export interface ProductItem {
  goods_id: number;
  title: string;
  description: string;
  content: string;
  market_price: number;
  price: number;
  stock: number;
  sales: number;
  is_hot: boolean;
  is_recommend: boolean;
  is_new: boolean;
  state: boolean;
  img_id: number;
  img: ImageItem;
  banner_imgs: Array<number>;
  detail_imgs: Array<number>;
  sort: number;
  sku_arr: ProductSkuArr;
}

export interface SpuValue {
  id: string;
  name: string;
  img_id: number;
  imgUrl?: string;
}

export interface Spu {
  k: string;
  v: Array<SpuValue>;
  k_s: string;
}

export interface Sku {
  price: number;
  stock_num: number;
}

export interface ProductSkuArr {
  tree: Array<Spu>;
  list: Array<Sku>;
}

export interface ProductSkuItem {
  price?: number;
  stock_num?: number;
}

export interface selectParams {
  title: string;
  category_id: number;
  goods_ids: Array<number>;
}

export type ProductListResultModel = BasicFetchResult<ProductItem>;
