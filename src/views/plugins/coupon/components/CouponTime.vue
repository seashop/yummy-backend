<template>
  <RadioGroup v-bind="attrs" v-model:value="state" button-style="solid" @change="handleChange">
    <Radio :value="1">
      <RangePicker @change="onRangeChange" />
    </Radio>
    <br />
    <Radio :value="2">
      领券当日起&emsp;
      <Input v-model:value="day" @change="onDayChange" />
      &emsp;天内可用
    </Radio>
  </RadioGroup>
</template>
<script lang="ts">
  import { defineComponent, PropType, ref, unref } from 'vue';
  import { Input, Radio, DatePicker } from 'ant-design-vue';
  import { useRuleFormItem } from '/@/hooks/component/useFormItem';
  import { useAttrs } from '/@/hooks/core/useAttrs';
  import { useI18n } from '/@/hooks/web/useI18n';

  export default defineComponent({
    name: 'CouponTime',
    components: {
      Input,
      RadioGroup: Radio.Group,
      Radio,
      RangePicker: DatePicker.RangePicker,
    },
    props: {
      value: {
        type: [String, Number, Boolean] as PropType<string | number | boolean>,
      },
    },
    emits: ['options-change', 'change', 'effect'],
    setup(props, { emit }) {
      const loading = ref(false);
      const emitData = ref<any[]>([]);
      const attrs = useAttrs();
      const { t } = useI18n();
      // Embedded in the form, just use the hook binding to perform form verification
      const [state] = useRuleFormItem(props);
      const day = ref<number>();

      function handleChange(_, ...args) {
        emitData.value = args;
      }

      function onRangeChange(_, value) {
        emit('effect', { state: state.value, value });
      }

      function onDayChange() {
        emit('effect', { state: state.value, value: unref(day) });
      }

      return {
        state,
        attrs,
        loading,
        t,
        day,
        handleChange,
        onRangeChange,
        onDayChange,
        props,
      };
    },
  });
</script>
