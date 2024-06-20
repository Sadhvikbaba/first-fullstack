import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage , name}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className=" w-full  bg-orange-400 border border-gray-200 rounded-lg shadow ">
          <img className="rounded-t-lg m-auto" src={appwriteService.getFilePreview(featuredImage)} alt="" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
              <p className="mb-3 font-normal text-gray-100 ">
                {title}
              </p>
            </div>
        </div>
    </Link>
  )
}


export default PostCard

