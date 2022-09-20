import { defHttp } from '/@/utils/http/axios';
import {
  DiningTableCodeItem,
  DiningTableItem,
  DiningTablesListResultModel,
  selectParams,
} from './model/diningTableModel';
import { bindParams } from '../util';

export enum Api {
  ListDiningTables = '/diningTable/admin',
  GetDiningTable = '/diningTable/admin/{id}/info',
  CreateDiningTable = '/diningTable/admin',
  UpdateDiningTable = '/diningTable/admin/{id}/update',
  DeleteDiningTable = '/diningTable/admin/{id}/destory',
  GetDiningTableCode = '/diningTable/admin/{id}/codes',
}

/**
 * @description: coupon management
 */

export const listDiningTables = (params?: selectParams) => {
  return defHttp.get<DiningTablesListResultModel>({
    url: Api.ListDiningTables,
    params,
  });
};

export const createDiningTable = (data: DiningTableItem) => {
  return defHttp.post<DiningTableItem>({ url: Api.CreateDiningTable, data });
};

export const updateDiningTable = (id: number, data: DiningTableItem) => {
  return defHttp.put<DiningTableItem>({
    url: bindParams(Api.UpdateDiningTable, { id }),
    data,
  });
};

export const deleteDiningTable = (id: number) => {
  return defHttp.delete({
    url: bindParams(Api.DeleteDiningTable, { id }),
  });
};

export const getDiningTableCode = (id: number) => {
  return defHttp.get<DiningTableCodeItem>({
    url: bindParams(Api.GetDiningTableCode, { id }),
  });
};
