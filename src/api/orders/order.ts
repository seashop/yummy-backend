import { defHttp } from '/@/utils/http/axios';
import { OrderListResultModel, selectParams } from './model/ordersModel';
import { bindParams } from '../util';

enum Api {
  ListOrders = '/order/admin',
  EditOrderPay = '/order/admin/{id}/pay',
  EditOrderCourier = '/order/admin/{id}/courier',
  EditOrderReceive = '/order/user/receive',
  DeleteOrder = '/order/admin/del_order',
  PrintOrder = '/cms/print_order',
}

/**
 * @description: order management
 */

export const listOrders = (data?: selectParams) => {
  return defHttp.post<OrderListResultModel>({ url: Api.ListOrders, data });
};

export const editOrderPay = (id: string) => {
  return defHttp.get<OrderListResultModel>({
    url: bindParams(Api.EditOrderPay, { id }),
  });
};
export const editOrderCourier = (id: string) => {
  return defHttp.get<OrderListResultModel>({
    url: Api.EditOrderCourier,
    params: {
      id,
    },
  });
};
export const editOrderReceive = (id: string) => {
  return defHttp.put<OrderListResultModel>({
    url: Api.EditOrderReceive,
    params: {
      id,
    },
  });
};
export const deleteOrder = (id: string) => {
  return defHttp.put<OrderListResultModel>({
    url: Api.DeleteOrder,
    params: {
      id,
    },
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
