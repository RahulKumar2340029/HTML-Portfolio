import React from 'react'
import youtube from './y.png'
import insta from './i.png'
import facebook from './f.png'
import twitter from './t.png'

function Footer(){
  return (
    <div className='footer'>
      <h1>Contact</h1>
      <div className='footer--img'>
        <img src={youtube} alt=''/>
        <img src = {insta} alt=''/>
        <img src={facebook} alt=''/>
        <img src={twitter} alt=''/>
      </div>
      
    
    </div>
  )
}

export default Footer
