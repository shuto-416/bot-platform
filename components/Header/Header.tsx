import styles from './Header.module.scss'
import { useRouter } from "next/router";
import {useEffect} from "react";
import Link from "next/link";

export const Header = () => {
  const router = useRouter()

  useEffect(() => {
    console.debug(router.pathname)
  }, [router.pathname])

  const isActive = (path: string) => {
    return router.pathname === path ? styles.active : ''
  }

  return (
    <div className={styles.header}>
      <Link href="/" className={`${styles.headerButton} ${isActive('/')}`}>
        個人ルーム
      </Link>
      <Link href="/about" className={`${styles.headerButton} ${isActive('/about')}`}>
        全体ルーム
      </Link>
    </div>
  )
}