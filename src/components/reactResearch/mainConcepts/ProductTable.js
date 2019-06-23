import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends Component {
    render() {
        const { products, filterText, isStockOnly }  = this.props;

        const rows = [];
        let lastCategory = null;

        for(let i = 0; i < products.length; i++) {
            const iProduct = products[i];

            // product dones NOT  containes filterText
            const productName = iProduct.name.toLowerCase();
            const text = filterText.toLowerCase();
            if(productName.indexOf(text) === -1){
                continue;
            }

            // if seaching for stocked products only and the product is not stocked
            if(isStockOnly && !iProduct.stocked) {
                continue;
            }

            if(iProduct.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow 
                        category={iProduct.category}
                        key={iProduct.category}/>
                );
            }

            rows.push(
                <ProductRow 
                    product={iProduct}
                    key={iProduct.name}/>
            );

            lastCategory = iProduct.category;
        }

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

export default ProductTable;