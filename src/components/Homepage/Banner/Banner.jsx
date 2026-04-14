import React from 'react';
import { LucidePlus } from 'lucide-react'

const Banner = () => {
    return (
        <div className="container mx-auto px-4 mt-23">
      <div>
        <div className="">
          <div className=" text-center">
            <div className="">
              <h1 className="text-3xl lg:text-5xl font-bold capitalize">
                Friends to keep close in your life
              </h1>
              <p className="py-6 text-gray-700">
                Your personal shelf of meaningful connections. Browse, tend, and nurture the
                <br />
                relationships that matter most.
              </p>
              <button className="btn bg-[#244d3f] text-white hover:bg-green-800">
                <LucidePlus /> Add a Friend
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Banner;