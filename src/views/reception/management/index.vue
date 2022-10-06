<template>
  <div class="management">
    <!-- 头部 -->
    <div class="table-header">
      <div class="header-item-box">
        <div
          class="table-header-item"
          v-for="item in ['2', '3', '4']"
          :class="{ active: current === item }"
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
    </div>
    <!-- 内容 -->
    <div class="content">
      <TableItem :tables="currentTables" @click="handelClickTable" />
    </div>
    <!-- 右下角图片 -->
    <div class="background_img"> </div>
  </div>
</template>

<script lang="ts">
  import { onMounted, reactive, defineComponent, toRefs, computed } from 'vue';
  import { first } from 'lodash-es';
  import { useRouter } from 'vue-router';
  import { SyncOutlined } from '@ant-design/icons-vue';
  import { listDiningTables } from '/@/api/reception/dining';
  import TableItem from './components/TableItem.vue';
  import { DiningTableItem } from '/@/api/plugins/model/diningTableModel';
  import { useMenuSetting } from '/@/hooks/setting/useMenuSetting';
  import { useHeaderSetting } from '/@/hooks/setting/useHeaderSetting';
  import { triggerWindowResize } from '/@/utils/event';

  export default defineComponent({
    components: {
      SyncOutlined,
      TableItem,
    },
    setup() {
      const router = useRouter();

      const state = reactive({
        current: '2',
        tables: [] as Array<DiningTableItem>,
        status: 0,
      });

      const { setMenuSetting } = useMenuSetting();
      const { setHeaderSetting } = useHeaderSetting();

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
      };

      const currentTables = computed(() => {
        return state.tables.filter((item) => item.title[0] === state.current);
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
        state.current = id;
      };

      return {
        ...toRefs(state),
        currentTables,
        handelClickTable,
        updateList,
        handleClick,
      };
    },
  });
</script>

<style lang="less" scoped>
  .management {
    position: relative;
    padding: 10px;
    height: calc(100vh - 32px);
    background: #fff;

    .background_img {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 441px;
      height: 432px;
      background: url('/@/assets/images/Group705.png') no-repeat;
      background-size: cover;
    }

    .table-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 158px;
      padding: 10px;
      padding-top: 95px;
      padding-bottom: 0;
      border-bottom: 4px solid #061527;
      background: #fff;

      .header-item-box {
        flex: 1;
        display: flex;
        align-items: center;
        // justify-content: space-between;
        .table-header-item {
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

    .content {
      display: flex;
      flex-wrap: wrap;
      padding: 10px;
    }
  }
</style>
