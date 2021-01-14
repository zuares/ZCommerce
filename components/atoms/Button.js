import React from 'react';

function Button({ children, type = false, ...rest }) {
    return (
        <button type={`${type ? 'submit' : 'button'} `} {...rest} >
            {children}
        </button>
    );
}

export default Button;