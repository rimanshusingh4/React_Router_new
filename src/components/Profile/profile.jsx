import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
function profile() {

  const data = useLoaderData();

  // const [data, setData] = useState([])
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/rimanshusingh4')
  //   .then(response => response.json())
  //   .then(data =>{
  //     console.log(data);
  //     setData(data);
  //   })
  // },[])
  return (
    <div className='flex flex-col justify-center items-center bg-gray-700 rounded-xl my-2 text-black font-bold text-3xl p-6 w-6/12 ml-72'>
          <div><img className='ml-auto rounded-xl w-36 h-36 my-5' src={data.avatar_url}/></div>
          <div> Name: {data.login}</div>
          <div >Followers: {data.followers}</div>
          <div >Followings: {data.following}</div>
          <div>Repositories: {data.public_repos}</div>
          <div className='p-5 my-3'>
            <Link to={data.html_url} className="bg-orange-800 p-2 text-white rounded-lg">
                Visit Profile
            </Link>
          </div>
    </div>
  )
}

export default profile

export const getGitInfoData = async() =>{
  const response =await fetch('https://api.github.com/users/rimanshusingh4')
  return response.json();
}