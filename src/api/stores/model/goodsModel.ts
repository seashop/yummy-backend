import { ImageItem } from '/@/api/asset/model/imageModel';
import { BasicFetchResult } from '/@/api/model/baseModel';

export interface GoodsItem {
  goods_id: number;
  title: string;
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
  sku_arr: GoodsSkuArr;
}

export interface GoodsSkuArr {
  tree: Array<Object>;
  list: Array<GoodsSkuItem>;
}

export interface GoodsSkuItem {
  price?: number;
  stock_num?: number;
}

export interface selectParams {
  title: string;
}

export type GoodsListResultModel = BasicFetchResult<GoodsItem>;
