
import './DrivingSection.css'
import { AiFillCar } from "react-icons/ai";
const DrivingSection = () => {
    return (
        <div className='drivingSection dark:bg-gray-800'>
            <div >


                <div className="flex flex-col ">
                    <div data-aos="zoom-in" >

                        <h1 className="text-6xl text-white font-bebas flex align-middle  justify-center text-center p-3 dark:text-gray-900" >Hands-Free Highway Driving</h1>
                    </div>
                    <div className="divider "><AiFillCar className='text-6xl' /> </div>
                    <h1 className=' text-xl font-bold text-white  flex align-middle justify-center text-center p-3 dark:text-gray-900'>Experience the excitement of Ford BlueCruise hands-free driving on thousands of highway miles.</h1>
                </div>
            </div>

        </div>
    );
};

export default DrivingSection;