import PropTypes from 'prop-types';
import style from './PopularCards.module.css';

function transitToBlog(id) {
    window.location.href = '/blog/' + id
}

const PopularCards = ({ post }) => {
    return (
        <div onClick={() => transitToBlog(post._id)} className={style["popular__wrapper"]}>
            <div className={style["popular__cards-item"]}>
                <div className={style["cards__item-img"]}>
                    <img className={style['cards__img']} src={`https://blog-backend-production-a0a8.up.railway.app/upload/${post.photo._id}.${post.photo.name.slice(-3)}`} alt={post.photo.name} />
                </div>
                <div className={style["cards__item-texts"]}>
                    <h6 className={style['item__text-h6']}>
                        By <span className={style['item__text-span']}>{post.user.last_name} {post.user.first_name}</span> |{' '}
                        {new Date(post.user.updatedAt).toLocaleDateString(undefined, {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </h6>
                    <h3 className={style['item-text-h3']}>
                        {post.category.name} {post.category.description}
                    </h3>
                    <p className={style['item-text-p']}>
                        {post.description.length < 60
                            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cum sit magni perferendis dolorem dicta laborum alias laudantium totam. Asperiores?"
                            : `${post.description.slice(-100)}`}
                    </p>

                </div>
            </div>
        </div>
    );
};

PopularCards.propTypes = {
    post: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        user: PropTypes.shape({
            last_name: PropTypes.string.isRequired,
            first_name: PropTypes.string.isRequired,
            updatedAt: PropTypes.string.isRequired,
        }).isRequired,
        photo: PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired,
        category: PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        }).isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};


export default PopularCards;
