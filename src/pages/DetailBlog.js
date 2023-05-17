import React from 'react'
import Navbar from '../Components/Navbar'
import avatarimg from "../Asset/User-Avatar-in-Suit-PNG.png"

function DetailBlog() {
  return (
    <div>
        <Navbar/>
        <div className='max-w-2xl mx-auto'>
            <p className='mt-20 text-4xl  font-bold tracking-tight mb-6'> Blog Pertama gue</p>
            <hr/>
            <div className='flex my-1'>
                <img src={avatarimg} alt='' className='w-12'/>                 
                <div className='ml-2'>
                    <p className='font-medium text-xl'>Ibnu Khaidar</p>
                    <p className='text-lg'>18 Mei 2023</p>
                </div>    
                <div className='my-auto ml-auto mr-2'>
                    <button className='bg-gray-500 px-4 py-1 rounded text-white active:bg-pink-600'>
                        Like
                    </button>
                </div>
            </div>
            <hr/>
            <p className='text-lg mt-6'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi ipsum asperiores ut facilis reprehenderit quo totam, aperiam maiores! Ad, corporis quas? Molestias, voluptas fugit! Recusandae quo quos error eligendi voluptatibus ad reiciendis numquam cupiditate incidunt, necessitatibus amet, a eum deserunt esse, doloribus laborum molestiae sapiente tempore tempora! Ab, non. Et quo molestias, provident voluptatum qui officiis. Culpa sapiente sequi iusto tenetur, corrupti aut odio doloribus consequuntur fuga! Cum consectetur nam ipsa commodi animi, adipisci qui modi eaque quas explicabo dolorum culpa nesciunt, molestiae deleniti. Beatae ullam consequuntur maxime, distinctio nihil earum voluptatibus, est illo, eligendi magnam natus temporibus adipisci quos?
            </p>
        </div>
        
    </div>
  )
}

export default DetailBlog