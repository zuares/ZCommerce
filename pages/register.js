import React from 'react';
import Auth from '../components/layouts/Auth';
import FormRegister from '../components/organisme/FormRegister';

function login({ children }) {
    return (
        <Auth>
            <div className="mb-8">
                <h2 className="font-bold text-2xl font-serif">Create Account</h2>
            </div>
            <FormRegister />
        </Auth>
    );
}

export default login;