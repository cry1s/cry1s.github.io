import React from "react";
import { useState, useEffect } from "react";
export default function Footer(props) {
    const [user, setUser] = useState(null);
    const [show, setShow] = useState(false);
    const showQRModal = () => {
        setShow(true);
    };

    return (
        <div>
            <button class="btn btn-outline-primary" onclick={showQRModal}>Импорт/Экспорт</button>
        </div> 
    );
}