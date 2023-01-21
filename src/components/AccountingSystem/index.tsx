import * as React from "react";

function AccountingSystem() {
  return (
    <div className="mb-4 flex flex-col items-center gap-1 px-8 md:flex-row">
      <div className="mb-2 flex w-full flex-col items-center justify-center md:mb-0 md:w-1/2 md:items-start">
        <span className="mb-2 flex-grow text-3xl md:flex-grow-0 md:text-left md:text-4xl">
          Integrate your accounting system with Pleo
        </span>
        <button
          type="submit"
          className="w-full rounded-full border border-black bg-white px-4 py-2 text-center hover:bg-black hover:text-white md:w-auto md:flex-grow-0"
        >
          learn more
        </button>
      </div>
      <div className="grid grid-cols-4 gap-2 md:w-1/2">
        <div className="flex rounded bg-slate-100 p-5 md:p-10">
          <img
            src="https://prismic-io.s3.amazonaws.com/commercial-helios/24bdca4d-2e26-41cb-b484-a903792d602b_xero-vector-logo.svg"
            alt="Link to Xero landing page"
            loading="lazy"
          />
        </div>
        <div className="flex rounded bg-slate-100 p-5 md:p-10">
          <img
            src="https://prismic-io.s3.amazonaws.com/commercial-helios/0c618e1b-b59d-4883-a891-d61ae5821177_Quickbooks.svg"
            alt="Link to Xero landing page"
            loading="lazy"
          />
        </div>
        <div className="flex rounded bg-slate-100 p-5 md:p-10">
          <img
            src="https://prismic-io.s3.amazonaws.com/commercial-helios/27a15d6f-7b59-41c2-9fc9-39d0eebf35f4_Sage.svg"
            alt="Link to Xero landing page"
            loading="lazy"
          />
        </div>
        <div className="flex items-center justify-center rounded bg-slate-100 p-5 md:p-10">
          <p>and more</p>
        </div>
      </div>
    </div>
  );
}

export default AccountingSystem;
