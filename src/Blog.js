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
                    <span>di un viaggio sul Pianeta Terra, 🌏</span><br></br>
                    <span>unica nostra amata casa. 🏕️</span>
                </p>
                <p>
                    <span>un alternarsi di movimento e pause, 🧘🏽</span><br></br>
                    <span>in cerca di domande migliori. 💭</span>
                </p>
                <p className="cta">vuoi salire a bordo? 🤗</p>
            </div>
            <a href={TELEGRAM_LINK} target="_blank" rel="noreferrer">
                <img alt="Telegram Logo" className="icon" src={telegramLogo} />
            </a>
        </div>
    )
}

export default Blog;