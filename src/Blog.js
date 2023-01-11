import React from "react";
import telegramLogo from './utils/telegram.svg';
import './Blog.css';

function Blog() {
    const TELEGRAM_LINK = 'https://t.me/sonoliberoio';
    return(
        <div className="card">
            <div className="blog">
                <p>sonolibero è un racconto.. ✍🏽</p>
                <p>
                    <div>di un viaggio sul Pianeta Terra, 🌏</div>
                    <div>unica nostra amata casa. 🏕️</div>
                </p>
                <p>
                    <div>un alternarsi di movimento e pause, 🧘🏽</div>
                    <div>in cerca di domande migliori. 💭</div>
                </p>
                <p>vuoi salire a bordo?</p>
            </div>
            <a href={TELEGRAM_LINK} target="_blank" rel="noreferrer">
                <img alt="Telegram Logo" className="icon" src={telegramLogo} />
            </a>
        </div>
    )
}

export default Blog;