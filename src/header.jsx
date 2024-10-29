import { useState } from 'react'
import { FaRecycle } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { GiShadowFollower,GiButtonFinger} from "react-icons/gi";
import { IoIosColorPalette } from "react-icons/io";



export default function HeaderComponent ({titlePage, paragraphPage}) {
    return(
      <header className='header'>

        <div className='container-logo'>
          <FaRecycle className='icon-recycle'/>
          <span className='span'>Recycle Css</span>
        </div>
  
        <div className='container-info'>
          <h1 className='title'> {titlePage} </h1>
          <p className='principal-paragraph'>
            { paragraphPage }
            </p>
        </div>
  
        <div className="container-button-pages">
          <Link className='page-link button-link' to={"/"}> <GiButtonFinger className='icon icon-button'/> Buttons</Link>
          <Link className='page-link color-palettes-link' to={"/ColorPalettesPage"}>  <IoIosColorPalette className='icon icon-palette'/>  Color Palettes</Link>
          <Link className='page-link shadows-link' to={"/InputsPage"}>  <GiShadowFollower className='icon icon-shadows'/> Inputs</Link>
        </div>
        
      </header>
  
    )
}