import styles from './article.module.css'
// import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { selectMarked, setMarked } from "../../redux/bookMark"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark as sBookmark } from '@fortawesome/free-solid-svg-icons'
import { faBookmark as rBookmark } from '@fortawesome/free-regular-svg-icons'

export default function Article({ article }) {
    const marked = useSelector(selectMarked);
    const dispatch = useDispatch();
    const toggleMark = () => {
        dispatch(setMarked(!marked))
    }
    return (
        <div className="container">
            <div className={styles.thumbnailBox}>
                <img src={article.thumbnail} alt="" className={styles.thumbnail} />
            </div>
            <div className={styles.article}>
                <div className={styles.titleBox}>
                    <div className={styles.title}>{article.articletitle}</div>
                    <div onClick={toggleMark} className={styles.bookMark}>
                        {
                            marked ?
                                (<FontAwesomeIcon icon={sBookmark} />)
                                :
                                (<FontAwesomeIcon icon={rBookmark} />)
                        }
                    </div>
                </div>
                <div className={styles.content}>{article.content}</div>
            </div>
        </div>
    )
}