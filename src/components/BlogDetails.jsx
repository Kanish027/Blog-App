import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useNavigate();

  const {
    data: blog,
    isLoading,
    error,
  } = useFetch("https://blog-data-g0y9.onrender.com/blogs/" + id);

  const handleDelete = () =>{
    fetch('https://blog-data-g0y9.onrender.com/blogs/'+ blog.id,{
      method : "DELETE",
    }).then(()=>{
      history('/');
    })
  }

  return (
    <div className="blog-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by : {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete} >Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
