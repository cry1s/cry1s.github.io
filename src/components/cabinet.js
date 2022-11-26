import React from "react";
import { useState, useEffect } from "react";
import User from "../model"
export default function Cabinet(props) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        setUser(props.user);
    }, [props.user]);
    return (
        <div>
            <h2>Vova's cabinet</h2>
            <p>Изменить пароль</p>
            <div>
                <p>Старый пароль</p>
                <input type="password" />
                <p>Новый пароль</p>
                <input type="password" />
                <p>Повторите новый пароль</p>
                <input type="password" />
                <button>Изменить</button>
            </div>
            <p>Изменить имя</p>
            <div>
                <p>Новое имя</p>
                <input type="text" />
                <button>Изменить</button>
            </div>
            <p>Система</p>
            <div>
            <input type="radio" id="oneweek" name="system" checked onChange={() => {}}/>
            <label>Каждую неделю одно и то же расписание</label>
            <input type="radio" id="twoweek" name="system" onChange={() => {}} />
            <label>Числитель и знаменатель</label>
            </div>
        </div>
    );
}