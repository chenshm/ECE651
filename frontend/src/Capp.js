import  React, { Component } from  'react';
import { BrowserRouter,Route, Link,Switch, useLocation } from  'react-router-dom';
import  CustomersList  from  './CustomersList';
import  CustomerCreateUpdate  from  './CustomerCreateUpdate';
import HousingList from './Housing/HousingList';
import HousingCreateUpdate from './Housing/HousingCreateUpdate';
import MyhousingList from './Housing/MyhousingList';
import  SearchBar from './SearchBar'
import  './Capp.css';

function usePageViews() {
    let location = useLocation();
    return location.pathname;
  }

class  Capp  extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            queryText: '',
            field: 'All',
            type:'customer',
        };
        //this.handleCustomerSearch = this.handleCustomerSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.tocustomer = this.tocustomer.bind(this);
        this.tohousing = this.tohousing.bind(this);
    }
    /*handleCustomerSearch(query, field){
        this.setState(
            {
               queryText: query,
                field: field,
            }
        );
    }*/
    handleSubmit(event){
        this.setState(prevstate => {
            const newState = { ...prevstate };
            newState['queryText'] = this.refs.queryText.value;
            newState['field'] = this.refs.field.value;
            return newState;
          });
        /*this.setState(
            {
               queryText: this.refs.queryText.value,
                field: this.refs.field.value,
            }
        );*/
        event.preventDefault();
    }
    tocustomer(event){
        this.setState(prevstate => {
            const newState = { ...prevstate };
            newState['type'] = 'customer';
            return newState;
          });
          //event.preventDefault();
    }
    tohousing(event){
        //console.log("alow ha");
        this.setState(prevstate => {
            const newState = { ...prevstate };
            newState['type'] = 'housing';
            return newState;
          });
          //this.setState({type:'housing'});
          //event.preventDefault();
    }
    render() {

        let my_housing=null;
        let fields=null;
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
        if(this.state.type === 'customer' ){
            fields=(                            
                <select className="form-control" ref='field'>
                <option>All</option>
                <option>Name</option>
                <option>Phone</option>
                <option>Email</option>
                <option>Address</option>
                <option>Description</option>
                </select>
                );
        }else{
            fields=(
                <select className="form-control" ref='field'>
                <option>All</option>
                <option>Rent</option>
                <option>Landord</option>
                <option>Email</option>
                <option>Address</option>
                </select>
            );
        }
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
                            <a class="nav-link" href="#"onClick={this.tocustomer} >Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" onClick={this.tohousing} href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            CUSTOMERS
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link  className="dropdown-item" to={{ pathname: "/house/create",pk:this.props.pk}}>Create Housing</Link>
                            <Link  className="dropdown-item"  to={{ pathname: "/housing"}}>Housing List</Link>
                            <Link  className="dropdown-item" to={{ pathname: "/"}}>Customer List</Link>
                            <Link  className="dropdown-item" to={{ pathname: "/customer",pk:this.props.pk}}>Create Customer</Link>

                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>

                    <form class="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
 
                        {fields}
                         <input className="form-control  mr-sm-2" type="search" ref='queryText' placeholder="Search..."  aria-label="Search"/>
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

                            <Route  path="/customer/:pk/" isAuthed={pk} render={(props,pk) => <CustomerCreateUpdate {...props} {...pk} /> } />
                            
                            <Route  path="/customer/"  exact  render={(props) => <CustomerCreateUpdate {...props} isAuthed={true} />}   />
                            <Route  path="/house/create"  exact  component={HousingCreateUpdate}  />
                            <Route  path="/housing/:pk"  exact  component={HousingCreateUpdate}  />
                            <Route  path="/myhousing/"  exact  component={MyhousingList}  />
                            <Route
                                exact path="/housing/"
                                render={(props) =>
                                    <HousingList {...props}
                                                   queryText={this.state.queryText}
                                                   field={this.state.field}
                                                   changefield={this.tohousing}
                                    />}
                            />
                            <Route
                                exact path="/"
                                render={(props) =>
                                    <CustomersList {...props}
                                                   queryText={this.state.queryText}
                                                   field={this.state.field}
                                                   changefield={this.tocustomer}
                                    />}
                            />
                        </switch>
                    </div>

                
            </div>
            
        </BrowserRouter>
        );

    }
    }
    export  default  Capp;