import React, { useContext } from 'react';
import { AppContext } from '../App';
import '../App.css';
import "98.css";

const Teaching = ({onClick}) => {
    const { display, remember } = useContext(AppContext);
    if (display && !remember) {
        return (
            <div
                className="transmission"
                style={{
                    background: "rgba(255, 255, 255, 0)",
                    justifyContent: 'left',
                    alignItems: 'flex-start',
                    fontWeight: 700,
                    top: 0,
                    left: 0
                }}>
                <div style={{ width: 300, marginLeft: '3vw', marginTop: '10vh' }} className="window">
                    <div className="title-bar">
                        <div className="title-bar-text">Reminders: </div>
                    </div>
                    <div className="window-body" style={{textAlign: 'left'}}>
                        Do you remember the strokes I taught you? <br/> <br/> 
                        Start at the top right corner.<br/> 
                        Hover-<br/>
                        Go - <br/>
                        write love into lost pixels. <br/><br/>
                        But don`t forget to listen, <br/> 
                        {
                        onClick &&
                            <div className="field-row" style={{ padding: '10px 0px 5px', justifyContent: "right" }}>
                                <button style={{ cursor: "pointer" }} onClick={onClick}>remembering</button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const Reminders = ({ onClick }) => {
    return (
        <Teaching onClick={onClick} />
    );
};

export default Reminders;