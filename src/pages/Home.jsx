import Header from "../components/Header"
import RecommendArticles from "../components/RecommendArticles"
import Footer from "../components/Footer"

export default function Home() {
    return (
        <div className='page'>
            <Header />
            <RecommendArticles />
            <Footer />
        </div>
    )
}