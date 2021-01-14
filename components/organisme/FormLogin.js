import React from 'react';
import { BtnPrimary } from '../molecules/Button';
import Form from '../atoms/Form';
import Fields from '../molecules/Fields/';
import Link from 'next/link';

function FormLogin() {
    return (
        <Form>
            <div className="space-y-2" >
                <Fields type="text" name="email" label="email" />
                <Fields type="password" name="password" label="password" />
            </div>
            <div className="space-y-3 mt-4" >
                <BtnPrimary block={true}>Login</BtnPrimary>
                <span className="inline-block border-b">Belum punya akun ??</span>
                <div>
                    <Link href="/" >
                        <a className="font-bold inline-block text-blue-400 " >Daftar disni</a>
                    </Link>
                </div>
            </div>
        </Form >
    );
}

export default FormLogin;