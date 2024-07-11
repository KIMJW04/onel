"use client";

import Nav from "./Nav";

export default function Header({ children }) {

  return (
    <>
      <header id="header">
        <Nav />
        {children}
      </header>
    </>
  );
}
