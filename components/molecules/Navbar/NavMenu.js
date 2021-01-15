import React from 'react';

function NavMenu({ children }) {
    return (
        <ul className={`md:space-x-4 flex`} >
            {children}
        </ul>
    );
}

export default NavMenu;