import styles from './article.module.css'

export default function Article({ article }) {
    return (
        <div className="container">
            <div className={styles.thumbnailBox}>
                <img src={article.thumbnail} alt="" className={styles.thumbnail} />
            </div>
            <div className={styles.article}>
                <div className={styles.title}>{article.articletitle}</div>
                <div className={styles.content}>{article.content}</div>
            </div>
        </div>
    )
}