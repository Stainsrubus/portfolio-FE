import React from 'react'
import { useSelector } from 'react-redux';
function Footer() {
  const{loading, portfolioData}=useSelector((state)=>state.root);
const contact=portfolioData.contacts;
  return (
  <>
  <div className='grow '></div>
  <div className='bottom-1  w-[100vw]  sm:static absolute '>
    <div className=' h-[1px] w-full bg-light_primary slide-in-left'>

    </div>
<div className="flex items-center  justify-center flex-col m-[1px] py-2 slide-in-bottom">
    <p className='text-light_secondary text-sm dark:text-dark_tertiary sm:text-xs'>
        Desiged and Developed By
    </p>
    <h className='text-light_tertiary py-1 text-sm dark:text-dark_secondary sm:text-xs '>
        <span>{contact.Name}</span>
    </h>

</div>
  </div>
  </>
  )
}

export default Footer
