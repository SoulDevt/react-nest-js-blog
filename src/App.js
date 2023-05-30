import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogDetails from './components/BlogDetails';
import NewBlog from './pages/NewBlog';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/blog/:id" element={<BlogDetails/>}></Route>
          <Route path="/blog/create" element={<NewBlog/>}></Route>
          <Route path="*" element={<p>404 Error</p>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
