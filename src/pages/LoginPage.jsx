import style from './LoginPage.module.css';

function LoginPage() {

    return (
        <section>
            <div className="container">
                <div className={style["wrapper"]}>
                    <h1 className={style["heading__login"]}>Login</h1>
                    <form className={style["form"]}>
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
