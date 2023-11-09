import React from 'react'
import './topBar.scss';
import notification from '../../assets/images/Notification.svg';
import avatar from '../../assets/images/Avatar.svg';

function TopBar() {
  return (
    <div className='topbar'>
        <div className='topbar_search'>
            <input className="topbar_search_input" placeholder='Search product, supplier, order'/>
        </div>
        <div className='topbar_account'>
            <ul className='topbar_account_list'>
                <li className='topbar_account_list_item'>
                    <a href='#'>
                        <img src={notification} />
                    </a>
                </li>
                <li className='topbar_account_list_item'>
                    <a href='#'>
                        <img src={avatar} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default TopBar