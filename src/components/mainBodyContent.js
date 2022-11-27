import React from "react";
import { useState, useEffect } from "react";
import AddSubject from "../modals/addsubjectModals";
import User from "../model"
import SubjectsList from "./subjectslist";
import { read } from "../localstorageutil";

const Days = {
    Monday: 0,
    Tuesday: 1,
    Wednesday: 2,
    Thursday: 3,
    Friday: 4,
    Saturday: 5,
    Sunday: 6,
}

export default function MainBodyContent(props) {
    const [curweek, setCurweek] = useState(1);
    const [curday, setCurday] = useState(0);

    const handlerClickStrelkaLeft = () => {
        if (curweek > 1) 
            setCurweek(curweek-1);
    }
    const handlerClickStrelkaRight = () => {
        setCurweek(curweek+1);
    }

    return (
        <div class="justify-content-center  bg-info p-2">
            <div class="container  bg-light justify-content-between rounded d-flex ">
                <button type="button" class="btn" onClick = {handlerClickStrelkaLeft}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"></path>
                    </svg>
                </button>
                <h3>{curweek} неделя</h3>
                <button type="button" class="btn" onClick={handlerClickStrelkaRight}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
                </button>
            </div>
            <div class="container">
                <div class="row justify-content-center my-3">
                    <button class="col-auto rounded-circle active" onClick={() => setCurday(0)}>Пн</button>
                    <button class="col-auto rounded-circle" onClick={() => setCurday(1)}>Вт</button>
                    <button class="col-auto rounded-circle" onClick={() => setCurday(2)}>Ср</button>
                    <button class="col-auto rounded-circle" onClick={() => setCurday(3)}>Чт</button>
                    <button class="col-auto rounded-circle" onClick={() => setCurday(4)}>Пт</button>
                    <button class="col-auto rounded-circle" onClick={() => setCurday(5)}>Сб</button>
                    <button class="col-auto rounded-circle" onClick={() => setCurday(6)}>Вс</button>
                </div>
                <SubjectsList subjects={props.user.table[curday + (props.user.twoweeks && (curweek % 2 == 0)) * 7]} curweek={curweek} curday={curday + (props.user.twoweeks && (curweek % 2 == 0)) * 7} deadlines={props.user.deadlines}
                userindex={props.userindex} setuser={props.setuser}/>
                <AddSubject userindex={props.userindex} curweek={curweek} curday={curday + (props.user.twoweeks && curweek % 2 == 0) * 7} setuser={props.setuser}/>
            </div>
        </div>
    );
}