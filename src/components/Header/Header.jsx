import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

function Header() {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => toast.success("Successfully logged out!"))
            .catch((error) => console.error(error));
    };
    return (
        <header className="bg-stone-100 text-gray-600 body-font dark:bg-slate-800 dark:text-white">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link
                    to="/"
                    className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
                >
                    <span className="ml-3 text-xl dark:text-white">
                        Haven Wheels
                    </span>
                </Link>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
                    <NavLink
                        to="/"
                        className="mr-5 hover:text-gray-900 dark:hover:text-gray-400"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/add-products"
                        className="mr-5 hover:text-gray-900 dark:hover:text-gray-400"
                    >
                        Add Product
                    </NavLink>
                    <NavLink
                        to="/cart"
                        className="mr-5 hover:text-gray-900 dark:hover:text-gray-400"
                    >
                        My Cart
                    </NavLink>
                </nav>
                {user ? (
                    <div className="flex items-center gap-2">
                        <div>
                            <img
                                className="rounded-full w-12 aspect-square object-cover"
                                src={user.photoURL}
                                alt="User Photo"
                            />
                        </div>
                        <span className="font-bold">{user.displayName}</span>
                        <button
                            onClick={handleLogOut}
                            className="inline-flex items-center bg-gray-50 dark:bg-neutral-700 dark:text-white border py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
                        >
                            Log out
                        </button>
                    </div>
                ) : (
                    <Link
                        to="/login"
                        className="inline-flex items-center bg-gray-50 dark:bg-neutral-700 dark:text-white border py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
                    >
                        Log in
                        <svg
                            fill="none"
                            stroke="currentColor"
                            className="w-4 h-4 ml-1"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                )}
            </div>
        </header>
    );
}

export default Header;
