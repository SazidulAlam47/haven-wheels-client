// Initialization for ES Users
import { Input, Ripple, initTE } from "tw-elements";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

function Login() {
    useEffect(() => initTE({ Input, Ripple }), []);
    const navigate = useNavigate();

    const { signInWithGoogle, signInUser } = useContext(AuthContext);
    const handleGoogle = () => {
        signInWithGoogle()
            .then(() => {
                toast.success("Successfully logged in!");
                navigate("/");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(() => {
                e.target.reset();
                navigate("/");
                toast.success("Successfully logged in!");
            })
            .catch((error) => {
                console.log(error.message);
                toast.error(error.message);
            });
    };

    return (
        <section className="h-screen dark:bg-zinc-600">
            <div className="container mx-auto h-full px-6 py-24">
                <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                    {/* Left column container with background */}
                    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                        <img
                            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                            className="w-full"
                            alt="Phone image"
                        />
                    </div>

                    {/* Right column container with form */}
                    <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
                        <form onSubmit={handleLogin} className="space-y-5">
                            {/* Email input */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>

                            {/* Password input */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>

                            {/* Submit button */}
                            <button
                                type="submit"
                                className=" inline-block w-full rounded-lg bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                            >
                                Sign in
                            </button>
                        </form>
                        {/* Divider */}
                        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                            <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                                OR
                            </p>
                        </div>
                        {/* Social login buttons */}
                        <button
                            onClick={handleGoogle}
                            className="mb-3 flex gap-2 w-full items-center justify-center rounded-lg bg-white dark:bg-zinc-300 px-7 pb-2.5 pt-3 text-center text-sm shadow-[0_4px_9px_-4px_#888] border font-medium uppercase leading-normal "
                            href="#!"
                            role="button"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                        >
                            {/* Google */}
                            <FcGoogle />
                            Continue with Google
                        </button>

                        {/* Register link */}
                        <p className="mb-0 mt-2 pt-1 font-semibold space-x-1 dark:text-gray-200">
                            <span>Don&apos;t have an account?</span>
                            <Link
                                to="/register"
                                className="text-danger text-lg transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                            >
                                Register
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
