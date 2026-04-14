import React from "react";

const StatsCard = () => {
  return (
    <div>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-15">
        <div className="card card-border bg-base-100 shadow p-2 justify-center items-center">
          <div className="card-body text-center">
            <h2 className="text-3xl font-semibold text-[#244d3f]">
              10
            </h2>
            <p className="text-lg text-gray-700">Total Connection</p>
          </div>
        </div>
        <div className="card card-border bg-base-100 shadow p-2 justify-center items-center">
          <div className="card-body text-center">
            <h2 className="text-3xl font-semibold text-[#244d3f]">
              3
            </h2>
            <p className="text-lg text-gray-700">On Track</p>
          </div>
        </div>
        <div className="card card-border bg-base-100 shadow p-2 justify-center items-center">
          <div className="card-body text-center">
            <h2 className="text-3xl font-semibold text-[#244d3f]">
              6
            </h2>
            <p className="text-lg text-gray-700">Need Attention</p>
          </div>
        </div>
        <div className="card card-border bg-base-100 shadow p-2 justify-center items-center">
          <div className="card-body text-center">
            <h2 className="text-3xl font-semibold text-[#244d3f]">
              12
            </h2>
            <p className="text-lg text-gray-700">
              Interactions This Month
            </p>
          </div>
        </div>
      </div>
      <div className="divider mt-8"></div>
    </div>
  );
};

export default StatsCard;