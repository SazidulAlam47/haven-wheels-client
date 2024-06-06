import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleBrand = ({ brand }) => {
    return (
        <Link to={`/brand/${brand.brand}`}>
            <div className="bg-indigo-50 dark:bg-neutral-700 p-6 h-80 rounded-lg flex flex-col items-center justify-center">
                <img className="rounded w-52 object-cover object-center mb-6" src={brand.logo} alt="content" />

                <h2 className="text-lg text-gray-900 text-center font-medium title-font dark:text-white">{brand.brand}</h2>

            </div>
        </Link>
    );
};

SingleBrand.propTypes = {
    brand: PropTypes.object.isRequired,
}

export default SingleBrand;