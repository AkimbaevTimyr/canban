import React from 'react'
import '../summary.scss'
import onTheWay from '../../../../assets/images/dashboard/OnTheWay.svg';
import cost from '../../../../assets/images/dashboard/Revenue.svg';

function InventorySummary() {
  return (
    <div className='summary'>
        <div className='summary_header'>
            Inventory Summary
        </div>
        <div className='summary_info'>
            <ul className='summary_info_list'> 
                <li className='summary_info_list_item'>
                    <img className='summary_info_list_item_img' src={onTheWay} />
                    <div className='summary_info_list_item_info text-center'>
                        832<br/>
                        Quantity in Hand
                    </div>
                </li>
                <li className='summary_info_list_item'>
                    <img  className='summary_info_list_item_img' src={cost} />
                    <div className='summary_info_list_item_info  text-center'>
                        200 <br/>
                        To be received
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default InventorySummary