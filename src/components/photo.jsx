import React from 'react';
import Row01 from './rows/row01';
import Row02 from './rows/row02';
import Row03 from './rows/row03';
import Row04 from './rows/row04';
import Row05 from './rows/row05';
import Row06 from './rows/row06';
import Row07 from './rows/row07';
import Row08 from './rows/row08';
import Row09 from './rows/row09';

const Photo = ({}) => {
    return (
        //wrapper
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            {/* pixel rows go here */}
            <Row01></Row01>
            <Row02></Row02>
            <Row03></Row03>
            <Row04></Row04>
            <Row05></Row05>
            <Row06></Row06>
            <Row07></Row07>
            <Row08></Row08>
            <Row09></Row09>

        </div>
    );
};

export default Photo;