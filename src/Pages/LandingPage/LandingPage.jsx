import React from 'react'
import Header from '../../Components/Header/Header'
import LeftMenu from '../../Components/LeftMenu/LeftMenu'
import RightMenu from '../../Components/RightMenu/RightMenu'
import './style.scss'
function LandingPage() {
  return (
    <div className='page-container'>
      <div className='page-innerContainer'>

        <Header/>
        <LeftMenu/>
        <RightMenu/>
        </div>
    </div>
  )
}

export default LandingPage