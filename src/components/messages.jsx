import React, { useState, useRef, useContext, useEffect } from 'react';
import { AppContext } from '../App';
import '../App.css';
import "98.css";

const messageBody = ( message, onClick, buttonText ) => {
    return (
        <>
            <p style={{ textAlign: "center" }}>
                {message}
            </p>
            {onClick &&
                <div className="field-row" style={{ justifyContent: "center" }}>
                    <button style={{ cursor: "pointer" }} onClick={onClick}>{buttonText}</button>
                </div>
            }
        </>
    )
}

const Here = ({onClick}) => {
    const { display } = useContext(AppContext);
    const { remember } = useContext(AppContext);

    console.log('here', remember)

    return (
        <div
            className="overlay-content"
            style={{
                background: display ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 0)",
                display: display ? 'none' : 'flex',
                color: "white",
                fontWeight: 700
            }}>
            <div style={{ width: 300 }} className="window">
                <div className="title-bar">
                    <div className="title-bar-text">Memory Load Incomplete: </div>
                </div>
                <div className="window-body">
                    {messageBody('Could not remember how to write your love, but when I say ai, I feel', onClick, 'here')}
                </div>
            </div>
        </div>
    )
}

const Teachings = ({onClick}) => {
    const { remember } = useContext(AppContext);
    console.log('teachings')
    if (remember) 
    return (
        <div
            className="overlay-content"
            style={{
                background: "rgba(255, 255, 255, 0)",
                display: remember ? 'none' : 'flex',
                justifyContent: 'right',
                // paddingRight: '33vw',
                color: "white",
                fontWeight: 700
            }}>
            <div style={{ width: 300, marginRight: '13vw' }} className="window">
                <div className="title-bar">
                    <div className="title-bar-text">Reminders: </div>
                </div>
                <div className="window-body">
                    {messageBody('What is lost and found in the tracings?', onClick, 'remember')}
                </div>
            </div>
        </div>
    )
}

const Message = ({ onClick }) => {
    const { display } = useContext(AppContext);
    const { remember } = useContext(AppContext);
    if (!display) {
        console.log("hit display");
        return (
            <Here onClick={onClick} />
        );
    } 
    // else if (display) {
    //     console.log("hit teachings");

    //     return (
    //         <Teachings onClick={onClick} />
    //     )
    // }

}

export default Message;