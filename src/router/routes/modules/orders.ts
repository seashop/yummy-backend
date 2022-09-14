import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const orders: AppRouteModule = {
  path: '/orders',
  name: 'Orders',
  component: LAYOUT,
  redirect: '/orders/order',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('routes.orders.orders'),
  },
  children: [
    {
      path: 'order',
      name: 'Order',
      component: () => import('/@/views/orders/order/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.orders.order'),
      },
    },
    {
      path: 'evaluate',
      name: 'Evaluate',
      component: () => import('/@/views/orders/evaluate/index.vue'),
      meta: {
        title: t('routes.orders.evaluate'),
      },
    },
  ],
};

export default orders;
