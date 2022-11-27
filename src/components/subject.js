import React from 'react'
import { useState, useEffect } from 'react';
import DeadlineModal from '../modals/deadlinesModals';


export default function Subject(props) {
    const [subject, setSubject] = useState({});
    const [deadline, setDeadline] = useState('');
    useEffect(() => {
        setSubject(props.subject);
        if (props.deadline && props.deadline.length > 0) {
            setDeadline(props.deadline[0].deadline);
        }
    }, [props.subject]);
    return (
        <div class="p-2 bg-light rounded shadow">
            <div class="row">
                <h3 class="col">{subject.name}</h3>
                <p class="col">{(subject.timestart / 3600).toFixed(0) + ":" + (subject.timestart % 3600 / 60)} - {(subject.timeend / 3600).toFixed(0) + ":" + (subject.timeend % 3600 / 60)}</p>
            </div>
            <div class="justify-content-between d-flex">
                <DeadlineModal subject={subject} deadline={deadline} name={subject.name} subjectindex={props.key}
                curday={props.curday} curweek={props.curweek} userindex={props.userindex} setuser={props.setuser}/>
                <div class="container border-start border-3 ">{deadline}</div>
            </div>
        </div>
    );
}