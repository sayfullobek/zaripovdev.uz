import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
                <h1 className="footer__title">Zaripov</h1>

                <ul className="footer__list">
                    <li><a href="#about" className="footer__link">About</a></li>
                    <li><a href="#skills" className="footer__link">Skills</a></li>
                    <li><a href="#qualification" className="footer__link">Qualification</a></li>
                </ul>

                <div className="footer__social">
                       <a href="https://www.facebook.com/profile.php?id=100094335581927&locale=ru_RU" className="footer__social-link" target="_blank">
                            <i class="bx bxl-facebook"></i>
                        </a>

                        <a href="https://www.instagram.com/zaripov_033" className="footer__social-link" target="_blank">
                             <i class="bx bxl-instagram"></i>
                        </a>
            
                        <a href="https://t.me/zaripov_033" className="footer__social-link" target="_blank">
                            <i class="bx bxl-telegram"></i>
                        </a>
                </div>
                <span className="footer__copy">
                    &#169;ZaripovTech
                </span>
        </div>
    </footer>
  )
}

export default Footer