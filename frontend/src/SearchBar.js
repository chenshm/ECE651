import React, { Component } from 'react';
import CustomersService  from  './CustomersService';
import CustomersList from "./CustomersList";

// const customersService = new CustomersService();

class SearchBar extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        this.props.onSearchSubmitted(this.refs.query.value);
        event.preventDefault();
    }

    render() {
        return (
            <div  className="mx-3">
                <form onSubmit={this.handleSubmit}>
                    {/*add mx here to set margin for bar and btn*/}
                     <input className="form-control" type="text" ref='query' placeholder="Search..."/>
                     <input className="btn btn-outline-primary" type="submit" value="Search" />
                </form>
            </div>
        );
    }
}

export  default  SearchBar;