import React from 'react'
import '../summary.scss'
import suppliers from '../../../../assets/images/dashboard/Suppliers.svg';
import categories from '../../../../assets/images/dashboard/Categories.svg';

function ProductSummary() {
  return (
    <div className='summary'>
        <div className='summary_header'>
            Product Summary
        </div>
        <div className='summary_info'>
            <ul className='summary_info_list'> 
                <li className='summary_info_list_item'>
                    <img className='summary_info_list_item_img' src={suppliers} />
                    <div className='summary_info_list_item_info text-center'>
                        832<br/>
                        Number of Suppliers
                    </div>
                </li>
                <li className='summary_info_list_item'>
                    <img  className='summary_info_list_item_img ' src={categories} />
                    <div className='summary_info_list_item_info  text-center'>
                        200 <br/>
                        Number of Categories
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default ProductSummary