import { defHttp } from '/@/utils/http/axios';
import {
  ConfigGroupsListResultModel,
  ConfigItem,
  ConfigsListResultModel,
  selectParams,
} from './model/configModel';

export enum Api {
  ListConfigGroups = '/cms/get_config_groups',
  ListConfigs = '/cms/get_config',
  UpdateConfig = '/cms/edit_config',
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

export const updateConfig = (_: number, data: ConfigItem) => {
  return defHttp.post<ConfigItem>({ url: Api.UpdateConfig, data });
};
