import React from 'react'
import { useState, useEffect } from 'react';


export default function Subject(props) {
    const [subject, setSubject] = useState({});
    const [deadline] = useState('');
    useEffect(() => {
        setSubject(props.subject);
    }, [props.subject]);
    return (
        <div class="p-2 bg-light rounded">
            <div>
                <h3>{subject.name}</h3>
            </div>
            <div class="justify-content-between d-flex">
                <div class="btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                    </svg>
                    {subject.timestart} - {subject.timeend}
                </div>
                <div class="container border-start border-3 ">{deadline}</div>
            </div>
        </div>
    );
}