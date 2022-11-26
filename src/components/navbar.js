import React from 'react'
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

export default function NavBar(props) {
    const [user, setUser] = useState({});
    useEffect(() => {
        setUser(props.user);
    }, [props.user]);

    const onHome = () => {
        props.setCurNav(0);
    }

    const onDeadlines = () => {
        props.setCurNav(1);
    }

    const onCabinet = () => {
        props.setCurNav(2);
    }

    return (
        <>
        <div container>
            <div class="row">
                <div class="col-1">
                </div>
                <div class="col-10">
                    <div class="d-flex justify-content-center pt-3">
                        <ul class="nav nav-pills rounded-top">
                            <li class="nav-item"><a href="#" class="nav-link" aria-current="page" onClick={onHome}>Расписание</a></li>
                            <li class="nav-item"><a href="#" class="nav-link" onClick={onDeadlines}>Дедлайны</a></li>
                            <li class="nav-item"><a href="#" class="nav-link" onClick={onCabinet}>Кабинет</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-1">
                </div>                       
            </div>
        </div>
        </>
    );
}