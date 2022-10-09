import { defineStore } from 'pinia';
import { store } from '/@/store';
import { PresetModel } from '/@/api/common/model/preset';
import { defaultCommonPreset } from '/@/api/common/preset';
import { DiningTableItem } from '/@/api/plugins/model/diningTableModel';
import { listDiningTables } from '/@/api/reception/dining';

interface YummyState {
  preset?: PresetModel;
  diningTables?: DiningTableItem[];
  preFloor?: string;
}

export const useYummyStore = defineStore({
  id: 'yummy',
  state: (): YummyState => ({
    preset: undefined,
    diningTables: undefined,
    preFloor: undefined,
  }),
  getters: {
    getPreset(): PresetModel {
      return this.preset || ({} as PresetModel);
    },
    getPreFloor(): string {
      return this.preFloor || '';
    },
  },
  actions: {
    setPreset(preset: PresetModel): void {
      this.preset = preset;
    },

    setDiningTables(tables: DiningTableItem[]): void {
      this.diningTables = tables;
    },

    setPreFloor(floor: string): void {
      console.log('setPreFloor', floor);
      this.preFloor = floor;
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
