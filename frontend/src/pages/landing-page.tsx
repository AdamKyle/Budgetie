import budgetChart from 'assets/hero-section/budget-chart.png';

import Button from 'ui/buttons/button';
import { ButtonVariant } from 'ui/buttons/enums/button-variant';
import HeroSection from 'ui/hero-section/hero-section';

const LandingPage = () => {
  return (
    <main>
      <HeroSection
        title="Placeholder hero heading for Budgetie."
        subtitle={
          <>
            <span className="block">
              Placeholder subtitle explaining what Budgetie does clearly.
            </span>
            <span className="block">
              Track spending, plan ahead, and understand your money with less
              stress.
            </span>
          </>
        }
        imageSrc={budgetChart}
        imageAlt="Budgetie dashboard preview with income, spending, savings, and an upward chart"
      >
        <Button
          on_click={() => {}}
          label="Get Started Today!"
          variant={ButtonVariant.SUCCESS}
        />
        <Button
          on_click={() => {}}
          label="Learn more about Budgetie!"
          variant={ButtonVariant.PRIMARY}
        />
      </HeroSection>
    </main>
  );
};

export default LandingPage;
