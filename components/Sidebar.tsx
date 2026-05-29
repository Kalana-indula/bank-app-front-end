import React from 'react'
import {SideBarProps} from "@/types";
import Link from "next/link";

const Sidebar = ({user}:SideBarProps) => {
    return (
        <section className="sidebar">
            <nav className="flex flex-col gap-4">
                <Link href="/">Home</Link>
            </nav>
        </section>
    )
}
export default Sidebar
