import React from "react";
import { useState} from "react";
import { read, write } from "../localstorageutil"
export default function Cabinet(props) {
    const [user, setUser] = useState(props.user);
    const [newname, setNewname] = useState('');
    const [newpassword, setNewpassword] = useState('');
    const [oldpassword, setOldpassword] = useState('');
    const [repeatpassword, setRepeatpassword] = useState('');
    const [startweek, setStartweek] = useState('');

    const changeName = () => {
        if (newname !== '') {
            const users = read();
            users[props.userindex].name = newname;
            write(users);
            props.setuser(users[props.userindex]);
            setUser(users[props.userindex]);
            setNewname('');
        }
    }

    const changePassword = () => {
        if (newpassword !== '' && oldpassword !== '' && repeatpassword !== '') {
            if (oldpassword === user.password) {
                if (newpassword === repeatpassword) {
                    const users = read();
                    users[props.userindex].password = newpassword;
                    write(users);
                    props.setuser(users[props.userindex]);
                    setUser(users[props.userindex]);
                    setNewpassword('');
                    setOldpassword('');
                    setRepeatpassword('');
                } else {
                    alert('Пароли не совпадают');
                }
            } else {
                alert('Неверный пароль');
            }
        }
    }

    const changeStartWeek = () => {
        if (startweek !== '') {
            const users = read();
            const getMonday = (date) => {
                const day = date.getDay() || 7;
                if (day !== 1)
                  date.setHours(-24 * (day - 1));
                return date;
              }
            const date = new Date(startweek);
            const monday = getMonday(date);
            users[props.userindex].startweek = monday;
            write(users);
            props.setuser(users[props.userindex]);
            setUser(users[props.userindex]);
            setStartweek('');
        }
    }

    return (

        <div class="justify-content-center p-2 rounded m-0">
            <div class="row justify-content-center">
                <div class="col-10 col-sm-10 col-md-8 col-lg-6 col-xl-5 px-3 my-3">
                    <div class="col-auto rounded mx-auto mt-3 "><h2 class="text-center">Кабинет пользователя {user.name}</h2></div>

                    <div class="col-11 bg-light mt-4 p-2 px-3 rounded border shadow">
                        <label for="exampleInputPassword1" class = "mb-2" >Изменить пароль</label>
                        <div class="col-auto mb-3"><input type="password" class="form-control" placeholder="Старый пароль"
                            value={oldpassword} onChange={(e) => setOldpassword(e.target.value)} /></div>
                        <div class="col-auto mb-3"><input type="password" class="form-control" placeholder="Новый пароль"
                            value={newpassword} onChange={(e) => setNewpassword(e.target.value)} /></div>
                        <div class="row justify-content-between">
                            <div class="col mb-3"><input type="password" class="form-control" placeholder="Повторите пароль"
                                value={repeatpassword} onChange={(e) => setRepeatpassword(e.target.value)} /></div>
                            <div class="col-auto"><button class="btn btn-primary "
                                onClick={changePassword}>Изменить</button></div>
                        </div>
                    </div>
                    
                    <div class="col-11 bg-light mt-4 p-2 px-3 rounded border shadow">   
                        <label for="exampleInputPassword1" class = "mb-2" >Изменить имя</label>
                        <div class="container m-0 p-0 ">
                            <div class="row justify-content-between">
                                <div class="col mb-3"><input type="text" class="form-control" placeholder="Новое имя"
                                value={newname} onChange={(e) => setNewname(e.target.value)}/></div>
                                <div class="col-auto "><button class="btn btn-primary" 
                                onClick={changeName}>Изменить</button></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-11 bg-light my-4 p-2 px-3 rounded border shadow">
                        <p class = "mb-0">Стартовая неделя</p>
                        <div class="container m-0 p-0 ">
                            <div class="row justify-content-between">
                        <div class="col mb-3"><input type="date" class="form-control" value={startweek} onChange={(e) => setStartweek(e.target.value)} /></div>
                        <div class="col-auto "><button class="btn btn-primary" 
                                onClick={changeStartWeek}>Изменить</button></div></div>
                        </div>

                    </div>
                    
                    <div class="col-11 bg-light mt-4 p-2 px-3 rounded border shadow">   
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
        </div>
    );
}