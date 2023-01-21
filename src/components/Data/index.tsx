import * as React from "react";

function Data() {
  return (
    <div className="px-8">
      <div className="grid grid-flow-row gap-4 rounded-lg bg-slate-100 px-4 py-10 md:auto-cols-fr md:grid-flow-col">
        <div className="flex flex-col items-start gap-2 md:items-center">
          <span className="text-4xl">99%</span>
          <p>of users feel secure using Pleo</p>
        </div>
        <div className="flex flex-col items-start gap-2 md:items-center">
          <span className="text-4xl">138</span>
          <p>hours saved by admins every year thanks to Pleo</p>
        </div>
        <div className="flex flex-col items-start gap-2 md:items-center">
          <span className="text-4xl">90%</span>
          <p>of users are satisfied or very satisfied with Pleo</p>
        </div>
      </div>
      <p className="w-fit underline">Where this data comes from</p>
    </div>
  );
}

export default Data;
