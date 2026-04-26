import type NavigationItemDefinition from 'router/public-routes/definitions/navigation-item-definition';

export default interface BaseMobileNavigationProps {
  isMenuOpen: boolean;
  mobileMenuId: string;
  navigationItems: NavigationItemDefinition[];
  shouldReduceMotion: boolean | null;
  onCloseMenu: () => void;
  onLogin: () => void;
  onRegister: () => void;
}
