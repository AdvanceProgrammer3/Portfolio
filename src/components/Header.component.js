import React from "react";
import HeroSection from "./HeroSection.component";

function Header() {
  return (
    <div>
      {/* <!-- Navigation --> */}
      <nav class="bg-blue-500 p-4">
        <div class="container mx-auto">
          <div class="flex justify-between items-center">
            <a href="#" class="text-white sm:text-2xl font-bold ">
              ROHIT PATEL
            </a>
            <div class="space-x-2 sm:space-x-4">
              <a href="/" class="text-white font-[barlow]">
                Home
              </a>
              <a href="/about" class="text-white font-[barlow]">
                About
              </a>
              <a href="/project" class="text-white font-[barlow]">
                Portfolio
              </a>
              <a href="/contact" class="text-white font-[barlow]">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
