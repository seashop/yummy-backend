<template>
  <PageWrapper contentBackground contentFullHeight>
    <!-- 头部 -->
    <template #headerContent>
      <div class="header-item-box">
        <div
          class="header-tabs-item"
          v-for="item in floors"
          :class="{ active: getPreFloor === item }"
          :key="item"
          @click="handleClick(item)"
        >
          <div class="item-content">{{ item }}楼大厅</div>
        </div>
      </div>
      <div class="update" @click="updateList">
        <SyncOutlined />
        <div>刷新</div>
      </div>
    </template>
    <!-- 内容 -->
    <TableItem :tables="currentTables" @click="handelClickTable" />
  </PageWrapper>
</template>

<script lang="ts">
  import { onMounted, reactive, defineComponent, toRefs, computed, onBeforeUnmount } from 'vue';
  import { first } from 'lodash-es';
  import { useRouter } from 'vue-router';
  import { SyncOutlined } from '@ant-design/icons-vue';
  import { listDiningTables } from '/@/api/reception/dining';
  import { DiningTableItem } from '/@/api/plugins/model/diningTableModel';
  import { PageWrapper } from '/@/components/Page';
  import { useMenuSetting } from '/@/hooks/setting/useMenuSetting';
  import { useHeaderSetting } from '/@/hooks/setting/useHeaderSetting';
  import { triggerWindowResize } from '/@/utils/event';
  import { useYummyStore } from '/@/store/modules/yummy';
  import TableItem from './components/TableItem.vue';

  const floors = ['2', '3', '4'];

  export default defineComponent({
    components: {
      PageWrapper,
      SyncOutlined,
      TableItem,
    },
    setup() {
      const router = useRouter();

      const { setMenuSetting } = useMenuSetting();
      const { setHeaderSetting } = useHeaderSetting();
      const yummyStore = useYummyStore();

      const getPreFloor = computed(() => yummyStore.getPreFloor);

      const state = reactive({
        tables: [] as Array<DiningTableItem>,
        status: 0,
      });

      let timer: any = null;
      onMounted(() => {
        // 默认全屏
        const isUnFold = false;
        setMenuSetting({
          show: isUnFold,
          hidden: !isUnFold,
        });
        setHeaderSetting({ show: isUnFold });
        triggerWindowResize();

        // 加载餐桌列表
        getListDiningTables();
        timer = setInterval(() => {
          updateList();
        }, 10000);
      });

      onBeforeUnmount(() => {
        clearInterval(timer);
        timer = null;
      });

      const getListDiningTables = async () => {
        const data = {
          with_status: 1,
        };
        const resp = await listDiningTables(data);
        console.log(getListDiningTables, resp);
        state.tables = resp.items.map((item) => {
          return item;
        });
        if (currentTables.value.length == 0 && state.tables.length > 0) {
          console.log('current', getPreFloor.value, getPreFloor.value?.length);
          if (getPreFloor.value?.length === 0) {
            const current =
              first(
                state.tables.filter((item) => {
                  return floors.indexOf(item.title[0]) !== -1;
                }),
              )?.title[0] ?? '';
            yummyStore.setPreFloor(current);
          }
        }
      };

      const currentTables = computed(() => {
        return state.tables.filter((item) => item.title[0] === getPreFloor.value);
      });

      const handelClickTable = (table_id) => {
        console.log('handelClickTable', table_id);
        const currentTable = first(
          state.tables.filter((item) => {
            return (item.id = table_id);
          }),
        );
        if (!currentTable) {
          return;
        }

        router.push({
          path: '/reception/central',
          query: {
            id: currentTable.id,
          },
        });
      };
      const updateList = () => {
        // 获取最新桌台信息
        getListDiningTables();
      };
      const handleClick = (id) => {
        yummyStore.setPreFloor(id);
      };

      return {
        floors,
        getPreFloor,
        ...toRefs(state),
        currentTables,
        handelClickTable,
        updateList,
        handleClick,
      };
    },
  });
</script>

<style lang="less">
  @prefix-cls: ~'@{namespace}-page-wrapper';

  .@{prefix-cls} {
    position: relative;
    background: #fff;
    // height: calc(100vh - 32px);

    .@{prefix-cls}-content {
      margin: 0;
      display: flex;
      flex-wrap: wrap;
      padding: 10px;
    }

    .ant-page-header {
      &:empty {
        padding: 0;
      }

      &-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        // height: 158px;
        padding: 10px;
        // padding-top: 95px;
        padding-bottom: 0;
        border-bottom: 4px solid #061527;
        background: #fff;

        .header-item-box {
          flex: 1;
          display: flex;
          align-items: center;
          // justify-content: space-between;
          .header-tabs-item {
            // flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 180px;
            height: 61px;
            margin: 0 6px;
            opacity: 1;
            border-radius: 9px 9px 0 0;
            // background: #061527;
            // box-shadow: 0px -2px 7px 1px rgba(0, 0, 0, 0.25);
            // border-radius: 9px;
            border: 2px solid #061527;

            .item-content {
              text-align: center;
              width: 80px;
              height: 31px;
              font-size: 22px;
              font-family: PingFang SC-Medium, PingFang SC;
              font-weight: 500;
              // color: #ffffff;
              line-height: 31px;
            }
          }

          .active {
            background: #061527;
            box-shadow: 0px -2px 7px 1px rgba(0, 0, 0, 0.25);

            .item-content {
              color: #fff;
            }
          }
        }

        .update {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 117px;
          height: 51px;
          background: #ffc165;
          border-radius: 8px 8px 8px 8px;
          opacity: 1;
        }
      }
    }

    &-content-bg {
      background: url('/@/assets/images/Group705.png') no-repeat;
      background-attachment: fixed;
      background-position: bottom right;
      background-size: auto;
    }

    &--dense {
      .@{prefix-cls}-content {
        margin: 0;
      }
    }
  }
</style>
