import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const NewBlog = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);

    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = {title, body, author};

        setIsPending(true);

        fetch('http://localhost:8000/blogs',{
            method : 'POST',
            headers : {"Content-Type" : "application/json" },
            body : JSON.stringify(blog)
        }).then(()=>{
            setIsPending(false);
           history("/");
        })
    }

  return (
    <div className='new-blog'>
        <h2>Add New Blog</h2>
        <form onSubmit={handleSubmit} >
            <label>Blog title:</label>
            <input 
                type="text"
                value={title}
                required
                onChange={(e)=>setTitle(e.target.value)}
             />
             <label>Blog body</label>
             <textarea 
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                required
             ></textarea>
             <label>Add Author</label>
             <input 
                type="text" 
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                required 
            />
            {!isPending && <button>Add Blog</button>}
            {isPending && <button disabled>Adding...</button>}
        </form>
    </div>
  )
}

export default NewBlog