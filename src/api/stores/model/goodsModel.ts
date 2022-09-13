import { ImageModel } from "/@/api/asset/model/imageModel";

export interface GoodsModel {
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
  img: ImageModel;
  bannerimgs: Array<number>;
  detailimgs: Array<number>;
  sort: number;
}

export interface selectParams {
  title: string;
}
