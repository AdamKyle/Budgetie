import budgetiePlanningImage from 'assets/about-section/budgetie-planning.png';
import budgetiePrivacyImage from 'assets/about-section/budgetie-privacy.png';
import budgetieTrackingImage from 'assets/about-section/budgetie-tracking.png';

export const AboutSections = [
  {
    id: 'budget-periods',
    imageAlt: 'Budgetie mascot organizing budgets by period',
    imageSrc: budgetiePlanningImage,
    isImageRight: false,
    title: 'Budget by the period',
    text: 'Manage your money by the time frame that fits your life, whether that is monthly, every two weeks, a pay period, or a custom period.',
  },
  {
    id: 'transactions',
    imageAlt: 'Budgetie mascot tracking income and expenses',
    imageSrc: budgetieTrackingImage,
    isImageRight: true,
    title: 'Track every transaction',
    text: 'Add income and expenses in one place and see how each transaction changes your budget, what is left, and where your money is going.',
  },
  {
    id: 'privacy',
    imageAlt: 'Budgetie mascot protecting private budget details',
    imageSrc: budgetiePrivacyImage,
    isImageRight: false,
    title: 'Your budget stays private',
    text: 'Your budget details are personal, so Budgetie is built to keep your information safe, secure, and easy for only you to manage.',
  },
];
