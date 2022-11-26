import React from 'react'
import Subject  from './subject'; 
import { useState } from 'react';
import { useEffect } from 'react';

export default function SubjectsList(props)
{
    const [subjects, setSubject] = useState([]);
    useEffect(() => {
        setSubject(props.subjects);
    }, [props.subjects]);
    return (
        <div>
            {subjects.map((subject, index) => (
                <Subject subject={subject} key={index}/>
            ))}
        </div>
    );
}