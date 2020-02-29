import React, { Component } from 'react';
import Nav from './components/Nav';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import './Userauth.css';
import Capp from './Capp';
const API_URL = 'http://localhost:8000';

class Userauth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: 'login',
      logged_in: localStorage.getItem('token') ? true : false,
      username: ''
    };
    this.handle_login = this.handle_login.bind(this);
    this.handle_logout = this.handle_logout.bind(this);
    this.handle_signup = this.handle_signup.bind(this);
    this.display_form = this.display_form.bind(this);
  }

  componentDidMount() {
    if (this.state.logged_in) {
      fetch(`${API_URL}/api/current_user/`, {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username });
        });
    }
  }

  handle_login = (e, data) => {
    e.preventDefault();
    fetch(`${API_URL}/token-auth/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.user.username
        });
      });
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch(`${API_URL}/api/users/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.username
        });
      });
  };

  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '',displayed_form: 'login' });
  };

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };

  render() {
    let form;
    switch (this.state.displayed_form) {
      case 'login':
        form = <LoginForm handle_login={this.handle_login} display_form={this.display_form} />;
        break;
      case 'signup':
        form = <SignupForm handle_signup={this.handle_signup} display_form={this.display_form}/>;
        break;
      default:
        form = null;
    }
    if (this.state.logged_in){
          return (
            <div className="Userauth">
              <Capp handle_logout={this.handle_logout}/>
            </div>
          );
      }
    else{
        return (
            <div className="Userauth">
              {form}
            </div>
          );
        }
  }
}

export default Userauth;