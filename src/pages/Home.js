import React from 'react'
import Navbar from '../Components/Navbar'
import BlogCard from '../Components/BlogCard'

const Home = () => {
  return (
      <>
        <Navbar />
        <div className='mx-auto p-24 text-center bg-gray-600 text-white mb-16' style={{ backgroundImage :  "url('https:/source.unsplash.com/1000x600?computer')" }}>
            <p className="text-4xl font-bold text-white">My Blog</p>
        </div>
        <div className='container mx-auto flex flex-wrap justify-center'> 
            <BlogCard/>
            

        </div>
        
        
      </>
    
  )
}

export default Home