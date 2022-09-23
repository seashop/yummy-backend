<template>
  <Card :hoverable="true" :class="`${prefixCls}__card`">
    <div :class="`${prefixCls}__card-title`">
      <!-- <Image class="icon" :src="goods.img.full_url" /> -->
      <Image class="icon" :src="goods.img.full_url && defaultIma" />

      {{ goods.title }}
    </div>
    <div @click="handleAdd">
      <div :class="`${prefixCls}__card-detail`">
        {{ goods.description }}
      </div>
      <div :class="`${prefixCls}__card-detail`">
        <span class="goods_price">$99.99</span>
        <s>$199.00</s>
        <!-- {{ goods.description }} -->
      </div>
    </div>
    <!-- <BasicButton @click="handleAdd">Add</BasicButton> -->
  </Card>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { Card, Image } from 'ant-design-vue';
  import { GoodsItem } from '/@/api/stores/model/goodsModel';
  // import BasicButton from '/@/components/Button/src/BasicButton.vue';

  export default defineComponent({
    components: {
      Card,
      Image,
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

      .ant-card-body {
        padding: 16px;
      }

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
    }
  }
  .goods_price {
    color: #ff4258;
    margin-right: 5px;
  }
</style>
