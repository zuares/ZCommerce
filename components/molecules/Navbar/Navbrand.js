import React from 'react';
import Link from 'next/link';

function Navbrand({ children, src, ...rest }) {
    return (
        <Link href="/">
            <a >
                {
                    src ?
                        <Image src={src} {...rest} className={`w-10 h-10`} /> :
                        <div>
                            {children}
                        </div>
                }
            </a>
        </Link>
    );
}

export default Navbrand;