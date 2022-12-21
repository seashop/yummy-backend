import { defHttp } from '/@/utils/http/axios';
import { UserItem } from './model/userModel';
import { bindParams } from '../util';
import { User } from '/@/gen/yummy/v1/user';
import { ListUsersRequest, ListUsersResponse } from '/@/gen/yummy/v1/user_service';

export enum Api {
  ListUsers = '/users',
  CreateUser = '/users',
  UpdateUser = '/users/{id}',
  UpdateUserPassword = '/users/{id}/password',
  DeleteUser = '/users/{id}',
}

/**
 * @description: coupon management
 */

export const listUsers = (params?: ListUsersRequest) => {
  return defHttp.get<ListUsersResponse>({ url: Api.ListUsers, params });
};

export const createUser = (data: User) => {
  return defHttp.post({ url: Api.CreateUser, data });
};

export const updateUser = (id: number, data: User) => {
  return defHttp.patch({ url: bindParams(Api.UpdateUser, { id }), data });
};

export const updateUserPassword = (id: number, data: UserItem) => {
  return defHttp.patch({ url: bindParams(Api.UpdateUserPassword, { id }), data });
};

export const deleteUser = (id: number) => {
  return defHttp.delete({ url: bindParams(Api.DeleteUser, { id }) });
};
