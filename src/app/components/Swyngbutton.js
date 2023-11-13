'use client'
import React from 'react'

const Swyngbutton = ({sborder,slabel,stxtcolor,sbgcolor,swidth,spadding,handleClicked}) => {
  return (
    <>
       <button onClick={handleClicked} className={`${sbgcolor} ${sborder} ${stxtcolor} ${swidth} ${spadding} rounded-full`}>{slabel}</button> 
    </>
  )
}

export default Swyngbutton