import React from 'react'
import { Link } from '../link/Link';
/* import { ReactComponent as StarterLogo } from 'assets/svg/starter-logo.svg'; */

import { ShoppingCart, Home, BookOpen, Book, CreditCard, User, Settings, ArrowUpCircle, ArrowLeft } from 'react-feather';
import s from "./SidebarNav.scss"



export default function SidebarNav() {
    return (

        <>
            <div className={s.sidebar__logo}>

                {/*     <StarterLogo /> */}
            </div>

            <div className={s.sidebar__user}>
                <div className={s.sidebar__user__wrapper}>

                    <div className={s.sidebar__user__image}>

                        <img src="https://images.unsplash.com/photo-1589465885857-44edb59bbff2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="" />
                    </div>
                    <div className={s.sidebar__user__name}>

                        Hey Julien!
</div>


                </div>

            </div>

            <ul className={s.sidebar__nav}>
                <li className={`${s.sidebar__nav__item} ${s.active}`}>
                    <Home color="white" size={24} /><span className={s.sidebar__nav__item__title}>Dashboard</span>
                </li>

            </ul>

            <div className={s.sidebar__section}>


                <ul className={s.sidebar__nav}>
                    <li className={`${s.sidebar__nav__item}`}>
                        <BookOpen color="white" size={24} /><span className={s.sidebar__nav__item__title}>Study</span>
                    </li>
                    <li className={s.sidebar__nav__item}>
                        <CreditCard color="white" size={24} /><span className={s.sidebar__nav__item__title}>Add card</span>
                    </li>
                    <li className={s.sidebar__nav__item}>
                        <Book color="white" size={24} /><span className={s.sidebar__nav__item__title}>Add deck</span>
                    </li>
                    <li className={s.sidebar__nav__item}>
                        <ShoppingCart color="white" size={24} /><span className={s.sidebar__nav__item__title}>Marketplace</span>
                    </li>
                </ul>
            </div>

            <div className={s.sidebar__section}>
                {/*     <h2 className={s.sidebar__section__title}>User</h2>
*/}
                <ul className={s.sidebar__nav}>
                    <li className={s.sidebar__nav__item}>
                        <User color="white" size={24} /><span className={s.sidebar__nav__item__title}>User</span>
                    </li>
                    <li className={s.sidebar__nav__item}>
                        <Settings color="white" size={24} /><span className={s.sidebar__nav__item__title}>Settings</span>
                    </li>
                    <li className={s.sidebar__nav__item}>
                        <ArrowUpCircle color="white" size={24} /><span className={s.sidebar__nav__item__title}>Update</span>
                    </li>
                </ul>
            </div>
            <div className={s.sidebar__footer}>
                <ul className={s.sidebar__nav}>
                    <li className={s.sidebar__nav__item}>
                        <Link to="/">
                            <ArrowLeft color="white" size={24} /><span className={s.sidebar__nav__item__title}>Exit</span>
                        </Link>
                    </li>
                </ul>
            </div>

        </>
    )
}
