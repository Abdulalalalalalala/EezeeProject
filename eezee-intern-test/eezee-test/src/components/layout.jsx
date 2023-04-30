import React from "react";
import MainHeader from "./main-header";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <MainHeader />
      <div className="container mx-auto">
        <div className="py-2">
          <div className="flex items-center">
            <Link
              href="/all-brands"
              passHref
              className="pl-3 text-gray-800 hover:text-gray-600 font-medium"
            >
              View All Brands
            </Link>
          </div>
        </div>
      </div>
      <main>{children}</main>
    </>
  );
}
