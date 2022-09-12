import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const stores: AppRouteModule = {
  path: '/stores',
  name: 'Goods',
  component: LAYOUT,
  redirect: '/stores/goods',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('routes.stores.stores'),
  },
  children: [
    {
      path: 'goods',
      name: 'Goods',
      component: () => import('/@/views/stores/goods/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.stores.goods'),
      },
    },
    {
      path: 'category',
      name: 'Category',
      component: () => import('/@/views/stores/category/index.vue'),
      meta: {
        title: t('routes.stores.category'),
      },
    },
  ],
};

export default stores;
