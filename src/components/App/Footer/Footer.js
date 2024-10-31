import React from "react";
import "./footerStyle.css"

function Footer() {
    return(
        <footer class="container__footer">
            <div class="container__footer-top">
                <div class="footer__top-text">
                    <h3 class="footer__text-head">The best stadiums in the world</h3>
                    <div class="footer__text-inner">stadiums stadiums stadiums stadiums stadiums stadiums stadiums stadiums</div>
                </div>
                <div class="footer__top-logo"></div>
                <div class="footer__top-links">
                    <ul class="list-links">
                        <li><a>F</a></li>
                        <li><a>I</a></li>
                        <li><a>T</a></li>
                        <li><a>G</a></li>
                    </ul>
                </div>
            </div>
            <div class="container__footer-line"></div>
            <div class="container__footer-bottom">2024 LP NU</div>
        </footer>
    )
}

export default Footer;
