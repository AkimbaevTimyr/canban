import React, { useState } from 'react';
import AddProductModal from './AddProductModal';
import Item from './Item';

function Products() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen);
    }

    return (
        <div className="inventory_products">
            <div className="inventory_products_header flex">
                <div className="inventory_products_header_title">
                    Products
                </div>
                <div className="inventory_products_header_buttons flex">
                    <button onClick={toggleModal} className="inventory_products_header_buttons_add">
                        Add Product
                    </button>
                    <AddProductModal toggleModal={() => toggleModal()} modalIsOpen={modalIsOpen} />
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
                    <Item product_name='Maggi' bying_price={430} quantity={43} threshold_value={12} expiry_date='11/12/22' availability={true}/>
                    <Item product_name='Maggi' bying_price={430} quantity={43} threshold_value={12} expiry_date='11/12/22' availability={true}/>
                    <Item product_name='Maggi' bying_price={430} quantity={43} threshold_value={12} expiry_date='11/12/22' availability={true}/>
                    <Item product_name='Maggi' bying_price={430} quantity={43} threshold_value={12} expiry_date='11/12/22' availability={true}/>
                    <Item product_name='Maggi' bying_price={430} quantity={43} threshold_value={12} expiry_date='11/12/22' availability={true}/>
                </table>
            </div>
        </div>
    )
}

export default Products
