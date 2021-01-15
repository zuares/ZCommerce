import React from 'react';

function Image({ src, ...rest }) {
    return (
        <img src={src} alt={src} {...rest} />
    )
}

export default Image