import style from './RegisterPage.module.css'
const RegisterPage = () => {
    return (
        <section>
            <div className="container">
                <div className={style["wrapper"]}>
                    <h1 className={style["heading__login"]}>Login</h1>
                    <form className={style["form"]}>
                        <input
                            type="text"
                            name="username"
                            placeholder="First Name"
                            className={style["form-input"]}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Last Name"
                            className={style["form-input"]}
                        />
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
                        <input
                            type="password"
                            name="password"
                            placeholder="Confirm password"
                            className={style["form-input"]}
                        />
                        <button className={style["btn-login"]}>Register</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default RegisterPage
