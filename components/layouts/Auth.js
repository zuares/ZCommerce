import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import { DataContext } from '../../store/GlobalState';
import Notify from '../molecules/Notify';

function Auth({ children }) {
    const { state } = useContext(DataContext)
    const { notify, auth } = state
    const router = useRouter()
    useEffect(() => {
        if (auth && auth.access_token) return router.push('/')
    }, [auth])

    return (
        <div className=" h-screen w-screen flex bg-white relative">
            {notify.msg ? <Notify msg={notify.msg} /> : null}
            <div className="w-0 md:w-3/6 lg:w-4/6 bg-light-blue-200">
            </div>
            <div className="w-full md:w-3/6 lg:w-2/6 flex justify-center items-center" >
                <div className="w-full p-8 xl:p-16 transform -translate-y-16 h-96">
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;