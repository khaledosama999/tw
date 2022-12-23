import * as React from 'react';

function Data() {
  return (
    <div className="px-8 flex flex-col gap-2 items-start">
      <div className="bg-slate-100 rounded-lg px-4 py-10 flex justify-between items-start w-full gap-4">
        <div className=" w-0 grow shrink flex flex-col gap-2">
          <h2 className="text-4xl">99%</h2>
          <p>of users feel secure using Pleo</p>
        </div>
        <div className=" w-0 grow shrink flex flex-col gap-2">
          <h2 className="text-4xl">138</h2>
          <p>hours saved by admins every year thanks to Pleo</p>
        </div>
        <div className=" w-0 grow shrink flex flex-col gap-2">
          <h2 className="text-4xl">90%</h2>
          <p>of users are satisfied or very satisfied with Pleo</p>
        </div>
      </div>
      <p className="underline">Where this data comes from</p>
    </div>
  );
}

export default Data;
