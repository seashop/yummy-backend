import { defineStore } from 'pinia';
import { store } from '/@/store';
import { PresetModel } from '/@/api/common/model/preset';
import { defaultCommonPreset } from '/@/api/common/preset';

interface YummyState {
  preset?: PresetModel;
}

export const useYummyStore = defineStore({
  id: 'yummy',
  state: (): YummyState => ({
    preset: undefined,
  }),
  getters: {
    getPreset(): PresetModel {
      return this.preset || ({} as PresetModel);
    },
  },
  actions: {
    setPreset(preset: PresetModel): void {
      this.preset = preset;
    },

    resetState() {
      this.preset = undefined;
    },

    async getPresetAction(): Promise<PresetModel | undefined> {
      if (!this.preset) {
        const preset = await defaultCommonPreset();
        this.setPreset(preset);
      }

      return this.preset;
    },
  },
});

// Need to be used outside the setup
export function useYummyStoreWithOut() {
  return useYummyStore(store);
}
