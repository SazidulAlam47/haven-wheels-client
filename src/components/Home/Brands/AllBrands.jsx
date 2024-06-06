import { useLoaderData } from "react-router-dom";
import SingleBrand from "./SingleBrand";


const AllBrands = () => {
    const brands = useLoaderData();

    return (
        <section className="text-gray-600 body-font dark:bg-zinc-800 dark:text-white">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-white">Our Brands</h1>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 dark:text-gray-200">Discover a world of elegance and style with our exclusive collection of luxury brands. From timeless classics to cutting-edge designs, our curated selection brings you the finest in fashion, accessories, and more. Explore our collections and experience a blend of sophistication and innovation.</p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    {
                        brands.map(brand => <SingleBrand key={brand.id} brand={brand}></SingleBrand>)
                    }

                </div>
            </div>
        </section>
    );
};

export default AllBrands;