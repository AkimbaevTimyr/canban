import { FC } from 'react';
import './pagination.scss';

type Link  = {
    url: string;
    label: string;
    active: boolean;
}

interface PaginationProps {
    changePage: (page: string) => void;
    links: Link[] | undefined;
}

const Pagination: FC<PaginationProps> = ({links, changePage}) => {
    function getClassName(active: any)
    {
        if(active) {
            return 'active-page';
        } else {
            return '';
        }
    }

    return (
        <nav aria-label='navigation' className="navigation">
            <ul className="navigation_list">
                {
                    links?.map((link : Link) => (
                        <li key={link.label} className="navigation_list_item">
                            <a onClick={()=> changePage(link.url)} className={getClassName(link.active)}>
                                { link.label.replace('&laquo;', '<').replace('&raquo;', '>') }
                            </a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Pagination;