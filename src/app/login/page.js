import React from 'react'
import Header from "@/components/Header";
import Search from "@/components/Search";
import Footer from "@/components/Footer";

export default function page() {
    return (
        <>
            <Header />
            <Search />
            <main className='login'>
                <div className="login-container">
                    <h1>로그인</h1>
                    <p>오늘네일에 오신 것을 환영합니다.</p>
                    <form className="login-form">
                        <div className="input-group">
                            <label htmlFor="email">이메일</label>
                            <input type="email" id="email" placeholder="이메일을 입력해주세요." required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">비밀번호</label>
                            <input type="password" id="password" placeholder="비밀번호를 입력해주세요." required />
                        </div>
                        <button type="submit" className="login-button">로그인</button>
                        <button type="button" className="signup-button">회원가입</button>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    )
}
