<template>
  <div
    :class="{ tag: size != 'mini', tag_size: size == 'mini' }"
    :style="borderColor"
    :color="color"
  >
    {{ text }}
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent } from 'vue';

  export default defineComponent({
    props: {
      color: {
        type: String,
        default: '#ff0000',
      },
      text: {
        type: String,
        default: '',
      },
      size: {
        type: String,
        default: 'default',
      },
    },
    setup(props) {
      const borderColor = computed(() => {
        return `color: ${props.color};border: 2px solid ${props.color};`;
      });

      return {
        ...props,
        borderColor,
      };
    },
  });
</script>

<style lang="less" scoped>
  .tag {
    font-size: 8px;
    font-weight: normal;
    color: #ff0000;
    line-height: 9px;
    padding: 2px;
    // width: 43px;
    // height: 28px;
    // line-height: 25px;
    // margin: 0 2px;
    border-radius: 3px;
    // opacity: 1;
    // text-align: center;
  }

  .tag_size {
    // width: 43px;
    // height: 28px;
    // line-height: 25px;
    // padding: 5px 2px;
    // height: 21px;
    // line-height: 10px;
    font-size: 10px;
    margin: 0 2px;
    border-radius: 3px;
    opacity: 1;
    text-align: center;
  }
</style>
