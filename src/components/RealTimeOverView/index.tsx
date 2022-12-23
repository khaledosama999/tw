import * as React from 'react';

function RealTimeOverView() {
  return (
    <div className="px-8 flex flex-col md:flex-row items-center gap-5 mb-4">
      <video
        poster="https://images.prismic.io/commercial-helios/6b9bf48a-8cd0-40aa-8758-6f54b5e33c78_01_Automated_expense_reports_UK_01.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50&rect=0%2C0%2C1240%2C1240&w=1240&h=1240&dpr=2&w=550"
        loop
        autoPlay
        playsInline
        muted
        className="md:w-1/2 order-2 md:order-1"
      >
        <source src="https://commercial-helios.cdn.prismic.io/commercial-helios/c01bc99f-f877-4a3b-b633-b616ed6c62e1_02_automated_expense_reports_UK_01.mp4" type="video/mp4" />
      </video>
      <div className="flex flex-col flex-grow items-center mb-3 md:mb-0 order-1 md:order-2">
        <h2 className="mb-2 text-2xl md:text-4xl md:text-left w-full">Real-time overview</h2>
        <p className="md:text-left">
          Admins get the details they need on every purchase.
          Something doesn’t look right? Just tap a button to flag it or if you need,
          freeze your
          {' '}
          <span className="underline">business expense card.</span>
        </p>
      </div>
    </div>
  );
}

export default RealTimeOverView;
