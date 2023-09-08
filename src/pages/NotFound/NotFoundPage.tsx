import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center mt-[10%]">
            <h1 className="text-6xl p-5 text-gray">Ooops!</h1>
            <h2 className="text-2xl p-5 text-gray">404 Not Found</h2>
            <Link to="/">
                <button className="btn btn-primary">Back to Home</button>
            </Link>
        </div>
    )
};

export default NotFoundPage