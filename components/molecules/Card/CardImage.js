import React from 'react';
import Image from '../../atoms/Image'

function CardImage({ src, maxHeight, ...rest }) {
    return (
        <Image src={src} style={{ maxHeight: maxHeight, width: `100%` }}  {...rest} />
    );
}

export default CardImage;