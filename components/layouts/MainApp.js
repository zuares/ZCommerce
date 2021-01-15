import React from 'react';
import Navbar from '../organisme/Navbar';

function MainApp({ children }) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
}

export default MainApp;