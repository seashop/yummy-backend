import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const clubs: AppRouteModule = {
  path: '/clubs',
  name: 'Clubs',
  component: LAYOUT,
  redirect: '/clubs/club',
  meta: {
    orderNo: 20,
    icon: 'ion:grid-outline',
    title: t('routes.clubs.clubs'),
  },
  children: [
    {
      path: 'inns',
      name: 'Inns',
      component: () => import('/@/views/clubs/inns/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.clubs.inns'),
      },
    },
    {
      path: 'inns/:id/config',
      name: 'InnConfig',
      component: () => import('/@/views/clubs/inns/config.vue'),
      meta: {
        currentActiveMenu: '/clubs/inns',
        title: t('routes.clubs.inns'),
        hideMenu: true,
        dynamicLevel: 3,
        realPath: '/feat/tabs/detail',
      },
    },
  ],
};

export default clubs;
