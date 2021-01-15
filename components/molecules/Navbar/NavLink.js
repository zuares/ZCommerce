import React from 'react';
import Link from 'next/link'

function NavLink({ children, href, ...rest }) {
    return (
        <Link href={href} >
            <a  {...rest} >
                {children}
            </a>
        </Link>
    );
}

export default NavLink;