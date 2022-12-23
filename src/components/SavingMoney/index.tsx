import * as React from 'react';

function SavingMoney() {
  return (
    <div className="px-8 flex flex-col md:flex-row items-center">
      <video
        poster="https://images.prismic.io/commercial-helios/6b9bf48a-8cd0-40aa-8758-6f54b5e33c78_01_Automated_expense_reports_UK_01.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50&rect=0%2C0%2C1240%2C1240&w=1240&h=1240&dpr=2&w=550"
        loop
        autoPlay
        playsInline
        muted
        className="md:w-1/2 order-2 md:order-1"
      >
        <source src="https://commercial-helios.cdn.prismic.io/commercial-helios/1754a51e-6c50-4bea-9bd7-01d7500ce576_01_Automated_expense_reports_UK_01.mp4" type="video/mp4" />
      </video>
      <div className="flex flex-col flex-grow items-center mb-3 md:mb-0 order-1 md:order-2">
        <h2 className="mb-2 text-2xl md:text-4xl md:text-left w-full">Start saving money with every purchase</h2>
        <p className="md:text-left">
          Give your employees their own Pleo cards and
          get cashback on your company spending.
          Your team can buy what they need, while you save time and money.
        </p>
      </div>
    </div>
  );
}

export default SavingMoney;
