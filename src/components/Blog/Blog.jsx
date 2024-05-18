import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmarks, handleAddToReadTime}) => {
    // console.log(blog);
    const {title, cover, reading_time, author, author_img, posted_date, hashtags, id} = blog
    return (
        <div className='mb-8 space-y-3 bg-gray-200 p-4 rounded-md py-6'>
            <div className='flex items-center justify-center'>
                <img className='w-3/4 mb-8' src={cover} alt="" />
            </div>

            <div className='flex justify-between mb-4'>

                <div className='flex items-center gap-4'>
                    <img className='w-16 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div className='flex items-center justify-center'>
                    <span>{reading_time} min read </span>
                    <button 
                        onClick={()=>handleAddToBookmarks(blog)}
                        className='ml-2 text-green-600 text-2xl'
                        ><FaRegBookmark></FaRegBookmark>
                    </button>
                </div>

            </div>
            <h2 className="text-4xl mb-2">{title}</h2>
            <p>
                {
                    hashtags.map((hash, index) => <span key = {index}><a href="">#{hash}</a></span>)
                }
            </p>
            <button 
                className='text-purple-700 font-bold underline' 
                onClick={()=>handleAddToReadTime(reading_time, id)}
            >Mark as read</button>


            
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks : PropTypes.func,
    handleAddToReadTime : PropTypes.func
}

export default Blog;