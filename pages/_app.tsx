import React from "react"
import Layout from "../components/Layout/Layout"
import { AppProps } from "next/app"
import '../styles/theme.scss'

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default App
