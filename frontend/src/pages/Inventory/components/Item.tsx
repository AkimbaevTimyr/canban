import React, {FC} from 'react'
import Modal from 'react-modal';


interface ItemProps {
    product_name: string;
    bying_price: number;
    quantity: number
    threshold_value: number;
    expiry_date: string;
    availability: boolean;
}
  
const Item: FC<ItemProps> = ({product_name,bying_price, quantity, threshold_value, expiry_date, availability}) => {
    
    return (
        <tr className='top_stock_info_table_tr'>
            <th className='top_stock_info_table_th'>{product_name}</th>
            <th className='top_stock_info_table_th'>₹{bying_price}</th>
            <th className='top_stock_info_table_th'>{quantity} Packets</th>
            <th className='top_stock_info_table_th'>{threshold_value} Packets</th>
            <th className='top_stock_info_table_th'>{expiry_date}</th>
            <th className='top_stock_info_table_th'>{availability}In-stock</th>
        </tr>
    )
}

export default Item;

{/* <tr className='top_stock_info_table_tr'>
    <th className='top_stock_info_table_th'>Maggi</th>
    <th className='top_stock_info_table_th'>₹430</th>
    <th className='top_stock_info_table_th'>43 Packets</th>
    <th className='top_stock_info_table_th'>12 Packets</th>
    <th className='top_stock_info_table_th'>11/12/22</th>
    <th className='top_stock_info_table_th' style={{'color': 'red'}}>In-stock</th>
</tr> */}
