import React, { Component } from 'react';
import FilterableProductTable from './FilterableProductTable';

/**
 * This page serves as the "housing" for <FilterableProductTable /> in this case. 
 * Reference: https://reactjs.org/docs/thinking-in-react.html
 */
class MainConceptsPage extends Component {
    render() {
        const PRODUCTS = [
            {
                category: "Sporting Goods",
                price: "$49.99",
                stocked: true,
                name: "Football"
            },
            {
                category: "Sporting Goods",
                price: "$9.99",
                stocked: true,
                name: "Baseball"
            },
            {
                category: "Sporting Goods",
                price: "$29.99",
                stocked: false,
                name: "Basketball"
            },
            {
                category: "Electronics",
                price: "$99.99",
                stocked: true,
                name: "iPod Touch"
            },
            {
                category: "Electronics",
                price: "$399.99",
                stocked: false,
                name: "iPhone 5"
            },
            {
                category: "Electronics",
                price: "$199.99",
                stocked: true,
                name: "Nexus 7"
            }
        ];

        const rowStyle = {
            paddingTop: 15,
            paddingBottom: 15
        };

        return (
            <div className="container">
                <div className="row" style={rowStyle}> 
                    <div className="col">
                        <h1>React | Main Concepts</h1>
                    </div>
                </div>
                
                <FilterableProductTable products={PRODUCTS} />
            </div>
        );
    }
}

export default MainConceptsPage;