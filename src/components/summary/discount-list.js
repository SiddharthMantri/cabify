import React from 'react';
import PropTypes from 'prop-types'


const DiscountList = ({ name = "", rule = { savings: 0 } }) => (
    <li>
        <span>{name}</span>
        <span> {`-${rule.savings}€`}</span>
    </li>
)
DiscountList.propTypes = {
    name: PropTypes.string,
    rule: PropTypes.object
}
export default DiscountList;