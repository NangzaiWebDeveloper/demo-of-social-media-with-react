
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header.jsx'

function App() {

  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)
  
  // this is Add to Bookmark 
  const handleAddToBookmarks =(blog)=>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }
      // this is mark as read 
  const handleAddToReadTime =(time)=>{
    setReadingTime(readingTime + time)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs 
               // this is Add to Bookmark
            handleAddToBookmarks={handleAddToBookmarks}
               // this is mark as read 
            handleAddToReadTime={handleAddToReadTime}
        ></Blogs> 
        <Bookmarks 
            bookmarks ={bookmarks}
            readingTime = {readingTime}
        ></Bookmarks>
      </div>
    </>
  )
}

export default App
