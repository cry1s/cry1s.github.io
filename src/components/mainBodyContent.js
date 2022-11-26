import React from "react";
import { useState, useEffect } from "react";
import User from "../model"
import SubjectsList from "./subjectslist";

const Days = {
    Monday: 0,
    Tuesday: 1,
    Wednesday: 2,
    Thursday: 3,
    Friday: 4,
    Saturday: 5,
    Sunday: 6,
}

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
                    Object.keys(Days).map((day, index) => (
                        <button onClick={() => setCurday(index)} key={day}>{day}</button>
                    ))
                }
            </div>
            <SubjectsList subjects={user.table[curday]} />
        </div>
    );
}