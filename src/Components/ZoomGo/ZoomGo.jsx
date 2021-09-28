import React from 'react'
import styles from './ZoomGo.module.css'
const ZoomGo = () => {
    return (
        <div className={styles.main}>
            <div className={styles.apps}>
                <img src="./img/appstore_bg.jpg" alt="" style={{ width: "100%" }} />
                <div className={styles.zoomGo}>
                    <h2 style={{ color: "#eee" }}>Zoom on the Go!</h2>
                    <p style={{ color: "#eee", width: "50%", fontSize: "18px" }}>
                        Make a booking, unlock your car, and end your reservation all from our app</p>
                    <div className={styles.store}>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.zoomcar&amp;referrer=utm_source%3DHomepage%26utm_medium%3DBanner%26utm_campaign%3DApr2015"
                            style={{ backgroundImage: `url("./img/google_playstore.png&quot")` }}
                        > <img className={styles.images} src="./img/google_playstore.png" alt="" /> </a>

                        <a
                            href="https://click.google-analytics.com/redirect?tid=UA-38347989-3&amp;url=https%3A%2F%2Fitunes.apple.com%2Fus%2Fapp%2Fzoomcar-self-drive-cars%2Fid889910218%3Fmt%3D8&amp;aid=com.zoomcar.ZoomCar&amp;idfa=none&amp;cs=Homepage&amp;cm=Banner&amp;cn=Apr2015"
                            style={{ backgroundImage: `url("./img/apple_store.png&quot")` }}> <img className={styles.images} src="./img/apple_store.png" alt="" /> </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ZoomGo
