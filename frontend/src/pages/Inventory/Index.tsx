import React from 'react'
import './inventory.scss'
import Products from './components/Products/Products'
import Overall from './components/Overall/Overall'

function Inventory() {
  return (
    <div className='inventory'>
        <Overall />
        <Products />
    </div>
  )
}

export default Inventory