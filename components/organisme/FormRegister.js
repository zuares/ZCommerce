import React, { useContext, useState } from 'react';
import { BtnPrimary } from '../molecules/Button';
import Form from '../atoms/Form';
import Fields from '../molecules/Fields/';
import Link from 'next/link';
import validate from '../../utils/validate';
import { DataContext } from '../../store/GlobalState';
import { postData } from '../../utils/fetchData';


function FormRegister() {
    const { state: { notify }, dispatch } = useContext(DataContext)
    console.log(notify);
    const initialize = {
        name: '', email: '', password: '', password2: ''
    }
    const [formData, setFormData] = useState(initialize)
    const { name, email, password, password2 } = formData

    const onChange = (e) => {
        const { name, value } = e.target
        setFormData(
            { ...formData, [name]: value }
        )
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const errMsg = validate(formData)
        if (errMsg)
            return dispatch({ type: "NOTIFY", payload: { err: errMsg } })

        const res = await postData('auth/register', formData)
        console.log(res);
    }


    return (
        <Form onSubmit={e => onSubmit(e)} >
            <div className="space-y-2" >
                <Fields type="text" name="name" label="name" value={name} onChange={e => onChange(e)} />
                <Fields type="email" name="email" label="email" value={email} onChange={e => onChange(e)} />
                <Fields type="password" name="password" label="password" value={password} onChange={e => onChange(e)} />
                <Fields type="password" name="password2" label="confirm password" value={password2} onChange={e => onChange(e)} />
            </div>
            <div className="space-y-3 mt-4" >
                <BtnPrimary type="submit" block={true}>Rgister</BtnPrimary>
                <span className="inline-block border-b">Sudah punya akun ??</span>
                <div>
                    <Link href="/login" >
                        <a className="font-bold inline-block text-blue-400 " >Login disni</a>
                    </Link>
                </div>
            </div>
        </Form >
    );
}

export default FormRegister;