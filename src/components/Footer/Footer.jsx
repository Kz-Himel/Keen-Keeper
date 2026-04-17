import React from "react";
import Instagram from "../../assets/instagram.png";
import Facebook from "../../assets/facebook.png";
import Twitter from "../../assets/twitter.png";

const Footer = () => {
  return (
    <div className="bg-[#244d3f] mt-auto">
      <div className="container mx-auto p-4">
        <footer className="footer footer-horizontal footer-center text-base-content rounded p-10 text-white">
          <h1 className="text-3xl lg:text-5xl font-bold">
            KeenKeeper
          </h1>
          <p>
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <nav>
            <h1 className="text-2xl font-bold">Social Links</h1>
            <div className="grid grid-flow-col gap-4 mt-4">
              <a className="cursor-pointer">
                <img
                  src={Instagram}
                  alt="Instagram"
                  width={50}
                  height={50}
                  className="fill-current"
                />
              </a>
              <a className="cursor-pointer">
                <img
                  src={Facebook}
                  alt="Facebook"
                  width={50}
                  height={50}
                  className="fill-current"
                />
              </a>
              <a className="cursor-pointer">
                <img
                  src={Twitter}
                  alt="Twitter"
                  width={50}
                  height={50}
                  className="fill-current"
                />
              </a>
            </div>
          </nav>
          <div className="divider h-0 my-0 before:bg-[#2e6653] after:bg-transparent w-full"></div>
          <aside className="flex flex-col md:flex-row items-center justify-between w-full text-gray-400">
            <div>
              <p>© 2026 Bondly. All rights reserved.</p>
            </div>
            <div className="flex gap-2 text-gray-400">
              <a href="">Privacy Policy</a>
              <a href="">Terms of Service</a>
              <a href="">Cookies</a>
            </div>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;