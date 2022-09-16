import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const system: AppRouteModule = {
  path: '/system',
  name: 'Plugins',
  component: LAYOUT,
  redirect: '/system/config',
  meta: {
    orderNo: 50,
    icon: 'ion:grid-outline',
    title: t('routes.system.system'),
  },
  children: [
    {
      path: 'config',
      name: 'Config',
      component: () => import('/@/views/system/config/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.system.config'),
      },
    },
  ],
};

export default system;
