import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

function Introduction() {
  return (
    <div className="px-8 grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-1 md:gap-4 mt-10">
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-5xl text-left">
          Stop spending time
        </h1>
        <br />
        <h1 className="text-5xl -mt-7 text-left">
          on expenses
        </h1>
        <p className="text-left mt-5">
          Do more of the work that matters. Leave expenses,
        </p>
        <p className="text-left">
          invoices and reimbursements to Pleo, Europes #1
        </p>
        <p className="text-left">
          business spending solution. Start your free trial.
        </p>
        <div className="flex flex-col md:flex-row mt-5 w-full space-y-3 md:space-y-0">
          <input type="text" placeholder="Your company email" className="border-2 md:border-r-0 md:rounded-r-none p-3 rounded-full grow m-0 py-1 px-6 text-center md:text-start" />
          <PrimaryButton text="Get Started" className="md:rounded-l-none" />
        </div>
        <p className="font-bold text-xs self-center md:self-start mt-4">Commitment free</p>
      </div>
      <div className="flex justify-center items-center relative bg-intro bg-contain bg-center bg-no-repeat">
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
