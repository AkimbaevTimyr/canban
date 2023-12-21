import React, {useEffect, useState} from 'react'
import api from '../../../../app/api/api'

function Overall() {
    const [categories, setCategories] = useState<any>();
    const [count, setCount] = useState<number>();
    const [productsCount, setProductsCount] = useState();
    const [lowStock, setLowStock] = useState();
    const [notInStock, setNotInStock] = useState();

    useEffect(() => {
        api.get('/api/categories-all')
        .then((resp) => {
            setCount(resp.data.count)
            setCategories(resp.data.data)
        })
        .catch((error) => {
            console.log(error)
        }) 

        api.get('/api/products-count')
        .then((resp) => {
            setProductsCount(resp.data.count)
        })
        .catch((error) => {
            console.log(error)
        })

        api.get('/api/products-low-stocks')
        .then((resp) => {
            setLowStock(resp.data.low_stock)
            setNotInStock(resp.data.not_in_stock)
        })
        .catch((error) => {
            console.log(error)
        })

    }, [])

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
                                {count}
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
                                        {productsCount}
                                    </div>
                                    <div className='inventory_overall_info_list_item_date'>
                                        Last 7 days
                                    </div>
                                </div>
                                <div>
                                    <div className='inventory_overall_info_list_item_count'>
                                        не работает
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
                                        не работает
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
                                        {lowStock}
                                    </div>
                                    <div className='inventory_overall_info_list_item_date'>
                                        Last 7 days
                                    </div>
                                </div>
                                <div>
                                    <div className='inventory_overall_info_list_item_count'>
                                        {notInStock}
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
