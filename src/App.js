import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogDetails from './components/BlogDetails';
import NewBlog from './pages/NewBlog';
import EditArticle from './pages/EditArticle';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/blog/:id" element={<BlogDetails/>}></Route>
          <Route path="/blog/create" element={<NewBlog/>}></Route>
          <Route path="/blog/edit/:id" element={<EditArticle/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="*" element={<p>404 Error</p>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
