import React from 'react';
import Pixel from './pixel';
import Transmission from './transmission';
import rowColorMap from './rows/rowColorMap';
import vidSrcMap from './rows/vidSrcMap';

const Row = ({ rowNum, vidNum }) => {
    return (
        //row
        <div style={{
            display: 'flex',
            flexDirection: 'row'
        }}>
            {
                rowColorMap[rowNum].map((hex, i) => {
                    if (hex === '#FF0000') {
                        vidNum.current++;
                        if (vidNum.current > 23) {
                            vidNum.current = 0;
                         }
                        return (
                            <Transmission src={vidSrcMap[vidNum.current > 23 ? 23 : vidNum.current]} key={`video-${vidNum.current}`}></Transmission>
                        );
                    } else {
                        return (
                            <Pixel color={hex} key={`pixel-1.${i}`}></Pixel>
                        );
                    }
                })
            }
        </div>
    );
};

export default Row;