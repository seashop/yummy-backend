import { bindParams } from '../util';
import { ListInnsRequest, ListInnsResponse } from '/@/gen/merchant/v1/inn_service';
import { Inn } from '/@/gen/yummy/v1/club';
import { defHttp } from '/@/utils/http/axios';

export enum Api {
  ListInns = '/inns:list',
  CreateInn = '/inns',
  UpdateInn = '/inns/{id}',
}

/**
 * @description: level management
 */

export const listInns = (data?: ListInnsRequest) => {
  return defHttp.post<ListInnsResponse>({ url: Api.ListInns, data });
};

export const createInn = (data: Inn) => {
  return defHttp.post({
    url: Api.CreateInn,
    data: data,
  });
};

export const updateInn = (id: string, data: Inn) => {
  return defHttp.patch({
    url: bindParams(Api.UpdateInn, { id }),
    data: data,
  });
};
