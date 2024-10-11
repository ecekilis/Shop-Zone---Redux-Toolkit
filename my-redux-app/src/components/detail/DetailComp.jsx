import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

const DetailComp = ({ productDetail }) => {

    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(0);
    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

    const increment = () => {
        if (quantity < productDetail?.rating?.count)
            setQuantity(quantity + 1)
    }


    const addBasket = () => {
        dispatch(addToCart({
            id: productDetail?.id,
            title: productDetail?.title, image: productDetail?.image,
            quantity: quantity, price: productDetail?.price
        }))
    }



    return (
        <div className='flex gap-10 my-10'>
            <img className='w-[500px] h-[500px] object-cover' src={productDetail?.image} alt="" />
            <div className=''>
                <div className='text-4xl font-bold'>{productDetail?.title}</div>
                <div className='my-2 text-2xl'>
                    {productDetail?.description}
                </div>
                <div className='my-2 text-xl text-green-500'>Rating : {productDetail?.rating?.rate}</div>
                <div className='my-2 text-xl text-orange-500'>Count : {productDetail?.rating?.count}</div>
                <div className='text-5xl font-bold'>{productDetail?.price}<span className='text-sm'> TL</span></div>
                <div className='flex items-center gap-5'>
                    <div onClick={decrement} className='text-5xl cursor-pointer'> - </div>
                    <input className='w-12 text-center font-bold text-green-500 
                    my-5 text-4xl' type="text" value={quantity} />
                    <div onClick={increment} className='text-4xl cursor-pointer'> + </div>

                </div>
                <div onClick={addBasket} className='border w-200 text-2xl cursor-pointer my-4 bg-gray-200 rounded-md h-16 flex items-center justify-center'>Sepete Ekle</div>
            </div>
        </div>
    )
}

export default DetailComp
