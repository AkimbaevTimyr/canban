import React from 'react'
import './stock.scss'

function TopSellingStock() {
  return (
    <div className='top_stock'>
        <div className='top_stock_header'>
            <div className="top_stock_header_title">
                Top Selling Stock
            </div>
            <div className="top_stock_header_all">
                See All
            </div>
        </div>
        <div className='top_stock_info'>
            <table className="top_stock_info_table">
                <tr className='top_stock_info_table_tr'>
                    <th className='top_stock_info_table_th'>Name</th>
                    <th className='top_stock_info_table_th'>Sold Quantity</th>
                    <th className='top_stock_info_table_th'>Remaining Quantity</th>
                    <th className='top_stock_info_table_th'>Price</th>
                </tr>
                <tr className='top_stock_info_table_tr'>
                    <th className='top_stock_info_table_th'>Surf Excel</th>
                    <th className='top_stock_info_table_th'>30</th>
                    <th className='top_stock_info_table_th'>12</th>
                    <th className='top_stock_info_table_th'>₹ 100</th>
                </tr>
                <tr className='top_stock_info_table_tr'>
                    <th className='top_stock_info_table_th'>Surf Excel</th>
                    <th className='top_stock_info_table_th'>30</th>
                    <th className='top_stock_info_table_th'>12</th>
                    <th className='top_stock_info_table_th'>₹ 100</th>
                </tr>
                <tr className='top_stock_info_table_tr'>
                    <th className='top_stock_info_table_th'>Surf Excel</th>
                    <th className='top_stock_info_table_th'>30</th>
                    <th className='top_stock_info_table_th'>12</th>
                    <th className='top_stock_info_table_th'>₹ 100</th>
                </tr>
            </table>  
        </div>
    </div>
  )
}

export default TopSellingStock