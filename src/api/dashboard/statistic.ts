import { defHttp } from '/@/utils/http/axios';
import { AnalysisQuotasModel, AnalysisTableItemModel } from './model/growCardModel';

enum Api {
  GetAnalysisQuotas = '/statistic/admin/get_index_data',
  GetAnalysisTable = '/statistic/admin/get_table',
}

/**
 * @description: Get statistic
 */

export const getAnalysisQuotas = () => {
  return defHttp.get<AnalysisQuotasModel>({ url: Api.GetAnalysisQuotas });
};

export const getAnalysisTable = () => {
  return defHttp.post<AnalysisTableItemModel[]>({ url: Api.GetAnalysisTable });
};
