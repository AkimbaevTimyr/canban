import React from 'react'
import './lowStock.scss'

function LowQuantityStock() {
  return (
    <div className='low_stock'>
        <div className="low_stock_header">
            <div className="low_stock_header_title">
                Low Quantity  Stock
            </div>
            <div className="low_stock_header_all">
                See All
            </div>
        </div>
    </div>
  )
}

export default LowQuantityStock