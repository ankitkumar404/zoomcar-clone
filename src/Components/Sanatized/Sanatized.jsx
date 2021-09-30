import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Sanatized.module.css'
const Sanatized = () => {
    return (
        <div className={styles.mainSanatized}>
            <div className={styles.front_intro}>
                <div className={styles.title}>
                    <h1 className={styles.firstline}>DRIVE IN A SANITIZED ZOOMCAR</h1>
                    <h3 className={styles.subhead}>
                        Self Drive Car Rental in
                        <select name="city" className={styles.city} >
                            <option value="select">Select City</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Kolkata">Kolkata</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Vadodara">Vadodara</option>
                            <option value="Pune">Pune</option>
                        </select>
                    </h3>
                    <div className={styles.journey}>
                        <p>Start your wonderful journey <Link to="/search">
                            <img src="./SanatizeImg/next.png" alt="" />
                        </Link>  </p>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Sanatized
