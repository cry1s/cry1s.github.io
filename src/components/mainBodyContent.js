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
    const [IsActive, setIsActive] = useState(0);

    const handlerClickStrelkaLeft = () => {
        if (curweek > 1) 
            setCurweek(curweek-1);
    }
    const handlerClickStrelkaRight = () => {
        setCurweek(curweek+1);
    }
    const changeDay = (day) => {
        setCurday(day);
        setIsActive(day);
    }

    useEffect(() => {
        const date = new Date();
        const firstweek = props.user.startweek;
        const getMonday = (date) => {
            const day = date.getDay() || 7;
            if (day !== 1)
              date.setHours(-24 * (day - 1));
            return date;
          }
        const monday = getMonday(date);
        const days = monday - firstweek;
        const weeks = Math.floor(days / 604800000);
        setCurweek(weeks+1 > 0 ? weeks+1 : 1);
        setCurday(date.getDay() % 7);
    }, [props.user.startweek]);

    return (
        <div class="justify-content-center p-2">
            <div class="container  bg-light justify-content-between rounded d-flex ">
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

            <div class="container justify-content-center">
                <div class="row justify-content-center">
                    <div class="col-10 col-sm-10 col-md-8 col-lg-6 col-xl-5 px-3 my-3">
                        <div class="row justify-content-between">
                            <button class="col-auto btn rounded" onClick={() => changeDay(0)} 
                                style={{background: IsActive == 0 ? "SkyBlue" : "white"}}>Пн</button>   
                            <button class="col-auto btn rounded" onClick={() => changeDay(1)} 
                                style={{background: IsActive == 1 ? "SkyBlue" : "white"}}>Вт</button>
                            <button class="col-auto btn rounded" onClick={() => changeDay(2)}
                                style={{background: IsActive == 2 ? "SkyBlue" : "white"}}>Ср</button>
                            <button class="col-auto btn rounded" onClick={() => changeDay(3)}
                                style={{background: IsActive == 3 ? "SkyBlue" : "white"}}>Чт</button>
                            <button class="col-auto btn rounded" onClick={() => changeDay(4)}
                                style={{background: IsActive == 4 ? "SkyBlue" : "white"}}>Пт</button>
                            <button class="col-auto btn rounded" onClick={() => changeDay(5)}
                                style={{background: IsActive == 5 ? "SkyBlue" : "white"}}>Сб</button>
                            <button class="col-auto btn rounded" onClick={() => changeDay(6)}
                                style={{background: IsActive == 6 ? "SkyBlue" : "white"}}>Вс</button>
                        </div>
                    </div>
                </div>
                <SubjectsList subjects={props.user.table[curday + (props.user.twoweeks && (curweek % 2 == 0)) * 7]} curweek={curweek} curday={curday} deadlines={props.user.deadlines}
                userindex={props.userindex} setuser={props.setuser}/>
                <AddSubject userindex={props.userindex} curweek={curweek} curday={curday + (props.user.twoweeks && curweek % 2 == 0) * 7} setuser={props.setuser}/>
            </div>
        </div>
    );
}