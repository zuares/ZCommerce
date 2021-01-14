import React from 'react';

function Auth({ children }) {
    return (
        <div className=" h-screen w-screen flex bg-white">
            <div className="w-0 md:w-3/6 lg:w-4/6 bg-blue-200">
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