import DetailClient from '@/app/components/detail/DetailClient';
import React from 'react'
import { products } from '@/utils/Products'


type DetailProps = {
    productId?: string;

}

const Detail = ({ params }: { params: DetailProps }) => {

    const { productId } = params;

    const product = products.map(product => product.id == productId)
    return (
        <div>
            <DetailClient product={product} />
        </div>
    )
}

export default Detail