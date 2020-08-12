import React from 'react'
import s from "./Login.scss"

export default function Login() {
    return (
        <div className={s.login}>
            <div className={s.login__wrapper}>
                <div className={s.login__logo}>
                    MockupGenerator
            </div>

                <div className={s.login__form}>

                    <div className={s.login__form__header}>

                        <span>Sign in to your account</span>
                    </div>
                    <form action="POST">
                        <div className={s.login__form__item}>
                            <div className={s.login__form__label}>
                                <span>
                                    Email
                            </span>
                                <a href="">Forgot your password?</a>
                            </div>
                            <div className={s.login__form__input}>
                                <input type="text" />
                            </div>
                        </div>

                        <div className={s.login__form__item}>
                            <div className={s.login__form__label}>
                                Email
                        </div>
                            <div className={s.login__form__input}>
                                <input type="text" />
                            </div>
                        </div>

                     
                        <div className={s.login__form__checkbox}>
                            <input type="checkbox" />
                            <p>          Stay signed in for a week</p>

                            <span ></span>
                        </div>

                        <div className={s.login__form__submit}>
                            <span>Continue</span>
                        </div>

                    </form>
                </div>

                <div className={s.login__register}>
                    <span>Don't have an account?</span> <a href="/register">Sign up</a>
                </div>
            </div>
        </div>
    )
}
