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
            </div>
        </div>
        <div className="low_stock_info">
          <ul className="low_stock_info_list">
            <li className="low_stock_info_list_item">
              <img src="" alt="" className="low_stock_info_list_item_img" />
              <div className='low_stock_info_list_item_info'>

              </div>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default LowQuantityStock