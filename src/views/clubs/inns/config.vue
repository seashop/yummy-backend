<template>
  <Card title="商户配置">
    <Tabs v-model:activeKey="activeKey">
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

<script lang="ts">
  import { computed, defineComponent, onMounted, ref, watch } from 'vue';
  import { Button, Card, Tabs } from 'ant-design-vue';
  import { set, sortBy } from 'lodash-es';
  import { ConfigGroupItem } from '/@/api/system/model/configModel';
  import { BasicForm, useForm } from '/@/components/Form';
  import { ComponentType } from '/@/components/Form/src/types';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useRoute } from 'vue-router';
  import { listInnConfigs, batchUpdateInnConfigs } from '/@/api/clubs/inns';
  import { InnConfig } from '/@/gen/yummy/v1/club';
  import { isBoolean } from '/@/utils/is';

  export default defineComponent({
    name: 'ConfigManagement',
    components: { Button, Card, Tabs, TabPane: Tabs.TabPane, BasicForm },
    setup() {
      const route = useRoute();
      const innId = (route.params?.id as string) ?? '';

      const { createMessage } = useMessage();

      const activeKey = ref('');
      const groups = ref<Array<ConfigGroupItem>>([
        {
          id: -1,
          scope: 'printer',
          title: '打印机',
        },
      ]);
      const tabs = computed(() => {
        return groups.value.map((item, idx) => {
          if (idx === 0) {
            activeKey.value = item.scope;
          }
          return {
            title: item.title,
            scope: item.scope,
          };
        });
      });

      onMounted(async () => {
        // groups.value = (await listConfigGroups()).items;
        activeKey.value = 'printer';
      });

      const [
        register,
        { appendSchemaByField, resetSchema, validate, setFieldsValue, resetFields },
      ] = useForm({
        size: 'default',
        baseColProps: { span: 24 },
        labelWidth: 160,
        showActionButtonGroup: false,
        schemas: [],
      });

      watch([activeKey], async () => {
        resetSchema([]);
        let { innConfigs: items } = await await listInnConfigs(innId);
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
          };
          if (item.props instanceof Object) {
            set(formSchema, 'componentProps', { ...item.props });
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
          console.log('----', item, formSchema);
          appendSchemaByField(formSchema, '');
        });
        setFieldsValue(values);
      });

      async function handleSubmit() {
        try {
          const values = await validate();
          const data = Object.entries(values).map((eles) => {
            if (isBoolean(eles[1])) {
              return { key: eles[0] as string, value: eles[1] ? 'true' : 'false' } as InnConfig;
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

      return { tabs, activeKey, register, resetFields, handleSubmit };
    },
  });
</script>
