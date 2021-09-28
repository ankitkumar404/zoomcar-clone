import React from 'react'
import styles from './Zoom.module.css'
const ZoomWorks = () => {
    return (
        <div className={styles.main}>
            <div className={styles.howItWorks}>
                <h2 className={styles.h2}>How Zoomcar Works</h2>
                <p>Drive yourself to an adventure and back in 5 simple steps</p>

                <div className={styles.blocks}>

                    <div>
                        <img alt="Book" src="./img/book.svg" style={{marginTop: "20px"}} />
                        <h4>Book</h4>
                        <p>Search for and book a car on our site!</p>
                    </div>

                    <div>
                        <img src="./img/upload_licence.svg" alt="" style={{ marginTop: "20px" }} />
                        <h4>Upload License</h4>
                        <p>Upload your driver’s license, and pay a small security deposit.</p>
                    </div>

                    <div>
                        <img src="./img/unlock.png" alt="" style={{ marginTop: "20px", height: "40px"}}/>
                        <h4>Unlock</h4>
                        <p>We SMS your car details 20 minutes before pickup.Unlock it via the Zoomcar app.</p>
                    </div>

                    <div>
                        <img src="./img/zoom.svg" alt="" style={{ marginTop: "20px" }} />
                        <h4>Zoom</h4>
                        <p>Fill the start checklist in the Zoomcar app. Grab the keys from the glove-box and drive.</p>
                    </div>

                    <div>
                        <img src="./img/return.svg" alt="" style={{ marginTop: "20px" }} />
                        <h4>Return</h4>
                        <p>Return the car to the same location and fill the end checklist to end your trip.</p>
                    </div>

                </div>

                <button className={styles.signbtn} id={styles.signup_button2}>Sign up</button>

            </div>
        </div>
    )
}

export default ZoomWorks
