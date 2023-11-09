import React from 'react'
import '../overview.scss';
import sales from '../../../../assets/images/dashboard/Sales.svg';
import revenue from '../../../../assets/images/dashboard/Cost.svg';
import profit from '../../../../assets/images/dashboard/Profit.svg';
import cost from '../../../../assets/images/dashboard/Revenue.svg';

function SalesOverview() {
  return (
    <div className='overview'>
        <div className='overview_header'>
            Sales Overview
        </div>
        <div className='overview_info'>
            <ul className='overview_info_list'> 
                <li className='overview_info_list_item'>
                    <img className='overview_info_list_item_img' src={sales} />
                    <div className='overview_info_list_item_info'>
                        <span>₹ 832</span>
                        Sales
                    </div>
                </li>
                <li className='overview_info_list_item'>
                    <img  className='overview_info_list_item_img' src={cost} />
                    <div className='overview_info_list_item_info'>
                        ₹ 18,300 Revenue
                    </div>
                </li>
                <li className='overview_info_list_item'>
                    <img  className='overview_info_list_item_img' src={profit} />
                    <div className='overview_info_list_item_info'>
                        ₹ 832 Profit
                    </div>
                </li>
                <li className='overview_info_list_item'>
                    <img className='overview_info_list_item_img'  src={revenue} />
                    <div className='overview_info_list_item_info'>
                        ₹ 832 Cost
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default SalesOverview