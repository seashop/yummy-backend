export interface AnalysisQuotasModel {
  cards: GrowCardModel[];
}

export interface GrowCardModel {
  icon: string;
  title: string;
  value: number;
  total: number;
  color: string;
  action: string;
}

export interface AnalysisTableItemModel {
  day: string;
  order_num: number;
  user_num: number;
}
