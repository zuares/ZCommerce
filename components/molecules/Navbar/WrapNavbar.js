import React from 'react';
import Container from '../../atoms/Container';

function WrapNavbar({ children }) {
    return (
        <div className="bg-blue-300 text-white border-b" >
            <Container>
                <div className="flex justify-between h-14 items-center px-4">
                    {children}
                </div>
            </Container>
        </div>
    );
}

export default WrapNavbar;