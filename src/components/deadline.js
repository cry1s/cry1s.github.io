import React from 'react'
import { useState, useEffect } from 'react';

export default function Deadline(props){
    const [deadline, setDeadline] = useState({});
    useEffect(() => {
        setDeadline(props.deadline);
    }, [props.deadline]);
    return (
        <div class="justify-content-center bg-primary p-2">
            <div class="p-2 bg-light rounded">
                <h3>{deadline.name}</h3>
                <p>Неделя - {deadline.week}</p>
                <p>Дата - {deadline.day}</p>
                <p>{deadline.description}</p>
            </div>
        </div>
    );
}