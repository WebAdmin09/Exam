import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './PopularCards.module.css';

const PopularCards = ({ post }) => {
    const [images, setImage] = useState({});

    const putDefaultImage = (post) => {
        setImage((response) => ({
            ...response,
            [post]: true,
        }));
    };

    return (
        <Link to={`/blog/${post._id}`} className={style['popular__wrapper']}>
            <div className={style['popular__cards-item']}>
                <div className={style['cards__item-img']}>
                    <img
                        className={style['cards__img']}
                        onError={() => putDefaultImage(post._id)}
                        src={
                            images[post._id]
                                ? 'https://images.unsplash.com/photo-1574169207511-e21a21c8075a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
                                : `https://blog-backend-production-a0a8.up.railway.app/upload/${post.photo._id}.${post.photo.name.slice(-3)}`
                        }
                        alt="Card"
                    />
                </div>
                <div className={style['cards__item-texts']}>
                    <h6 className={style['item__text-h6']}>
                        By{' '}
                        <span className={style['item__text-span']}>
                            {post.user?.last_name} {post.user?.first_name}
                        </span>{' '}
                        |{' '}
                        {post.user?.updatedAt &&
                            new Date(post.user.updatedAt).toLocaleDateString(undefined, {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                    </h6>
                    <h3 className={style['item-text-h3']}>
                        {post.category?.name} {post.category?.description}
                    </h3>
                    <p className={style['item-text-p']}>
                        {post?.description?.length < 50
                            ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cum sit magni perferendis dolorem dicta laborum alias laudantium totam. Asperiores?'
                            : `${post.description.slice(-100)}`
                        }
                    </p>
                </div>
            </div>
        </Link>
    );
};

PopularCards.propTypes = {
    post: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        user: PropTypes.shape({
            last_name: PropTypes.string.isRequired,
            first_name: PropTypes.string.isRequired,
            updatedAt: PropTypes.string.isRequired,
        }),
        photo: PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }),
        category: PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        }),
        description: PropTypes.string.isRequired,
    }),
};

export default PopularCards;
