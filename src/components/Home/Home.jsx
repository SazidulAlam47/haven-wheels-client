import Banner from "./Banner";
import AllBrands from "./Brands/AllBrands";
import DrivingSection from "./DrivingSection/DrivingSection";
import ReviewSection from "./ReviewSection";

const Home = () => {
    return (
        <div>
            <Banner />
            <AllBrands />
            <DrivingSection />
            <ReviewSection />
        </div>
    );
};

export default Home;
