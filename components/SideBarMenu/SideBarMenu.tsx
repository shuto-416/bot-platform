import styles from './SideBarMenu.module.scss'
import { FaCog, FaComments, FaUser } from "react-icons/fa"
import {useRouter} from "next/router";
import Link from "next/link";

export const SideBarMenu = () => {
  const router = useRouter()

  const isActive = (path: string) => {
    return router.pathname === path ? styles.active : ''
  }

  return (
    <div className={styles.manuBar}>
      <div className={styles.menuItemWrap}>
        <Link href='/'>
          <FaComments className={`${styles.menuItem} ${isActive('/')}`}/>
        </Link>
        <Link href='/about'>
          <FaUser className={`${styles.menuItem} ${isActive('/about')}`}/>
        </Link>
        <Link href='/about'>
          <FaCog className={`${styles.menuItem} ${isActive('/about')}`}/>
        </Link>
      </div>
    </div>
  )
}