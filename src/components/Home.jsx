import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  
const {data:blogs, isLoading, error} = useFetch("https://blog-data-g0y9.onrender.com/blogs");

  return (
    <div className='home'>
      {error && <div>{ error }</div> }
      {isLoading && <div>Loading...</div>}
      { blogs && <BlogList blog={blogs} title="Blogs for you!"/>}
    </div>
  )
}

export default Home