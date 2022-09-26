<template>
  <Card :hoverable="true" :class="`${prefixCls}__card`">
    <div :class="`${prefixCls}__card-title`">
      <!-- <Image class="icon" :src="goods.img.full_url" /> -->
      <Image class="icon" :src="goods.img.full_url && defaultIma" />

      <div
        style="
          height: 58px;
          width: 200px;
          word-break: break-all;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2; /* 这里是超出几行省略 */
          overflow: hidden;
        "
      >
        <!-- Lucienne Bechtelar Nettie RaynorLucienne Bechtelar Nettie Raynor -->
        {{ goods.title }} {{ goods.description }}
      </div>
    </div>
    <div @click="handleAdd">
      <div :class="`${prefixCls}__card-detail`">
        <div style="display: flex; margin-bottom: 10px">
          <Tag text="9折" color="#ff0000" />
          <Tag text="新品" color="#42CFBE"
        /></div>
        <!-- {{ goods.description }} -->
      </div>
      <div
        :class="`${prefixCls}__card-detail`"
        style="display: flex; justify-content: space-between; align-items: center;margin"
      >
        <div class="detai_icon">
          <ShoppingCartOutlined />
          {{ 100 }}
          <LikeOutlined />
          {{ 1500 }}
        </div>
        <div class="detai_price">
          <s>${{ goods.market_price }}</s>
          <span class="goods_price">${{ goods.price }}</span>
        </div>
        <!-- {{ goods.description }} -->
      </div>
    </div>
    <!-- <BasicButton @click="handleAdd">Add</BasicButton> -->
  </Card>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { Card, Image } from 'ant-design-vue';
  import { ShoppingCartOutlined, LikeOutlined } from '@ant-design/icons-vue';
  import { GoodsItem } from '/@/api/stores/model/goodsModel';
  import Tag from './tag.vue';
  // import BasicButton from '/@/components/Button/src/BasicButton.vue';

  export default defineComponent({
    components: {
      Card,
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
    emits: ['selected'],
    setup(props, { emit }) {
      const defaultIma =
        'https://img2.baidu.com/it/u=305065602,2110439559&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1664038800&t=0c25038a0b97628f7cc9a0727162a0dc';
      function handleAdd() {
        emit('selected', { goods_id: props.goods.goods_id });
      }

      return {
        prefixCls: 'product_card',
        handleAdd,
        defaultIma,
      };
    },
  });
</script>

<style lang="less" scoped>
  .product {
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
        padding-top: 10px;
        padding-left: 30px;
        font-size: 14px;
        color: @text-color-secondary;
      }
      .card-detail {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .goods_price {
    font-size: 18px;
    font-weight: 400;
    color: #ff4258;
    margin-right: 5px;
  }
</style>
