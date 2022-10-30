import React from 'react';
import Pixel from '../pixel';
import Transmission from '../transmission';
import src from '../../assets/testVid.mp4';
import rowColorMap from './rowColorMap';

const Row = ({}) => {
    console.log(rowColorMap);

    return (
        //row
        <div style={{
            display: 'flex',
            flexDirection: 'row'
        }}>
            {
                //abstract rowColorMap.row01 as a prop, and then pass in row # for key 
                rowColorMap.row01.map((hex, i) => {
                    if (hex === '#FF0000') {
                        return (
                            //prolly need a counter at the photo level to figure out which src in array we on
                            <Transmission src={src} key={`countVarEventually${i}`}></Transmission>
                        );
                    } else {
                        return(
                            <Pixel color={hex} key={`pixel-1.${i}`}></Pixel>
                        );
                    }
                })
            }
        </div>
    );
};

export default Row;