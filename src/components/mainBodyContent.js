import React from "react";
import { useState, useEffect } from "react";
import User from "../model"
import SubjectsList from "./subjectslist";
export default function MainBodyContent(props) {
    const [user, setUser] = useState(new User());
    const [curweek, setCurweek] = useState(0);
    const [curday, setCurday] = useState(0);
    useEffect(() => {
        setUser(props.user);
    }, [props.user]);
    return (
        <div>
            <div className="weekswitcher">
                <button onClick={() => setCurweek(curweek - 1)}>-</button>
                <p>{curweek}</p>
                <button onClick={() => setCurweek(curweek + 1)}>+</button>
            </div>
            <div className="dayswitcher">
                {
                    props.days.map((day) => (
                        <button onClick={() => setCurday(day)} key={day}>{day}</button>
                    ))
                }
            </div>
            <SubjectsList subjects={user.table[curday]} />
        </div>
    );
}