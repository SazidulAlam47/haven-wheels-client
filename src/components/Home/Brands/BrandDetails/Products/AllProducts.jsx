import SingleProduct from "./SingleProduct";
import PropTypes from "prop-types";

const AllProducts = ({ cars }) => {
    return (
        <section className="text-gray-600 body-font dark:bg-zinc-600">
            <div className="container px-5 py-24 mx-auto">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                    {cars.map((car) => (
                        <SingleProduct key={car._id} car={car} />
                    ))}
                </div>
            </div>
        </section>
    );
};
AllProducts.propTypes = {
    cars: PropTypes.array.isRequired,
};

export default AllProducts;
