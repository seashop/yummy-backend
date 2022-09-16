import { defHttp } from '/@/utils/http/axios';
import { ArticleItem, ArticlesListResultModel, selectParams } from './model/articleModel';

export enum Api {
  ListArticles = '/article/admin/get_all_article',
  GetArticle = '/article/get_article_content',
  CreateArticle = '/article/admin/add_article',
  UpdateArticle = '/article/admin/edit_article',
  DeleteArticle = '/article/admin/del_article',
  SwitchArticle = '/order/admin/update',
}

/**
 * @description: coupon management
 */

export const listArticles = (params?: selectParams) => {
  return defHttp.get<ArticlesListResultModel>({ url: Api.ListArticles, params });
};

export const createArticle = (data: ArticleItem) => {
  return defHttp.post<ArticlesListResultModel>({ url: Api.CreateArticle, data });
};

export const updateArticle = (data: ArticleItem) => {
  return defHttp.post<ArticlesListResultModel>({ url: Api.UpdateArticle, data });
};

export const deleteArticle = (id: number) => {
  return defHttp.put<ArticlesListResultModel>({
    url: Api.DeleteArticle,
    params: {
      id,
    },
  });
};

export const switchArticle = (id: number, fields: object) => {
  return defHttp.put<ArticlesListResultModel>({
    url: Api.SwitchArticle,
    data: {
      ...fields,
      db: 'article',
      id,
    },
  });
};
