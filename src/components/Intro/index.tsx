import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";

function Introduction() {
  return (
    <div className="mt-10 grid grid-rows-2 gap-1 px-8 md:grid-cols-2 md:grid-rows-1 md:gap-4">
      <div className="flex flex-col items-start justify-start">
        <span className="text-left text-5xl">
          Stop spending time
          <br />
          on expenses
        </span>
        <p className="mt-5">Do more of the work that matters. Leave expenses,</p>
        <p>invoices and reimbursements to Pleo, Europes #1</p>
        <p>business spending solution. Start your free trial.</p>
        <div className="mt-5 flex w-full flex-col space-y-3 md:flex-row md:space-y-0">
          <input
            type="text"
            placeholder="Your company email"
            className="m-0 grow rounded-full border-2 p-3 py-1 px-6 text-center md:rounded-r-none md:border-r-0 md:text-start"
          />
          <PrimaryButton className="md:rounded-l-none">Get Started</PrimaryButton>
        </div>
        <p className="mt-4 self-center text-xs font-bold md:self-start">Commitment free</p>
      </div>
      <div className="relative flex items-center justify-center bg-intro bg-contain bg-center bg-no-repeat">
        <img
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/0/375.png"
          width="80px"
          height="80px"
          className="z-10"
        />
      </div>
    </div>
  );
}

export default Introduction;
