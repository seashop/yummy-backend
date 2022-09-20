import { defHttp } from '/@/utils/http/axios';
import { UsersListResultModel, selectParams, UserItem } from './model/userModel';
import { bindParams } from '../util';

export enum Api {
  ListUsers = '/cms/admin/users',
  CreateUser = '/cms/admin/user',
  UpdateUser = '/cms/admin//user/{id}',
  UpdateUserPassword = '/cms/admin/user/{id}/password',
  DeleteUser = '/cms/admin/user/{id}',
}

/**
 * @description: coupon management
 */

export const listUsers = (params?: selectParams) => {
  return defHttp.get<UsersListResultModel>({ url: Api.ListUsers, params });
};

export const createUser = (data: UserItem) => {
  return defHttp.post({ url: Api.CreateUser, data });
};

export const updateUser = (id: number, data: UserItem) => {
  return defHttp.patch({ url: bindParams(Api.UpdateUser, { id }), data });
};

export const updateUserPassword = (id: number, data: UserItem) => {
  return defHttp.patch({ url: bindParams(Api.UpdateUserPassword, { id }), data });
};

export const deleteUser = (id: number) => {
  return defHttp.delete({ url: bindParams(Api.DeleteUser, { id }) });
};
