import styles from './recommendarticles.module.css'
import { Link } from 'react-router-dom'
import articledatas from '../../json/articledatas.json'

export default function RecommendArticles() {
    return (
        <div className='container'>
            <div className={styles.recommendList}>
                {articledatas.map(articledata => (
                    <Link to={`/article/${articledata.id}`} key={articledata.id} className={styles.articleBox}>
                        <div className={styles.articleThumbnailBox}>
                            <img src={articledata.thumbnail} alt="" className={styles.articleThumbnail} />
                        </div>
                        <div className={styles.articletitle}>{articledata.articletitle}</div>
                    </Link>
                ))}
            </div>
        </div>
    )
}