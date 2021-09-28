import React from 'react'
import styles from './CarAdv.module.css'
const CarAdv = () => {
    return (
        <div className={styles.main}>
            <div className={styles.zoom_adv}>
                <div className={styles.adv_head}>
                    <h2>THE ZOOM CAR ADVANTAGE</h2>
                    <p>
                        We simplified car rentals, so you can focus on what's important to
                        you.
                    </p>
                </div>
                <div className={styles.adv_grid}>
                    <div className={styles.adv_grid_box}>
                        <img src="./CarAdvImg/fuel_log.png" alt="" className={styles.fuel} />
                        <h3>Fuel Cost Included</h3>
                        <p>
                            Don't worry about mileage! All fuel costs are included. If you
                            refill fuel, we'll pay you back!
                        </p>
                    </div>
                    <div className={styles.adv_grid_box}>
                        <img src="./CarAdvImg/adv2.png" alt="" />
                        <h3>No Hidden Charges</h3>
                        <p>
                            Our prices include taxes and insurance. What you see is what you
                            really pay!
                        </p>
                    </div>
                    <div className={styles.adv_grid_box}>
                        <img src="./CarAdvImg/adv3.png" alt="" />
                        <h3>Flexi Pricing Packages</h3>
                        <p>
                            One size never fits all! Choose a balance of time and kilometers
                            that works best for you.
                        </p>
                    </div>
                    <div className={styles.adv_grid_box}>
                        <img src="./CarAdvImg/adv6.png" alt="" />
                        <h3>Go Anywhere</h3>
                        <p>
                            Our cars have all-India permits.Just remember to pay state tolls
                            and entry taxes.
                        </p>
                    </div>
                    <div className={styles.adv_grid_box}>
                        <img src="./CarAdvImg/adv5.png" alt="" />
                        <h3>24x7 Roadside Assistance</h3>
                        <p>
                            We have round-the-clock, pan India partners. Help is never far
                            away from you.
                        </p>
                    </div>
                    <div className={styles.adv_grid_box}>
                        <img src="./CarAdvImg/adv4.png" alt="" />
                        <h3>Damage Insurance</h3>
                        <p>
                            All your bookings include damage insurance! Drive safe, but don’t
                            worry!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarAdv
