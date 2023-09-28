import PropTypes from 'prop-types';
import { useState } from 'react';
import style from './CategoryCard.module.css';

const CategoryCard = ({ category }) => {
    const [images, setImage] = useState({});


    const putdeafaultimg = (category) => {
        setImage((response) => ({
            ...response,
            [category]: true,
        }))
    }
    return (
        <div className={style["card__item"]}>
            <div className={style["item__img"]}>
                <img className={style['category__img']}
                    onError={() => putdeafaultimg(category._id)}
                    src={images[category._id]
                        ? "https://media.istockphoto.com/id/1412422445/photo/white-horse-with-long-mane-run-in-sunset-desert.jpg?b=1&s=170667a&w=0&k=20&c=DsnHXsPxKSDVp9W4L7L1dQAVXJjtpeSPuI8Zd9UpWs8="
                        : `https://blog-backend-production-a0a8.up.railway.app/upload/${category?.photo?._id}.${category?.photo?.name.split(".")[1]}`} />
            </div>
            <div className={style["item__texts"]}>
                <h2 className={style['item__text-h2']}>{category?.name}</h2>
                <p className={style['item__text-title']}>{category?.description.slice(0, 80)}</p>
            </div>
        </div>
    );
}

CategoryCard.propTypes = {
    category: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
        photo: PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired,
    })
};

export default CategoryCard;
