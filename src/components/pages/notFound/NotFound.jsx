import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <section className="section_notFound">
            <h1>The page you’re looking <br />for can’t be found.</h1>
            <Link to='/'>
                <button className="notFound_button">
                    <span>Back to home</span>
                </button>
            </Link>
        </section>
    )
}

export default NotFound