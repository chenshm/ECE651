import  React, { Component } from  'react';
import { BrowserRouter } from  'react-router-dom';
import { Route, Link } from  'react-router-dom';
import  CustomersList  from  './CustomersList';
import  CustomerCreateUpdate  from  './CustomerCreateUpdate';
import HousingList from './Housing/HousingList';
import HousingCreateUpdate from './Housing/HousingCreateUpdate';
import MyhousingList from './Housing/MyhousingList';
import Userauth from './Userauth';
import  './Capp.css';


class  Capp  extends  Component {
    constructor(props) {
        super(props);
    }
    render() {
        let my_housing=null;
        if(this.props.group==='landord'){
            my_housing=(
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link  className="dropdown-item" onClick={this.props.handle_logout} to={{ pathname: "/"}}>Login out</Link>
            <Link  className="dropdown-item" to={{ pathname: "/house/create",pk:this.props.pk}}>Create Housing</Link>
            <Link  className="dropdown-item" to={{ pathname: "/myhousing",pk:this.props.pk}}>My Housing List</Link>
            </div>);

        }else{
            my_housing=(
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link  className="dropdown-item" onClick={this.props.handle_logout} to={{ pathname: "/"}}>Login out</Link>
            </div>);
        };
        var pk=this.props.username;
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
                            <Link  className="dropdown-item" to={{ pathname: "/house/create",pk:this.props.pk}}>Create Housing</Link>
                            <Link  className="dropdown-item" to={{ pathname: "/housing",pk:this.props.pk}}>Housing List</Link>
                            <a  className="dropdown-item"  href="/">Customer List</a>
                            <Link  className="dropdown-item" to={{ pathname: "/customer",pk:this.props.pk}}>Create Customer</Link>

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
                            {my_housing}
                            
                     </li>
                </div>
            </nav>
                    

                    <div  className="content">
                        <switch>
                            <Route  path="/"  exact  component={CustomersList}  />
                            <Route  path="/customer/:pk/" isAuthed={pk} render={(props,pk) => <CustomerCreateUpdate {...props} {...pk} /> } />
                            
                            <Route  path="/customer/"  exact  render={(props) => <CustomerCreateUpdate {...props} isAuthed={true} />}   />
                            <Route  path="/housing/"  exact  component={HousingList}  />
                            <Route  path="/house/create"  exact  component={HousingCreateUpdate}  />
                            <Route  path="/housing/:pk"  exact  component={HousingCreateUpdate}  />
                            <Route  path="/myhousing/"  exact  component={MyhousingList}  />
                        </switch>
                    </div>

                
            </div>
            
        </BrowserRouter>
        );

    }
    }
    export  default  Capp;