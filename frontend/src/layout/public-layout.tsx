import { Outlet } from 'react-router';

import BaseNavigation from 'components/public-navigation/base-navigation';

const PublicLayout = () => {
  return (
    <div className="bg-storm-dust-50 text-storm-dust-950 dark:bg-storm-dust-950 dark:text-storm-dust-50 flex min-h-dvh flex-col transition-colors duration-200">
      <BaseNavigation />

      <Outlet />
    </div>
  );
};

export default PublicLayout;
