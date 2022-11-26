import React from 'react'
import { useState, useEffect } from 'react';

export default function Deadline(props){
    const [deadline, setDeadline] = useState({});
    useEffect(() => {
        setDeadline(props.deadline);
    }, [props.deadline]);
    return (
        <div>
            <p>{deadline.name}</p>
            <p>{deadline.week}</p>
            <p>{deadline.day}</p>
            <p>{deadline.description}</p>
        </div>
    );
}