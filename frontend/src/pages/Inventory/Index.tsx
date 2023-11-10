import React from 'react'
import './inventory.scss'

function Inventory() {
  return (
    <div className='inventory'>
        <div className="inventory_overall">
            <div className="inventory_overall_title">
                Overall Inventory
            </div>
            <div className="inventory_overall_info">
                <div className='inventory_overall_info'>
                    <ul className="inventory_overall_info_list">
                        <li className="inventory_overall_info_list_item">
                            <div className="inventory_overall_info_list_item_title blue">
                                Categories
                            </div>
                            <div className='inventory_overall_info_list_item_count'>
                                14
                            </div>
                            <div className='inventory_overall_info_list_item_date'>
                                Last 7 days
                            </div>
                        </li>
                        <li className="inventory_overall_info_list_item ">
                            <div className="inventory_overall_info_list_item_title yellow">
                                Total Products
                            </div>
                            <div className='flex'>
                                <div>
                                    <div className='inventory_overall_info_list_item_count'>
                                        14
                                    </div>
                                    <div className='inventory_overall_info_list_item_date'>
                                        Last 7 days
                                    </div>
                                </div>
                                <div>
                                    <div className='inventory_overall_info_list_item_count'>
                                        ₹25000
                                    </div>
                                    <div className='inventory_overall_info_list_item_date'>
                                        Revenue
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="inventory_overall_info_list_item">
                            <div className="inventory_overall_info_list_item_title pink">
                                Top Selling
                            </div>
                            <div className='flex'>
                                <div>
                                    <div className='inventory_overall_info_list_item_count'>
                                        5
                                    </div>
                                    <div className='inventory_overall_info_list_item_date'>
                                        Last 7 days
                                    </div>
                                </div>
                                <div>
                                    <div className='inventory_overall_info_list_item_count'>
                                        ₹2500
                                    </div>
                                    <div className='inventory_overall_info_list_item_date'>
                                        Cost
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="inventory_overall_info_list_item">
                            <div className="inventory_overall_info_list_item_title carrot">
                                Low Stocks
                            </div>
                            <div className='flex'>
                                <div>
                                    <div className='inventory_overall_info_list_item_count'>
                                        12
                                    </div>
                                    <div className='inventory_overall_info_list_item_date'>
                                        Last 7 days
                                    </div>
                                </div>
                                <div>
                                    <div className='inventory_overall_info_list_item_count'>
                                        2
                                    </div>
                                    <div className='inventory_overall_info_list_item_date'>
                                        Not in stock
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="inventory_products">
            <div className="inventory_products_header flex">
                <div className="inventory_products_header_title">
                    Products
                </div>
                <div className="inventory_products_header_buttons flex">
                    <button className="inventory_products_header_buttons_add">
                        Add Product
                    </button>
                    <div className="inventory_products_header_buttons_filters">
                        Filters
                    </div>
                    <button className="inventory_products_header_buttons_download">
                        Download all
                    </button>
                </div>
            </div>
            <div className="inventory_products_body">
                <table className='inventory_products_body_table'>
                    <tr className='top_stock_info_table_tr'>
                        <th className='top_stock_info_table_th'>Products</th>
                        <th className='top_stock_info_table_th'>Buying Price</th>
                        <th className='top_stock_info_table_th'>Quantity</th>
                        <th className='top_stock_info_table_th'>Threshold Value</th>
                        <th className='top_stock_info_table_th'>Expiry Date</th>
                        <th className='top_stock_info_table_th'>Availability</th>
                    </tr>
                    <tr className='top_stock_info_table_tr'>
                        <th className='top_stock_info_table_th'>Maggi</th>
                        <th className='top_stock_info_table_th'>₹430</th>
                        <th className='top_stock_info_table_th'>43 Packets</th>
                        <th className='top_stock_info_table_th'>12 Packets</th>
                        <th className='top_stock_info_table_th'>11/12/22</th>
                        <th className='top_stock_info_table_th' style={{'color': 'red'}}>In-stock</th>
                    </tr>
                    <tr className='top_stock_info_table_tr'>
                        <th className='top_stock_info_table_th'>Maggi</th>
                        <th className='top_stock_info_table_th'>₹430</th>
                        <th className='top_stock_info_table_th'>43 Packets</th>
                        <th className='top_stock_info_table_th'>12 Packets</th>
                        <th className='top_stock_info_table_th'>11/12/22</th>
                        <th className='top_stock_info_table_th' style={{'color': 'green'}}>In-stock</th>
                    </tr>
                    <tr className='top_stock_info_table_tr'>
                        <th className='top_stock_info_table_th'>Maggi</th>
                        <th className='top_stock_info_table_th'>₹430</th>
                        <th className='top_stock_info_table_th'>43 Packets</th>
                        <th className='top_stock_info_table_th'>12 Packets</th>
                        <th className='top_stock_info_table_th'>11/12/22</th>
                        <th className='top_stock_info_table_th' style={{'color': '#E19133'}}>In-stock</th>
                    </tr>
                    <tr className='top_stock_info_table_tr'>
                        <th className='top_stock_info_table_th'>Maggi</th>
                        <th className='top_stock_info_table_th'>₹430</th>
                        <th className='top_stock_info_table_th'>43 Packets</th>
                        <th className='top_stock_info_table_th'>12 Packets</th>
                        <th className='top_stock_info_table_th'>11/12/22</th>
                        <th className='top_stock_info_table_th' style={{'color': 'red'}}>In-stock</th>
                    </tr>
                    <tr className='top_stock_info_table_tr'>
                        <th className='top_stock_info_table_th'>Maggi</th>
                        <th className='top_stock_info_table_th'>₹430</th>
                        <th className='top_stock_info_table_th'>43 Packets</th>
                        <th className='top_stock_info_table_th'>12 Packets</th>
                        <th className='top_stock_info_table_th'>11/12/22</th>
                        <th className='top_stock_info_table_th' style={{'color': 'green'}}>In-stock</th>
                    </tr>
                    <tr className='top_stock_info_table_tr'>
                        <th className='top_stock_info_table_th'>Maggi</th>
                        <th className='top_stock_info_table_th'>₹430</th>
                        <th className='top_stock_info_table_th'>43 Packets</th>
                        <th className='top_stock_info_table_th'>12 Packets</th>
                        <th className='top_stock_info_table_th'>11/12/22</th>
                        <th className='top_stock_info_table_th' style={{'color': '#E19133'}}>In-stock</th>
                    </tr>
                    <tr className='top_stock_info_table_tr'>
                        <th className='top_stock_info_table_th'>Maggi</th>
                        <th className='top_stock_info_table_th'>₹430</th>
                        <th className='top_stock_info_table_th'>43 Packets</th>
                        <th className='top_stock_info_table_th'>12 Packets</th>
                        <th className='top_stock_info_table_th'>11/12/22</th>
                        <th className='top_stock_info_table_th' style={{'color': '#E19133'}}>In-stock</th>
                    </tr>
                    <tr className='top_stock_info_table_tr'>
                        <th className='top_stock_info_table_th'>Maggi</th>
                        <th className='top_stock_info_table_th'>₹430</th>
                        <th className='top_stock_info_table_th'>43 Packets</th>
                        <th className='top_stock_info_table_th'>12 Packets</th>
                        <th className='top_stock_info_table_th'>11/12/22</th>
                        <th className='top_stock_info_table_th' style={{'color': '#E19133'}}>In-stock</th>
                    </tr>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Inventory