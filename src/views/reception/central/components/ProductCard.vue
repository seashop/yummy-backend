<template>
  <div
    :class="{
      product__card__card: true,
      acitve: !!CartList.find((item) => item.goods_id === goods.goods_id),
    }"
    style="
      background: #fff;
      padding: 7px;
      margin-bottom: 10px;
      border-radius: 8px;
      position: relative;
    "
  >
    <div class="mark" v-if="!goods.state"> </div>
    <div :class="`${prefixCls}__card-title`">
      <!-- <Image class="icon" :src="goods.img.full_url" /> -->
      <img @click="handleAdd" class="icon" :src="goods.img.full_url && defaultIma" />

      <div
        style="
          overflow: hidden;
          height: 58px;
          width: 158px;
          font-size: 14px;
          font-weight: 500;
          word-break: break-all;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2; /* 这里是超出几行省略 */
        "
      >
        <!-- Lucienne Bechtelar Nettie RaynorLucienne Bechtelar Nettie Raynor -->
        {{ goods.title }} {{ goods.description }}
      </div>
    </div>
    <div>
      <div :class="`${prefixCls}__card-detail`">
        <div
          style="display: flex; justify-content: space-between; margin-bottom: 10px; height: 23px"
        >
          <div style="display: flex">
            <Tag text="热门" color="#ff0000" size="mini" v-if="goods.is_hot" />
            <Tag text="新品" color="#42CFBE" size="mini" v-if="goods.is_new"
          /></div>
          <div class="operations" v-if="!goods.state"> 已售罄 </div>

          <div class="operations" v-if="current.id">
            <div class="input_number">
              <span @click="changeProduct(current.id, --current.quantity)">
                <img src="/@/assets/icons/Group620.png" alt="" />
              </span>
              <div class="num">
                <!-- {{
                  CartList.find((item) => item.goods_id === goods.goods_id) &&
                  CartList.find((item) => item.goods_id === goods.goods_id).quantity
                }} -->

                {{ current.quantity || '' }}
                <!-- {{ goods.quantity }} -->
              </div>
              <span @click="changeProduct(current.id, ++current.quantity)">
                <img src="/@/assets/icons/Group621.png" alt="" />
              </span>
            </div>
          </div>
        </div>
        <!-- {{ goods.description }} -->
      </div>
      <div
        :class="`${prefixCls}__card-detail`"
        style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap"
      >
        <div class="detai_icon">
          <ShoppingCartOutlined :style="{ fontSize: '8px' }" />
          {{ goods.sales }}
          <LikeOutlined :style="{ fontSize: '8px' }" />
          {{ goods.stock }}
        </div>
        <div class="detai_price">
          <s>${{ goods.market_price }}</s>
          <span class="goods_price">${{ goods.price }}</span>
        </div>
        <!-- {{ goods.description }} -->
      </div>
    </div>
    <!-- <BasicButton @click="handleAdd">Add</BasicButton> -->
  </div>
</template>

<script lang="ts">
  import { defineComponent, watch, ref, computed } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useCentralStore } from '/@/store/modules/central';
  import { Image } from 'ant-design-vue';
  import { ShoppingCartOutlined, LikeOutlined } from '@ant-design/icons-vue';
  import { GoodsItem } from '/@/api/stores/model/goodsModel';
  import Tag from './tag.vue';
  // import BasicButton from '/@/components/Button/src/BasicButton.vue';

  export default defineComponent({
    components: {
      Image,
      Tag,
      ShoppingCartOutlined,
      LikeOutlined,
      // BasicButton,
    },
    props: {
      goods: {
        type: Object as PropType<GoodsItem>,
        default: () => null,
      },
    },
    emits: ['selected', 'changeProduct'],
    setup(props, { emit }) {
      const CentralStore = useCentralStore();
      const { CartList } = storeToRefs(CentralStore);
      const current = ref<object>({});
      watch(CartList, () => {
        if (CartList.value && CartList.value.length) {
          const result = CartList.value.find((item) => item.goods_id === props.goods.goods_id);
          if (result) current.value = result;
        }
      });
      const defaultIma =
        'https://img2.baidu.com/it/u=305065602,2110439559&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1664038800&t=0c25038a0b97628f7cc9a0727162a0dc';
      function handleAdd() {
        emit('selected', { goods_id: props.goods.goods_id });
      }
      const changeProduct = (id: number, quantity?: number) => {
        emit('changeProduct', id, quantity);
      };
      return {
        prefixCls: 'product__card',
        handleAdd,
        changeProduct,
        defaultIma,
        current,
        CartList,
      };
    },
  });
</script>

<style lang="less" scoped>
  &__card {
    width: 100%;
    margin-bottom: -8px;

    &-title {
      margin-bottom: 5px;
      font-size: 16px;
      font-weight: 500;
      color: @text-color;

      .icon {
        margin-top: -5px;
        margin-right: 10px;
        font-size: 38px !important;
      }
    }

    &-detail {
      // padding-top: 10px;
      // padding-left: 30px;
      font-size: 14px;
      color: @text-color-secondary;
    }
    .card-detail {
      display: flex;
      justify-content: space-between;

      .detai_price {
        font-size: 14px;
      }
    }
  }
  .acitve {
    box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.05);
    border: 5px solid #ff3d00;
  }
  .mark {
    width: 100%;
    height: 100%;
    background: rgb(255 255 255 / 60%);
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    border-radius: 8px;
  }
  .detai_icon {
    font-size: 12px;
  }
  s {
    font-size: 8px;
  }
  .operations {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    width: 60px;
    // padding: 8px 5px;
    .delete_icon {
      width: 16px;
      height: 16px;
    }
    .input_number {
      display: flex;
      align-items: center;
      span {
        width: 15px;
        height: 15px;
        text-align: center;
        img {
          width: 100%;
        }
      }
      .num {
        padding: 0 10px;
        font-size: 16px;
        font-weight: 700;
        text-align: center;
      }
    }
    // background: #ccc;
  }
  .goods_price {
    font-size: 15px;
    font-weight: 700;
    color: #ff4258;
    margin-right: 5px;
  }
</style>
