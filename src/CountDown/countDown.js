import React, { useEffect, useState } from "react";
import "./Styles/countDown.css";
import {convertDate} from "./Utils/utils";

const CountDown = (props) => {
    const [time, setTime] = useState(convertDate(props.release));

    useEffect(() => {
        const updateTime = () => {
            setTime(convertDate(props.release));
        };

        const t = setTimeout(updateTime, 1000);

        return () => {
            clearTimeout(t);
        }
    })

    return (
        <>
            <div className="count-down--container">
                <div className="count-down--value-container">
                    <span className="count-down--value">{time?.days}</span>
                    <span className="count-down--value-label">days</span>
                </div>
                <div className="count-down--value-container">
                    <span className="count-down--value">{time?.hours}</span>
                    <span className="count-down--value-label">hours</span>
                </div>
                <div className="count-down--value-container">
                    <span className="count-down--value">{time?.minutes}</span>
                    <span className="count-down--value-label">minutes</span>
                </div>
                <div className="count-down--value-container">
                    <span className="count-down--value">{time?.seconds}</span>
                    <span className="count-down--value-label">seconds</span>
                </div>
            </div>
        </>
    )
}

export default CountDown ;