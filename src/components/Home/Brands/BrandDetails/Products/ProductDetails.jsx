import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {
    const car = useLoaderData();
    console.log(car);

    const handleAddToCart = () => {
        // send data to the server
        fetch("https://haven-wheels-server.vercel.app/cart", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(car),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Car Added to Cart Successfully",
                        icon: "success",
                        confirmButtonText: "Okey",
                    });
                }
            });
    };
    return (
        <section className="text-gray-600 dark:text-gray-200 dark:bg-slate-700 body-font overflow-hidden min-h-[80vh] flex items-center justify-center">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img
                        alt="ecommerce"
                        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                        src={car.image}
                    />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col justify-between">
                        <div className="space-y-3">
                            <h2 className="text-sm title-font text-gray-500 dark:text-gray-100 tracking-widest">
                                {car.brandName}
                            </h2>
                            <h1 className="text-gray-900 dark:text-white text-3xl title-font font-medium mb-1">
                                {car.name}
                            </h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        className="w-4 h-4 text-indigo-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span className="text-gray-600 dark:text-gray-100 ml-3">
                                        {car.rating} Rating
                                    </span>
                                </span>
                            </div>
                        </div>
                        <p className="leading-relaxed dark:text-gray-100">
                            {car.shortDescription}
                        </p>

                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900 dark:text-white">
                                ${car.price}
                            </span>
                            <button
                                onClick={handleAddToCart}
                                className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
