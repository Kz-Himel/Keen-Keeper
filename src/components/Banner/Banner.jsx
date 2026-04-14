import React from 'react';
import { LucidePlus } from 'lucide-react'

const Banner = () => {
    return (
        <div className="container mx-auto px-4">
      <div>
        <div className="">
          <div className=" text-center">
            <div className="">
              <h1 className="text-3xl lg:text-5xl font-bold capitalize">
                Build Bonds That Last
              </h1>
              <p className="py-6">
                A simple way to maintain meaningful relationships.
                <br />
                Track, manage, and strengthen your connections so no important
                relationship fades away.
              </p>
              <button className="btn bg-(--bg-primary) text-white">
                <LucidePlus /> Add to Bonds
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Banner;