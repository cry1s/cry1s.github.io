import React from "react";
import { useState, useEffect } from "react";
import User from "../model"
export default function Cabinet(props) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        setUser(props.user);
    }, [props.user]);
    return (

        <div class="justify-content-center p-2 rounded m-0">
            <div class="row justify-content-center">
                    <div class="col-auto rounded mx-auto mt-3 bg-light"><h2 class="text-center">Vova's cabinet</h2></div>

                    <div class="col-11 bg-light my-4 p-2 px-3 rounded border shadow">
                        <label for="exampleInputPassword1" class = "mb-2" >Изменить пароль</label>
                        <div class="col-auto mb-3"><input type="password" class="form-control" id="exampleInputPassword1" placeholder="Старый пароль"/></div>
                        <div class="col-auto mb-3"><input type="password" class="form-control" id="exampleInputPassword1" placeholder="Новый пароль"/></div>
                        <div class="row justify-content-between">
                            <div class="col mb-3"><input type="password" class="form-control" id="exampleInputPassword1" placeholder="Повторите пароль"/></div>
                            <div class="col-auto"><button class="btn btn-primary ">Изменить</button></div>
                        </div>
                    </div>
                    
                    <div class="col-11 bg-light my-4 p-2 px-3 rounded border shadow">   
                        <label for="exampleInputPassword1" class = "mb-2" >Изменить имя</label>
                        <div class="container m-0 p-0 ">
                            <div class="row justify-content-between">
                                <div class="col mb-3"><input type="password" class="form-control" id="exampleInputPassword1" placeholder="Новое имя"/></div>
                                <div class="col-auto "><button class="btn btn-primary ">Изменить</button></div>
                            </div>
                        </div>
                    </div>

                    
                    <div class="col-11 bg-light my-4 p-2 px-3 rounded border shadow">   
                        <p class = "mb-0">Система</p>
                            <input  class="me-2" type="radio" id="oneweek" name="system" checked onChange={() => {}}/>
                            <label class = "mt-2 text-center">Oдно и то же расписание</label>
                        <div>
                            <input class="me-2" type="radio" id="twoweek" name="system" onChange={() => {}} />
                            <label class = " text-center">Числитель и знаменатель</label>  
                        </div>
                    </div>
            </div>
        </div>
    );
}