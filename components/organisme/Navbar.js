import React, { useContext } from 'react';
import Navbrand from '../molecules/Navbar/Navbrand';
import NavMenu from '../molecules/Navbar/NavMenu';
import NavItem from '../molecules/Navbar/NavItem';
import NavLink from '../molecules/Navbar/NavLink';
import Image from '../atoms/Image';
import IcCart from '../icons/IcCart';
import IcUser from '../icons/IcUser';
import WrapNavbar from '../molecules/Navbar/WrapNavbar';
import { DataContext } from '../../store/GlobalState';

function Navbar({ }) {
    const { state: { auth } } = useContext(DataContext)
    return (
        <WrapNavbar>
            <Navbrand>ZCommerce</Navbrand>
            <NavMenu>
                <NavItem>
                    <NavLink href="/cart" className="flex gap-1" >
                        <IcCart className="w-5 h-5" />
                            Cart
                        </NavLink>
                </NavItem>
                <NavItem>

                    {
                        auth.access_token ?
                            <NavLink href="/profile" className="flex gap-2" >
                                <Image src={auth.user.avatar} className={`w-5 object-cover rounded-full `} />
                                {auth.user.name}
                            </NavLink> :
                            <NavLink href="/login" className="flex gap-1" >
                                <IcUser className="w-5 h-5" />
                                    Signin
                            </NavLink>
                    }
                </NavItem>
            </NavMenu>
        </WrapNavbar>
    );
}

export default Navbar;