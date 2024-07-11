import React from 'react'
import Header from "@/components/Header";
import Search from "@/components/Search";
import Footer from "@/components/Footer";

export default function page() {
    return (
        <>
            <main className='join'>
                <div className="join-container">
                    <h1>회원가입</h1>
                    <p>오늘네일에 오신 것을 환영합니다.</p>
                    <form className="join-form">
                        <div className="input-group">
                            <label htmlFor="nickname">닉네임</label>
                            <input type="text" id="nickname" placeholder="닉네임을 입력해주세요." required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">이메일</label>
                            <input type="email" id="email" placeholder="이메일을 입력해주세요." required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">비밀번호</label>
                            <input type="password" id="password" placeholder="비밀번호를 입력해주세요." required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="confirm-password">비밀번호 확인</label>
                            <input type="password" id="confirm-password" placeholder="비밀번호를 다시 입력해주세요." required />
                        </div>
                        <button type="submit" className="join-button">회원가입</button>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    )
}
