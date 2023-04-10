import Header from "../components/Header"
import Footer from "../components/Footer"
import articledatas from '../json/articledatas.json'
import { useParams } from "react-router-dom"

export default function ArticlePage() {
    const { articleid } = useParams()
    const article = articledatas.find(x => x.id == articleid)
    return (
        <div className='page'>
            <Header />
            <div className="container">
                <img src={article.thumbnail} alt="" />
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}