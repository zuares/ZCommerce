import React from 'react';

function Navbrand({ children, src, ...rest }) {
    return (
        <div>
            {
                src ?
                    <Image src={src} {...rest} className={`w-10 h-10`} /> :
                    <div>
                        {children}
                    </div>
            }
        </div>
    );
}

export default Navbrand;