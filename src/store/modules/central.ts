import { defineStore } from 'pinia';
interface ListType {
  created_at: string;
  deleted_at: any;
  description: any;
  dincart_id: number;
  goods_id: number;
  id: number;
  quantity: number;
  served_num: number;
  sku_id: any;
  ucid: number;
  updated_at: string;
}
interface centralType {
  CartList: ListType[];
}
export const useCentralStore = defineStore('app-central', {
  state: (): centralType => {
    return {
      CartList: [],
    };
  },
  getters: {},
  actions: {
    changeCartList(List: any) {
      this.CartList = List;
    },
  },
});
