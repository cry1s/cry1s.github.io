import React from 'react'
import { useState, useEffect } from 'react';


export default function Subject(props){
    const [subject, setSubject] = useState({});
    useEffect(() => {
        setSubject(props.subject);
    }, [props.subject]);
    return
    (
        <div>
            <p>{subject.name}</p>
            <p>{subject.where}</p>
            <p>{subject.prepod}</p>
            <p>{subject.timestart}</p>
            <p>{subject.timeend}</p>
            # TODO
        </div>
    );
}