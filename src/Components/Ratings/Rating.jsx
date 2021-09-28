import React from 'react'
import styles from './Ratings.module.css'
const Rating = () => {
    return (
        <div className={styles.main}>
            <div className={styles.imgdiv}>

                <img alt="Rides Daily" src="./img/riders_daily.svg" />

                <img alt="Happy usersk" src="./img/happy_user.svg" />

                <img alt="Km Travelled" src="./img/km_travelled.svg" />

                <img alt="Number of Zoomcars" src="./img/numberOf_zoomCar.svg" />

                <img alt="Number of Ratings" src="./img/numberOf_ratings.svg" style={{height: "25px", margin: "22px auto"}} />

                <b>3,000+</b>
                <b>48,00,000+</b>
                <b>36,00,00,000+</b>
                <b>6,500+</b>
                <b>Rating 4.7/5.0</b>

                <p>Rides Daily</p>
                <p>Happy users</p>
                <p>Km Travelled <br/><span>(enough for 470 round trips to the moon!)</span></p>
                <p>Number of Zoomcars</p>
                <p>Rated by 3,00,000+ customers <br/><span> 10,00,000+ bookings</span></p>

            </div>
        </div>
    )
}

export default Rating
