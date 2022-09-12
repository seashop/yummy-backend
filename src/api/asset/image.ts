import { defHttp } from '/@/utils/http/axios';
import { useGlobSetting } from '/@/hooks/setting';
import { ImageModel } from './model/imageModel';

const globSetting = useGlobSetting();

enum Api {
  ListCategory = '/img_category/admin/get_all_img',
  CreateImage = '/img_category/admin/upload/img',
}

/**
 * @description: category management
 */

export const listImages = () => {
  return defHttp.get<ImageModel[]>({ url: Api.ListCategory });
};

export const CreateImageUrl = globSetting.apiUrl + globSetting.urlPrefix + Api.CreateImage;
