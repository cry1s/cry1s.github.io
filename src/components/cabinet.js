import React from "react";
import { useState, useEffect } from "react";
import User from "../model"
export default function Cabinet(props) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        setUser(props.user);
    }, [props.user]);
    return (
        
        <div class="justify-content-center bg-primary p-2 rounded m-3 mt-0">
            <div class="row">
                <h2 class="text-center mt-3">Vova's cabinet</h2>
                    <p class = "mt-4"><b>Изменить пароль</b></p>
                    <div>
                        <p>Старый пароль</p>
                        <input type="password" />
                        <p>Новый пароль</p>
                        <input type="password" />
                        <p>Повторите новый пароль</p>
                        <input type="password" />
                        <button>Изменить</button>
                    </div>
                    <p class = "mt-4"><b>Изменить имя</b></p>
                    <div>
                        <p>Новое имя</p>
                        <input type="text" />
                        <button>Изменить</button>
                    </div>
                    <p class = "mt-3"><b>Система</b></p>
                    <div>
                    <div>
                        <input type="radio" id="oneweek" name="system" checked onChange={() => {}}/>
                        <label>Каждую неделю одно и то же расписание</label> 
                    </div>
                    <div>
                        <input type="radio" id="twoweek" name="system" onChange={() => {}} />
                        <label>Числитель и знаменатель</label>  
                    </div>
                    </div>
            </div>
        </div>
    );
}