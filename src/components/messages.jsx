import React, { useContext } from 'react';
import { AppContext } from '../App';
import '../App.css';
import "98.css";

const Reminder = ({onClick}) => {
    const { display, } = useContext(AppContext);
    if (!display) {
        return (
            <div
                className="overlay-content"
                style={{
                    background: display ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 0)",
                    fontWeight: 700
                }}>
                <div style={{ width: 300 }} className="window">
                    <div className="title-bar">
                        <div className="title-bar-text">Memory Load Incomplete: </div>
                    </div>
                    <div className="window-body">
                    <p style={{ textAlign: "center" }}>
                    Could not remember how to write your love, but when I say ai, I feel            
                    </p>
            {
            onClick &&
                <div className="field-row" style={{ justifyContent: "center" }}>
                    <button style={{ cursor: "pointer" }} onClick={onClick}>here</button>
                </div>
            }
                    </div>
                </div>
            </div>
        )
    }
}

const Messages = ({ onClick }) => {
    return (
        <Reminder onClick={onClick} />
    );
}

export default Messages;