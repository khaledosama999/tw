import * as React from "react";

function SavingMoney() {
  return (
    <div className="flex flex-col items-center px-8 md:flex-row">
      <video
        poster="https://images.prismic.io/commercial-helios/6b9bf48a-8cd0-40aa-8758-6f54b5e33c78_01_Automated_expense_reports_UK_01.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50&rect=0%2C0%2C1240%2C1240&w=1240&h=1240&dpr=2&w=550"
        loop
        autoPlay
        playsInline
        muted
        className="order-2 md:order-1 md:w-1/2"
      >
        <source
          src="https://commercial-helios.cdn.prismic.io/commercial-helios/1754a51e-6c50-4bea-9bd7-01d7500ce576_01_Automated_expense_reports_UK_01.mp4"
          type="video/mp4"
        />
      </video>
      <div className="order-1 mb-3 flex flex-grow flex-col items-center md:order-2 md:mb-0">
        <span className="mb-2 w-full text-2xl md:text-left md:text-4xl">
          Start saving money with every purchase
        </span>
        <p className="md:text-left">
          Give your employees their own Pleo cards and get cashback on your
          company spending. Your team can buy what they need, while you save
          time and money.
        </p>
      </div>
    </div>
  );
}

export default SavingMoney;
