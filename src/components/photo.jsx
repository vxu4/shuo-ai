import React, { useState, useRef, useContext, useEffect } from 'react';
import { AppContext } from '../App';
import Row from './row';

const Photo = ({ }) => {
    const videoCount = useRef(0);
    const { display } = useContext(AppContext);
    useEffect(() => {
        videoCount.current = 0;
    }, [display]);
    return (
        //wrapper
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1
        }}>
            {/* pixel rows go here. note rowNum is row - 1 bc count starts at 0*/}
            <Row rowNum={0} vidNum={videoCount} />
            <Row rowNum={1} vidNum={videoCount} />
            <Row rowNum={2} vidNum={videoCount} />
            <Row rowNum={3} vidNum={videoCount} />
            <Row rowNum={4} vidNum={videoCount} />
            <Row rowNum={5} vidNum={videoCount} />
            <Row rowNum={6} vidNum={videoCount} />
            <Row rowNum={7} vidNum={videoCount} />
            <Row rowNum={8} vidNum={videoCount} />
            <Row rowNum={9} vidNum={videoCount} />
            <Row rowNum={10} vidNum={videoCount} />
            <Row rowNum={11} vidNum={videoCount} />
            <Row rowNum={12} vidNum={videoCount} />
            <Row rowNum={13} vidNum={videoCount} />
            <Row rowNum={14} vidNum={videoCount} />
            <Row rowNum={15} vidNum={videoCount} />
            <Row rowNum={16} vidNum={videoCount} />
            <Row rowNum={17} vidNum={videoCount} />
            <Row rowNum={18} vidNum={videoCount} />
            <Row rowNum={19} vidNum={videoCount} />
            <Row rowNum={20} vidNum={videoCount} />
            <Row rowNum={21} vidNum={videoCount} />
            <Row rowNum={22} vidNum={videoCount} />
            <Row rowNum={23} vidNum={videoCount} />
            <Row rowNum={24} vidNum={videoCount} />
            <Row rowNum={25} vidNum={videoCount} />
            <Row rowNum={26} vidNum={videoCount} />
            <Row rowNum={27} vidNum={videoCount} />
            <Row rowNum={28} vidNum={videoCount} />
            <Row rowNum={29} vidNum={videoCount} />
            <Row rowNum={30} vidNum={videoCount} />
            <Row rowNum={31} vidNum={videoCount} />
            <Row rowNum={32} vidNum={videoCount} />
            <Row rowNum={33} vidNum={videoCount} />
            <Row rowNum={34} vidNum={videoCount} />
            <Row rowNum={35} vidNum={videoCount} />
            <Row rowNum={36} vidNum={videoCount} />
            <Row rowNum={37} vidNum={videoCount} />
            <Row rowNum={38} vidNum={videoCount} />
            <Row rowNum={39} vidNum={videoCount} /> 




            {/* <Row02></Row02>
            <Row03></Row03>
            <Row04></Row04>
            <Row05></Row05>
            <Row06></Row06>
            <Row07></Row07>
            <Row08></Row08>
            <Row09></Row09> */}
            {/* <Row rowNum={9} vidNum={videoCount} /> */}

        </div>
    );
};

export default Photo;