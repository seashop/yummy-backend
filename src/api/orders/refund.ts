import { defHttp } from '/@/utils/http/axios';
import { RefundsListResultModel, selectParams } from './model/refundModel';

export enum Api {
  ListRefunds = '/order/admin/get_tui_all',
  RejectRefunds = '/order/admin/tui_bohui',
  AcceptRefunds = '/order/admin/tui_money',
}

/**
 * @description: refund management
 */

export const listRefunds = (params?: selectParams) => {
  return defHttp.get<RefundsListResultModel>({ url: Api.ListRefunds, params });
};

export const rejectRefunds = (data: any) => {
  return defHttp.post({ url: Api.RejectRefunds, data });
};

export const acceptRefunds = (id: number) => {
  return defHttp.post({
    url: Api.AcceptRefunds,
    data: {
      id,
    },
  });
};
