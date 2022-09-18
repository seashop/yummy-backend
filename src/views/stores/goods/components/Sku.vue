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
              <div class="in_clo" @click="del_canshu(attrIdx, specIdx)">
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
            <button class="btn" type="button" @click="add_canshu(attrIdx)">添加</button>
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
      <div class="form-table" v-show="tableData">
        <div class="stock-title">商品库存</div>
        <table class="table-sku" border="1px solid #ccc">
          <thead>
            <tr>
              <th v-for="(list, index) in tableData" :key="index">{{ list['pName'] }}</th>
              <th width="200">价格</th>
              <th width="200">库存</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in rows" :key="row">
              <template v-for="(item, index2) in tableData">
                <td v-if="!((row - 1) % item.rowspan)" :rowspan="item.rowspan" :key="index2">
                  {{ getName(item, row) }}
                </td>
              </template>
              <td>
                <InputNumber v-model:value="tableList[row - 1].price" placeholder="单价" />
              </td>
              <td>
                <InputNumber v-model:value="tableList[row - 1].stock_num" placeholder="库存" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <PictureDrawer
      :images="images"
      :length="length"
      @register="registerDrawer"
      @reload="handlePictureDrawerRealod"
      @success="handlePictureDrawerSuccess"
    />
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, ref, watch } from 'vue';
  import { Button, Checkbox, Image, Input, InputNumber } from 'ant-design-vue';
  import { set } from 'lodash-es';
  import PictureDrawer from '/@/components/AssetPicker/PictureDrawer.vue';
  import { useDrawer } from '/@/components/Drawer';
  import { Icon } from '/@/components/Icon';
  import { ImageItem } from '/@/api/asset/model/imageModel';
  import { listImages } from '/@/api/asset/image';
  import { GoodsSkuArr, GoodsSkuItem } from '/@/api/stores/model/goodsModel';

  interface SkuSpec {
    cName: string;
    pic?: string;
  }

  interface SkuAttr {
    pName: string;
    rowspan: number;
    spec: Array<SkuSpec>;
  }

  interface SkuData {
    pName: string;
    spec: Array<SkuSpec>;
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

      const images = ref<ImageItem[]>([]);
      const useSpecImg = ref<boolean>(false);
      const drawer = ref<boolean>(false);
      const sku_img_index = ref<number>();
      const attrs = ref<Array<SkuAttr>>([]);
      const attrsImageId = ref<Array<number>>([]);
      const edit_data = ref<GoodsSkuArr | undefined>();
      const img_list = ref<Array<Object>>([]);
      const imageUrl = ref<Array<String>>([]);
      const get_img = ref<Function>();

      // Computed
      // 规格table
      const tableData = computed(() => {
        if (attrs.value.length == 0) {
          return [];
        }
        let tData: Array<SkuData> = [];
        // 初始化tableData
        for (let i = 0; i < attrs.value.length; i++) {
          let row: SkuData = {
            pName: attrs.value[i].pName,
            spec: [],
            price: null,
            stock_num: null,
            specLen: 0,
            rowspan: 1,
          };
          let len2 = attrs.value[i].spec.length;
          let specLen = 0;
          for (let j = 0; j < len2; j++) {
            let cName = attrs.value[i].spec[j].cName;
            if (!cName) {
              continue;
            }
            let spe: SkuSpec = {
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
        let len = tableData.value.length;
        if (len == 0) {
          return 0;
        }
        for (let i = 0; i < len; i++) {
          let specLen = tableData.value[i].specLen || 1;
          rows *= specLen;
        }
        // 每条rowspan都为1情况
        if (rows == 1) {
          return tableData.value[0].spec.length; // 2
        }
        return rows;
      });

      const tableList = computed(() => {
        let tList: Array<GoodsSkuItem> = [];
        if (!tableData.value) {
          return [];
        }
        let srcData = tableData.value;
        for (let i = 0; i < rows.value; i++) {
          let listItem: GoodsSkuItem = {};
          if (edit_data?.value?.list) {
            let e = edit_data?.value.list;
            // 判断 e[i]['price']，如果 e[i]不存在就会报错
            if (e[i]) {
              listItem.price = e[i].price;
              listItem.stock_num = e[i].stock_num;
            }
          }
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
            set(listItem, key, spec[index].cName);
          }
          tList.push(listItem);
        }
        return tList;
      });

      // 修改时的原数据
      watch(
        () => props.rdata,
        (e) => {
          edit_data.value = e;
          edit_old(e);
        },
        {
          immediate: true,
        },
      );

      // 父组件点击提交按钮，本组件传递数据出去
      watch([tableList, useSpecImg], () => {
        emit('result', {
          list: tableList.value,
          sku_img_id: useSpecImg.value ? attrsImageId.value : [],
        });
      });

      // Methods
      async function handlePictureDrawerRealod() {
        images.value = (await listImages()).items;
      }
      handlePictureDrawerRealod();

      function handlePictureDrawerSuccess({ data, items }) {
        let item = items?.length > 0 ? (items[0] as ImageItem) : undefined;
        attrs.value[0].spec[data.specIdx].pic = item?.full_url;
        attrsImageId.value[data.specIdx] = item ? item.id : 0;
      }

      // 获取修改数据
      function edit_old(res: any) {
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
                imageUrl.value.splice(vk, 1, vv.imgUrl);
                attrsImageId.value.splice(vk, 1, vv.img_id);
                useSpecImg.value = true;
              } else {
                useSpecImg.value = false;
              }
            }
          }
          let obj = {
            pName: tv.k,
            rowspan: 1,
            spec: arr,
          };
          console.log('sku_img', arr);
          if (attrs.value.length >= 3) {
            return;
          }
          attrs.value.push(obj);
        }
      }
      //新增规格名称
      function addItem() {
        let obj = {
          pName: '',
          rowspan: 1,
          spec: [{ cName: '' }],
        };
        if (attrs.value.length >= 3) {
          return;
        }
        attrs.value.push(obj);
      }
      function toDelete(index) {
        img_list.value = [];
        attrs.value.splice(index, 1);
      }
      //新增规格参数
      function add_canshu(index) {
        attrs.value[index].spec.push({
          cName: '',
        });
      }
      //删除规格参数
      function del_canshu(index, index2) {
        attrs.value[index].spec.splice(index2, 1);
      }

      function getName(obj, index) {
        if (obj) {
          let r = parseInt((index - 1) / obj['rowspan']);
          let l = obj['specLen'] || 1;
          let key = r % l;
          return obj['spec'] && obj['spec'][key] && obj['spec'][key]['cName'];
        }
      }

      // 父组件提交成功后，清空本组件数据
      function clear() {
        attrs.value = [];
      }

      return {
        registerDrawer,
        openDrawer,
        handlePictureDrawerRealod,
        handlePictureDrawerSuccess,
        images,
        oncli: '',
        img_list,
        drawer,
        length: 1,
        useSpecImg,
        sku_img_index, //规格图片下标
        attrs,
        inputVisible: false,
        inputValue: '',
        edit_data, //原修改数据
        get_img,
        imageUrl,
        attrsImageId,
        // computed
        tableData,
        rows,
        tableList,
        // method
        addItem,
        toDelete,
        add_canshu,
        del_canshu,
        getName,
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
