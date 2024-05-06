import React,{useContext} from 'react';
import './FoodItem.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Rating from '@mui/material/Rating';
import  { StoreContext }  from '../../context/StoreContext';

const FoodItem = ({id,name,price,description,image}) => {
  
    const {cartItems,addTocart,removeFromCart}=useContext(StoreContext);

    return (
    <div className='food-item'>
        <div className='food-item-img-container'>
            <img className='food-item-image' src={image} alt=''/>
            <div className='food-item-add-containter'>
                {!cartItems[id]
                    ?<AddIcon className="add" onClick={()=>addTocart(id)} /> 
                    :<div className='food-item-counter'> 
                    <div className='food-counter-remove'>
                        <RemoveIcon onClick={()=>removeFromCart(id)}  className='remove-icon'/> 
                    </div>
                        <p style={{fontSize:'13px'}}>{cartItems[id]}</p> 
                    <div className='food-counter-add'>
                        <AddIcon onClick={()=>addTocart(id)} className='add-icon' />                    
                    </div>
                    </div> 
                }  
            </div>
            
        </div>
        <div className='food-item-info'>
            <div className='food-item-name-rating'>
                <p>{name}</p>
                <Rating name="size-small" defaultValue={4} size="small" />
            </div>
            <p className='food-item-desc'>{description}</p>
            <p className='food-item-price'>${price}</p>
        </div>
    </div>
  )
}

export default FoodItem