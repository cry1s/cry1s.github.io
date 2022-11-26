import React from "react";
import { useState, useEffect } from "react";

export default function Footer(props) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        setUser(props.user);
    }, [props.user]);
    return (
        <div >
            <button class="btn btn-outline-primary">Импорт/Экспорт</button>
        </div> 
    );
}