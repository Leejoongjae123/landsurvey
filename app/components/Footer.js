import React from "react";
import ContactPage from "./Contact";

function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="flex flex-col gap-x-2 md:flex-row text-sm text-gray-500 sm:text-center dark:text-gray-400">
          <p>

          </p>
          
          <a href="https://www.findhome.work" className="hover:underline">
          © 2024 Lease Request Form
          </a>
          <p>
          All Rights Reserved.
          </p>
          
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            {/* <a href="tel:01029717521" className="hover:underline me-4 md:me-6">
              Contact
            </a> */}
            <ContactPage />
          </li>
          <li>
            <a href="/agency" className="hover:underline">
              Go To Agency Page
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
