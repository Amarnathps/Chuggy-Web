import React from 'react'
import './Footer.css'
function Footer() {
    return (




      
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-logo">
                        <div className="logo-icon">C</div>
                        <h2 className="logo-text">Chuggy</h2>
                    </div>
                    <p className="copyright">© 2025 Chuggy Limited</p>
                    <div className="footer-columns">
                        <div>
                            <h3>Company</h3>
                            <ul>
                                <li>About Us</li>
                                <li>Chuggy Corporate</li>
                                <li>Careers</li>
                                <li>Team</li>
                                <li>Chuggy One</li>
                                <li>Chuggy Instamart</li>
                                <li>Chuggy Dineout</li>
                                <li>Minis</li>
                                <li>Pyng</li>
                            </ul>
                        </div>

                        <div>
                            <h3>Contact us</h3>
                            <ul>
                                <li>Help & Support</li>
                                <li>Partner With Us</li>
                                <li>Ride With Us</li>
                            </ul>

                            <h3>Legal</h3>
                            <ul>
                                <li>Terms & Conditions</li>
                                <li>Cookie Policy</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>

                        <div>
                            <h3>Available in:</h3>
                            <ul>
                                <li>Bangalore</li>
                                <li>Gurgaon</li>
                                <li>Hyderabad</li>
                                <li>Delhi</li>
                                <li>Mumbai</li>
                                <li>Pune</li>
                            </ul>
                            <select className="city-dropdown">
                                <option>685 cities</option>
                            </select>
                        </div>

                        <div>
                            <h3>Life at Chuggy</h3>
                            <ul>
                                <li>Explore With Chuggy</li>
                                <li>Chuggy News</li>
                                <li>Snackables</li>
                            </ul>

                            <h3>Social Links</h3>
                            <div className="social-icons">
                                <i className="fab fa-linkedin"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-facebook"></i>
                                <i className="fab fa-pinterest"></i>
                                <i className="fab fa-twitter"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="download-section">
                    <p>For better experience, download the Chuggy app now</p>
                    <div class="store-buttons">
                        <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                            alt="Google Play" />
                    </div>
                </div>
            </footer>
      

    )
}

export default Footer
