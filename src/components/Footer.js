// 00 - React
import { useState } from 'react';

export default function Footer() {
    const [isActive, setActive] = useState(false);

    function toggleCategories() {
        setActive(!isActive);
    }

    return (
        <footer className="footer">
            <div className="wrapper">
                <div className="footer-header">
                    <span className="header-title">Show Cateogries</span>
                    <div
                        role="button"
                        className="header-button"
                        onClick={toggleCategories}>+
                        </div>
                </div>
                <ul className={`footer-list list-none ${isActive ? "expand" : ""}`}>
                    <li className="footer-list-item">Adventure</li>
                    <li className="footer-list-item">Comedy</li>
                    <li className="footer-list-item">SciFi</li>
                </ul>
                <div className='copywrite'>
                    <p> Connected to TMDB API</p>
                    <p> Portfolio Project © 2023</p>
                </div>
            </div>
        </footer>
    );
}
