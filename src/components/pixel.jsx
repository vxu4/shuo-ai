import React from 'react';

const Pixel = ({color}) => {
    return (
        <div style={{
            backgroundColor: color,
            width: '13px',
            height: '13px',
        }}>
        </div>
    );
};

export default Pixel;