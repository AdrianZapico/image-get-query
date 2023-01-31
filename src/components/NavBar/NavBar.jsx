import React from 'react'
import {Nav, DivNav} from './style'
import {AiOutlinePicture} from 'react-icons/ai'

const NavBar = () => {
  return (
    <div>
      <Nav>
        <DivNav>
          GET IMG QUERY <AiOutlinePicture style={{color:'#d9896e'}}/>
        </DivNav>
      </Nav>
    </div>
  )
}

export default NavBar
