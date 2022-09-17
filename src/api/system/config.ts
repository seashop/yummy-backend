import { defHttp } from '/@/utils/http/axios';
import {
  ConfigGroupsListResultModel,
  ConfigsListResultModel,
  selectParams,
} from './model/configModel';

export enum Api {
  ListConfigGroups = '/cms/config:groups',
  ListConfigs = '/cms/configs',
  BatchUpdateConfig = '/cms/configs:batch',
}

/**
 * @description: coupon management
 */

export const listConfigGroups = () => {
  return defHttp.get<ConfigGroupsListResultModel>({ url: Api.ListConfigGroups });
};

export const listConfigs = (params?: selectParams) => {
  return defHttp.get<ConfigsListResultModel>({ url: Api.ListConfigs, params });
};

export const batchUpdateConfig = (scope: string, data: object) => {
  return defHttp.post({ url: Api.BatchUpdateConfig + `/${scope}`, data });
};
