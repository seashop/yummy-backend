import { defHttp } from '/@/utils/http/axios';
import { OrderItem, OrderListResultModel, OrderPriceType, PayOrderType } from './model/ordersModel';
import { bindParams } from '../util';
import { ListOrdersRequest, ListOrdersResponse } from '/@/gen/yummy/v1/order_service';

enum Api {
  ListOrders = '/orders:list',
  EditOrderPay = '/orders/{id}/pay',
  EditOrderCourier = '/orders/{id}/courier',
  EditOrderReceive = '/orders/{id}/receive',
  DeleteOrder = '/orders/{id}',
  UpdateOrderPrice = '/orders/{id}/price',
  PrintOrderReceipt = '/orders/{id}/print/receipt',
}

/**
 * @description: order management
 */

export const listOrders = (data?: ListOrdersRequest) => {
  return defHttp.post<ListOrdersResponse>({ url: Api.ListOrders, data });
};

export const editOrderPay = (id: number, data: Partial<PayOrderType>) => {
  return defHttp.patch<boolean>({
    url: bindParams(Api.EditOrderPay, { id }),
    data,
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
export const updateOrderPrice = (id: number, data: Partial<OrderPriceType>) => {
  return defHttp.patch<OrderItem>({
    url: bindParams(Api.UpdateOrderPrice, { id }),
    data,
  });
};
export const printOrderReceipt = (id: number) => {
  return defHttp.post<OrderListResultModel>({
    url: bindParams(Api.PrintOrderReceipt, { id }),
  });
};
