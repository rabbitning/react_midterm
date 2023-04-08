import styles from './recommendarticles.module.css'
import { Link } from 'react-router-dom'
import articledatas from '../../json/articledatas.json'

export default function RecommendArticles() {
    return (
        <div className='container'>
            <div className={styles.recommendList}>
                {articledatas.map(articledata => (
                    <Link to={articledata.articleurl} key={articledata.id} className={styles.articleBox}>
                        <img src={articledata.thumbnail} alt="" className={styles.articleThumbnail} />
                        <div className={styles.articletitle}>{articledata.articletitle}</div>
                    </Link>
                ))}
            </div>
        </div>
    )
}