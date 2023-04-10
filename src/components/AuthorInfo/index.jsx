import styles from './authorinfo.module.css'
import { Link } from 'react-router-dom'
import articledatas from '../../json/articledatas.json'

export default function AuthorInfo({ user }) {
    const userArticleList = articledatas.filter(article => article.author == user.name)
    return (
        <div className='container'>
            <div className={styles.authorPage}>
                <div className={styles.userInfo}>
                    <img src={user.profile} alt="" className={styles.userProfile} />
                    <div className={styles.userName}>{user.name}</div>
                    <div>{user.email}</div>
                </div>
                <div className={styles.userArticleList}>
                    {userArticleList.map(article => (
                        <Link to={`/article/${article.id}`} key={article.id} className={styles.userArticle}>
                            <div className={styles.articleThumbnailBox}>
                                <img src={article.thumbnail} alt="" className={styles.articleThumbnail} />
                            </div>
                            <div className={styles.articleBox}>
                                <div className={styles.articleTitle}>{article.articletitle}</div>
                                <div className={styles.articleContent}>{article.contentNew[0].subcontent[0]}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}