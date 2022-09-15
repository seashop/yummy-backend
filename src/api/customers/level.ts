import { defHttp } from '/@/utils/http/axios';
import { LevelItem, LevelsListResultModel, selectParams } from './model/levelModel';

export enum Api {
  ListLevels = '/level/admin/get_all_level',
  CreateLevel = '/level/admin/add_level',
  UpdateLevel = '/level/admin/edit_level',
  DeleteLevel = '/level/admin/del_level',
}

/**
 * @description: level management
 */

export const listLevels = (params?: selectParams) => {
  return defHttp.get<LevelsListResultModel>({ url: Api.ListLevels, params });
};

export const createLevel = (data: LevelItem) => {
  return defHttp.post<LevelsListResultModel>({ url: Api.CreateLevel, data });
};

export const updateLevel = (data: LevelItem) => {
  return defHttp.post<LevelsListResultModel>({ url: Api.UpdateLevel, data });
};

export const deleteLevel = (id: number) => {
  return defHttp.put<LevelsListResultModel>({
    url: Api.DeleteLevel,
    params: {
      id,
    },
  });
};
