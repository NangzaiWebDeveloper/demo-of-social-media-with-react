import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-200 text-center ml-4 rounded-md pt-4">
            <div className=''>
                <h3 className='text-3xl font-bold'>Total Reading Time: {readingTime}</h3>
            </div>
            <h2 className="text-2xl font-bold">Bookmarks Counts: {bookmarks.length}</h2>
            {
                bookmarks.map( (got, index) => <Bookmark key={index} bookmark={got}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
} 

export default Bookmarks;