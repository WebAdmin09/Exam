import { Fragment, useEffect, useState } from "react";
import request from '../api';
import PopularCards from "../components/card/PopularCards";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import style from './HomePage.module.css'
import CategoryCard from "../components/card/CategoryCard";

const HomePage = () => {
    const [data, setData] = useState([]);
    const [posts, setPosts] = useState([]);
    const [category, setCategory] = useState([])
    const [backImg, setBackImg] = useState('')

    async function getData() {
        try {
            let res = await request.get('post/lastone')
            setData([res.data]);
            setBackImg(`https://blog-backend-production-a0a8.up.railway.app/upload/${res.data.photo._id}.${res.data.photo.name.slice(-3)}`)
        } catch (error) {
            toast.error("Image Not Found");
        }
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
            const res = await request.get("category");
            setCategory(res.data.data);
        } catch (error) {
            toast.error("No Category");
        }
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
    console.log(category);
    return (
        <Fragment>
            <div className={style["main__wrapper"]}>
                <div className="back__img">
                    <img className={style["backimg"]} src={backImg} alt={backImg.name} />
                </div>
                {data.map((el) => (
                    <div key={el._id} className="container">
                        <div className={style["wrapper"]}>
                            <h6 className={style['wrapper__h6']}>Posted on <span className={style['h6__span']}>{el.category.name}</span></h6>
                            <h1 className={style['wrapper__heading']}>{el.category.name}, {el.category.description}</h1>
                            <h5 className={style['wrapper__span']}>By <span className={style['name']}>{el.user.first_name} {el.user.last_name}</span> | {new Date(el.category.updatedAt).toLocaleDateString(
                                undefined,
                                {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                }
                            )}</h5>
                            <p className={style['wrapper__title']}>{el.category.description}</p>
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
            <hr  className={style['hr']}/>
            <section className={style['categorysection']}>
                <h1 className={style['heading__category']}>Choose A Catagory</h1>
                <div className="container">
                    <div className="category__cards">
                        {category.map((categories) => {
                            <CategoryCard key={categories._id} categories={categories} />
                        })}
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default HomePage
