import React, {useContext} from 'react';
import { AppContext } from '../App';

const Pixel = ({color}) => {
    const { remember } = useContext(AppContext);
console.log(remember);
    return (
        <div style={{
            backgroundColor: remember ? 'rgba(0,0,0,0)' : color,
            width: '10px',
            height: '10px',
        }}>
        </div>
    );
};

export default Pixel;