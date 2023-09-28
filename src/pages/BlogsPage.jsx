import { Fragment, useState, useEffect } from "react";
import { toast } from "react-toastify";
import request from '../api';
import style from './BlogsPage.module.css';
import BlogsCard from "../components/card/BlogsCard";

const BlogsPage = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        try {
            const res = await request.get("post");
            setPosts(res.data.data);
        } catch (error) {
            toast.error("Server error");
        }
    };

    async function handleSearch(e){
        try {
            const res = await request.get(`post?search=${e.target.value}`)
            setPosts(res.data.data  )
        } catch (error) {
            toast.error
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <Fragment>
            <section className={style['all__posts']}>
                <div className="container">
                    <div className="main__wrapper">
                        <div className="wrapper__header">
                            <input onChange={handleSearch} type="search" name="search" placeholder="Searching...." className={style['search__input']} />
                            <h1 className={style['heading']}>All posts</h1>
                        </div>
                        <div className={style["wrapper__cards"]}>
                            {posts.map((post) => (
                                <BlogsCard key={post._id} post={post} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default BlogsPage;
