import React from 'react'
import loader from './assets/loader-icon.gif'
import './styles/loader.scss'

function Loader() {
  return (
    <div className='loader-container'>
      <img src={loader}/>
    </div>
  )
}

export default Loader