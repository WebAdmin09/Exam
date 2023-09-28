import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import request from "../api";
import style from './BlogPage.module.css';

const BlogPage = () => {
    const { blogid } = useParams();
    console.log(blogid);
    const [data, setData] = useState([]);
    const [images, setImage] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await request.get("post/" + blogid);
                setData([res.data]);
                toast.success('Sucsess');
            } catch (error) {
                toast.error("Server error");
            }
        };

        fetchData();

    }, [blogid]);

    const putDefaultImage = (id) => {
        setImage((prevState) => ({
            ...prevState,
            [id]: true,
        }));
    };

    return (
        <div className="container">
            {data.map((post) => (
                <div className={style["wrapper"]} key={post._id}>
                    <div className={style["wrapper__image"]}>
                        <img className={style['post__img']}
                            onError={() => putDefaultImage(post._id)}
                            src={images[post._id]
                                ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYIzC1TfBqf3794q-lLfmxfhCr_Q4ElPV9ZQ&usqp=CAU"
                                : `https://blog-backend-production-a0a8.up.railway.app/upload/${post.photo?._id}.${post.photo?.name?.slice(-3) || ''}`}
                            alt="Post Image"
                        />
                    </div>
                    <div className={style["wrapper__texts"]}>
                        <div className={style["texts__profile"]}>
                            <div className={style["profile__img"]}>
                                <img className={style['profile__img']}
                                    onError={() => putDefaultImage(post._id)}
                                    src={images[post._id]
                                        ? 'https://m0.her.ie/wp-content/uploads/2018/01/07093633/GettyImages-887815620.jpg'
                                        : `https://blog-backend-production-a0a8.up.railway.app/upload/${post.user?.photo || ''}`}
                                    alt="User Image"
                                />
                            </div>
                            <div className={style["profile__text"]}>
                                <h2>{post.user?.first_name} {post.user?.last_name}</h2>
                                <span>{post.user?.updatedAt && new Date(post.user?.updatedAt).toLocaleDateString(undefined, {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}</span>
                            </div>
                        </div>
                        <div className={style["texts__titles"]}>
                            <h1 className={style['heading']}>{post.category?.name} {'by-step guide to choosing great font pairs'}</h1>
                            <h4 className={style['text__h4']}>{post.user?.info}</h4>
                            <p className={style['text__title']}>{post.description || ''}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BlogPage;
