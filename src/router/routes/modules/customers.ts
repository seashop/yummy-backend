import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const customers: AppRouteModule = {
  path: '/customers',
  name: 'Customers',
  component: LAYOUT,
  redirect: '/customers/customer',
  meta: {
    orderNo: 40,
    icon: 'ion:grid-outline',
    title: t('routes.customers.customers'),
  },
  children: [
    {
      path: 'inn',
      name: 'Inn',
      component: () => import('/@/views/customers/inn/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.customers.inn'),
      },
    },
    {
      path: 'customer',
      name: 'Customer',
      component: () => import('/@/views/customers/customer/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.customers.customer'),
      },
    },
    {
      path: 'level',
      name: 'CustomerLevel', // can not repeat
      component: () => import('/@/views/customers/level/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.customers.level'),
      },
    },
  ],
};

export default customers;
