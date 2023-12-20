import React from 'react'

function Overall() {
    return (
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
    )
}

export default Overall
