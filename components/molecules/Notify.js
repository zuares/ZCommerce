import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../store/GlobalState';

function Notify({ msg }) {
    const { state, dispatch } = useContext(DataContext)
    const [width, setWidth] = useState(0)
    const [intervalId, setIntervalId] = useState(0)
    const [exit, setExit] = useState(false)
    const handleStartTimer = () => {

        const id = setInterval(() => {
            setWidth(prev => {
                if (prev < 100) return prev + 0.5;

                clearInterval(id)
                return prev;
            })
        }, 10);
        setIntervalId(id)
    }


    const handleCloseNotif = () => {
        setExit(true)
        setTimeout(() => {
            dispatch({ type: "NOTIFY", payload: {} })
        }, 400);
    }

    useEffect(() => {
        if (width === 100) setExit(true)
    }, [width]);

    useEffect(() => {
        handleStartTimer()
        return () => {
            handleCloseNotif()
        }
    }, [exit])

    return (
        <div onClick={handleCloseNotif} className=" fixed top-2 right-2 w-72">
            <div className={`relative notify shadow-md rounded-sm overflow-hidden bg-white mt-4 text-gray-700 ${exit ? 'exit' : ''}`} >
                <div className="absolute right-0 p-1">
                    <svg className="w-4 h-4 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </div>
                <p className="px-2 py-4">{msg ? msg.err : msg.success}</p>
                <div className={`h-3 ${msg.success ? `bg-green-300` : `bg-red-400`}`} style={{ width: `${width}%` }} ></div>
            </div>
        </div >
    );
}

export default Notify;