import React from 'react'
const Input = ({ name, label, type, ...rest }) => {
    return (
        <div className="w-full">
            <label htmlFor={name} className="inline-block mb-1.5 text-base capitalize text-gray-800" >{label}</label>
            <input type={type} name={name} id={name} className="block border w-full px-3 py-2.5 rounded-sm focus:outline-none focus:ring-1 ring-blue-400" {...rest} />
        </div>
    );
}

export default Input


