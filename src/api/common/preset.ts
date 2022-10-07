import { defHttp } from '/@/utils/http/axios';
import { PresetModel } from './model/preset';

export enum Api {
  DefaultCommonPreset = '/common/preset:default',
}

/**
 * @description: level management
 */

export const defaultCommonPreset = () => {
  return defHttp.get<PresetModel>({ url: Api.DefaultCommonPreset });
};
