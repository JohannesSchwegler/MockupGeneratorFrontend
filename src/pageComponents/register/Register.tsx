import React from 'react'
import s from './Register.scss'

export default function Register() {
    return (
        <section className={s.register}>

            <div className={`${s.register__col} ${s.left}`}>


            </div>
            <div className={s.register__col}>

                <div className={s.register__form}>

                    <div className={s.register__form__header}>

                        <span>Create your Stripe account</span>
                    </div>
                    <form action="POST">
                        <div className={s.register__form__item}>
                            <div className={s.register__form__label}>
                                <span>
                                    Email </span>

                            </div>
                            <div className={s.register__form__input}>
                                <input type="text" />
                            </div>
                        </div>

                        <div className={s.register__form__item}>
                            <div className={s.register__form__label}>
                                Email
    </div>
                            <div className={s.register__form__input}>
                                <input type="text" />
                            </div>
                        </div>
                        <div className={s.register__form__item}>
                            <div className={s.register__form__label}>
                                Password
    </div>
                            <div className={s.register__form__input}>
                                <input type="text" />
                            </div>
                        </div>
                        <div className={s.register__form__checkbox}>
                            <input type="checkbox" />
                            <p>       Don't email me about product updates. If this box is left unchecked, Stripe will occasionally send helpful and relevant emails. You can unsubscribe at any time. </p>

                            <span ></span>
                        </div>

                        <div className={s.register__form__submit}>
                            <span>Continue</span>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    )
}
