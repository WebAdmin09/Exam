import { Fragment, useEffect, useState } from "react";
import request from '../api';
import PopularCards from "../components/card/PopularCards";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import style from './HomePage.module.css'
import 'react-toastify/dist/ReactToastify.css';
import CategoryCard from "../components/card/CategoryCard";

const HomePage = () => {
    const [data, setData] = useState([]);
    const [posts, setPosts] = useState([]);
    const [category, setCategory] = useState([])
    const [backImg, setBackImg] = useState('')

    const [images, setImage] = useState({});



    async function getData() {
        try {
            let { data } = await request.get('post/lastone')
            setData([data]);
            setBackImg(`https://blog-backend-production-a0a8.up.railway.app/upload/${data.photo._id}${data.photo.name.split('.')[1]}`)
            toast.success('Success')
        } catch (error) {
            toast.error("Image Not Found");
        }
    }
    const putdeafaultimg = (data) => {
        setImage((response) => ({
            ...response,
            [data]: true,
        }))
    }
    async function getPosts() {
        try {
            const res = await request.get("post/lastones");
            setPosts(res.data);
        } catch (error) {
            toast.error("Server Error");
        }
    }
    async function getCategory() {
        try {
            const { data } = await request.get("category");
            setCategory(data.data);
        } catch (error) {
            toast.error("No Category");
        }
        console.log(category);
    }
    useEffect(() => {
        getData();
        getPosts();
        getCategory();
    }, []);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 30,
        },
        tablet: {
            breakpoint: { max: 1024, min: 900 },
            items: 2,
            partialVisibilityGutter: 30,
        },
        mobile: {
            breakpoint: { max: 700, min: 0 },
            items: 1,
            partialVisibilityGutter: 30,
        },
    };
    return (
        <Fragment>
            <div className={style["main__wrapper"]}>
                <div className="back__img">
                    <img className={style["backimg"]}
                        onError={() => putdeafaultimg(data._id)}
                        src={
                            images[data._id]
                                ? "https://wallpaperaccess.com/full/13189.jpg"
                                : backImg} />
                </div>
                {data.map((el) => (
                    <div key={el._id} className="container">
                        <div className={style["wrapper"]}>
                            <h6 className={style['wrapper__h6']}>Posted on <span className={style['h6__span']}>{el.category?.name}</span></h6>
                            <h1 className={style['wrapper__heading']}>{el.category?.name}, {el.category?.description}</h1>
                            <h5 className={style['wrapper__span']}>By <span className={style['name']}>{el.user?.first_name} {el.user?.last_name}</span> | {new Date(el.category?.updatedAt).toLocaleDateString(
                                undefined,
                                {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                }
                            )}</h5>
                            <p className={style['wrapper__title']}>{el.category?.description}</p>
                            <Link to={"/blog/" + el._id} className={style['wrapper__btn']}>Read More {'>'}</Link>
                        </div>
                    </div>
                ))}
            </div>
            <section className={style['popularsection']}>
                <div className="container">
                    <h2 className={style['popularh2']}>Popular Blog</h2>
                    <div className={style["popular__cards"]}>
                        <Carousel
                            responsive={responsive}
                            showDots={false}
                            infinite={true}
                            autoPlay={false}
                            autoPlaySpeed={100}
                            keyBoardControl={true}
                        >
                            {posts.map((post) => (
                                <PopularCards key={post._id} post={post} />
                            ))}
                        </Carousel>
                    </div>
                </div>
            </section>
            <hr className={style['hr']} />
            <section className={style['categorysection']}>
                <h1 className={style['heading__category']}>Choose A Category</h1>
                <div className="container">
                    <div className={style["category__cards"]}>
                        <Carousel
                            responsive={responsive}
                            showDots={false}
                            infinite={true}
                            autoPlay={false}
                            autoPlaySpeed={100}
                            keyBoardControl={true}
                        >
                            {category.map((category) => (
                                <CategoryCard key={category._id} category={category} />
                            ))}
                        </Carousel>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default HomePage
