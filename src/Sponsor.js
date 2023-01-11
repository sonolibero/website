import React from "react";
import logo from './logo.png';
import add from './utils/add.svg';
import verci from './utils/verci.png';

function Sponsor()
{
    return(
        <div>
            <div>sponsored by</div>
            <div>
                <a href="https://www.google.com" target="_blank" rel="noreferrer">
                    <img src={logo} className="rounded-img sponsor-border" alt="logo"/>
                </a>
                <a href="https://vercingetorige.tech" target="_blank" rel="noreferrer">
                    <img src={verci} className="rounded-img sponsor-border" alt="vercingetorige.tech"/>
                </a>
                <a href="https://www.google.com" target="_blank" rel="noreferrer">
                    <img src={add} className="rounded-img sponsor-border" alt="sponsor"/>
                </a>
            </div>
        </div>
    )
}

export default Sponsor;