import { defHttp } from '/@/utils/http/axios';
import { ListCatsRequest, ListCatsResponse } from '/@/gen/customer/v1/inn_service';
import { ProductCat } from '/@/gen/yummy/v1/product';
import { bindParams } from '../util';

enum Api {
  ListCategory = '/inns/{innId}/productCats',
  CreateCategory = '/inns/{innId}/productCats',
  UpdateCategory = '/inns/{innId}/productCats/{id}',
}

/**
 * @description: category management
 */

export const listCategory = (params: Partial<ListCatsRequest>) => {
  console.log(params);
  return defHttp.get<ListCatsResponse>({
    url: bindParams(Api.ListCategory, params),
    params,
  });
};

export const createCategory = (data: Partial<ProductCat>) => {
  return defHttp.post<ProductCat>({ url: bindParams(Api.CreateCategory, data), data });
};

export const updateCategory = (data?: ProductCat) => {
  return defHttp.post<ProductCat>({ url: Api.UpdateCategory, data });
};
