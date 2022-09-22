import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const reception: AppRouteModule = {
  path: '/reception',
  name: 'Reception',
  component: LAYOUT,
  redirect: '/reception/central',
  meta: {
    orderNo: 20,
    icon: 'ion:grid-outline',
    title: t('routes.reception.reception'),
  },
  children: [
    {
      path: 'central',
      name: 'Central',
      component: () => import('/@/views/reception/central/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.reception.central'),
      },
    },
  ],
};

export default reception;
