import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const stores: AppRouteModule = {
  path: '/stores',
  name: 'Stores',
  component: LAYOUT,
  redirect: '/stores/product',
  meta: {
    orderNo: 20,
    icon: 'ion:grid-outline',
    title: t('routes.stores.stores'),
  },
  children: [
    {
      path: 'product',
      name: 'Product',
      component: () => import('/@/views/stores/product/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.stores.product'),
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
