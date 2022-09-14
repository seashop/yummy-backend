import { defHttp } from '/@/utils/http/axios';
import { CategoryItem, CategoryListResultModel, selectParams } from './model/categoryModel';

enum Api {
  CreateCategory = '/category/admin/add_category',
  UpdateCategory = '/category/admin/edit_category',
  ListCategory = '/category/admin/all_category',
}

/**
 * @description: category management
 */

export const listCategory = (params?: selectParams) => {
  return defHttp.get<CategoryListResultModel>({ url: Api.ListCategory, params });
};

export const createCategory = (data?: CategoryItem) => {
  return defHttp.post<CategoryItem>({ url: Api.CreateCategory, data });
};

export const updateCategory = (data?: CategoryItem) => {
  return defHttp.post<CategoryItem>({ url: Api.UpdateCategory, data });
};
