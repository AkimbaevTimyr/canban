import React, {FC, useState, useEffect} from 'react'
import Modal from 'react-modal';
import '../modal.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import api from '../../../../app/api/api';
import { Category } from '../../types/Category';


interface AddProductModalProps {
    toggleModal: () => void;
    modalIsOpen: boolean;
}
  
const AddProductModal: FC<AddProductModalProps> = ({toggleModal, modalIsOpen}) => {

    const [name, setName] = useState();
    const [category, setCategory] = useState();
    const [price, setPrice] = useState();
    const [quantity, setQuantity] = useState();
    const [date, setDate] = useState();
    const [threshold, setThreshold] = useState();    


    const [categoriesList, setCategoriesList] = useState<Category[]>([]);
    
    const customStyles = {
        content: {
          maxWidth: '500px',
          width: '100%',
          maxHeight: '600px',
          height: '100%',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
    };

    useEffect(() => {
        api.get('/api/categories-all')
        .then((resp) => {
            setCategoriesList(resp.data.data)

        })
        .catch((error) => {
            console.log(error)
        }) 

    }, [])


    const handleSumbit = (e: any) => {
        e.preventDefault();
        api.post("/api/product-create", {
            name,
            category_id: category,
            buy_price: price,
            quantity,
            threshold,
            expiry_date: date
        }).then((resp) => console.log(resp))
            .catch((error) => console.log(error))
    }
    
    return (
        <Modal 
            isOpen={modalIsOpen}
            onRequestClose={toggleModal}
            contentLabel="Add Product"
            style={customStyles}
        >
            <h2 className='modal_title'>New Product</h2>
            <form onSubmit={handleSumbit} className='add_product_form'>
                <div className='flex'>
                    <label className='modal_label' htmlFor="product_name">Product Name</label>
                    <input onChange={(e: any) => setName(e.target.value)} className='modal_input' placeholder='Enter product name' />
                </div>
                <div  className='flex'>
                    <label className='modal_label' htmlFor="category">Category</label>
                    <select onChange={(e: any) => setCategory(e.target.value)} className='modal_input label_input'>
                        <option>Select product category</option>
                        {
                            categoriesList?.map((cat: any) => (
                                <option key={cat.id} value={cat.id}>{cat.category_name}</option>
                            ))
                        }
                    </select>
                </div>
                <div  className='flex'>
                    <label className='modal_label' htmlFor="buying_price">Buying Price</label>
                    <input onChange={(e: any) => setPrice(e.target.value)} className='modal_input' placeholder='Enter buying price' />
                </div>
                <div  className='flex'>
                    <label className='modal_label' htmlFor="quantity">Quantity</label>
                    <input onChange={(e: any) => setQuantity(e.target.value)} className='modal_input'  placeholder='Enter product quantity' />
                </div>
                {/* <div  className='flex'>
                    <label className='modal_label' htmlFor="unit">Unit</label>
                    <input className='modal_input'placeholder='Enter product unit' />
                </div> */}
                <div  className='flex'>
                    <label className='modal_label' htmlFor="expiry_date">Expiry Date</label>
                    {/* <input className='modal_input' placeholder='Enter expiry date' /> */}
                    <DatePicker selected={date} onChange={(date: any) => setDate(date)} />
                </div>
                <div  className='flex'>
                    <label className='modal_label' htmlFor="threshold_value">Threshold Value</label>
                    <input onChange={(e: any) => setThreshold(e.target.value)} className='modal_input' placeholder='Enter threshold value' />
                </div>
                <div  className='flex'>
                    <div onClick={toggleModal} className="inventory_products_header_buttons_filters">
                        Discard
                    </div>
                    <button type='submit' className="inventory_products_header_buttons_add">
                        Add Product
                    </button>
                </div>
            </form>
        </Modal>
    )
}

export default AddProductModal
