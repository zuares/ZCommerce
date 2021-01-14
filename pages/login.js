import React from 'react';

function login() {
    return (
        <div className=" h-screen w-screen flex bg-white">
            <div className="md:w-3/6 lg:w-4/6">
                <img src="https://images.unsplash.com/photo-1466193341027-56e68017ee2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className={`w-full h-full lg:w-max-lg md:object-cover`} />
            </div>
            <div className="md:w-3/6 lg:w-2/6 flex justify-center items-center" >
                <div className="w-full p-12 h-96">
                    <div>Heading</div>
                    <div>Form Login</div>
                </div>
            </div>

        </div>
    );
}

export default login;