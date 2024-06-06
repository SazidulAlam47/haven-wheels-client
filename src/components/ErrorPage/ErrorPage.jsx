import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function ErrorPage() {
    return (
        <>
            <Header />
            <div className="flex h-screen bg-gray-100">
                <div className="m-auto text-center">
                    <h1 className="text-4xl font-bold text-red-600">Oops! Something went wrong.</h1>
                    <p className="text-lg text-gray-600 mt-4">
                        We apologize, but an error has occurred while processing your request.
                    </p>
                    <p className="text-lg text-gray-600 mt-2">
                        Please try again later or contact our support team for assistance.
                    </p>
                    <Link to="/" className="mt-8 inline-block bg-red-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-red-700">
                        Go back to the homepage
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ErrorPage;
