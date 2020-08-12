import React, { ReactNode } from 'react'
import s from "./Dashboard.scss"
import Sidebar from "../sidebar/Sidebar"
import ContentArea from "./ContentArea"

interface DashboardProps {
    sidebar: ReactNode
    content: ReactNode
}
export default function Dashboard({ sidebar, content }: DashboardProps) {
    return (
        <div className={s.dashboard}>
            <Sidebar>
                {sidebar}
            </Sidebar>
            <ContentArea>
                {content}
            </ContentArea>


        </div>
    )
}
