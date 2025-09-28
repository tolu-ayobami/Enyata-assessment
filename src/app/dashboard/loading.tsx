import React from 'react'
import { FadeLoader  } from "react-spinners";

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <FadeLoader />
        </div>
  )
}

export default Loading;