import Header from "../components/Header"
import AuthorInfo from "../components/AuthorInfo"
import Footer from "../components/Footer"
import { useParams } from "react-router-dom"
import authordatas from '../json/authordatas.json'

export default function AuthorPage() {
    const { username } = useParams()
    const user = authordatas.find(
        x => x.name == username
    )
    return (
        <div className='page'>
            <Header />
            <AuthorInfo user={user} />
            <Footer />
        </div>
    )
}