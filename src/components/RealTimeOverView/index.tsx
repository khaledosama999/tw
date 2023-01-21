import * as React from "react";

function RealTimeOverView() {
  return (
    <div className="mb-4 flex flex-col items-center gap-5 px-8 md:flex-row">
      <video
        poster="https://images.prismic.io/commercial-helios/6b9bf48a-8cd0-40aa-8758-6f54b5e33c78_01_Automated_expense_reports_UK_01.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50&rect=0%2C0%2C1240%2C1240&w=1240&h=1240&dpr=2&w=550"
        loop
        autoPlay
        playsInline
        muted
        className="order-2 md:order-1 md:w-1/2"
      >
        <source
          src="https://commercial-helios.cdn.prismic.io/commercial-helios/c01bc99f-f877-4a3b-b633-b616ed6c62e1_02_automated_expense_reports_UK_01.mp4"
          type="video/mp4"
        />
      </video>
      <div className="order-1 mb-3 flex flex-grow flex-col items-center md:order-2 md:mb-0">
        <span className="mb-2 w-full text-2xl md:text-left md:text-4xl">Real-time overview</span>
        <p className="md:text-left">
          Admins get the details they need on every purchase. Something doesn’t look right? Just tap
          a button to flag it or if you need, freeze your
          <span className="underline">business expense card.</span>
        </p>
      </div>
    </div>
  );
}

export default RealTimeOverView;
