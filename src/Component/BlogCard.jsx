import React from 'react'


const BlogCard = ({ptext, headding, className, src}) => {
  return (
     <div className="h-[340px] w-[300px] bg-white rounded-xl shadow-xl">
         <img src={src} alt="blog_one.jpg"  className='rounded-t-xl'/>
         <p className={`text-[14px] text-prh2 font-montserrat font-medium leading-5 pt-6 pb-3 ml-3 ${className}`}>{ptext}</p>
         <h3 className={`w-[250px] text-xl text-prh2 font-serif leading-6 font-medium ml-3 ${className}`}>{headding}</h3>
     </div>
  )
}

export default BlogCard