import React, { ReactNode } from 'react'
import s from "./ContentArea.scss"

interface ContentProps {
    children: ReactNode
}

export default function Content({children} : ContentProps) {
    return (
        <div className={s.contentarea}>
            {children}
        </div>
    )
}
