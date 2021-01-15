import React from 'react';
import Image from '../../atoms/Image'

function CardImage({ src, height, ...rest }) {
    return (
        <Image src={src} style={{ height: { height }, width: `100%` }}  {...rest} />
    );
}

export default CardImage;