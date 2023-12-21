import React, { useState, useEffect } from 'react';
import AddProductModal from '../AddProductModal/AddProductModal';
import Item from '../Item/Item';
import api from '../../../../app/api/api';
import Pagination from '../../../../components/Pagination';
import { Product } from '../../types/Product';



function Products() {
    const [products, setProducts] = useState<Product[]>([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [links, setLinks] = useState();

    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen);
    }

    useEffect(() => {
        api.get('/api/products-all')
        .then((resp) => {
            setLinks(resp.data.links)
            setProducts(resp.data.data)
        })
        .catch((error) => {
            console.log(error)
        }) 
    }, []);

    const handlePage = (page: string) => {
        console.log(page)
        api.get(page)
        .then((resp) => {
            setLinks(resp.data.links)
            setProducts(resp.data.data)
        })
        .catch((error) => {
            console.log(error)
        }) 
    }

    const handleDowload = () => {
        api.get('/api/inventory-products-download', {
            responseType: 'blob', // Важно установить responseType в 'blob'
        })
        .then((response: any)=> {
            const blob = new Blob([response.data], { type: response.headers['content-type'] });
            // Создаем URL-адрес для Blob
            const url = window.URL.createObjectURL(blob);

            // Создаем ссылку для скачивания файла
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Список продуктов'; // Укажите желаемое имя файла

            // Добавляем ссылку в документ и эмулируем клик для скачивания
            document.body.appendChild(a);
            a.click();

            // Удаляем ссылку из документа
            document.body.removeChild(a);

            // Освобождаем ресурсы URL
            window.URL.revokeObjectURL(url);
        }).catch((error) => {
            console.log(error)
        })
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
                    <button onClick={handleDowload} className="inventory_products_header_buttons_download">
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
                    {
                        products.map((product: Product) => (
                            <Item key={product.id} product_name={product.name} bying_price={product.buy_price} quantity={product.quantity} threshold_value={product.threshold} expiry_date={product.expiry_date} availability={product.availability}/>
                        ))
                    }
                </table>
                <Pagination links={links} changePage={(page : string) => handlePage(page)} />
            </div>
        </div>
    )
}

export default Products
