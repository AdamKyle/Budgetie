import { NavigationRoutes } from '../enums/navigation-routes';
import type NavigationItemDefinition from './definitions/navigation-item-definition';

const PUBLIC_NAVIGATION_ITEMS: NavigationItemDefinition[] = [
  {
    href: NavigationRoutes.HOME,
    label: 'Home',
  },
  {
    href: NavigationRoutes.ABOUT,
    label: 'About',
  },
  {
    href: NavigationRoutes.UPDATES,
    label: 'Updates',
  },
];

export { PUBLIC_NAVIGATION_ITEMS };
