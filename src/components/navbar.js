import React from 'react'
import { useState, useEffect } from 'react';

export default function NavBar(props){
    const [user, setUser] = useState({});
    useEffect(() => {
        setUser(props.user);
    }, [props.user]);
    return (
        <div>
            <h2>{user.name}</h2>
            <p>Расписание</p>
            <p>Кабинет</p>
            <p>Дедлайны</p>
        </div>
    );
}