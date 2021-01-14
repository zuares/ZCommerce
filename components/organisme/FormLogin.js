import React, { useContext, useState } from 'react';
import { BtnPrimary } from '../molecules/Button';
import Form from '../atoms/Form';
import Fields from '../molecules/Fields/';
import Link from 'next/link';
import { DataContext } from '../../store/GlobalState';
import { postData } from '../../utils/fetchData';
import { useRouter } from 'next/router';
import Cookie from 'js-cookie'


function FormLogin() {
    const route = useRouter()
    const initialize = { email: '', password: '' }
    const [formData, setFormData] = useState(initialize)
    const { email, password } = formData
    const { state, dispatch } = useContext(DataContext)

    const onSubmit = async (e) => {
        e.preventDefault()

        // Cek form
        if (!email || !password)
            return dispatch({ type: "NOTIFY", payload: { msg: { err: `Please add all field'` } } })

        if (password.length < 6)
            return dispatch({ type: "NOTIFY", payload: { msg: { err: `Password too short` } } })

        const res = await postData('auth', formData)
        if (res.err)
            return dispatch({ type: "NOTIFY", payload: { msg: { err: res.err } } })

        dispatch({
            type: "AUTH",
            payload: {
                token: res.access_token,
                user: res.user
            }
        })

        dispatch({
            type: "NOTIFY",
            payload: { msg: { success: `Login Success` } }
        })
        Cookie.set('refreshToken', res.refresh_token, {
            path: 'api/auth/accessToken',
            expires: 7
        })

        localStorage.setItem(`firstLogin`, true)

        route.push('/')
    }
    const onChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setFormData(
            {
                ...formData, [name]: value
            }
        )
    }


    return (
        <Form onSubmit={e => onSubmit(e)}>
            <div className="space-y-2" >
                <Fields type="email" name="email" label="email" value={email} onChange={e => onChange(e)} />
                <Fields type="password" name="password" label="password" value={password} onChange={e => onChange(e)} />
            </div>
            <div className="space-y-3 mt-4" >
                <BtnPrimary type="submit" block={true}>Login</BtnPrimary>
                <span className="inline-block border-b">Belum punya akun ??</span>
                <div>
                    <Link href="/register" >
                        <a className="font-bold inline-block text-blue-400 " >Daftar disni</a>
                    </Link>
                </div>
            </div>
        </Form >
    );
}

export default FormLogin;