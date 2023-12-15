import React, {FC} from 'react'
import Modal from 'react-modal';
import './modal.scss';


interface AddProductModalProps {
    toggleModal: () => void;
    modalIsOpen: boolean;
}
  

const AddProductModal: FC<AddProductModalProps> = ({toggleModal, modalIsOpen}) => {

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
    
    return (
        <Modal 
            isOpen={modalIsOpen}
            onRequestClose={toggleModal}
            contentLabel="Add Product"
            style={customStyles}
        >
            <h2 className='modal_title'>New Product</h2>
            <form className='add_product_form'>
                <div className='flex'>
                    <label className='modal_label' htmlFor="product_name">Product Name</label>
                    <input placeholder='Enter product name' />
                </div>
                <div  className='flex'>
                    <label className='modal_label' htmlFor="product_id">Product ID</label>
                    <input placeholder='Enter product ID' />
                </div>
                <div  className='flex'>
                    <label className='modal_label' htmlFor="category">Category</label>
                    <select>
                        <option>1</option>
                        <option>2</option>
                    </select>
                </div>
                <div  className='flex'>
                    <label className='modal_label' htmlFor="buying_price">Buying Price</label>
                    <input placeholder='Enter buying price' />
                </div>
                <div  className='flex'>
                    <label className='modal_label' htmlFor="quantity">Quantity</label>
                    <input placeholder='Enter product quantity' />
                </div>
                <div  className='flex'>
                    <label className='modal_label' htmlFor="unit">Unit</label>
                    <input placeholder='Enter product unit' />
                </div>
                <div  className='flex'>
                    <label className='modal_label' htmlFor="expiry_date">Expiry Date</label>
                    <input placeholder='Enter expiry date' />
                </div>
                <div  className='flex'>
                    <label className='modal_label' htmlFor="threshold_value">Threshold Value</label>
                    <input placeholder='Enter threshold value' />
                </div>
                <div  className='flex'>
                    <div onClick={toggleModal} className="inventory_products_header_buttons_filters">
                        Discard
                    </div>
                    <button className="inventory_products_header_buttons_add">
                        Add Product
                    </button>
                </div>
            </form>
        </Modal>
    )
}

export default AddProductModal
