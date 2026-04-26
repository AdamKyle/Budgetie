import budgetChart from 'assets/hero-section/budget-chart.png';

import HeroSection from 'components/hero-section/hero-section';

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
        <button
          type="button"
          className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:outline-none dark:focus-visible:ring-offset-slate-950"
        >
          Get started
        </button>

        <button
          type="button"
          className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:outline-none dark:border-slate-700 dark:text-white dark:hover:bg-slate-900 dark:focus-visible:ring-offset-slate-950"
        >
          Learn more
        </button>
      </HeroSection>
    </main>
  );
};

export default LandingPage;
