import React from 'react'
import pic from "./linkedin.jpg"

function Header() {
  return (
    <div className='header'>
      <img src = {pic} alt='Profile pic' className='profile' />
      <div>
        <h1>Rahul Kumar</h1>
        <h3>Frontend Developer</h3>
        <div className='btn'>
            <button>Email</button>
            <button >Linkedin</button>
        </div>
      </div>

    </div>
  )
}

export default Header
