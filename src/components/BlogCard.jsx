import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({title, author, img, id: idBlog}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-10">
    <img className="w-full" src={img} alt="Sunset in the mountains" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{author}</span>
      {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span> */}
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        <Link to={`/blog/${idBlog}`}>Voir l'article</Link>
    </button>
    </div>

  </div>
  )
}

export default BlogCard