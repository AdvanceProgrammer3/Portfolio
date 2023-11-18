import React from "react";
import HeroSection from "./HeroSection.component";

function Header() {
  return (
    <div>
      {/* <!-- Navigation --> */}
      <nav class="bg-blue-500 p-4">
        <div class="container mx-auto">
          <div class="flex justify-between items-center">
            <a href="#" class="text-white text-2xl font-bold">
              ROHIT PATEL
            </a>
            <div class="space-x-4">
              <a href="/" class="text-white">
                Home
              </a>
              <a href="/about" class="text-white">
                About
              </a>
              <a href="/project" class="text-white">
                Portfolio
              </a>
              <a href="/contact" class="text-white">
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
