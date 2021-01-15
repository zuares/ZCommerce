import React from 'react';

function index({ children, ...rest }) {
    return (
        <div  {...rest} >
            {children}
        </div>
    );
}

export default index;