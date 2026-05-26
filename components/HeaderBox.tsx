import React from 'react'
import {HeaderProps} from "@/types";

const HeaderBox = ({type,title,subtext,user}:HeaderProps) => {
    return (
        <div className="header-box">
            <h1 className="header-box-title">
                {title}
                {type === 'greeting' && (
                    <span className="text-bank-gradient">
                        &nbsp;{user}
                    </span>
                )}
            </h1>
            <p className="header-box-subtext">{subtext}</p>
        </div>
    )
}
export default HeaderBox
