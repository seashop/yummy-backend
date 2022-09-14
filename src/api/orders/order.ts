import { defHttp } from '/@/utils/http/axios';
import { OrderListResultModel, selectParams } from './model/ordersModel';

enum Api {
  ListOrders = '/order/admin/get_order',
  EditOrderPay = '/order/admin/edit_pay',
  PrintOrder = 'cms/print_order',
}

/**
 * @description: order management
 */

export const listOrders = (data?: selectParams) => {
  return defHttp.post<OrderListResultModel>({ url: Api.ListOrders, data });
};

export const editOrderPay = (id: string) => {
  return defHttp.get<OrderListResultModel>({
    url: Api.EditOrderPay,
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
