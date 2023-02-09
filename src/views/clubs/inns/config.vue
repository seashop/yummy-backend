<template>
  <Card title="商户配置">
    <Tabs v-model:activeKey="state.activeKey">
      <TabPane v-for="tab in tabs" :key="tab.scope" :tab="tab.title" />
    </Tabs>
    <div class="flex flex-col items-center justify-center py-8 bg-white">
      <BasicForm @register="register" />
      <div class="flex justify-center">
        <Button @click="resetFields"> 重置 </Button>
        <Button class="!ml-4" type="primary" @click="handleSubmit"> 确认 </Button>
      </div>
    </div>
  </Card>
</template>

<script lang="ts" setup>
  import { Button, Card, Tabs } from 'ant-design-vue';
  import { set, sortBy } from 'lodash-es';
  import { computed, onMounted, reactive, ref, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import { ConfigGroupItem } from '/@/api/system/model/configModel';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form';
  import { ComponentType } from '/@/components/Form/src/types';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { listInnConfigs, batchUpdateInnConfigs } from '/@/api/clubs/inns';
  import { InnConfig, InnConfig_Cat } from '/@/gen/yummy/v1/club';
  import { isBoolean, isNumber } from '/@/utils/is';

  const TabPane = Tabs.TabPane;

  const route = useRoute();

  const { createMessage } = useMessage();

  const groups = ref<Array<ConfigGroupItem>>([
    {
      id: -1,
      scope: InnConfig_Cat.CAT_VARIABLE,
      title: '基础信息',
    },
    {
      id: -2,
      scope: InnConfig_Cat.CAT_PRINTER,
      title: '打印机',
    },
  ]);

  const innId = (route.params?.id as string) ?? '';

  const state = reactive({
    activeKey: ref<InnConfig_Cat>(InnConfig_Cat.CAT_VARIABLE),
  });
  // const activeKey = ref<InnConfig_Cat>(InnConfig_Cat.CAT_VARIABLE);

  const tabs = computed(() => {
    return groups.value.map((item, idx) => {
      if (idx === 0) {
        state.activeKey = item.scope;
      }
      return {
        title: item.title,
        scope: item.scope,
      };
    });
  });

  const [register, { appendSchemaByField, resetSchema, validate, setFieldsValue, resetFields }] =
    useForm({
      size: 'default',
      baseColProps: { span: 24 },
      labelWidth: 160,
      showActionButtonGroup: false,
      schemas: [],
    });

  onMounted(() => {
    watch(
      [state],
      async () => {
        resetSchema([]);
        let { innConfigs: items } = await listInnConfigs(innId, state.activeKey);
        let values = {};
        if (items) {
          items = sortBy(items, function (o) {
            return o.sortId;
          });
        }
        items?.forEach((item) => {
          const formSchema = {
            field: item.key as string,
            component: item.component as ComponentType,
            label: item.title as string,
            required: true,
          } as FormSchema;
          if (item.props && item.props.length > 0) {
            set(formSchema, 'componentProps', JSON.parse(item.props));
            // formSchema.componentProps = {
            //   valueFormat: 'HH:mm:ss',
            //   format: 'HH:mm',
            // };
          }
          switch (item.component) {
            case 'Switch':
              set(values, item.key as string, item.value?.toString() === 'true');
              break;
            case 'RadioGroup':
            case 'InputNumber':
              set(values, item.key as string, parseInt(item.value?.toString() as string));
              break;
            default:
              set(values, item.key as string, item.value);
              break;
          }
          console.log('----', { item, formSchema });
          appendSchemaByField(formSchema, '');
        });
        setFieldsValue(values);
      },
      {
        immediate: true,
      },
    );
  });

  async function handleSubmit() {
    try {
      const values = await validate();
      const data = Object.entries(values).map((eles) => {
        if (isBoolean(eles[1])) {
          return { key: eles[0] as string, value: eles[1] ? 'true' : 'false' } as InnConfig;
        } else if (isNumber(eles[1])) {
          return { key: eles[0] as string, value: eles[1].toString() } as InnConfig;
        }
        return { key: eles[0] as string, value: eles[1] } as InnConfig;
      });
      console.log(data);
      return batchUpdateInnConfigs(innId, data).then(() => {
        createMessage.success('修改成功');
      });
    } catch (error) {
      console.log(error);
    }
  }
</script>
