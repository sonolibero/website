import React from "react";
import logo from './logo.png';
import add from './utils/add.svg';

function Sponsor()
{
    return(
        <div className="card">
            <p>sponsored by</p>
            <div>
                <a href="https://www.google.com" target="_blank" rel="noreferrer">
                    <img src={logo} className="rounded-img" alt="logo"/>
                </a>
                <a href="https://www.google.com" target="_blank" rel="noreferrer">
                    <img src={add} className="rounded-img" alt="sponsor"/>
                </a>
            </div>
        </div>
    )
}

export default Sponsor;