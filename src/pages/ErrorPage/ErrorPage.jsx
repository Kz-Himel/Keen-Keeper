import React from "react";
import { Link } from "react-router-dom";
import { House, AlertTriangle, Search, X } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200 flex flex-col">
      {/* Navbar spacing */}
      <div className="h-16"></div>
      
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="text-center space-y-8 max-w-lg mx-auto">
          
          {/* Main Error Illustration */}
          <div className="relative">
            {/* Background circle */}
            <div className="w-64 h-64 bg-[#244d3f]/10 rounded-full absolute -top-8 -right-8 opacity-50"></div>
            
            {/* Error Icon + Number */}
            <div className="relative bg-gradient-to-r from-[#244d3f] to-primary bg-clip-text text-transparent">
              <div className="w-32 h-32 bg-base-100/50 backdrop-blur-sm rounded-2xl border border-[#244d3f]/20 p-6 mx-auto mb-6 shadow-2xl">
                <AlertTriangle size={48} className="mx-auto text-[#244d3f] mb-4" />
                <div className="text-4xl font-black text-[#244d3f] tracking-wider">
                  404
                </div>
              </div>
            </div>
          </div>

          {/* Title */}
          <div>
            <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[#244d3f] to-primary bg-clip-text text-transparent mb-4">
              Page Not Found
            </h1>
            <p className="text-xl text-base-content/70 font-semibold">
              The page you're looking for doesn't exist
            </p>
          </div>

          {/* Description */}
          <p className="text-base-content/60 text-lg leading-relaxed max-w-md mx-auto">
            It looks like you might have mistyped the URL, 
            or the page has been moved. No worries though!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              to="/"
              className="btn btn-primary shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
            >
              <House size={20} />
              Go to Home
            </Link>
            
            <button className="btn btn-outline btn-ghost gap-2 hover:bg-base-200">
              <Search size={20} />
              Try Searching
            </button>
          </div>

          {/* Error Details */}
          <div className="pt-8 border-t border-base-200">
            <div className="inline-flex items-center gap-2 bg-base-100/50 backdrop-blur-sm px-6 py-3 rounded-xl border border-base-200">
              <X size={20} className="text-error" />
              <span className="font-mono text-sm text-base-content/50">
                Error: PAGE_NOT_FOUND
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;