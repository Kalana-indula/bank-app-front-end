import React from 'react'
import {HeaderProps} from "@/types";

const HeaderBox = ({type,title,subtext,user}:HeaderProps) => {
    return (
        <div className="header-box flex flex-col">
            <h1 className="header-box-title text-[30px] font-semibold">
                {title}
                {type === 'greeting' && (
                    <span className="text-bank-gradient">
                        &nbsp;{user}
                    </span>
                )}
            </h1>
            <p className="header-box-subtext text-[16px] text-gray-500">{subtext}</p>
        </div>
    )
}
export default HeaderBox
