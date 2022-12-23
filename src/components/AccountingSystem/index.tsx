import * as React from 'react';

function AccountingSystem() {
  return (
    <div className="px-8 flex flex-col md:flex-row gap-1 items-center mb-4">
      <div className="flex md:w-1/2 w-full flex-col items-center justify-center md:items-start mb-2 md:mb-0">
        <h2 className="text-3xl md:text-4xl flex-grow md:flex-grow-0 mb-2 text-left">
          Integrate your accounting system with Pleo
        </h2>
        <button
          type="submit"
          className="rounded-full border border-black bg-white w-full md:w-auto md:flex-grow-0 px-4 py-2 text-center hover:bg-black hover:text-white"
        >
          learn more
        </button>
      </div>
      <div className="grid grid-cols-4 gap-2 md:w-1/2">
        <div className="rounded bg-slate-100 flex p-5 md:p-10">
          <img src="https://prismic-io.s3.amazonaws.com/commercial-helios/24bdca4d-2e26-41cb-b484-a903792d602b_xero-vector-logo.svg" alt="Link to Xero landing page" loading="lazy" />
        </div>
        <div className="rounded bg-slate-100 flex p-5 md:p-10">
          <img src="https://prismic-io.s3.amazonaws.com/commercial-helios/0c618e1b-b59d-4883-a891-d61ae5821177_Quickbooks.svg" alt="Link to Xero landing page" loading="lazy" />
        </div>
        <div className="rounded bg-slate-100 flex p-5 md:p-10">
          <img src="https://prismic-io.s3.amazonaws.com/commercial-helios/27a15d6f-7b59-41c2-9fc9-39d0eebf35f4_Sage.svg" alt="Link to Xero landing page" loading="lazy" />
        </div>
        <div className="rounded bg-slate-100 flex p-5 md:p-10 items-center justify-center">
          <p>and more</p>
        </div>
      </div>
    </div>
  );
}

export default AccountingSystem;
