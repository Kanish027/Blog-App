import BlogDetails from "./components/BlogDetails";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NewBlog from "./components/NewBlog";
import NotFound from "./components/NotFound";

function App(){
  return(
    <Router>
      <div className="App">
      <Navbar/>
      <div className="content">
      <Routes>
      <Route path={"/"} element={<Home/>} />
      <Route path={"/create"} element={<NewBlog/>} />
      <Route path={"/blogs/:id"} element={<BlogDetails/>} />
      <Route path={"*"} element={<NotFound/>} />
      </Routes>
      </div>
    </div>
    </Router>
  )
}

export default App;