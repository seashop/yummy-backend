import { defHttp } from '/@/utils/http/axios';
import {
  DiningTableCodeItem,
  DiningTableItem,
  DiningTablesListResultModel,
  selectParams,
} from './model/diningTableModel';

export enum Api {
  ListDiningTables = '/index/admin/get_all_zz',
  GetDiningTable = '/index/admin/get_zz',
  CreateDiningTable = '/index/admin/add_zz',
  UpdateDiningTable = '/index/admin/edit_zz',
  DeleteDiningTable = '/index/admin/del_zz',
  GetDiningTableCode = '/order/admin/code_order',
}

/**
 * @description: coupon management
 */

export const listDiningTables = (params?: selectParams) => {
  return defHttp.get<DiningTablesListResultModel>({ url: Api.ListDiningTables, params });
};

export const createDiningTable = (data: DiningTableItem) => {
  return defHttp.post<DiningTableItem>({ url: Api.CreateDiningTable, data });
};

export const updateDiningTable = (data: DiningTableItem) => {
  return defHttp.post<DiningTableItem>({ url: Api.UpdateDiningTable, data });
};

export const deleteDiningTable = (id: number) => {
  return defHttp.put({
    url: Api.DeleteDiningTable,
    params: {
      id,
    },
  });
};

export const getDiningTableCode = (id: number) => {
  return defHttp.get<DiningTableCodeItem>({
    url: Api.GetDiningTableCode,
    params: {
      id,
    },
  });
};
