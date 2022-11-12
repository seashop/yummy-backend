import { defineStore } from 'pinia';
import { store } from '/@/store';
import { PresetModel } from '/@/api/common/model/preset';
import { defaultCommonPreset } from '/@/api/common/preset';
import { DiningTableItem } from '/@/api/plugins/model/diningTableModel';
import { listDiningTables } from '/@/api/reception/dining';
import { createLocalStorage } from '/@/utils/cache';
import { YUMMY_KEY } from '/@/enums/cacheEnum';
import { YummySetting, yummySetting } from '/@/settings/yummySetting';

const ls = createLocalStorage();

const lsYummySetting = (ls.get(YUMMY_KEY) || yummySetting) as YummySetting;

interface YummyState {
  preset?: PresetModel;
  diningTables?: DiningTableItem[];
  yummyInfo: YummySetting;
}

export const useYummyStore = defineStore({
  id: 'yummy',
  state: (): YummyState => ({
    preset: undefined,
    diningTables: undefined,
    yummyInfo: lsYummySetting,
  }),
  getters: {
    getPreset(): PresetModel {
      return this.preset || ({} as PresetModel);
    },
    getFloor(): string {
      return this.yummyInfo.floor || '';
    },
  },
  actions: {
    setPreset(preset: PresetModel): void {
      this.preset = preset;
    },

    setDiningTables(tables: DiningTableItem[]): void {
      this.diningTables = tables;
    },

    setFloor(floor: string): void {
      this.yummyInfo = { ...this.yummyInfo, ...{ floor } };
      console.log('setFloor', floor);
      ls.set(YUMMY_KEY, this.yummyInfo);
    },

    resetState() {
      this.preset = undefined;
    },

    async init() {
      await this.getPresetAction();
    },

    async getPresetAction(): Promise<PresetModel | undefined> {
      if (!this.preset) {
        const preset = await defaultCommonPreset();
        this.setPreset(preset);
      }

      return this.preset;
    },

    async getDiningTablesAction(params: any): Promise<DiningTableItem[] | undefined> {
      if (!this.diningTables) {
        const diningTables = await listDiningTables(params);
        this.setDiningTables(diningTables.items);
      }

      return this.diningTables;
    },
  },
});

// Need to be used outside the setup
export function useYummyStoreWithOut() {
  return useYummyStore(store);
}
