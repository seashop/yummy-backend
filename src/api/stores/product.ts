import { defHttp } from '/@/utils/http/axios';
import { bindParams } from '../util';
import { Product } from '/@/gen/yummy/v1/product';
import { ListProductsRequest, ListProductsResponse } from '/@/gen/customer/v1/inn_service';
import { CreateProductRequest } from '/@/gen/yummy/v1/product_service';

enum Api {
  GetProduct = '/inns/{innId}/products/{id}',
  ListProducts = '/inns/{innId}/products',
  CreateProduct = '/inns/{innId}/products',
  UpdateProduct = '/inns/{innId}/products/{id}',
  SwitchProduct = '/order/admin/update',
}

/**
 * @description: category management
 */

export const getProduct = (innId: string, id: string) => {
  return defHttp.get<Product>({
    url: bindParams(Api.GetProduct, { innId, id }),
  });
};

export const listProducts = (params: Partial<ListProductsRequest>) => {
  return defHttp.get<ListProductsResponse>({
    url: bindParams(Api.ListProducts, params),
    params,
  });
};

export const createProduct = (data: Partial<CreateProductRequest>) => {
  console.log(data);
  return defHttp.post<Product>({ url: bindParams(Api.CreateProduct, data), data });
};

export const updateProduct = (data: Product) => {
  return defHttp.patch<Product>({ url: bindParams(Api.UpdateProduct, data), data });
};

export const switchProduct = (id: string, field: string) => {
  return defHttp.put<Product>({
    url: Api.SwitchProduct,
    data: {
      db: 'goods',
      id,
      field,
    },
  });
};
