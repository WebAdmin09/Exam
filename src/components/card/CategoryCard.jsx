import PropTypes from 'prop-types';
import style from './CategoryCard.module.css';

const CategoryCard = ({ categories }) => {
    return (
        <div className={style["card__item"]}>
            <div className={style["item__img"]}>
                <img src={`https://blog-backend-production-a0a8.up.railway.app/api/v1${categories.photo._id}`} alt="" />
            </div>
            <div className={style["item__texts"]}>
                <h2 className={style['item__text-h2']}>{categories.name}</h2>
                <p className={style['item__text-title']}>{categories.description}</p>
            </div>
        </div>
    )
}

CategoryCard.propTypes = {
    categories: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        photo: PropTypes.shape({
            _id: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

export default CategoryCard;
