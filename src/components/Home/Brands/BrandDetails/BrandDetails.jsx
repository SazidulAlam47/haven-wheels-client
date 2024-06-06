import { useLoaderData } from "react-router-dom";
import AllProducts from "./Products/AllProducts";
import Slider from "./Slider";
// Initialization for ES Users
import { Carousel, initTE } from "tw-elements";

initTE({ Carousel });

const BrandDetails = () => {
    const cars = useLoaderData();

    return (
        <>
            {cars.length ? (
                <>
                    <Slider cars={cars} />
                    <AllProducts cars={cars} />
                </>
            ) : (
                <div className="m-auto text-center min-h-[80vh] flex flex-col items-center justify-center dark:bg-slate-600">
                    <h1 className="text-4xl font-bold text-red-600">
                        Oops! No Products Found
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-white mt-4 ">
                        We apologize, but there are currently no cars available
                        of this brand.
                    </p>
                </div>
            )}
        </>
    );
};

export default BrandDetails;
