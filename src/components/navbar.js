import React from 'react'
import { useState, useEffect } from 'react';

export default function NavBar(props){
    const [user, setUser] = useState({});
    useEffect(() => {
        setUser(props.user);
    }, [props.user]);
    return (
        <div class="d-flex justify-content-center pt-3">
            <ul class="nav nav-pills rounded-top">
                <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
            </ul>
        </div>
    );
}