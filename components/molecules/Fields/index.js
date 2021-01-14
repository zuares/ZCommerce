import React from 'react';
import Input from './Input';

function Fields({ type, ...rest }) {
    switch (type) {
        case "text":
        case "password":
        case "email":
            return <Input type={type} {...rest} />
        default:
            return null
    }
}


export default Fields;