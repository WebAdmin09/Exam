import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { toast } from "react-toastify";
import request from "../api";
import style from './BlogPage.module.css'

const BlogPage = () => {
    const { blogid } = useParams()
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const res = await request.get("post/" + blogid); // "id" o'rniga "blogid" ishlatilgan
            setData([res.data]);
        } catch (error) {
            toast.error("Server error");
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="container">
            {data.map((post) => (
                <div className={style["wrapper"]} key={post._id}>
                    <div className={style["wrapper__image"]}>
                        <img src={`https://blog-backend-production-a0a8.up.railway.app/upload/${post.photo._id}.jpg`} />
                    </div>
                    <div className={style["wrapper__texts"]}>
                        <div className={style["texts__profile"]}>
                            <div className={style["profile__img"]}>
                                <img className={style['profile__img']} src={`https://blog-backend-production-a0a8.up.railway.app/upload/${post.user.photo}`} />
                            </div>
                            <div className={style["profile__text"]}>
                                <h2>{post.user.first_name} {post.user.last_name}</h2>
                                <span>{new Date(post.user.updatedAt).toLocaleDateString(undefined, {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}</span>
                            </div>
                        </div>
                        <div className={style["texts__titles"]}>
                            <h1 className={style['heading']}>{post.category.name} {'by-step guide to choosing great font pairs'}</h1>
                            <h4 className={style['text__h4']}>{post.user.info}</h4>
                            <p className={style['text__title']}>{post.description} {'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et laborum facere sequi ipsum natus esse, obcaecati cupiditate deleniti vel exercitationem mollitia perspiciatis delectus aut atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et laborum facere sequi ipsum natus esse, obcaecati cupiditate deleniti vel exercitationem mollitia perspiciatis delectus aut atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et laborum facere sequi ipsum natus esse, obcaecati cupiditate deleniti vel exercitationem mollitia perspiciatis delectus aut atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et laborum facere sequi ipsum natus esse, obcaecati cupiditate deleniti vel exercitationem mollitia perspiciatis delectus aut atque!'}</p>
                            <p className={style['text__title']}>{post.description} {'Et laborum facere sequi ipsum natus esse, obcaecati cupiditate deleniti vel exercitationem mollitia perspiciatis delectus aut atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et laborum facere sequi ipsum natus esse, obcaecati cupiditate deleniti vel exercitationem mollitia perspiciatis delectus aut atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et laborum facere sequi ipsum natus esse, obcaecati cupiditate deleniti vel exercitationem mollitia perspiciatis delectus aut atque!'}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BlogPage;
