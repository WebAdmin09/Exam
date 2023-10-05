import style from './LoginPage.module.css';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import Cookies from "js-cookie";

import request from "../api";
import { ROLE, TOKEN } from "../constants";
import { AuthContext } from "../context/AuthContext";

function LoginPage() {
    const { setIsAuthenticated, setRole } = useContext(AuthContext);
    const navigate = useNavigate();
    const login = async (e) => {
        e.preventDefault()
        try {
           const user = {
            username: e.target.username.value,
            password: e.target.password.value
           }
           console.log(user);
            let {
                data: { token, role },
            } = await request.post("auth/login", user);
            console.log(token);
            if (role === "user") {
                navigate("/my-blogs");
            } else if (role === "admin") {
                navigate("/dashboard");
            }
            Cookies.set(TOKEN, token);
            Cookies.set(ROLE, role);
            setIsAuthenticated(true);
            setRole(role);
        } catch (err) {
            message.error("Error");
        }
    };
    return (
        <section>
            <div className="container">
                <div className={style["wrapper"]}>
                    <h1 className={style["heading__login"]}>Login</h1>
                    <form onSubmit={login} className={style["form"]}>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            className={style["form-input"]}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className={style["form-input"]}
                        />
                        <button className={style["btn-login"]}>Login</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default LoginPage;
