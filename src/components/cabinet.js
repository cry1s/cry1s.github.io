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
                <div class="col-auto rounded mx-auto mt-3 bg-light"><h2 class="text-center">Vova's cabinet</h2></div>
                    <p class = "mt-4 text-center text-light"><b>Изменить пароль</b></p>
                    <div class="col-auto bg-light mx-auto p-2 rounded">
                        <p>Старый пароль</p>
                        <input type="password" />
                        <p>Новый пароль</p>
                        <input type="password" />
                        <p>Повторите новый пароль</p>
                        <input type="password" />
                        <button>Изменить</button>
                    </div>
                    <p class = "mt-4 text-center text-light"><b>Изменить имя</b></p>
                    <div class="col-auto bg-light mx-auto p-2 rounded">
                        <p>Новое имя</p>
                        <input type="text" />
                        <button>Изменить</button>
                    </div>
                    <p class = "mt-4 text-center text-light"><b>Система</b></p>
                    <div>
                    <div>
                        <input type="radio" id="oneweek" name="system" checked onChange={() => {}}/>
                        <label class = "mt-4 text-center text-light">Каждую неделю одно и то же расписание</label> 
                    </div>
                    <div>
                        <input type="radio" id="twoweek" name="system" onChange={() => {}} />
                        <label class = "mt-4 text-center text-light">Числитель и знаменатель</label>  
                    </div>
                    </div>
            </div>
        </div>
    );
}