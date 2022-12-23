import { bindParams } from '../util';
import { ListInnsRequest, ListInnsResponse } from '/@/gen/merchant/v1/inn_service';
import { Inn, InnConfig } from '/@/gen/yummy/v1/club';
import { ListInnConfigsResponse } from '/@/gen/yummy/v1/club_service';
import { defHttp } from '/@/utils/http/axios';

export enum Api {
  ListInns = '/inns:list',
  CreateInn = '/inns',
  UpdateInn = '/inns/{id}',
  ListInnConfigs = '/inns/{innId}/configs:list',
  BatchUpdateInnConfigs = '/inns/{innId}/configs:batchUpdate',
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

export const updateInn = (data: Inn) => {
  return defHttp.patch({
    url: bindParams(Api.UpdateInn, data),
    data: data,
  });
};

export const listInnConfigs = (innId: string) => {
  return defHttp.post<ListInnConfigsResponse>({
    url: bindParams(Api.ListInnConfigs, { innId }),
  });
};

export const batchUpdateInnConfigs = (innId: string, data: InnConfig[]) => {
  return defHttp.post<ListInnConfigsResponse>({
    url: bindParams(Api.BatchUpdateInnConfigs, { innId }),
    data,
  });
};
