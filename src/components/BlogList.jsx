import React from 'react'
import { Link } from 'react-router-dom'

const BlogList = ({blog,title}) => {

  return (
    <div className='blog'>
        <h1>{title}</h1>
        {blog.map((item)=>(
        <div className='content-preview' key={item.id} >
          <Link to={`/blogs/${item.id}`}>
          <h2>{item.title}</h2>
          <p>{item.author}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default BlogList