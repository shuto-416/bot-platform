import React, { ReactNode } from 'react'
import Head from 'next/head'
import {SideBarMenu} from "../SideBarMenu/SideBarMenu"
import {Header} from "../Header/Header"
import ThemeProvider, {useTheme} from "../../interfaces/ThemeContext"
import styles from './Layout.module.scss'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  const { theme } = useTheme()
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider>
        <div className={`theme-${theme}`}>
          <SideBarMenu />
          <Header />
          <div className={styles.mainContents}>
            {children}
          </div>
        </div>
      </ThemeProvider>
    </div>
  )
}

export default Layout
