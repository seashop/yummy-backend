import { defHttp } from '/@/utils/http/axios';
import { CustomersListResultModel, selectParams } from './model/customerModel';

export enum Api {
  ListCustomers = '/user/admin/get_all',
  UpdateCustomer = '/user/admin/edit_user',
}

/**
 * @description: level management
 */

export const listCustomers = (params?: selectParams) => {
  return defHttp.get<CustomersListResultModel>({ url: Api.ListCustomers, params });
};

export const updateCustomer = (id: number, data: any) => {
  const { level_id, points, money } = data;
  return defHttp.post({ url: Api.UpdateCustomer, data: { id, level_id, points, money } });
};
