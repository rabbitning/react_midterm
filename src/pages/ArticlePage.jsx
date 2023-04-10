import Header from "../components/Header"
import Article from "../components/Article"
import Footer from "../components/Footer"
import articledatas from '../json/articledatas.json'
import { useParams } from "react-router-dom"

export default function ArticlePage() {
    const { articleid } = useParams()
    const article = articledatas.find(x => x.id == articleid)
    return (
        <div className='page'>
            <Header />
            <Article article={article} />
            <Footer />
        </div>
    )
}