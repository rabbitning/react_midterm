import styles from './header.module.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { selectLightMode, setColorMode } from "../../redux/colorSlice";

export default function Header() {
    const lightMode = useSelector(selectLightMode);
    const dispatch = useDispatch();
    const root = document.documentElement
    const toggleColor = () => {
        dispatch(setColorMode(!lightMode))
    }
    return (
        <header>
            <div className={styles.headerContent}>
                <div className={styles.navigator}>
                    <Link to='/' className={`${styles.navHomeBtn} ${styles.navItem}`}>Home</Link>
                    <Link to='/' className={styles.navItem}>genre</Link>
                    <Link to='/' className={styles.navItem}>contact</Link>
                </div>
                <div className={styles.searchBox}>
                    <input type="text" placeholder='search' className={styles.searchBar} />
                </div>
                <div className={styles.userCorner}>
                    <div onClick={toggleColor} className={styles.setColorBtn}>
                        {
                            // lightMode ? (
                            //     <div className={styles.setColorBtn}>

                            //     </div>
                            // ) : (
                            //     <div className={styles.setColorBtn}>

                            //     </div>
                            // )
                        }
                    </div>
                    <div className={styles.userAction}>
                        <Link to='/' className={styles.postBtn}>post</Link>
                        <Link to='/author/McDonald' className={styles.userIcon}>
                            <i className='fas fa-user-circle'></i>
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    )
}