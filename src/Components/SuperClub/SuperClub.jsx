import React from 'react'
import styles from './Super.module.css' 
const SuperClub = () => {
    return (
        <div className={styles.main}>
            <div className={styles.sup_club}>
                <div className={styles.sup_background}>
                    <div className={styles.sup_sub1}>
                        <div className={styles.sup_logo}>
                            <img src="./SuperImg/super_log-removebg-preview.png" alt=""  />
                        </div>
                        <h2>Supermiler Club</h2>
                        <p>Premium club which rewards you everytime you drive with us</p>
                        <div className={styles.privileges}>
                            <div className={styles.hor_li}></div>
                            <div className={styles.sup_mid}>SUPERMILER PRIVILAGES</div>
                            <div className={styles.hor_li}></div>
                        </div>

                        <div className={styles.z_points}>
                            <div className={styles.z_box}><img src="./SuperImg/z_log.png" alt="" />
                                <div>Earn Z Points</div>
                            </div>
                            <div className={styles.z_para}>
                                <p>Earn Z-Points for every booking and redeem for additional discount</p>
                                <button className={styles.z_btn}>Learn More</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuperClub
