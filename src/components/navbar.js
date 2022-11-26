import React from 'react'
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

export default function NavBar(props) {
    const [user, setUser] = useState({});
    const [isActive, setIsActive] = useState(0);
    useEffect(() => {
        setUser(props.user);
    }, [props.user]);
    
    const onHome = () => {
        props.setCurNav(0);
        setIsActive(0);
    }

    const onDeadlines = () => {
        props.setCurNav(1);
        setIsActive(1);
    }

    const onCabinet = () => {
        props.setCurNav(2);
        setIsActive(2);
    }

    return (
        <>
        <div container>
            <div class="row">
                <div class="col-1">
                </div>
                <div class="col-10">
                    <div class="d-flex justify-content-center pt-3">
                        <button class="btn"  onClick={onHome} style={{
          backgroundColor: isActive == 0 ? '' : '',
        }}>Расписание</button>
                        <button class="btn" onClick={onDeadlines} style={{
          backgroundColor: isActive == 1 ? '' : '',
        }}>Дедлайны</button>
                        <button class="btn" onClick={onCabinet} style={{
          backgroundColor: isActive == 2 ? '' : '',
        }}>Кабинет</button>    
                    </div>
                </div>
                <div class="col-1">
                </div>                       
            </div>
        </div>
        </>
    );
}