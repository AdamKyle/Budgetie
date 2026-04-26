import type { NavigateFunction } from 'react-router';

import type { NavigationRoutes } from '../enums/navigation-routes';

/**
 * Lets us navigate to a named route.
 *
 * @param navigate
 * @param route
 */
const navigateToRoute = (
  navigate: NavigateFunction,
  route: NavigationRoutes
) => {
  void navigate(route);
};

export default navigateToRoute;
