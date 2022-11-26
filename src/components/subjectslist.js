import React from 'react'
import Subject  from './subject'; 
import { useState } from 'react';
import { useEffect } from 'react';

export default function SubjectsList()
{
    const [subjects, setSubject] = useState({});
    
    return (
        <div>
            { subjects.map((subject) => (
                <Subject subject={subject} />
            ))}
        </div>
    );
}