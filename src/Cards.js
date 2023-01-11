import React from "react";
import verci from './utils/verci.png';
import soon from './utils/soon.svg';

function Cards()
{
    return(
        <div className="card">
            <div>
                <div className="content clarity">chiarezza</div>
                <div>
                    <img src={soon} className="rounded-img" alt="Coming Soon"/>
                </div>
            </div>
            <div>
                <div className="content nature">natura</div>
                <div>
                    <img src={soon} className="rounded-img" alt="Coming Soon"/>
                </div>
            </div>
            <div>
                <div className="content projects">progetti</div>
                <div>
                    <a href="https://vercingetorige.tech" target="_blank" rel="noreferrer">
                        <img src={verci} className="rounded-img" alt="vercingetorige.tech"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Cards;