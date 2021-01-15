import React from 'react';
import Container from './Container'

function Content({ children, title }) {
    return (
        <Container>
            <div className="px-3 md:px-8 pb-8" >
                <div className="pt-5 mb-5">
                    <h2 className="text-xl font-bold text-true-gray-500">{title}</h2>
                </div>
                {children}
            </div>
        </Container>
    );
}

export default Content;