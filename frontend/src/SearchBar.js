import React, { Component } from 'react';
import CustomersList from "./CustomersList";

class SearchBar extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleSubmit = this.handleSubmit.bind(this);
        //this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }
    handleSubmit(event){

    }

    render() {
        return (
            <div  className="px-3">
                 <input className="form-control" type="text" placeholder="Search..."/>
                 <input className="btn btn-outline-primary" type="submit" value="Search" />
            </div>
        );
    }
}

export  default  SearchBar;