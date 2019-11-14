import React, { useContext } from 'react';
import { Context } from '../../../store/context'
import ProductRow from '../product-row';

const ProductList = props => {
    const { state: { products = [] } } = useContext(Context);
    return (
        <ul className="products-list">
            {products.map((p, i) => <ProductRow key={i} {...p} />)}
        </ul>
    )
}
export default ProductList;