import { defHttp } from '/@/utils/http/axios';
import { OrderListResultModel, selectParams } from './model/ordersModel';
import { bindParams } from '../util';

enum Api {
  ListOrders = '/order/admin',
  EditOrderPay = '/order/admin/{id}/pay',
  EditOrderCourier = '/order/admin/{id}/courier',
  EditOrderReceive = '/order/admin/{id}/receive',
  DeleteOrder = '/order/admin/{id}/destroy',
  PrintOrder = '/cms/print_order',
}

/**
 * @description: order management
 */

export const listOrders = (data?: selectParams) => {
  return defHttp.get<OrderListResultModel>({ url: Api.ListOrders, data });
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
