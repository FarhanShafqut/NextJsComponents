'use client'
import Link from 'next/link'
import React , {useState , useEffect} from 'react'
// npm add react-icons
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

export default function Navbar() {
  const [nav, Setnav] = useState(false)
  const [color, Setcolor] = useState('transparent')
  const [textcolor, Settextcolor] = useState('white')

const handlenav = () =>{
  Setnav(!nav)
}

useEffect(()=>{
  const changeColor = () => {
    if (window.scroll >=90 ){
      Setcolor(`#ffffff`);
      Settextcolor(`#000000`);
    }
    else{
      Setcolor('transparent');
      Settextcolor(`#ffffff`);
    }
  }; window.addEventListener('scroll',changeColor)
}
,[]);
  return (
    // fixed left-0 top-0  
    <div style={{backgroundColor : `${color}`}} className='sticky z-10 ease-in duration-300  ' >
        <div className='max-w-[1240px]  m-auto flex justify-between items-center p-4  :'>
          <Link href="./">
           <h1 style={{Color : `${textcolor}`}}  className='font-semibold text-lg' >Navbar</h1>
          </Link>
        <ul style={{Color : `${textcolor}`}} className='hidden sm:flex' >
          <li Link href='./' className='p-4'> Home</li>
          <li Link href='./' className='p-4'> About</li>
          <li Link href='./' className='p-4'> Contact us</li>
          <li Link href='./' className='p-4'> Work </li>
        </ul>
          {/* Mobile Button  */}
          <div onClick={handlenav}   className='block sm:hidden z-10'>
            {nav ? <AiOutlineClose size={20} style={{Color : `${textcolor}`}} />  :  <AiOutlineMenu size={20} style={{Color : `${textcolor}`}} />}
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
  )
}
