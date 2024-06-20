import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";
import { useSelector } from 'react-redux';
import { ID } from 'appwrite';

function AllPosts() {
    
    const [posts, setPosts] = useState([]);
    const [profilePhoto, setProfilePhoto] = useState('https://via.placeholder.com/150');
    const userData = useSelector((state) => state.auth.userData);
    
    useEffect(() => {
        appwriteService.getPostsByUser(userData.$id).then((posts) => {
            if (posts.documents) {
                setPosts(posts.documents)
            }
        })
    },[])
    let pic = null;
    let state = false;
    let images = false;
    posts?.map((post) => {
        if(post.title == userData.$id){
            pic = post.featuredImage;
            state = true;
        }
        else{
            images = true;
        }
    })
    //console.log(posts.length);
        
    
    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const data = file ? await appwriteService.uploadFile(file) : null;

            data.featuredImage = data.$id,
            data.title = userData.$id
            data.slug = ID.unique(),
            data.name = userData.name,
            data.status = "inactive",
            data.content = "profile Photo"
            

            const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

            //console.log(data);
            // const reader = new FileReader();
            // reader.onload = (e) => {
            //     setProfilePhoto(e.target.result);
            // };
            // reader.readAsDataURL(file);
        }
    };
    
    //console.log(posts);
  return (
    <>
        <div className='w-full py-8 border-t-2 border-t-black'>
            <div className="py-16 bg-gray-100 border-b-2 border-b-slate-300 ">
                    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                            <div className="md:5/12  ">
                                <div className="flex bg-gray-100">
                                    <label className="cursor-pointer">
                                        {!state && (<input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />)}
                                        {pic ? (
                                            <img src={appwriteService.getFilePreview(pic)}  className="w-40 h-40 object-cover rounded-full border-2 border-gray-300" />):(
                                                <img src={profilePhoto}  className="w-40 h-40 object-cover rounded-full border-2 border-gray-300" />
                                            )}
                                    </label>
                                </div>
                            </div>
                            <div className="md:7/12 lg:w-6/12">
                                <div className=' text-2xl text-gray-900 font-bold md:text-4xl'>
                                    <div className=' flex items-center mt-7 text-left ml-7 text-2xl'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            width="24px"
                                            height="24px">
                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                        </svg>
                                        &nbsp; &nbsp;{userData.name}
                                    </div>
                                    <div className=' flex items-center mt-7 text-left ml-7 text-2xl'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        width="24px"
                                        height="24px">
                                    <path d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6C22 4.897 21.103 4 20 4zM20 6l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
                                    </svg>
                                    &nbsp; &nbsp;{userData.email}
                                    </div>
                                    <div className='flex items-center mt-7 text-left ml-7 text-2xl'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        width="24px"
                                        height="24px">
                                    <path d="M7 10H5v2h2v-2zm4 0H9v2h2v-2zm4 0h-2v2h2v-2zm4-7h-1V2h-2v1H6V2H4v1H3C1.897 3 1 3.897 1 5v14c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM3 7h18v2H3V7zm0 12V9h18l.002 10H3z"/>
                                    </svg>
                                    &nbsp; &nbsp;{userData.$createdAt.slice(0,10)}
                                    </div>
                                </div>   
                            </div>
                        </div>
                    </div>
            </div>
            {images ?
            (<Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => {
                        if (post.title != userData.$id){
                            return(
                        
                        <div key={post.$id} className='p-2 w-full lg:w-1/2 '>
                            <PostCard {...post} />
                        </div>
                    )}
                    })}
                </div>
                </Container>):(
                    <div className="py-16 bg-white">
                    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                            <div className="md:5/12 lg:w-5/12">
                                <img
                                    src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                                    alt="image"
                                />
                            </div>
                            <div className="md:7/12 lg:w-6/12">
                                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                                    Upload a post and be active come on ..
                                </h2>
                                
                            </div>
                        </div>
                    </div>
                    </div>
                )}
        </div>
    </>
  )
}

export default AllPosts

{/* 
    <div className="py-16 bg-white">
                    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                            <div className="md:5/12 lg:w-5/12">
                                <div className="flex bg-gray-100">
                                    <label className="cursor-pointer">
                                        {!state && (<input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />)}
                                        {pic ? (
                                            <img src={appwriteService.getFilePreview(pic)}  className="w-40 h-40 object-cover rounded-full border-2 border-gray-300" />):(
                                                <img src={profilePhoto}  className="w-40 h-40 object-cover rounded-full border-2 border-gray-300" />
                                            )}
                                    </label>
                                </div>
                            </div>
                            <div className="md:7/12 lg:w-6/12">
                                <div className='border-b-2 border-b-slate-300 text-2xl text-gray-900 font-bold md:text-4xl'>
                                    <div className='mt-7 text-left ml-7 text-2xl'>
                                        {userData.name}
                                    </div>
                                    <div className='mt-7 text-left ml-7 text-2xl'>
                                        {userData.email}
                                    </div>
                                    <div className='mt-7 text-left ml-7 text-2xl'>
                                        {userData.$createdAt.slice(0,10)}
                                    </div>
                                </div>   
                            </div>
                        </div>
                    </div>
                </div>    
*/}

{/*  
    <div className="flex bg-gray-100">
                <label className="cursor-pointer">
                    {!state && (<input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />)}
                    {pic ? (
                        <img src={appwriteService.getFilePreview(pic)}  className="w-40 h-40 object-cover rounded-full border-2 border-gray-300" />):(
                            <img src={profilePhoto}  className="w-40 h-40 object-cover rounded-full border-2 border-gray-300" />
                        )}
                    
                </label>
            </div>
            <div className='border-b-2 border-b-slate-300'>
                <div className='mt-7 text-left ml-7 text-2xl'>
                    {userData.name}
                </div>
                <div className='mt-7 text-left ml-7 text-2xl'>
                    {userData.email}
                </div>
                <div className='mt-7 text-left ml-7 text-2xl'>
                    {userData.$createdAt.slice(0,10)}
                </div>
            </div>    
*/}