import { defHttp } from '/@/utils/http/axios';
import { OrderListResultModel, selectParams, PlaceOrderType } from './model/ordersModel';
import { bindParams } from '../util';

enum Api {
  ListOrders = '/order/admin',
  EditOrderPay = '/order/admin/{id}/pay',
  EditOrderCourier = '/order/admin/{id}/courier',
  EditOrderReceive = '/order/admin/{id}/receive',
  DeleteOrder = '/order/admin/{id}/destroy',
  PrintOrder = '/cms/print_order',
  PlaceOrder = '/order/admin/place',
}

/**
 * @description: order management
 */

export const listOrders = (params?: selectParams) => {
  return defHttp.get<OrderListResultModel>({ url: Api.ListOrders, params });
};

export const editOrderPay = (id: string) => {
  return defHttp.patch<OrderListResultModel>({
    url: bindParams(Api.EditOrderPay, { id }),
  });
};
export const editOrderCourier = (id: string) => {
  return defHttp.patch<OrderListResultModel>({
    url: bindParams(Api.EditOrderCourier, { id }),
  });
};
export const editOrderReceive = (id: string) => {
  return defHttp.patch<OrderListResultModel>({
    url: bindParams(Api.EditOrderReceive, { id }),
  });
};
export const deleteOrder = (id: string) => {
  return defHttp.delete<OrderListResultModel>({
    url: bindParams(Api.DeleteOrder, { id }),
  });
};
export const printOrder = (order_num: string) => {
  return defHttp.get<OrderListResultModel>({
    url: Api.PrintOrder,
    params: {
      order_num,
    },
  });
};
export const PlaceOrder = (data: PlaceOrderType) => {
  return defHttp.post<OrderListResultModel>({ url: Api.PlaceOrder, data });
};
