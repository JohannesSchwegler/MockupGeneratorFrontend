import React from 'react'
import s from "./Sidebar.scss"



interface SidebarProps {
    children: any
}

export default function Sidebar({ children }: SidebarProps) {
    console.log(children);
    return (
        <div className={s.sidebar}>
            {children}
        </div>
    )
}
