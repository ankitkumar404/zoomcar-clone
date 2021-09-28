import React from 'react'
import styles from './Carousel.module.css'
const CarCarousel = () => {
    return (
        <div className={styles.main}>
            <div className={styles.middle}>

                <div className={styles.supermillerhead}>

                    <h2 className={styles.h2}>A Car for every need</h2>

                    <p className={styles.title_para}>We have a range of cars, so something will perfectly fit your trip</p>


                    <div className ={styles.carList}>

                        <span className={`${styles.arrowmiddle} ${styles.leftmiddle}`} onclick="plusMove(-1)"></span> <span className={`${styles.arrowmiddle} ${styles.rightmiddle}`}
                            onclick="plusMove(1)"></span>

                        <div className ={styles.row}>


                            <img className ={styles.img1} alt="Hatchback" src="./CarouselsImg/Hatcback_car.png" />

                            <div className  ={styles.name}>HATCHBACK</div>
                            <p className  ={styles.price}>Price Starting at ₹ 70/hr (Fuel Free)</p>
                            <p className  ={styles.groups}>Cars Available: Ford Figo, Maruti Swift, Baleno, Mahindra KUV 100, Maruti Ritz, Hyundai i20
                            Elite, Jazz SMT 1.5 IDTEC, The Raptor, Grand i10</p>

                            <p className  ={styles.changep}>A quick drive to sunrise point</p>
                        </div>

                        <div className ={styles.row}>
                            <img className={styles.img1} alt="Sedan" src="./CarouselsImg/sedan_car.png" />
                            <div className  ={styles.details}>
                            <div className  ={styles.name}>Sedan</div>
                            <p className  ={styles.price}>Price Starting at ₹ 75/hr (Fuel Free)</p>
                            <p className  ={styles.groups}>Cars Available: Honda City, Maruti Ciaz, Ford Aspire</p>
                            </div>
                            <p className  ={styles.changep}>Grab dinner and a movie</p>
                        </div>


                        <div className ={styles.row}>
                            <img className={styles.img1} alt="SUV" src="./CarouselsImg/suv_car.png" />
                            <div className  ={styles.details}>
                            <div className  ={styles.name}>SUV</div>
                            <p className  ={styles.price}>Price Starting at ₹ 90/hr (Fuel Free)</p>
                            <p className  ={styles.groups}>Cars Available: Ford Ecosport, Mahindra Scorpio, Ford Endeavour, Hyundai Creta, Toyota
                            Fortuner</p>
                            </div>
                            <p className  ={styles.changep}>Head outstation with the entire family</p>
                        </div>

                        <div className={styles.row}>
                            <img className={styles.carimg} alt="LUXURY" src="./CarouselsImg/luxury_car.png" />
                            <div className={styles.details}>
                                <div className={styles.name}>LUXURY</div>
                                <p className={styles.price}>Price Starting at ₹ 170/hr (Fuel Free)</p>
                                <p className={styles.groups}>Cars Available: Mercedes GLA, Audi Q3</p>
                            </div>
                            <p className={styles.changep}>Go out for a special meal</p>
                        </div>


                    </div>



                </div>

            </div>
        </div>
    )
}

export default CarCarousel
