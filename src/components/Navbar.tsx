import Link from "next/link";
import React from "react";
import Menu from "./Menu";
const Navbar = () => {
    return (
        <div className="h-12 text-red-500 o-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase">
            {/* Logo */}
            <div className="text-xl">
                <Link href="/"> Caprese</Link>
            </div>
            {/* Mobile menu */}
            <div>
                <Menu />
            </div>
        </div>
    );
};

export default Navbar;
