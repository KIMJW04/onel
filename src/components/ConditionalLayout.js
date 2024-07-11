"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Top from "@/components/Top";
import Main from "@/components/Main";
import Search from "@/components/Search";

export default function ConditionalLayout({ children }) {
    const pathname = usePathname();

    // 특정 경로에만 Header, Footer, Top을 표시하지 않음
    const hideLayout = pathname === "/testpage";

    return (
        <>
            {!hideLayout && (
                <>
                    <Header>
                        <Search />
                    </Header>
                </>
            )}
            <Main>
                {children}
            </Main>
            {!hideLayout && (
                <>
                    <Top />
                    <Footer />
                </>
            )}
        </>
    );
}
