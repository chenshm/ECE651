import  React, { Component } from  'react';
import { BrowserRouter } from  'react-router-dom'
import { Route, Link } from  'react-router-dom'
import  CustomersList  from  './CustomersList'
import  CustomerCreateUpdate  from  './CustomerCreateUpdate'
import  SearchBar from './SearchBar'
import Userauth from './Userauth'
import  './Capp.css';

const  BaseLayout  = (item) => (
    <div  className="container-fluid">
        <nav  className="navbar navbar-expand-lg navbar-light bg-light">

            <a  className="navbar-brand"  href="#">Too Young Too Simple</a>

            <button  className="navbar-toggler"  type="button"  data-toggle="collapse"  data-target="#navbarNavAltMarkup"  aria-controls="navbarNavAltMarkup"  aria-expanded="false"  aria-label="Toggle navigation">
                <span  className="navbar-toggler-icon"></span>
            </button>

            <div  className="collapse navbar-collapse"  id="navbarNavAltMarkup">
                <div  className="navbar-nav">
                    <a  className="nav-item nav-link"  href="/">CUSTOMERS</a>
                    <a  className="nav-item nav-link"  href="/customer">CREATE CUSTOMER</a>
                </div>
            </div>
            <button onClick={() => item} class="float-right btn btn-outline-primary">Login out</button>
        </nav>

             <div  className="content">
                 <switch>
                    {/*<Route  path="/"  exact  component={CustomersList}  />*/}
                    <Route  exact path="/"  render={(props) => <CustomersList {...props} isAuthed={true} />} />
                    <Route  path="/customer/:pk"  component={CustomerCreateUpdate}  />
                    <Route  path="/customer/"  exact  component={CustomerCreateUpdate}  />
                </switch>
            </div>

        
    </div>
    )

class  Capp  extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            queryText: '',
        };
        this.handleCustomerSearch = this.handleCustomerSearch.bind(this);
    }
    handleCustomerSearch(query){
        this.setState(
            {
               queryText: query,
            }
        )
    }
    render() {
        return (
        <BrowserRouter>
            <div  className="container-fluid">
                <nav  className="navbar navbar-expand-lg navbar-light bg-light">

                    <a  className="navbar-brand"  href="#">Django React Demo</a>

                    <button  className="navbar-toggler"  type="button"  data-toggle="collapse"  data-target="#navbarNavAltMarkup"  aria-controls="navbarNavAltMarkup"  aria-expanded="false"  aria-label="Toggle navigation">
                        <span  className="navbar-toggler-icon"/>
                    </button>

                    <div  className="collapse navbar-collapse"  id="navbarNavAltMarkup">
                        <div  className="navbar-nav">
                            <a  className="nav-item nav-link"  href="/">CUSTOMERS</a>
                            <a  className="nav-item nav-link"  href="/customer">CREATE CUSTOMER</a>
                        </div>
                    </div>

                    <div className="form-inline">
                        <SearchBar onSearchSubmitted={this.handleCustomerSearch}/>
                        <button onClick={this.props.handle_logout} class="btn btn-outline-primary">Login out</button>
                    </div>
                </nav>

                    <div  className="content">
                        <switch>
                            {/*<Route  path="/"  exact  component={CustomersList}  />*/}
                            <Route
                                exact path="/"
                                render={(props) => <CustomersList {...props} queryText={this.state.queryText} />}
                            />
                            <Route  path="/customer/:pk"  component={CustomerCreateUpdate}  />
                            <Route  path="/customer/"  exact  component={CustomerCreateUpdate}  />
                        </switch>
                    </div>

                
            </div>
            
        </BrowserRouter>
        );

    }
    }
    export  default  Capp;