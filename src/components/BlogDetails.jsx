import React, { useEffect, useState } from "react";
import { redirect, useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch";
import axios from "axios";


const BlogDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // const [data, setData] = useState([])

  // const { data } = useFetch("http://localhost:8000/blogs/" + id);

  // useEffect( () => {
  //   fetch('http://localhost:8000/blogs/' + id)
  //   .then(res => {
  //     return res.json();
  //   })
  //   .then(data => {
  //     setData(data);
  //   })
  // },[id])

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchAxios = async () => {
      try {
        const data = await axios.get("http://localhost:8000/blogs/" + id);
        setData(data.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAxios()
  },[])



  const handleDelete = () => {
    try {
      axios.delete("http://localhost:8000/blogs/" + id)
      navigate('/')
    } catch(error) {
      console.error(error);
    } 

  }
  return (
    <div className="flex justify-center mt-9">
      <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
        <img
          className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={data.img}
          alt=""
        />
        <div className="flex flex-col justify-start p-6">
          <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
          {data.title}
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {data.description}
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-300">
          {data.author}
          </p>
          <button onClick={handleDelete} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
