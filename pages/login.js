import React from 'react';
import Auth from '../components/layouts/Auth';
import FormLogin from '../components/organisme/FormLogin';

function login({ children }) {
    return (
        <Auth>
            <div className="mb-8">
                <h2 className="font-bold text-2xl font-serif">Wellcome Back</h2>
            </div>
            <FormLogin />
        </Auth>
    );
}

export default login;