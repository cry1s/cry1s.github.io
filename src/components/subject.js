import React from 'react'
import { useState, useEffect } from 'react';
import DeadlineModal from '../modals/deadlinesModals';


export default function Subject(props) {
    const [subject, setSubject] = useState({});
    const [deadline, setDeadline] = useState('');
    useEffect(() => {
        setSubject(props.subject);
        if (props.deadlines.length > 0) {
            let st = '';
            for (let i = 0; i < props.deadlines.length; i++) {
                st += props.deadlines[i].description + '\n';
            }
            setDeadline(st);
        } else {
            setDeadline('');
        }
    }, [props.subject]);
    return (
        <div class="p-2 bg-light rounded shadow">
            <div class="row justify-content-between">
                <h3 class="col">{subject.name}</h3>
                <p class="col">{(subject.timestart / 3600).toFixed(0) + ":" + (subject.timestart % 3600 / 60)} - {(subject.timeend / 3600).toFixed(0) + ":" + (subject.timeend % 3600 / 60)}</p>
            </div>
            <div class="justify-content-between d-flex">
                <DeadlineModal subject={subject} name={subject.name} subjectindex={props.subjectindex}
                curday={props.curday} curweek={props.curweek} userindex={props.userindex} setuser={props.setuser}/>
                <div class="container border-start border-3 ">{deadline}</div>
            </div>
        </div>
    );
}