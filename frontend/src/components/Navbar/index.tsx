import React from 'react';
import logo from '../../assets/images/Logo.svg';
import home from '../../assets/images/navbar/Home.svg';
import inventory from '../../assets/images/navbar/Inventory.svg';
import logout from '../../assets/images/navbar/LogOut.svg';
import managestore from '../../assets/images/navbar/ManageStore.svg';
import order from '../../assets/images/navbar/Order.svg';
import report from '../../assets/images/navbar/Report.svg';
import setting from '../../assets/images/navbar/Settings.svg';
import suppliers from '../../assets/images/navbar/Suppliers.svg';

import './navbar.scss';

interface link {
    name: string,
    url: string
    img: string
}

function Navbar() {
    const links: link[] =  [
        {'name': 'Dashboard', 'url': '/dashboard', 'img': home },
        {'name': 'Inventory', 'url': '/inventory',  'img': inventory },
        {'name': 'Reports', 'url': '/reports',  'img': report },
        {'name': 'Suppliers', 'url': '/suppliers',  'img': suppliers },
        {'name': 'Orders', 'url': '/orders',  'img': order },
        {'name': 'Manage Store', 'url': '/manage-store',  'img': managestore },
    ]

  return (
    <div className='navbar'>
        <div>
            <div className='navbar_header'>
                <img className="navbar_header_logo" src={logo} />
                <h1 className="navbar_header_title">KANBAN</h1>
            </div>
            <div className='navbar_links'>
                <ul className='navbar_links_list'>
                    {links.map((link)=> (
                        <li key={link.name} className='navbar_links_list_item'>
                            <a href={link.url} className='active'>
                                <img className='navbar_links_list_item_img' src={link.img} /> {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className='navbar_bottom'>
            <ul className='navbar_links_list'>
                <li className='navbar_links_list_item'>
                    <a href='/settings'>
                        <img className='navbar_links_list_item_img' src={setting} /> Settings
                    </a>
                </li>
                <li className='navbar_links_list_item'>
                    <a>
                        <img className='navbar_links_list_item_img' src={logout} />
                        <button className='navbar_bottom_logout'>
                            Log Out
                        </button>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar