<template>
  <Card title="站点配置">
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
  import { computed, defineComponent, onMounted, ref, unref, watch } from 'vue';
  import { Button, Card, Tabs } from 'ant-design-vue';
  import { set } from 'lodash-es';
  import { batchUpdateConfig, listConfigGroups, listConfigs } from '/@/api/system/config';
  import { ConfigGroupItem } from '/@/api/system/model/configModel';
  import { BasicForm, useForm } from '/@/components/Form';
  import { ComponentType } from '/@/components/Form/src/types';
  import { useMessage } from '/@/hooks/web/useMessage';

  export default defineComponent({
    name: 'ConfigManagement',
    components: { Button, Card, Tabs, TabPane: Tabs.TabPane, BasicForm },
    setup() {
      const { createMessage } = useMessage();

      const activeKey = ref('');
      const groups = ref<Array<ConfigGroupItem>>([]);
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
        groups.value = (await listConfigGroups()).items;
      });

      const [
        register,
        { appendSchemaByField, resetSchema, validate, setFieldsValue, resetFields },
      ] = useForm({
        size: 'large',
        baseColProps: { span: 24 },
        labelWidth: 160,
        showActionButtonGroup: false,
        schemas: [],
      });

      watch([activeKey], async () => {
        resetSchema([]);
        const { items } = await listConfigs({ scope: unref(activeKey) });
        let values = {};
        items.forEach((item) => {
          const formSchema = {
            field: item.key,
            component: item.component as ComponentType,
            label: item.title,
            required: true,
          };
          if (item.props instanceof Object) {
            set(formSchema, 'componentProps', { ...item.props });
          }
          switch (item.component) {
            case 'Switch':
              set(values, item.key, item.value === '1');
              break;
            case 'RadioGroup':
            case 'InputNumber':
              set(values, item.key, parseInt(item.value));
              break;
            default:
              set(values, item.key, item.value);
              break;
          }
          appendSchemaByField(formSchema, '');
        });
        setFieldsValue(values);
      });

      async function handleSubmit() {
        try {
          const values = await validate();
          return batchUpdateConfig(unref(activeKey), values).then(() => {
            createMessage.success('修改成功');
          });
        } catch (error) {}
      }

      return { tabs, activeKey, register, resetFields, handleSubmit };
    },
  });
</script>
