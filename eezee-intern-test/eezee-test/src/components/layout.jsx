import React from "react";
import MainHeader from "./main-header"; // import MainHeader component
import Link from "next/link"; // import Link component from Next.js for client-side navigation

export default function Layout({ children }) { // create a function component called Layout that takes a prop 'children'
  return (
    <>
      <MainHeader /> {/* render MainHeader component */}
      <div className="container mx-auto">
        <div className="py-2">
          <div className="flex items-center">
            <Link
              href="/all-brands"
              passHref
              className="pl-3 text-gray-800 hover:text-gray-600 font-medium"
            >
              View All Brands
            </Link> {/* render a client-side navigation link to /all-brands */}
          </div>
        </div>
      </div>
      <main>{children}</main> {/* render the children of the Layout component */}
    </>
  );
}
