import React, { useState, useRef, useEffect } from 'react'
import './topBar.scss';
import notification from '../../assets/images/Notification.svg';
import avatar from '../../assets/images/Avatar.svg';

type link = {
    name: string;
    url: string;
}


function TopBar() {
    const [nav, setNav] = useState<boolean>(false);
    const dropdownRef = useRef<any>();

    const links: link[] =  [
        {'name': 'Dashboard', 'url': '/dashboard', },
        {'name': 'Inventory', 'url': '/inventory',   },
        {'name': 'Reports', 'url': '/reports',  },
        {'name': 'Suppliers', 'url': '/suppliers',  },
        {'name': 'Orders', 'url': '/orders',  },
        {'name': 'Manage Store', 'url': '/manage-store',},
    ]

    const handleOutsideClick = (event: any) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setNav(false);
        }
    };


    useEffect(() => {
    // Добавляем обработчик события при монтировании компонента
        document.addEventListener('click', handleOutsideClick);

        // Убираем обработчик события при размонтировании компонента
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []); //

  return (
    <div className='topbar'>
        <div className='navbar_button'>
            <button onClick={()=> setNav(!nav)} className='inventory_products_header_buttons_download'>
                Navigation
            </button>
            {
                nav ? <>
                    <div  className='topbar_dropdown'>
                        <ul className='topbar_dropdown_list'>
                            {
                                links.map((link: link) => (
                                    <li key={link.url} className='topbar_dropdown_list_item'>
                                        <a href={link.url}>
                                            {link.name}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </> : ''
            }
            
        </div>
        {/* <div className='topbar_search'>
            <input className="topbar_search_input" placeholder='Search product, supplier, order'/>
        </div> */}
        <div>
            
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