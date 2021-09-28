import React from 'react'
import styles from './Nav.module.css'
const Navbar = () => {
    return (
        <div className={styles.mainNav}>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <img src="./NavImages/logo-f38397447048ccba047af6980364e92e.svg" alt="Zoom_Car" />
                </div>
                <ul className={styles.nav_ul}>
                    <li className={styles.item}>OFFERS</li>
                    <li className={styles.item_hov}>
                        SUBSCRIPTION
                        <div className={styles.details} id={styles.sub_det_item}>
                            <div className={styles.arrowmiddle}></div>
                            <div className={styles.subscr_detail}>
                                <span className={styles.subscrLogo1}>
                                    <img src="./NavImages/sub_logo.png" alt="" />
                                </span>
                                <p>Hassle-free way of getting your personal car for flexible long term duration. You also have an option
                                    to share your car with other Zoomcar customers &amp; save up to 70% of the monthly subscription fee.
                                </p>
                                <button className={styles.subscr_btn}>KNOW MORE</button>
                            </div>
                        </div>
                    </li>
                    <li className={styles.item}>AMIGO
                        <div className={styles.details2}>
                            <div className={styles.arrowmiddle2}></div>
                            <div className={styles.amigo_detail}>
                                {/* <span className={styles.amigo-logo2}></span> */}
                                <p>A unique Community Vehicle Pooling program that allows you to share your car with your community and
                                    friends while the car not in use and earn money.</p>
                                <button className={styles.subscr_btn}>KNOW MORE</button>
                            </div>
                        </div>
                    </li>
                    <li className={styles.item}>ZMS
                        <div className={styles.details3}>
                            <div className={styles.arrowmiddle3}></div>
                            <div className={styles.zms_detail}>
                                <span className={styles.zmsLogo3}></span>
                                <p>Connected technology offerings and shared mobility solutions for businesses worldwide.</p>
                                <button className={styles.subscr_btn}>KNOW MORE</button>
                            </div>
                        </div>
                    </li>
                    <li className={styles.item_mob_wid}>MOBILE APP
                        <div className={styles.mob_det}>
                            <div className={styles.arrowmiddle4}></div>
                            <div className={styles.details4}>
                                <a href="https://play.google.com/store/apps/details?id=com.zoomcar&referrer=utm_source%3Dhome%2520page%26utm_medium%3Dheader%2520links%26utm_content%3Dandroid%26utm_campaign%3Dinstalls"
                                    className={styles.mob_anc}>
                                    <div className={styles.mob1}>
                                        <img src="./NavImages/g_play_logo2.png" alt="google play" />Google Play
                                    </div>
                                </a>
                                <a href="https://apps.apple.com/us/app/zoomcar-self-drive-cars/id889910218?utm_campaign=installs&utm_content=iOS&utm_medium=header%20links&utm_source=home%20page"
                                    className={styles.mob_anc}>
                                    <div className={styles.mob2}>
                                        <img src="./NavImages/apple_log.png" alt="" />
                                        <p>Apple logo</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </li>
                    <li className={styles.item} id={styles.signup_btn}>SIGNUP</li>
                    <li className={styles.item} id={styles.login_btn}>LOGIN</li>

                </ul>
            </nav>
        </div>
    )
}

export default Navbar
