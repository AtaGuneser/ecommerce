'use client'

import UseCart from '@/hooks/useCart'
import React from 'react'
import PageContainer from '../containers/PageContainer'
import Image from 'next/image'
import Button from '../general/Button'

const CartClient = () => {
    const { cartPrdcts, removeFromCart, removeCart } = UseCart()

    if (!cartPrdcts || cartPrdcts.length == 0) {
        return <div>Empty...</div >
    }
    return (
        <div className='md:my-10 my-3 '>
            <PageContainer>
                <div className='flex items-center gap-3 text-center border-b py-3'>
                    <div className='w-1/5'>Product Img </div>
                    <div className='w-1/5'>Product Name</div>
                    <div className='w-1/5'>Product Count</div>
                    <div className='w-1/5'>Price</div>
                    <div className='w-1/5'>Price</div>
                </div>
                <div>
                    {
                        cartPrdcts.map(cart => (
                            <div className='flex items-center justify-between text-center my-5' key={cart.id}>
                                <div className='w-1/5 flex items-center justify-center'>
                                    <Image src={cart.image} width={50} height={50} alt='' />
                                </div>
                                <div className='w-1/5'>{cart.name}</div>
                                <div className='w-1/5'>2</div> 
                                <div className='w-1/5 text-orange-600 text-lg'>{cart.price}</div>
                                <div className='w-1/5 '>
                                    <Button text='Delete Item' small onClick={() => removeFromCart(cart)} />
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='flex items-center justify-between my-5 py-5 border-t'>
                    <button onClick={() => {removeCart()}} className='w-1/5 underline text-sm'>Delete Cart</button>
                    <div className='text-lg md:text-2xl text-orange-600 font-bold' >1000 tl</div>
                </div>
            </PageContainer>
        </div>
    )
}

export default CartClient