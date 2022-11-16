import React from 'react';

const Pixel = ({color}) => {
    return (
        <div style={{
            backgroundColor: color,
            width: '10px',
            height: '10px',
        }}>
        </div>
    );
};

export default Pixel;