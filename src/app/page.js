"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import List from "@/components/List";
import Menu from "@/components/Menu";
import Search from "@/components/Search";

export default function Home() {
  return (
    <>
      <Header />
      <Search />
      <Menu />
      <List />
      <Footer />
    </>
  );
}
