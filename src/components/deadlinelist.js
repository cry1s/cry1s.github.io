import React from 'react'
import { useState, useEffect } from 'react';
import Deadline from './deadline';

export default function Deadlinelist(props){
    const [deadlines, setDeadlines] = useState([]);
    useEffect(() => {
        setDeadlines(props.deadlines);
    }, [props.deadlines]);
    return (
        <div>
            {
                deadlines.map((deadline, index) => (
                    <Deadline deadline={deadline} key={index}/>
                ))
            }
        </div>
    );
}