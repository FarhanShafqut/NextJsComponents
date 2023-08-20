'use client'
import Link from 'next/link'
import React , {useState , useEffect} from 'react'
// npm add react-icons
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

export default function Navbar() {
  const [nav, Setnav] = useState(false)
  const [color, Setcolor] = useState('transparent')
  const [textcolor, Settextcolor] = useState('Green')

const handlenav = () =>{
  Setnav(!nav)
}

useEffect(()=>{
  const changeColor = () => {
    if (window.scrollY >=90 ){
      Setcolor(`#ffffff`);
      Settextcolor(`#000000`);
    }
    else{
      Setcolor('transparent');
      Settextcolor(`Green`);
    }
  }; window.addEventListener('scroll',changeColor)
}
,[]);
  return (
    // fixed left-0 top-0  
    <div>
    <div style={{backgroundColor : `${color}`}} className='fixed left-0 top-0  w-full z-10 ease-in duration-300  ' >
        <div className='max-w-[1240px]  m-auto flex justify-between items-center p-4  :'>
          <Link href="./">
           <h1 style={{color : `${textcolor}`}}  className='font-semibold text-lg' >Navbar</h1>
          </Link>
        <ul style={{color : `${textcolor}`}} className='hidden sm:flex' >
          <li Link href='./' className='p-4'> Home</li>
          <li Link href='./' className='p-4'> About</li>
          <li Link href='./' className='p-4'> Contact us</li>
          <li Link href='./' className='p-4'> Work </li>
        </ul>
          {/* Mobile Button  */}
          <div onClick={handlenav}   className='block sm:hidden z-10'>
            {nav ? <AiOutlineClose size={20} style={{color : `${textcolor}`}} />  :  <AiOutlineMenu size={20} style={{color : `${textcolor}`}} />}
          </div>
          {/* Mobile menu  */}
          <div className={nav ? 'sm:hidden absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black text-white ease-in duration-300 ' : 'sm:hidden absolute top-0 left-[-100%] bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black text-white ease-in duration-300 '}>
          <ul>
            <li Link href='./' className='p-4 text-4xl hover:text-gray-500' > Home</li>
            <li Link href='./' className='p-4 text-4xl hover:text-gray-500' > About</li>
            <li Link href='./' className='p-4 text-4xl hover:text-gray-500' > Contact us</li>
            <li Link href='./' className='p-4 text-4xl hover:text-gray-500' > Work </li>
          </ul>
          </div>
        </div>
        </div>
    </div>
  )
}
