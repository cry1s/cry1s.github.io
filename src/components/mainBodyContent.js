import React from "react";
import { useState, useEffect } from "react";
import User from "../model"
import SubjectsList from "./subjectslist";

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
    const [user, setUser] = useState(new User());
    const [curweek, setCurweek] = useState(1);
    const [curday, setCurday] = useState(0);
    const handlerClickStrelkaLeft = () => {
        if (curweek > 1) 
            setCurweek(curweek-1);
    }
    const handlerClickStrelkaRight = () => {
        setCurweek(curweek+1);
    }
    useEffect(() => {
        setUser(props.user);
    }, [props.user]);
    return (
        <div>
            <div class="container bg-light justify-content-between rounded d-flex">
                <button type="button" class="btn" onClick = {handlerClickStrelkaLeft}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"></path>
                    </svg>
                </button>
                <h3>{curweek} неделя</h3>
                <button type="button" class="btn" onClick={handlerClickStrelkaRight}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path>
                    </svg>
                </button>
            </div>
            <div class="container">
                <div class="row justify-content-center my-2">
                    <button class="col-auto rounded">Пн</button>
                    <button class="col-auto rounded">Вт</button>
                    <button class="col-auto rounded">Чт</button>
                    <button class="col-auto rounded">Пт</button>
                    <button class="col-auto rounded">Сб</button>
                    <button class="col-auto rounded">Вс</button>
                </div>
                <SubjectsList subjects={user.table[curday]} />
                <button type="button" class="btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                    </svg>
                    <span class="visually-hidden">Кнопка</span>
                </button>
            </div>
        </div>
    );
}