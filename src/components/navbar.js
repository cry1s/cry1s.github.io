import React from 'react'
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

export default function NavBar(props) {
    const [user, setUser] = useState({});
    useEffect(() => {
        setUser(props.user);
    }, [props.user]);
    return (
        <>
        <div container>
            <div class="row">
                <div class="col-1">
                </div>
                <div class="col-10">
                    <div class="d-flex justify-content-center pt-3">
                        <ul class="nav nav-pills rounded-top">
                            <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
                            <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
                            <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-1">
                </div>                       
            </div>
        </div>
        </>
    );
}