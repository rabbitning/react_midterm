import Header from "../components/Header"
import Footer from "../components/Footer"
import articledatas from '../json/articledatas.json'
import { useParams } from "react-router-dom"

export default function Article() {
    const articleId = useParams()
    const article = articledatas.find(x => x.id == articleId)
    return (
        <div className='page'>
            <Header />
            <div className="container">

            </div>
            <Footer />
        </div>
    )
}