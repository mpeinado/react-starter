import React, { Component } from 'react';

class SearchBar extends Component {

    handleFilterProductsChange = (e) => {
        e.preventDefault();
        const text = e.target.value;

        this.props.handleFilterProductsChange(text);
    }

    handleInStockChange = (e) => {
        const showOnlyInStock = e.target.checked;
        this.props.handleInStockChange(showOnlyInStock);
    }

    render () {
        const rowStyle = {
            paddingTop: 15,
            paddingBottom: 35
        };

        return(
            <div className="row" style={rowStyle}>
                <div className="col">
                    <form>
                        <div className="form-group">
                            <label htmlFor="formSerch">Search</label>

                            <input type="text" className="form-control" id="formSerch" placeholder="Search" 
                                value={this.props.filterText}
                                onChange={this.handleFilterProductsChange} />
                        </div>
    
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="showProductsInStock" onChange={this.handleInStockChange} />
                                
                                <label className="form-check-label" htmlFor="showProductsInStock">Only show products in Stock</label>
                            </div>
                    </form>
                </div>
            </div>
        );
    }
} 

export default SearchBar;