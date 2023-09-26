import style from './Footer.module.css'
import facebook from '../../../assets/Facebook.svg'
import twitter from '../../../assets/twitter.svg'
import instagram from '../../../assets/instagram.svg'
import linkedin from '../../../assets/linkedin.svg'
const Footer = () => {
  return (
    <footer className={style['footer']}>
      <div className={style["main__wrapper"]}>
        <div className={style["container-footers"]}>
          <div className={style["wrapper"]}>
            <div className={style["wrapper__text"]}>
              <h4 className={style['footer__span']}>Finstreet 118 2561 Fintown</h4>
              <span className={style['footer__span']}>Hello@finsweet.com 020 7993 2905</span>
            </div>
            <div className={style["wrapper__icons"]}>
              <img className={style['facebook']} src={facebook} alt="facebook" />
              <img className={style['twitter']} src={twitter} alt="twitter" />
              <img className={style['instagram']} src={instagram} alt="instagram" />
              <img className={style['linkedin']} src={linkedin} alt="linkedin" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer