import styles from './header.module.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <div className={styles.navigator}>
                <Link to='/' className={styles.navItem}>Home</Link>
                <Link to='/' className={styles.navItem}>genre</Link>
                <Link to='/' className={styles.navItem}>contact</Link>
            </div>
            <div className={styles.searchBox}>
                <input type="text" placeholder='search' className={styles.searchBar} />
            </div>
            <div className='usercorner'>
                <Link to='/'></Link>
                <Link to='/'></Link>
            </div>
        </header>
    )
}