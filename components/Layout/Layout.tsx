import React, { ReactNode } from 'react'
import Head from 'next/head'
import {SideBarMenu} from "./SideBarMenu/SideBarMenu";
import {Header} from "./Header/Header";
import ThemeProvider from "../interfaces/ThemeContext";

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider>
        <SideBarMenu />
        <Header />
        {children}
      </ThemeProvider>
    </div>
  )
}

export default Layout
