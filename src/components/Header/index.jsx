import styles from './header.module.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { selectLightMode, setColorMode } from "../../redux/colorSlice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleHalfStroke, faCircleUser } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    const lightMode = useSelector(selectLightMode);
    const dispatch = useDispatch();
    const toggleColor = () => {
        dispatch(setColorMode(!lightMode))
        {
            const colorBtn = document.querySelector(`.${styles.setColorBtn}`)
            const rotate = lightMode * 180;
            colorBtn.style.transform = `rotateZ(${rotate}deg)`;
        }
    }
    return (
        <header>
            <div className={styles.headerContent}>
                <div className={styles.navigator}>
                    <Link to='/' className={`${styles.navHomeBtn} ${styles.navItem}`}>KnowEdge</Link>
                    <Link to='/' className={styles.navItem}>genre</Link>
                    <Link to='/' className={styles.navItem}>contact</Link>
                </div>
                <div className={styles.searchBox}>
                    <input type="text" placeholder='search' className={styles.searchBar} />
                </div>
                <div className={styles.userCorner}>
                    <div onClick={toggleColor} className={styles.setColorBtn}>
                        <FontAwesomeIcon icon={faCircleHalfStroke} />
                    </div>
                    <div className={styles.userAction}>
                        <Link to='/' className={styles.postBtn}>post</Link>
                        <Link to='/author/McDonald' className={styles.userIcon}>
                            <FontAwesomeIcon icon={faCircleUser} />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}