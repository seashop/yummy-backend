import { BasicFetchResult } from '/@/api/model/baseModel';
import { InnConfig_Cat } from '/@/gen/yummy/v1/club';

export interface ConfigItem {
  id: number;
  key: string;
  value: string;
  title: string;
  desc: string;
  component: string;
  props: object;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export interface ConfigGroupItem {
  id: number;
  scope: InnConfig_Cat;
  title: string;
  // created_at: Date;
  // updated_at: Date;
  // deleted_at?: Date;
}

export interface selectParams {
  scope: string;
}

export type ConfigsListResultModel = BasicFetchResult<ConfigItem>;
export type ConfigGroupsListResultModel = BasicFetchResult<ConfigGroupItem>;
