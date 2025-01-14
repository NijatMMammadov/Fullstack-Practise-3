import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import  {Link}  from 'react-router';
import { IconButton } from '@mui/material';

function Navbarr() {
  return (
    <>
    <div className='nvb contain'>
      <div className="nvb-left">
        <p>
          COLO
        </p>
        <p style={{color:"red"}}>
          SHOP
        </p>
      </div>
      <div className='nvb-right'>
        <Link className='line'>HOME</Link>
        <Link className='line'>SHOP</Link>
        <Link className='line'>PROMOTION</Link>
        <Link className='line'>PAGES</Link>
        <Link className='line'>BLOG</Link>
        <Link className='line' style={{marginRight:"40px"}}>CONTACT</Link>
        <IconButton><SearchIcon/></IconButton>
        <IconButton><PersonIcon/></IconButton>
        <IconButton><ShoppingCartIcon/></IconButton>
      </div>
    </div>
    </>
  )
}

export default Navbarr
