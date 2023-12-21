import React, {FC} from 'react'

interface ItemProps {
    product_name: string;
    bying_price: string;
    quantity: number
    threshold_value: number;
    expiry_date: string;
    availability: string;
}
  
const Item: FC<ItemProps> = ({product_name,bying_price, quantity, threshold_value, expiry_date, availability}) => {
    
    return (
        <a href='/product-page'>
            <tr className='top_stock_info_table_tr'>
                <th className='top_stock_info_table_th'>{product_name}</th>
                <th className='top_stock_info_table_th'>₹{bying_price}</th>
                <th className='top_stock_info_table_th'>{quantity}</th>
                <th className='top_stock_info_table_th'>{threshold_value}</th>
                <th className='top_stock_info_table_th'>{expiry_date}</th>
                <th className='top_stock_info_table_th'>{availability}</th>
            </tr>
        </a>
    )
}

export default Item;
