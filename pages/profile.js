import React, { useContext, useState, useEffect } from 'react';
import Content from '../components/container/Content';
import MainApp from '../components/layouts/MainApp';
import Fields from '../components/molecules/Fields';
import { DataContext } from '../store/GlobalState';
import valid from '../utils/validate'
import Notify from '../components/molecules/Notify'
import { patchData } from '../utils/fetchData';
import { ImageUpload } from '../utils/ImageUpload';
import Link from 'next/link';


function profile() {
    const init = {
        avatar: '',
        name: '',
        email: '',
        password: '',
        password2: ''
    }

    const [data, setData] = useState(init)
    const { avatar, name, password, password2 } = data

    const { state: { auth, notify, order }, dispatch } = useContext(DataContext)
    useEffect(() => {
        if (auth.user)
            setData({ ...data, name: auth.user.name, email: auth.user.email })
    }, [auth.user]);


    const onChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
        // dispatch({ type: "NOTIFY", payload: {} })
    }

    const onUpdate = (e) => {
        e.preventDefault()
        if (password) {
            const errMsg = valid(data)
            console.log(errMsg);
            if (errMsg)
                return dispatch({ type: "NOTIFY", payload: { msg: { err: errMsg } } })
            updatePassword()
        }

        if (name !== auth.user.name || avatar) updateInfo()

    }

    const updatePassword = () => {
        patchData('user/resetPassword', { password }, auth.access_token)
            .then(res => {
                if (res.err)
                    return dispatch({ type: "NOTIFY", payload: { msg: { err: res.err } } })

                return dispatch({ type: "NOTIFY", payload: { msg: { success: "Success Update Password" } } })
            })
    }

    const changeAvatar = (e) => {
        const file = e.target.files[0];
        if (!file)
            return dispatch({ type: "NOTIFY", payload: { msg: { err: 'File doesnt exists' } } })
        if (file.size > 1024 * 1024) //1Mb
            return dispatch({ type: "NOTIFY", payload: { msg: { err: 'The largest image size is 1mb' } } })
        if (file.type !== "image/jpeg" && file.type !== "image/png") //1Mb
            return dispatch({ type: "NOTIFY", payload: { msg: { err: 'Image format invalid' } } })
        setData({ ...data, avatar: file })

    }

    const updateInfo = async () => {
        let media
        if (avatar) media = await ImageUpload([avatar])
        patchData("user", {
            name, avatar: avatar ? media[0].url : auth.user.avatar
        }, auth.access_token).then(res => {
            console.log(res);
            if (res.err)
                return dispatch({ type: "NOTIFY", payload: { msg: { err: res.err } } })
            dispatch({
                type: "AUTH", payload: {
                    access_token: auth.access_token,
                    user: res.user
                }
            })

            return dispatch({ type: "NOTIFY", payload: { msg: { success: res.msg } } })
        })
    }

    if (!auth.user) return null
    return (
        <MainApp>
            <Content title="Profile" >
                {notify.msg ? <Notify msg={notify.msg} /> : null}
                <div className={` w-full lg:flex space-y-16 `} >

                    <div className={`w-2/3 space-y-4`} >
                        <div>
                            <h1>{auth.user.role == "user" ? "User Profile" : "Admin Profile"}</h1>
                        </div>
                        <div className={`text-center  relative w-36 h-36 overflow-hidden my-4 border rounded-full `} >
                            <img src={avatar ? URL.createObjectURL(avatar) : auth.user.avatar} className={`rounded-full  object-cover avatar w-full h-full relative block `} />
                            <span className={`absolute opacity-50 bottom-0 left-0 w-full h-1/2  bg-gray-50 z-20  text-center  uppercase`} >
                                <p className={` text-yellow-500 relative z-10 opacity-100 font-bold  `} >Change</p>
                                <input type="file" name="file" className={`absolite z-20 top-0 left-0  h-full w-full cursor-pointer opacity-0 `} id="file_up" onChange={e => changeAvatar(e)} />
                            </span>
                        </div>
                        <Fields type="text" name="name" label="Name" value={name} onChange={onChange} />
                        <Fields type="email" name="email" label="Email" value={auth.user.email} onChange={onChange} />
                        <Fields type="password" name="password" label="New Password" value={password} onChange={onChange} />
                        <Fields type="password" name="password2" label="Confirm New Password" value={password2} onChange={onChange} />
                        <button onClick={onUpdate} className={`px-6 py-2.5 bg-green-300 focus:outline-none text-white font-bold`} >Update</button>
                    </div>

                    <div className={` lg:w-2/4 lg:ml-8 `} >
                        <h2>Orders</h2>
                        <div className={`my-3`} >
                            <table className={`table table-fixed  w-full border-separate   shadow-inner   pb-12`} >
                                <thead className={`text-true-gray-300 border-b `} >
                                    <tr className={``} >
                                        <th className={`p-4 shadw`} >
                                            #
                                      </th>
                                        <th className={``} >
                                            Date
                                     </th>
                                        <th className={``} >
                                            Total
                                     </th>
                                        <th className={``} >
                                            Delivered
                                        </th>
                                        <th className={``} >
                                            Action
                                         </th>
                                    </tr>
                                </thead>

                                <tbody className={`text-center text-gray-700`} >
                                    {
                                        order.map(item => {
                                            console.log(item);
                                            return (
                                                <tr key={item._id} className={`p-20`}>
                                                    <td className={`p-4  font-bold s`}>{1}</td>
                                                    <td className={`p-4`}>{
                                                        new Date(item.createdAt).toLocaleDateString()
                                                    }</td>
                                                    <td className={`p-4`}>
                                                        $ {item.total}
                                                    </td>
                                                    <td className={`p-4`}>
                                                        {
                                                            order.deliverd ? <i>Oke</i> : <i>No Oke</i>
                                                        }
                                                    </td>
                                                    <td className={`p-4`}>
                                                        <Link href={`/order/${item._id}`} >
                                                            <a >
                                                                Details
                                                            </a>
                                                        </Link>
                                                    </td>


                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>

                            </table>
                        </div>
                    </div>

                </div>
            </Content>
        </MainApp>
    );
}

export default profile;