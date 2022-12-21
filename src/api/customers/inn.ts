import { ListInnConfigsRequest, ListInnConfigsResponse } from '/@/gen/yummy/v1/club_service';
import { defHttp } from '/@/utils/http/axios';

export enum Api {
  ListInns = '/inns',
  UpdateInn = '/inns/{id}',
}

/**
 * @description: level management
 */

export const listInns = (params?: ListInnConfigsRequest) => {
  return defHttp.get<ListInnConfigsResponse>({ url: Api.ListInns, params });
};

export const updateInn = (id: number, data: any) => {
  const { level_id, points, money } = data;
  return defHttp.post({ url: Api.UpdateInn, data: { id, level_id, points, money } });
};
