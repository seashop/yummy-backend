import { defHttp } from '/@/utils/http/axios';
import { useGlobSetting } from '/@/hooks/setting';
import { ListImagesRequest, ListImagesResponse } from '/@/gen/yummy/v1/storage_service';
import { Image } from '/@/gen/yummy/v1/storage';
import { bindParams } from '../util';

const globSetting = useGlobSetting();

enum Api {
  ListCategory = '/images',
  CreateImage = '/images',
  ImageUrl = ':common/images/{id}/url',
  Upload = '/upload',
}

/**
 * @description: category management
 */

export const listImages = (params?: Partial<ListImagesRequest>) => {
  return defHttp.get<ListImagesResponse>({ url: Api.ListCategory, params });
};

export const createImage = (data: Partial<Image>) => {
  return defHttp.post<Image>({ url: Api.ListCategory, data });
};

export const CreateImageUrl = globSetting.apiUrl + globSetting.urlPrefix + Api.Upload;

export const imageUrl = (id: string) => {
  return bindParams(globSetting.apiUrl + globSetting.urlPrefix + Api.ImageUrl, { id });
};
