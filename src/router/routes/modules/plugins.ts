import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const plugins: AppRouteModule = {
  path: '/plugins',
  name: 'Plugins',
  component: LAYOUT,
  redirect: '/plugins/coupon',
  meta: {
    orderNo: 50,
    icon: 'ion:grid-outline',
    title: t('routes.plugins.plugins'),
  },
  children: [
    {
      path: 'coupon',
      name: 'Coupon',
      component: () => import('/@/views/plugins/coupon/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.plugins.coupon'),
      },
    },
    {
      path: 'discount',
      name: 'Discount', // can not repeat
      component: () => import('/@/views/plugins/discount/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.plugins.discount'),
      },
    },
  ],
};

export default plugins;
