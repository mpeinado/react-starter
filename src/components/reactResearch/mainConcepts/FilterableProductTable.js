import React, { Component } from 'react';
import SearchBar from '../SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filterText: '',
            inStockOnly: false
        };
    }

    handleFilterProductsChange = (text) => {
        this.setState({
            filterText: text
        });
    }

    handleInStockChange = (showOnlyInStock) => {
        this.setState({
            inStockOnly: showOnlyInStock
        });
    }
    
    render () {
        return (
            <div className="container">
                <SearchBar 
                    filterText={this.state.filterText}
                    handleFilterProductsChange={this.handleFilterProductsChange}
                    handleInStockChange={this.handleInStockChange}
                    />

                <ProductTable 
                    filterText={this.state.filterText}
                    isStockOnly={this.state.inStockOnly}
                    products={this.props.products}
                    />
            </div>
        );
    };
}

export default FilterableProductTable;