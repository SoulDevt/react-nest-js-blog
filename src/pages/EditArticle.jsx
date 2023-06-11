import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditArticle = () => {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [author, setAuthor] = useState(null);
  const [img, setImg] = useState(null);
//   const [data, setData] = useState([])
  const { id } = useParams();
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchAxios = async () => {
      try {
        const data = await axios.get("http://localhost:8000/articles/" + id);
        setTitle(data.data.title);
        setDescription(data.data.description);
        setAuthor(data.data.author);
        setImg(data.data.img);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAxios()
  },[id])

  const handleSubmit = async () => {
    const formData = { title, description, author, img };
    await axios.patch(`http://localhost:8000/articles/${id}`, formData);
    console.log("done");
    navigate("/");
  };

  return (
    <div className="flex justify-center mt-60">
      <div className="w-full max-w-md ">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              value={title ? title : ""}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Description
            </label>
            <textarea
              value={description || ""}
              onChange={(e) => setDescription(e.target.value)}
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Author
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={author || ""}
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            />
              <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Image
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="link for the image"
              value={img || ""}
              onChange={(e) => {
                setImg(e.target.value);
              }}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditArticle;
