import { ImageItem } from '../../asset/model/imageModel';
import { BasicFetchResult } from '/@/api/model/baseModel';

export interface OrderItem {
  order_id: number;
  order_num: string;
  user_id: number;
  state: number;
  shipment_state: number;
  payment_state: number;
  rate_id: number;
  coupon_id: number;
  order_from: string;
  payment_type: string;
  goods_money: string;
  reduction_money: number;
  coupon_money: number;
  edit_money: string;
  order_money: string;
  user_ip: any;
  goods_picture: any;
  message: string;
  receiver_name: string;
  receiver_mobile: string;
  receiver_city: string;
  receiver_address: string;
  courier_num: any;
  courier: any;
  remark_one: any;
  remark_two: any;
  drive_type: string;
  prepay_id: any;
  pay_time: any;
  other: string;
  mobile: any;
  address: any;
  count: number;
  pay_cate: string;
  ucid: number;
  table_num: string;
  yzcode: string;
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
  imgs: ImageItem;
}

export interface OrderUser {
  id: number;
  nickname: string;
  headpic: string;
}

export interface selectParams {
  playstate: number;
  starttime?: Date;
  endtime?: Date;
  wordkey?: string;
}

export type OrderListResultModel = BasicFetchResult<OrderItem>;
