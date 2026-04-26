import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useEffect, useId, useState } from 'react';

import type NavigationItemDefinition from './definitions/navigation-item-definition';
import Button from '../ui/buttons/button';
import { ButtonVariant } from '../ui/buttons/enums/button-variant';
import IconButton from '../ui/buttons/icon-button';
import LinkButton from '../ui/buttons/link-button';

import mascotImage from 'assets/mascot/budegtie-mascot.png';

const navigationItems: NavigationItemDefinition[] = [
  {
    href: '#home',
    label: 'Home',
  },
  {
    href: '#about',
    label: 'About',
  },
  {
    href: '#updates',
    label: 'Updates',
  },
];

const BaseNavigation = () => {
  const mobileMenuId = useId();
  const shouldReduceMotion = useReducedMotion();

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return window.localStorage.getItem('budgetie-theme') === 'dark';
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    window.localStorage.setItem(
      'budgetie-theme',
      isDarkMode ? 'dark' : 'light'
    );
  }, [isDarkMode]);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleToggleMenu = () => {
    setIsMenuOpen((currentIsMenuOpen) => !currentIsMenuOpen);
  };

  const handleToggleTheme = () => {
    setIsDarkMode((currentIsDarkMode) => !currentIsDarkMode);
  };

  const handleLogin = () => {
    window.location.assign('/login');
  };

  const handleRegister = () => {
    window.location.assign('/register');
  };

  const getThemeToggleIconClassName = () => {
    if (isDarkMode) {
      return 'fa-solid fa-sun';
    }

    return 'fa-solid fa-moon';
  };

  const getMobileMenuIconClassName = () => {
    if (isMenuOpen) {
      return 'fa-solid fa-xmark';
    }

    return 'fa-solid fa-bars';
  };

  const renderNavigationLink = (navigationItem: NavigationItemDefinition) => {
    return (
      <LinkButton
        key={navigationItem.href}
        href={navigationItem.href}
        label={navigationItem.label}
        on_click={handleCloseMenu}
        variant={ButtonVariant.Default}
      />
    );
  };

  const renderThemeToggleButton = (showLabel = false) => {
    return (
      <IconButton
        on_click={handleToggleTheme}
        icon={getThemeToggleIconClassName()}
        label={isDarkMode ? 'Light mode' : 'Dark mode'}
        aria_label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        variant={ButtonVariant.Default}
        show_label={showLabel}
      />
    );
  };

  const renderMobileMenu = () => {
    if (!isMenuOpen) {
      return null;
    }

    return (
      <motion.div
        key="mobile-menu"
        id={mobileMenuId}
        initial={shouldReduceMotion ? false : { height: 0, opacity: 0, y: -8 }}
        animate={{ height: 'auto', opacity: 1, y: 0 }}
        exit={
          shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0, y: -8 }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { duration: 0.24, ease: 'easeOut' }
        }
        className="border-storm-dust-200 dark:border-storm-dust-800 overflow-hidden border-t md:hidden"
      >
        <div className="py-4">
          <div className="flex flex-col gap-2">
            {navigationItems.map(renderNavigationLink)}
          </div>

          <div className="border-storm-dust-200 dark:border-storm-dust-800 mt-4 flex flex-col gap-3 border-t pt-4">
            {renderThemeToggleButton(true)}

            <Button
              on_click={handleLogin}
              label="Login"
              variant={ButtonVariant.PRIMARY}
              additional_css="w-full"
            />

            <Button
              on_click={handleRegister}
              label="Register"
              variant={ButtonVariant.SUCCESS}
              additional_css="w-full"
            />
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <header className="border-storm-dust-200 bg-storm-dust-50/95 dark:border-storm-dust-800 dark:bg-storm-dust-950/95 sticky top-0 z-50 border-b backdrop-blur">
      <nav aria-label="Main navigation" className="mx-auto max-w-7xl px-6">
        <div className="grid min-h-20 grid-cols-[auto_1fr_auto] items-center gap-4">
          <a
            href="#home"
            aria-label="Budgetie home"
            className="focus:ring-storm-dust-400 inline-flex items-center rounded-lg focus:ring-2 focus:outline-hidden"
          >
            <img
              src={mascotImage}
              alt=""
              aria-hidden="true"
              className="h-14 w-14 object-contain"
            />
          </a>

          <div className="hidden justify-center md:flex">
            <div className="flex items-center gap-2">
              {navigationItems.map(renderNavigationLink)}
            </div>
          </div>

          <div className="hidden items-center justify-end gap-3 md:flex">
            {renderThemeToggleButton()}

            <Button
              on_click={handleLogin}
              label="Login"
              variant={ButtonVariant.PRIMARY}
            />

            <Button
              on_click={handleRegister}
              label="Register"
              variant={ButtonVariant.SUCCESS}
            />
          </div>

          <IconButton
            on_click={handleToggleMenu}
            icon={getMobileMenuIconClassName()}
            label={
              isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            aria_label={
              isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            aria_expanded={isMenuOpen}
            aria_controls={mobileMenuId}
            variant={ButtonVariant.Default}
            additional_css="col-start-3 justify-self-end md:hidden"
          />
        </div>

        <AnimatePresence initial={false}>{renderMobileMenu()}</AnimatePresence>
      </nav>
    </header>
  );
};

export default BaseNavigation;
