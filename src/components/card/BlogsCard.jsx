import PropTypes from 'prop-types';
import { useState } from 'react';
import style from './BlogsCard.module.css';

const BlogsCard = ({ post }) => {
    const [images, setImage] = useState({});

    const putDefaultImage = (postId) => {
        setImage((response) => ({
            ...response,
            [postId]: true,
        }));
    };

    return (
        <div className={style['post__card']}>
            <div className={style['post__card-image']}>
                <img
                    className={style['post__card-img']}
                    onError={() => putDefaultImage(post?._id)}
                    src={
                        images[post?._id]
                            ? 'https://images.unsplash.com/photo-1574169207511-e21a21c8075a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
                            : `https://blog-backend-production-a0a8.up.railway.app/upload/${post?.photo?._id}.${post?.photo?.name?.slice(-3) ?? ''}`
                    }
                    alt="Card"
                />
            </div>
            <div className={style['post__card-texts']}>
                <span className={style['card__span']}>{post?.category?.name || 'Cars'}</span>
                <h2 className={style['card__h2']}>{post?.title}</h2>
                <p className={style['card__title']}>
                    {post?.category?.description ||
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste id iusto deleniti amet cumque, eum error. Cupiditate quaerat voluptatem beatae id delectus officiis temporibus doloribus, odio error suscipit ducimus, similique iusto velit aliquam accusamus placeat, fugiat eligendi hic! Non quia fugiat quas, qui exercitationem asperiores sapiente aspernatur repudiandae minus perspiciatis.'}
                </p>
            </div>
        </div>
    );
};

BlogsCard.propTypes = {
    post: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        category: PropTypes.shape({
            name: PropTypes.string,
            description: PropTypes.string,
        }),
        title: PropTypes.string,
        photo: PropTypes.shape({
            _id: PropTypes.string,
            name: PropTypes.string,
        }),
    }),
};

export default BlogsCard;
