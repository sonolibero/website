import React from "react";
import telegramLogo from './utils/telegram.svg';

function Blog() {
    const TELEGRAM_LINK = 'https://t.me/sonoliberoio';
    return(
        <div className="card">
            <a href={TELEGRAM_LINK} target="_blank" rel="noreferrer">
                <img alt="Telegram Logo" className="logo" src={telegramLogo} />
            </a>
            <p>desc</p>
            <button onClick={null}>unisciti ora</button>
        </div>
    )
}

export default Blog;