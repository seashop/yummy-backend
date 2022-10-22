import { defHttp } from '/@/utils/http/axios';
import { OrderListResultModel, PayOrderType, selectParams } from './model/ordersModel';
import { bindParams } from '../util';

enum Api {
  ListOrders = '/order/admin',
  EditOrderPay = '/order/admin/{id}/pay',
  EditOrderCourier = '/order/admin/{id}/courier',
  EditOrderReceive = '/order/admin/{id}/receive',
  DeleteOrder = '/order/admin/{id}/destroy',
  PrintOrderReceipt = '/order/admin/{id}/print/receipt',
}

/**
 * @description: order management
 */

export const listOrders = (params?: selectParams) => {
  return defHttp.get<OrderListResultModel>({ url: Api.ListOrders, params });
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
export const printOrderReceipt = (id: number) => {
  return defHttp.post<OrderListResultModel>({
    url: bindParams(Api.PrintOrderReceipt, { id }),
  });
};
