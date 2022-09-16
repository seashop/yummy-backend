import { defHttp } from '/@/utils/http/axios';
import { SearchItem, SearchsListResultModel, selectParams } from './model/searchModel';

export enum Api {
  ListSearchs = '/search/record',
  CreateSearch = '/search/admin/add_record',
  UpdateSearch = '/search/admin/edit_record',
  DeleteSearch = '/search/admin/del_record',
}

/**
 * @description: coupon management
 */

export const listSearchs = (params?: selectParams) => {
  return defHttp.get<SearchsListResultModel>({ url: Api.ListSearchs, params });
};

export const createSearch = (data: SearchItem) => {
  return defHttp.post<SearchItem>({ url: Api.CreateSearch, data });
};

export const updateSearch = (_: number, data: SearchItem) => {
  return defHttp.post<SearchItem>({ url: Api.CreateSearch, data });
};

export const deleteSearch = (name: string) => {
  return defHttp.put({
    url: Api.DeleteSearch,
    params: {
      name,
    },
  });
};
