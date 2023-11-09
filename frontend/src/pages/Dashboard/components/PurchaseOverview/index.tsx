import React from 'react'
import '../overview.scss';
import purchase from '../../../../assets/images/dashboard/Purchase.svg';
import cost from '../../../../assets/images/dashboard/Cost.svg';
import profit from '../../../../assets/images/dashboard/Profit.svg';
import cancel from '../../../../assets/images/dashboard/Cancel.svg';

function PurchaseOverview() {
  return (
    <div className='overview'>
        <div className='overview_header'>
            Sales Overview
        </div>
        <div className='overview_info'>
            <ul className='overview_info_list'> 
                <li className='overview_info_list_item'>
                    <img className='overview_info_list_item_img' src={purchase} />
                    <div className='overview_info_list_item_info'>
                        ₹ 832
                        Purchase
                    </div>
                </li>
                <li className='overview_info_list_item'>
                    <img  className='overview_info_list_item_img' src={cost} />
                    <div className='overview_info_list_item_info'>
                        ₹ 18,300 Cost
                    </div>
                </li>
                <li className='overview_info_list_item'>
                    <img  className='overview_info_list_item_img' src={cancel} />
                    <div className='overview_info_list_item_info'>
                        ₹ 832 Cancel
                    </div>
                </li>
                <li className='overview_info_list_item'>
                    <img className='overview_info_list_item_img'  src={profit} />
                    <div className='overview_info_list_item_info'>
                        ₹ 832 return 
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default PurchaseOverview