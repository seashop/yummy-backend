import { ImageItem } from '../../asset/model/imageModel';
import { BasicFetchResult } from '/@/api/model/baseModel';

export interface OrderItem {
  order_id: number;
  order_num: string;
  user_id: number;
  state: number;
  shipment_state: number;
  payment_state: number;
  evaluate_id: number;
  coupon_id: number;
  order_from: string;
  payment_type: string;
  goods_money: number;
  reduction_money: number;
  svc_fee: number;
  gts_fee: number;
  coupon_money: number;
  edit_money: string;
  order_money: number;
  user_ip: any;
  goods_img_ids: any;
  message: string;
  receiver_name: string;
  receiver_mobile: string;
  receiver_city: string;
  receiver_address: string;
  courier_num: any;
  courier: any;
  remark_one: any;
  remark_two: any;
  delivery_method: string;
  prepay_id: any;
  pay_time: any;
  other: string;
  mobile: any;
  address: any;
  count: number;
  pay_cate: string;
  ucid: number;
  dintbl_id: string;
  pick_code: string;
  invite_code: any;
  fx_money: number;
  created_at: Date;
  updated_at: Date;
  ordergoods: Array<OrderGoodsItem>;
  users: OrderUser;
}

export interface OrderGoodsItem {
  id: number;
  order_id: number;
  goods_id: number;
  title: string;
  sku_id: number;
  sku_name: string;
  price: string;
  cost_price: string;
  number: number;
  total_price: string;
  state: number;
  pic: ImageItem;
  user_id: number;
  remark: string;
  ucid: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  img: ImageItem;
}

export interface OrderUser {
  id: number;
  nickname: string;
  avatar: string;
}

export interface selectParams {
  playstate?: number;
  wordkey?: string;
  since_at?: Date;
  until_at?: Date;
  dintbl_id?: number;
  order_from?: string;
  order_id?: number;
  order_num?: string;
}

export interface PlaceOrderType {
  dintbl_id?: number;
  pick_code?: number;
  user_id?: number;
  message?: string;
  invite_code?: string;
}

export interface PayOrderType {
  payment_type?: string;
}

export type OrderListResultModel = BasicFetchResult<OrderItem>;
