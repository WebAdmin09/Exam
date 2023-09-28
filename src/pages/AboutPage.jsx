import { Fragment } from 'react'
import hands from '../assets/hands.png'
import people from '../assets/people.png'
import style from './AboutPage.module.css'
const AboutPage = () => {
    return (
        <Fragment>
            <section className={style['about-us']}>
                <div className="container">
                    <div className={style["main__wrapper"]}>
                        <div className={style["mision"]}>
                            <span className={style['mision__span']}>Our mision</span>
                            <h2 className={style['mision__h2']}>Creating valuable content for creatives all around the world</h2>
                            <p className={style['mision__title']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                                blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
                                At risus viverra adipiscing at in tellus.</p>
                        </div>
                        <div className="vision">
                            <span className={style['vision__span']}>Our Vision</span>
                            <h2 className={style['vision__h2']}>A platform that empowers individuals to improve</h2>
                            <p className={style['vision__title']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                                blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
                                At risus viverra adipiscing at in tellus.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={style['creative']}>
                <div className="container">
                    <div className={style["creative__wrapper"]}>
                        <div className={style["creative__wrapper-texts"]}>
                            <span className={style['creative__span']}>Our team of creatives</span>
                            <h2 className={style['creative__h2']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h2>
                            <p className={style['creative__title']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                                blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
                                At risus viverra adipiscing at in tellus.</p>
                        </div>
                        <div className="creative__wrapper-img">
                            <img className={style['creative__img']} src={hands} alt="hands" />
                        </div>
                    </div>
                </div>
            </section>
            <section className={style['creative']}>
                <div className="container">
                    <div className={style["creative__wrapper"]}>
                        <div className="creative__wrapper-img">
                            <img className={style['creative__img']} src={people} alt="people" />
                        </div>
                        <div className={style["creative__wrapper-texts"]}>
                            <span className={style['creative__span']}>Why we started this Blog</span>
                            <h2 className={style['creative__h2']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h2>
                            <p className={style['creative__title']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                                blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
                                At risus viverra adipiscing at in tellus.</p>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default AboutPage