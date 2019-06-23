import React from 'react';

const ProductRow = (props) => {
    // inline css
    const productStyle = {
        color: props.product.stocked === true ? '' : 'red'
    };

    return (
        <tr>
            <td><span style={productStyle}>{props.product.name}</span></td>
            <td>{props.product.price}</td>
        </tr>
    );
}

export default ProductRow;