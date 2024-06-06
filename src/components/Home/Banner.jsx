import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero place-items-start items-center min-h-screen" style={{ backgroundImage: 'url(https://www.mercedes-benz.co.in/content/india/en/passengercars/_jcr_content/root/responsivegrid/simple_stage_1564354_1682158709.component.damq6.3393948029975.jpg)' }}>
            <div className="hero-overlay bg-opacity-25"></div>
            <div className=" text-neutral-content md:ml-20 ml-5">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold dark:text-gray-50">Witness the VISION Mercedes-Maybach</h1>
                    <p className="mb-5">The future of ultra-luxury mobility is now in Bangladesh, for the first time at the Glorious Bengal Cultural Center, Dhaka.</p>
                    <Link to="/brand/Mercedes-Benz" className="btn btn-primary">Explore more</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;