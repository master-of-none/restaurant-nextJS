import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
    const user = false;

    return (
        <div className="h-12 text-red-500 o-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
            {/* LEFT LINKS */}
            <div className="hidden md:flex gap-4 flex-1">
                <Link href="/">Homepage</Link>
                <Link href="/menu">Menu</Link>
                <Link href="/">Contact</Link>
            </div>
            {/* Logo */}
            <div className="text-xl md:font-bold flex-1 md:text-center">
                <Link href="/"> Caprese</Link>
            </div>
            {/* Mobile menu */}
            <div className="md:hidden">
                <Menu />
            </div>

            {/* RIGHT LINKS */}
            <div className="hidden md:flex gap-4 items-center justify-endflex-1">
                <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
                    <Image
                        src="/phone.png"
                        alt="Phone"
                        width={20}
                        height={20}
                    />
                    <span>123-456-7890</span>
                </div>
                {!user ? (
                    <Link href="/login">Login</Link>
                ) : (
                    <Link href="/orders">Order</Link>
                )}
                <CartIcon />
            </div>
        </div>
    );
};

export default Navbar;
