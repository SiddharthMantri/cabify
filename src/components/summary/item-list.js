import React from 'react';
import PropTypes from 'prop-types'

const ItemList = ({ item = { product: { name: "" }, qty: 0 } }) => {
    if (item.qty > 0) {
        return <li>
            <span>{item.product.name}</span>
            <span>{item.qty}</span>
        </li>
    }
    return null;
}
ItemList.propTypes = {
    item: PropTypes.object,
}
export default ItemList;