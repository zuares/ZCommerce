import React from 'react';
import Container from '../../container/Container';

function WrapNavbar({ children }) {
    return (
        <div className="bg-light-blue-400 text-white border-b" >
            <Container>
                <div className="flex justify-between h-16 items-center px-4">
                    {children}
                </div>
            </Container>
        </div>
    );
}

export default WrapNavbar;