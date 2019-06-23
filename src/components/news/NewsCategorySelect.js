import React, { Component } from 'react';

class NewsCategorySelect extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="inputState">State</label>
                                <select id="inputState" class="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default NewsCategorySelect