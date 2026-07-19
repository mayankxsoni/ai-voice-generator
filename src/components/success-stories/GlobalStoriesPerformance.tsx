import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';

//Global Stories Performance
const GlobalStoriesPerformance = () => {
  return (
    <section className="bg-background-2 py-[70px] lg:py-[140px]">
      <div className="main-container">
        <div className="mb-11 space-y-3 text-left lg:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <h2 className="max-w-[450px] lg:max-w-[608px]">Empowering global teams to achieve more</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="max-w-[470px] lg:max-w-[658px]">
              Powering productivity for global teams is essential in today’s interconnected and fast-paced business
              environment.
            </p>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.3}>
          <div className="bg-ns-ivory/80 flex flex-col rounded-[20px] px-6 py-6 md:flex-row md:px-0">
            <div className="flex-1 space-y-6 py-6">
              <div className="mx-auto flex h-10 w-16 items-center justify-center rounded-[30px] bg-white xl:h-[52px] xl:w-20">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
                    stroke="#1A1A1C"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.64844 15.1932L3.74323 14.5323C3.85321 14.4659 3.94429 14.3724 4.00774 14.2607C4.0712 14.149 4.1049 14.0229 4.10562 13.8944L4.12463 10.5073C4.12543 10.3658 4.16624 10.2274 4.24236 10.1081L6.10261 7.19273C6.15759 7.10656 6.22961 7.03254 6.31424 6.97521C6.39887 6.91788 6.49432 6.87846 6.59474 6.85936C6.69516 6.84026 6.79842 6.8419 6.89818 6.86415C6.99795 6.88641 7.09211 6.92883 7.17489 6.9888L9.01762 8.32387C9.1737 8.43694 9.36731 8.4856 9.5583 8.45973L12.5096 8.06005C12.6906 8.03553 12.8565 7.94578 12.976 7.80765L15.0533 5.40757C15.1794 5.26187 15.2446 5.07322 15.2353 4.88074L15.1258 2.60229"
                    stroke="#1A1A1C"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.5371 17.0953L14.531 16.0872C14.4369 15.9929 14.3194 15.9254 14.1905 15.8915L12.1788 15.3636C12.0002 15.3167 11.8452 15.2057 11.7434 15.0517C11.6417 14.8977 11.6003 14.7115 11.6271 14.5289L11.8507 13.0105C11.8696 12.8824 11.9213 12.7613 12.0009 12.659C12.0805 12.5568 12.1852 12.477 12.3049 12.4272L15.1596 11.2407C15.2915 11.1859 15.4362 11.1698 15.5769 11.1945C15.7175 11.2191 15.8482 11.2834 15.9536 11.3798L18.2875 13.5143"
                    stroke="#1A1A1C"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="xl:text-heading-6 text-tagline-1 text-secondary flex items-center justify-center font-normal">
                  <NumberAnimation number={100} speed={1000} interval={180} rooms={3} heightSpaceRatio={2.2}>
                    100
                  </NumberAnimation>
                  + Countries
                </h3>
              </div>
            </div>
            <div className="flex-1 space-y-6 py-6">
              <div className="mx-auto flex h-10 w-16 items-center justify-center rounded-[30px] bg-white xl:h-[52px] xl:w-20">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                  <path
                    d="M6.59236 14.9579C5.5317 18.1398 1.28906 18.1398 1.28906 18.1398C1.28906 18.1398 1.28906 13.8972 4.47104 12.8365"
                    stroke="#1A1A1C"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.1379 7.53318L9.77389 13.8971L5.53125 9.6545L11.8952 3.29054C14.305 0.880774 16.7147 0.90428 17.7424 1.05761C17.9007 1.0812 18.0471 1.15499 18.1603 1.26812C18.2734 1.38124 18.3472 1.52772 18.3708 1.68595C18.5241 2.71365 18.5476 5.12341 16.1379 7.53318Z"
                    stroke="#1A1A1C"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.0787 8.59387V14.6472C15.0787 14.7457 15.0593 14.8432 15.0216 14.9342C14.9839 15.0252 14.9287 15.1079 14.859 15.1775L11.827 18.2095C11.731 18.3055 11.6107 18.3737 11.4791 18.4067C11.3474 18.4397 11.2092 18.4364 11.0793 18.397C10.9494 18.3577 10.8326 18.2838 10.7413 18.1833C10.6501 18.0828 10.5878 17.9594 10.5612 17.8263L9.77539 13.8972"
                    stroke="#1A1A1C"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.8353 4.3512H4.78204C4.68355 4.3512 4.58602 4.3706 4.49503 4.40829C4.40403 4.44598 4.32135 4.50122 4.25171 4.57087L1.21967 7.60291C1.12368 7.6989 1.05554 7.81914 1.02252 7.95081C0.989505 8.08248 0.992843 8.22065 1.03218 8.35057C1.07152 8.4805 1.14538 8.59731 1.2459 8.68855C1.34641 8.7798 1.4698 8.84205 1.60291 8.86867L5.53204 9.6545"
                    stroke="#1A1A1C"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="xl:text-heading-6 text-tagline-1 text-secondary flex items-center justify-center font-normal">
                  <NumberAnimation number={200} speed={1000} interval={180} rooms={3} heightSpaceRatio={2.2}>
                    200
                  </NumberAnimation>
                  % Faster transactions
                </h3>
              </div>
            </div>
            <div className="flex-1 space-y-6 py-6">
              <div className="mx-auto flex h-10 w-16 items-center justify-center rounded-[30px] bg-white xl:h-[52px] xl:w-20">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#1A1A1C"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 6V12L16 14"
                    stroke="#1A1A1C"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="xl:text-heading-6 text-tagline-1 text-secondary flex items-center justify-center font-normal">
                  <NumberAnimation number={50} speed={1000} interval={180} rooms={2} heightSpaceRatio={2.2}>
                    50
                  </NumberAnimation>
                  M+ hours logged annually
                </h3>
              </div>
            </div>
            <div className="flex-1 space-y-6 py-6">
              <div className="mx-auto flex h-10 w-16 items-center justify-center rounded-[30px] bg-white xl:h-[52px] xl:w-20">
                <svg xmlns="http://www.w3.org/2000/svg" width={17} height={23} viewBox="0 0 17 23" fill="none">
                  <path
                    d="M5.5 22L7 14.5L1 12.25L11.5 1L10 8.5L16 10.75L5.5 22Z"
                    stroke="#1A1A1C"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="xl:text-heading-6 text-tagline-1 text-secondary flex items-center justify-center font-normal">
                  <NumberAnimation number={99} speed={1000} interval={180} rooms={2} heightSpaceRatio={2.2}>
                    99
                  </NumberAnimation>
                  .99% uptime guarantee
                </h3>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

GlobalStoriesPerformance.displayName = 'GlobalStoriesPerformance';
export default GlobalStoriesPerformance;
