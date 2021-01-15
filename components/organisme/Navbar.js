import React from 'react';
import Navbrand from '../molecules/Navbar/Navbrand';
import NavMenu from '../molecules/Navbar/NavMenu';
import NavItem from '../molecules/Navbar/NavItem';
import NavLink from '../molecules/Navbar/NavLink';
import IcCart from '../icons/IcCart';
import IcUser from '../icons/IcUser';
import WrapNavbar from '../molecules/Navbar/WrapNavbar';

function Navbar({ }) {
    return (
        <WrapNavbar>
            <Navbrand>ZCommerce</Navbrand>
            <NavMenu>
                <NavItem>
                    <NavLink href="/" className="flex gap-1" >
                        <IcCart className="w-5 h-5" />
                            Cart
                        </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/" className="flex gap-1" >
                        <IcUser className="w-5 h-5" />
                            Signin
                        </NavLink>
                </NavItem>
            </NavMenu>
        </WrapNavbar>
    );
}

export default Navbar;