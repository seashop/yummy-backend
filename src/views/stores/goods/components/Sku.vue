<template>
  <div id="sku_tag">
    <div class="form-group">
      <div class="form-h">商品规格</div>
      <div class="form-item" v-for="(attr, attrIdx) in attrs" :key="attrIdx">
        <div class="form-title">
          <Input class="sku-name" v-model:value="attr.pName" placeholder="规格名" />
          <Checkbox v-model:checked="useSpecImg" v-if="attrIdx == 0">添加规格图片</Checkbox>
          <span class="delete" @click="toDelete(attrIdx)">×</span>
        </div>
        <ul class="form-list">
          <li v-for="(spec, specIdx) in attr.spec" :key="specIdx">
            <div class="spgg_r_02_2">
              <Input v-model:value="spec.cName" />
              <div class="in_clo" @click="delSpu(attrIdx, specIdx)">
                <i class="el-icon-error" style="color: #cecece"></i>
              </div>
            </div>
            <div v-if="useSpecImg && attrIdx == 0">
              <div
                class="sku_idx_img"
                @click="() => openDrawer(true, { specIdx })"
                v-if="useSpecImg"
              >
                <Image v-if="spec.pic" :src="spec.pic" />
                <Icon v-else icon="ant-design:plus-outlined" class="sku-img" />
              </div>
            </div>
          </li>
          <li>
            &emsp;
            <button class="btn" type="button" @click="addSpu(attrIdx)">添加</button>
          </li>
        </ul>
        <div class="spgg_r_04" v-if="useSpecImg && attrIdx == 0">
          仅支持为第一组规格设置规格图片，建议尺寸：160*160像素
        </div>
      </div>
      <div class="form-btn-group">
        <Button
          size="small"
          :disabled="attrs.length == 3 ? true : false"
          type="default"
          name
          @click="addItem"
        >
          添加规格项目
        </Button>
      </div>
      <div class="form-table" v-show="tableSpu">
        <div class="stock-title">商品库存</div>
        <table class="table-sku" border="1px solid #ccc">
          <thead>
            <tr>
              <th v-for="(list, index) in tableSpu" :key="index">{{ list['pName'] }}</th>
              <th width="200">价格</th>
              <th width="200">库存</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(sku, index) in tableSku" :key="index">
              <template v-for="(spu, spuIdx) in tableSpu">
                <td v-if="!(index % spu.rowspan)" :rowspan="spu.rowspan" :key="spuIdx">
                  {{ getName(spu, index) }}
                </td>
              </template>
              <td>
                <InputNumber v-model:value="sku.price" placeholder="单价" />
              </td>
              <td>
                <InputNumber v-model:value="sku.stock_num" placeholder="库存" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <PictureDrawer
      :images="images"
      :length="1"
      @register="registerDrawer"
      @reload="handlePictureDrawerRealod"
      @success="handlePictureDrawerSuccess"
    />
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, reactive, ref, toRefs, watch } from 'vue';
  import { Button, Checkbox, Image, Input, InputNumber } from 'ant-design-vue';
  import { get } from 'lodash-es';
  import PictureDrawer from '/@/components/AssetPicker/PictureDrawer.vue';
  import { useDrawer } from '/@/components/Drawer';
  import { Icon } from '/@/components/Icon';
  import { ImageItem } from '/@/api/asset/model/imageModel';
  import { listImages } from '/@/api/asset/image';
  import { GoodsSkuArr, GoodsSkuItem } from '/@/api/stores/model/goodsModel';

  interface SpuItem {
    cName: string;
    pic?: string;
  }

  interface SkuAttr {
    pName: string;
    rowspan: number;
    spec: Array<SpuItem>;
  }

  interface SpuBox {
    pName: string;
    spec: Array<SpuItem>;
    price: number | null;
    stock_num: number | null;
    specLen: number;
    rowspan: number;
  }

  export default defineComponent({
    name: 'Sku',
    components: {
      Button,
      Checkbox,
      Icon,
      Image,
      Input,
      InputNumber,
      PictureDrawer,
    },
    props: {
      rdata: {
        type: Object as PropType<GoodsSkuArr>,
        defualt: null,
      }, // 修改时的原数据
    },
    emits: ['result'],
    setup(props, { emit }) {
      const [registerDrawer, { openDrawer }] = useDrawer();

      const state = reactive({
        images: ref<ImageItem[]>([]),
        useSpecImg: ref<boolean>(false),
        drawer: ref<boolean>(false),
        attrs: ref<Array<SkuAttr>>([]),
        attrsImageId: ref<Array<number>>([]),
        ovConfig: ref<GoodsSkuArr | undefined>(), // 原修改数据
        imgList: ref<Array<Object>>([]),
        imageUrl: ref<Array<String>>([]),
      });

      // Computed
      // 规格table
      const tableSpu = computed(() => {
        if (state.attrs.length == 0) {
          return [];
        }
        let tData: Array<SpuBox> = [];
        // 初始化tableData
        for (let i = 0; i < state.attrs.length; i++) {
          let row: SpuBox = {
            pName: state.attrs[i].pName,
            spec: [],
            price: null,
            stock_num: null,
            specLen: 0,
            rowspan: 1,
          };
          let len2 = state.attrs[i].spec.length;
          let specLen = 0;
          for (let j = 0; j < len2; j++) {
            let cName = state.attrs[i].spec[j].cName;
            if (!cName) {
              continue;
            }
            let spe: SpuItem = {
              cName,
            };
            ++specLen;
            row.spec.push(spe);
          }
          row.specLen = specLen;
          tData.push(row);
        }
        // 获取rowspan
        for (let k = 0, len3 = tData.length; k < len3; k++) {
          let rowspan = 1;
          for (let k1 = k + 1; k1 < len3; k1++) {
            let kSpecLen = tData[k1]['specLen'] || 1;
            rowspan *= kSpecLen;
          }
          tData[k].rowspan = rowspan;
        }
        return tData;
      });

      // 规格条数
      const rows = computed(() => {
        let rows = 1;
        let len = tableSpu.value.length;
        if (len == 0) {
          return 0;
        }
        for (let i = 0; i < len; i++) {
          let specLen = tableSpu.value[i].specLen || 1;
          rows *= specLen;
        }
        // 每条rowspan都为1情况
        if (rows == 1) {
          return tableSpu.value[0].spec.length; // 2
        }
        return rows;
      });

      function ovValue(i: number, field: string) {
        const ov = state.ovConfig?.list;
        if (ov && ov[i]) {
          return get(ov[i], field, undefined);
        }
        return undefined;
      }

      const tableSku = computed(() => {
        if (!tableSpu.value) {
          return [];
        }
        let spuList: Array<GoodsSkuItem> = [];
        const srcData = tableSpu.value;
        for (let i = 0; i < rows.value; i++) {
          let skuItem: GoodsSkuItem = {
            price: ovValue(i, 'price'),
            stock_num: ovValue(i, 'stock_num'),
          };
          //构建动态项
          for (let j = 0; j < srcData.length; j++) {
            //构造第一类目
            let key = srcData[j].pName as string;
            let rowspan = srcData[j].rowspan;
            let len = srcData[j].specLen;
            if (!len) {
              continue;
            }
            let spec = srcData[j].spec;
            let index = parseInt(i / rowspan) % len;
            skuItem[key] = spec[index].cName;
          }
          spuList.push(skuItem);
        }
        return spuList;
      });

      // 修改时的原数据
      watch(
        () => props.rdata,
        (e) => {
          console.log(e);
          state.ovConfig = e;
          editOld(e);
        },
        {
          immediate: true,
        },
      );

      // 父组件点击提交按钮，本组件传递数据出去
      watch(
        [tableSku, state.attrsImageId],
        () => {
          emit('result', {
            list: tableSku.value,
            sku_img_id: state.useSpecImg ? state.attrsImageId : [],
          });
        },
        {
          immediate: true,
        },
      );

      // Methods
      async function handlePictureDrawerRealod() {
        state.images = (await listImages()).items;
      }
      handlePictureDrawerRealod();

      function handlePictureDrawerSuccess({ data, items }) {
        let item = items?.length > 0 ? (items[0] as ImageItem) : undefined;
        state.attrs[0].spec[data.specIdx].pic = item?.full_url;
        state.attrsImageId[data.specIdx] = item ? item.id : 0;
      }

      // 获取修改数据
      function editOld(res: any) {
        if (res === undefined) {
          return;
        }
        for (let [tk, tv] of Object.entries(res?.tree)) {
          let arr = [];
          for (let [vk, vv] of Object.entries(tv.v)) {
            arr[vk] = {};
            arr[vk]['cName'] = vv.name;
            if (tk == 0) {
              if (vv.img_id) {
                arr[vk]['pic'] = vv.imgUrl;
                state.imageUrl.splice(vk, 1, vv.imgUrl);
                state.attrsImageId.splice(vk, 1, vv.img_id);
                state.useSpecImg = true;
              } else {
                state.useSpecImg = false;
              }
            }
          }
          let obj = {
            pName: tv.k,
            rowspan: 1,
            spec: arr,
          };
          console.log('sku_img', arr);
          if (state.attrs.length >= 3) {
            return;
          }
          state.attrs.push(obj);
        }
      }

      //新增规格名称
      function addItem() {
        let obj = {
          pName: '',
          rowspan: 1,
          spec: [{ cName: '' }],
        };
        if (state.attrs.length >= 3) {
          return;
        }
        state.attrs.push(obj);
      }
      function toDelete(index) {
        state.imgList = [];
        state.attrs.splice(index, 1);
      }
      //新增规格参数
      function addSpu(index) {
        state.attrs[index].spec.push({
          cName: '',
        });
      }
      //删除规格参数
      function delSpu(index, index2) {
        state.attrs[index].spec.splice(index2, 1);
      }

      function getName(obj, index) {
        if (obj) {
          let r = parseInt(index / obj['rowspan']);
          let l = obj['specLen'] || 1;
          let key = r % l;
          return obj['spec'] && obj['spec'][key] && obj['spec'][key]['cName'];
        }
      }

      // 父组件提交成功后，清空本组件数据
      function clear() {
        state.attrs = [];
      }

      return {
        ...toRefs(state),
        registerDrawer,
        openDrawer,
        handlePictureDrawerRealod,
        handlePictureDrawerSuccess,
        // computed
        rows,
        tableSpu,
        tableSku,
        // method
        addItem,
        toDelete,
        addSpu,
        delSpu,
        getName,
        ovValue,
        clear,
      };
    },
  });
</script>

<style lang="less">
  #sku_tag {
    width: 60%;
  }

  .spgg_r_04 {
    padding-left: 20px;
  }

  #sku_tag th {
    height: 40px;
    line-height: 40px;
    text-indent: 10px;
  }

  /**reset*/
  button,
  input {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    outline: none;
  }

  .btn {
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    color: #333;
    vertical-align: middle;
    cursor: pointer;
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;

    :active,
    :focus,
    :hover {
      text-decoration: none;
      color: #333;
      background-color: #fcfcfc;
      border-color: #ccc;
    }
  }

  /*table*/
  .form-item {
    padding: 5px 0;
  }

  table {
    border: 0;
    border-collapse: collapse;
    border-spacing: 0;

    .table-sku {
      width: 100%;
      background-color: #fff;
      text-align: left;
    }

    .table-sku td {
      border: 1px solid #e5e5e5;
      padding: 3px 10px;
    }

    .table-sku td input {
      padding: 3px 10px;
      border: 1px solid #ccc;
    }
  }

  .form-title {
    background: #f8f8f8;
    padding: 5px 10px;
    position: relative;

    .label {
      color: #999;
    }

    .delete {
      width: 20px;
      height: 20px;
      line-height: 20px;
      border: 1px solid #ccc;
      border-radius: 50%;
      position: absolute;
      right: 15px;
      top: 50%;
      margin-top: -10px;
      text-align: center;
      color: #fff;
      background: #ccc;
      cursor: pointer;
    }

    input {
      background: #fff;
      border: 1px solid #ccc;
      padding: 10px;
    }
  }

  .form-list {
    padding: 5px 10px;
    margin-top: 0;
    display: flex;
  }

  .form-list li {
    /*display: inline-block;*/
    margin-top: 10px;
    list-style: none;
  }

  .spec-item {
    width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .form-list,
  .form-title {
    text-align: left;
  }

  .form-list input {
    background: #fff;
    margin-right: 10px;
    border: 1px solid #ccc;
    padding: 10px;
  }

  .form-group {
    border: 1px solid #ccc;
    padding: 10px;
  }

  .form-table {
    margin-top: 20px;

    input {
      height: 30px;
      line-height: 30px;
    }
  }

  .form-btn-group {
    margin-top: 10px;
    background: #f8f8f8;
    padding: 10px;
  }

  .stock-title,
  .form-h {
    height: 40px;
    line-height: 40px;
  }

  .spgg_r_02 {
    padding: 15px 10px;
    display: flex;
    line-height: 28px;
  }

  .spgg_r_02_2 {
    margin-left: 10px;
    position: relative;
    width: 100px;
  }

  .in_clo {
    position: absolute;
    top: -13px;
    right: -5px;
  }

  .sku-name {
    width: 200px;
    padding: 3px 10px;
  }

  .sku-img {
    margin-top: 45%;
    height: 28px;
    width: 28px;
  }

  .sku_idx_img {
    width: 74px;
    height: 74px;
    position: relative;
    background-color: #fbfdff;
    border: 1px dashed #c0ccda;
    border-radius: 6px;
    box-sizing: border-box;
    vertical-align: top;
    text-align: center;
    margin: 6px 6px 6px 10px;

    img {
      width: 72px;
      height: 72px;
      border: 1px solid #bfbfbf;
      border-radius: 3px;
    }

    .el-icon-circle-close {
      position: absolute;
      top: -13px;
      right: -10px;
      color: #7c7c7c;
      font-size: 25px;
      cursor: pointer;
    }
  }
</style>
