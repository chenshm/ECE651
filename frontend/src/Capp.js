import  React, { Component } from  'react';
import { BrowserRouter } from  'react-router-dom'
import { Route, Link } from  'react-router-dom'
import  CustomersList  from  './CustomersList'
import  CustomerCreateUpdate  from  './CustomerCreateUpdate'
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
                <button onClick={() => item} class="float-right btn btn-outline-primary">Login out</button>
            </div>

        </nav>

             <div  className="content">
                 <switch>
                    <Route  path="/"  exact  component={CustomersList}  />
                    <Route  path="/customer/:pk"  component={CustomerCreateUpdate}  />
                    <Route  path="/customer/"  exact  component={CustomerCreateUpdate}  />
                    
                </switch>
            </div>

        
    </div>
    )

class  Capp  extends  Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
        <BrowserRouter>
            <div  className="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Too young too simple</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            CUSTOMERS
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a  className="dropdown-item"  href="/">Customer List</a>
                            <a  className="dropdown-item"  href="/customer">Create Customer</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {this.props.username}
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a  className="dropdown-item" onClick={this.props.handle_logout} href="#">Login out</a>
                            </div>
                     </li>
                </div>
            </nav>
                    

                    <div  className="content">
                        <switch>
                            <Route  path="/"  exact  component={CustomersList}  />
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