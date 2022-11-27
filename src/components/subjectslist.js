import React from 'react'
import Subject  from './subject'; 
import { useState } from 'react';
import { useEffect } from 'react';

export default function SubjectsList(props)
{
    return (
        <div class="d-grid gap-3">
            {props.subjects.map((subject, index) => (
                <Subject subject={subject} key={index} deadline={
                    props.deadlines.filter((deadline) => {
                        return deadline.name === subject.name && deadline.day === props.curday && deadline.week === props.curweek;
                    })
                }/>
            ))}
        </div>
    );
}