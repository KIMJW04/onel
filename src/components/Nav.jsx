"use client"

import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import { useState } from "react";

const Nav = () => {
    const [isBoxVisible, setIsBoxVisible] = useState(false);
    const toggleBoxVisible = () => {
        setIsBoxVisible(!isBoxVisible);
    };
    return (
        <div id="nav">
            <Link href="/">
                <h1 className="logo">오늘네일</h1>
            </Link>
            <div className="right">
                <p>솔직한 네일샵 리뷰</p>

                <button className="my" onClick={toggleBoxVisible}>
                    <Image
                        src="/img/menu.png"
                        alt="menu"
                        className="my_menu"
                        width={20}
                        height={20}
                    />
                    <Image
                        src="/img/user.png"
                        alt="user"
                        className="my_user"
                        width={30}
                        height={30}
                    />
                </button>
            </div>
            <div id="toggleBox" className={isBoxVisible ? "visible" : "hidden"}>
                <Link href="/login">
                    <button className="togglebtn">로그인</button>
                </Link>
                <Link href="/join">
                    <button className="togglebtn">회원가입</button>
                </Link>
                <Link href="/mypage">
                    <button className="togglebtn">나의활동</button>
                </Link>
            </div>
        </div>
    )
}

export default Nav
