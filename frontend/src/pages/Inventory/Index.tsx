import React from 'react'
import './inventory.scss'
import Products from './components/Products'
import Overall from './components/Overall'

function Inventory() {
  return (
    <div className='inventory'>
        <Overall />
        <Products />
    </div>
  )
}

export default Inventory