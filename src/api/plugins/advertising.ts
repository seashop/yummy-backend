import { defHttp } from '/@/utils/http/axios';
import {
  AdContentItem,
  AdContentsListResultModel,
  AdPositionsListResultModel,
  selectParams,
} from './model/advertisingModel';

export enum Api {
  ListAdPositions = '/banner/get_all_banner',
  ListAdContents = '/banner/admin/banner_all_item',
  GetAdContent = '/banner/get_banner_content',
  CreateAdContent = '/banner/admin/add_banner',
  UpdateAdContent = '/banner/admin/edit_banner',
  DeleteAdContent = '/banner/admin/del_banner',
}

/**
 * @description: coupon management
 */

export const listAdPositions = (params?: selectParams) => {
  return defHttp.get<AdPositionsListResultModel>({ url: Api.ListAdPositions, params });
};

export const listAdContents = (params?: selectParams) => {
  return defHttp.get<AdContentsListResultModel>({ url: Api.ListAdContents, params });
};

export const createAdContent = (data: AdContentItem) => {
  return defHttp.post<AdContentsListResultModel>({ url: Api.CreateAdContent, data });
};

export const updateAdContent = (data: AdContentItem) => {
  return defHttp.post<AdContentsListResultModel>({ url: Api.UpdateAdContent, data });
};

export const deleteAdContent = (id: number) => {
  return defHttp.put<AdContentsListResultModel>({
    url: Api.DeleteAdContent,
    params: {
      id,
    },
  });
};
