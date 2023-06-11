import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import useFetch from "../useFetch";

const Home = () => {
  // const blogFixture = [
  //   {
  //     id: 1,
  //     title: "Day 1",
  //     img: "https://cdn.pixabay.com/photo/2017/11/17/09/37/finger-2956974_1280.jpg",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque non in suscipit, possimus, necessitatibus ipsum deleniti animi molestiae reprehenderit totam excepturi accusantium eos libero obcaecati rerum ex numquam corporis!",
  //     author: "John",
  //   },
  //   {
  //     id: 2,
  //     title: "Day 2",
  //     img: "https://cdn.pixabay.com/photo/2017/11/17/09/37/finger-2956974_1280.jpg",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque non in suscipit, possimus, necessitatibus ipsum deleniti animi molestiae reprehenderit totam excepturi accusantium eos libero obcaecati rerum ex numquam corporis!",
  //     author: "Michael",
  //   },
  //   {
  //     id: 3,
  //     title: "Day 3",
  //     img: "https://cdn.pixabay.com/photo/2017/11/17/09/37/finger-2956974_1280.jpg",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque non in suscipit, possimus, necessitatibus ipsum deleniti animi molestiae reprehenderit totam excepturi accusantium eos libero obcaecati rerum ex numquam corporis!",
  //     author: "Doe",
  //   },
  // ];

  // const [blogs, setBlogs] = useState([])

  // useEffect( () => {
  //   // const fetchFixtures = async () => {
  //   //    await setBlogs(blogFixture)
       
  //   // }
  //   // fetchFixtures();
  //   fetch('http://localhost:8000/blogs')
  //   .then(res => {
  //     return res.json();
  //   })
  //   .then(data => {
  //     // console.log(data);
  //     setBlogs(data)
  //   })
  // },[])

  const { data, err } = useFetch("http://localhost:8000/articles")

  return (
    <>
        <div className="md:flex md:justify-around mt-9">
          {
            err && <p>{ err }</p>
          }
            {
              data.length > 0 &&
                data.map((blog) => (
                    <BlogCard title={blog.title} author={blog.author} img={blog.img} key={blog.id} id={blog.id}/>
                ))
            }
        </div>
    </>
  )
};

export default Home;
