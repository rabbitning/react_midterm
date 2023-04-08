import styles from './header.module.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <div className={styles.headerContent}>
                <div className={styles.navigator}>
                    <Link to='/' className={`${styles.navHomeBtn} ${styles.navItem} mainHover`}>Home</Link>
                    <Link to='/' className={`${styles.navItem} mainHover`}>genre</Link>
                    <Link to='/' className={`${styles.navItem} mainHover`}>contact</Link>
                </div>
                <div className={styles.searchBox}>
                    <input type="text" placeholder='search' className={styles.searchBar} />
                </div>
                <div className={styles.usercorner}>
                    <Link to='/' className={`${styles.postBtn} subHover`}>post</Link>
                    <Link to='/' className={`${styles.userIcon} subHover`}>
                        <i className='fas fa-user-circle'></i>
                    </Link>
                </div>
            </div>
        </header>
    )
}