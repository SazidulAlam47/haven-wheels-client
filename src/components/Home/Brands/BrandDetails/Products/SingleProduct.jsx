import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SingleProduct = ({ car }) => {
    return (
        <div className="bg-indigo-50 dark:bg-slate-600 p-6 rounded-lg ">
            <img
                className="rounded h-80 w-full object-cover object-center mb-6"
                src={car.image}
                alt="content"
            />
            <h3 className="tracking-widest text-indigo-500 dark:text-indigo-300 text-xs font-medium title-font mb-2">
                {car.brandName}
            </h3>
            <h2 className="text-xl text-gray-900 dark:text-white font-semibold title-font mb-4">
                {car.name}
            </h2>
            <p className=" text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
                {car.shortDescription}
            </p>
            <p className="text-md text-gray-700 dark:text-gray-200 mb-2">
                <span className="font-semibold">Type:</span> {car.type}
            </p>
            <p className="text-md text-gray-700 dark:text-gray-200 mb-2">
                <span className="font-semibold">Price:</span> ${car.price}
            </p>
            <p className="text-md text-gray-700 dark:text-gray-200 mb-2">
                <span className="font-semibold">Rating:</span> ★{car.rating}
            </p>
            <div className="flex items-center mt-4">
                <Link
                    to={`/brand/${car.brandName}/product-details/${car._id}`}
                    className="bg-indigo-500 text-white hover:bg-indigo-600 rounded-xl px-4 py-2 transition duration-300 ease-in-out"
                >
                    Details
                </Link>
                <Link
                    to={`/update-product/${car._id}`}
                    className="bg-green-500 text-white hover:bg-green-600 rounded-xl px-4 py-2 transition duration-300 ease-in ml-2"
                >
                    Update
                </Link>
            </div>
        </div>
    );
};
SingleProduct.propTypes = {
    car: PropTypes.object.isRequired,
};

export default SingleProduct;
