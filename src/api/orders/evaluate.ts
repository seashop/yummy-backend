import { defHttp } from '/@/utils/http/axios';
import { EvaluatesListResultModel, ReplyItem, selectParams } from './model/evaluateModel';

export enum Api {
  ListEvaluates = '/rate/admin/get_all_rate',
  DeleteReply = '/rate/admin/del_rate',
  AddReply = '/rate/admin/add_reply',
}

/**
 * @description: evaluate management
 */

export const listEvaluates = (params?: selectParams) => {
  return defHttp.get<EvaluatesListResultModel>({ url: Api.ListEvaluates, params });
};

export const deleteReply = (id: number) => {
  return defHttp.put({
    url: Api.DeleteReply,
    params: {
      id,
    },
  });
};

export const addReply = (data?: ReplyItem) => {
  return defHttp.post({ url: Api.AddReply, data });
};
