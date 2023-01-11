import React from "react";
import './Sponsor.css';
import logo from './logo.png';
import add from './utils/add.svg';
import verci from './utils/verci.png';

function Sponsor()
{
    const DONATE_LINK = 'https://www.paypal.com/donate/?business=WU8XY9N22TWUU&no_recurring=0&item_name=per+prolungare+questo+viaggio&currency_code=EUR';
    return(
        <div>
            <div className="sponsored">sponsored by</div>
            <div>
                <img src={logo} className="rounded-sponsor" alt="logo"/>
                <a href="https://vercingetorige.tech" target="_blank" rel="noreferrer">
                    <img src={verci} className="rounded-sponsor" alt="vercingetorige.tech"/>
                </a>
                <a href={DONATE_LINK} target="_blank" rel="noreferrer">
                    <img src={add} className="rounded-sponsor" alt="sponsor"/>
                </a>
            </div>
        </div>
    )
}

export default Sponsor;