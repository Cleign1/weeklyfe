import React from 'react'
import PrimaryButton from './PrimaryButton'
import { Link } from 'react-router-dom'

const BlogCard = ({title, author, date}) => {
  return (
    <div className='container mx-auto flex-wrap'>
            <div className='max-w-sm border-gray-400 shadow rounded-xl p-3 m-5'>
                <p className='text-2xl font-bold text-gray-800 p'>{title}</p>
                <p className='text-gray-700'> Oleh <span className='text-gray-700'>{author}</span>, {date}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eos voluptatum suscipit nostrum. Quaerat molestiae, ea debitis accusantium nemo illum? <br/>
                    <Link to="/blog">
                    <PrimaryButton className="px-2">Read more</PrimaryButton>
                    </Link>
                </p>
            </div>
            </div>
  )
}

BlogCard.defaultProps = {
    title: 'Blog gue',
    author: 'Ibnu Khaidar',
    date: '18 Mei 2023'
}

export default BlogCard