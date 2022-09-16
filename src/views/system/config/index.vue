<template>
  <Card title="站点配置">
    <Tabs v-model:activeKey="activeKey">
      <TabPane v-for="tab in tabs" :key="tab.scope" :tab="tab.title" />
    </Tabs>
    <div class="py-8 bg-white flex flex-col justify-center items-center">
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
  import { listConfigGroups, listConfigs } from '/@/api/system/config';
  import { ConfigGroupItem } from '/@/api/system/model/configModel';
  import { BasicForm, useForm } from '/@/components/Form';
  import { ComponentType } from '/@/components/Form/src/types';

  export default defineComponent({
    name: 'ConfigManagement',
    components: { Button, Card, Tabs, TabPane: Tabs.TabPane, BasicForm },
    setup() {
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
        labelWidth: 100,
        showActionButtonGroup: false,
        schemas: [],
      });

      watch(
        () => activeKey.value,
        async () => {
          resetSchema([]);
          const { items } = await listConfigs({ scope: unref(activeKey) });
          let values = {};
          items.forEach((item) => {
            set(values, item.key, item.value);
            const formSchema = {
              field: item.key,
              component: item.type as ComponentType,
              componentProps: { ...item.props },
              label: item.title,
              required: true,
            };
            appendSchemaByField(formSchema, '');
          });
          setFieldsValue(values);
        },
      );

      async function handleSubmit() {
        try {
          const values = await validate();
          const { passwordOld, passwordNew } = values;

          // TODO custom api
          console.log(passwordOld, passwordNew);
          // const { router } = useRouter();
          // router.push(pageEnum.BASE_LOGIN);
        } catch (error) {}
      }

      return { tabs, activeKey, register, resetFields, handleSubmit };
    },
  });
</script>
