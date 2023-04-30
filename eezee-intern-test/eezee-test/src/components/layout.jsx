import React from 'react';
import MainHeader from './main-header';
import { useCart } from '../contexts/cart-contexts';
import Link from 'next/link';

function AllBrandsLink() {
    return (
        <div className=" scale-85">
            <div className=" py-2">
                <div className="container mx-auto flex items-center justify-start">
                    <div className="px-4">
                        <div className="flex -mx-2">
                            <div className="mx-2 flex items-center">
                                <Link
                                    href="/all-brands"
                                    passHref
                                    className="text-sm text-gray-800 font-medium hover:text-gray-600 transition-colors duration-300"
                                >
                                    View All Brands
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Layout({ title, children }) {
    const { cartItems } = useCart();

    return (
        <>
            <MainHeader />
            <AllBrandsLink />
            <main>{children}</main>
        </>
    );
}
