import PropTypes from 'prop-types';

const CoinCard = ({img, name, role, link1, link2}) => {
  return (
<div className="w-full m-auto pb-0 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex flex-col items-center pb-5 pt-4">
            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={img} alt={`${name} profile`}/>
        <h5 className="mb-0 text-xl font-medium text-gray-900 dark:text-white mt-1">{name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{role}</span>
        <div className="flex mt-4 md:mt-6">
                <a href={link1} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <img className="h-[30px]" src="/github.svg" alt="GitHub" />
                </a>
                <a href={link2} className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    <img className="h-[30px]" src="/linkedin.svg" alt="LinkedIn" />
                </a>
            </div>
        </div>
    </div>
  );
}

CoinCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  link1: PropTypes.string.isRequired,
  link2: PropTypes.string.isRequired
};

export default CoinCard;
