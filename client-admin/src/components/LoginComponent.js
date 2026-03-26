import axios from 'axios';
import React, { Component } from 'react';
import MyContext from '../contexts/MyContexts';
import { Link } from 'react-router-dom';
class Login extends Component {
  static contextType = MyContext; // using this.context to access global state

  constructor(props) {
    super(props);
    this.state = {
      txtUsername: '',
      txtPassword: ''
    };
  }

  render() {
    if (this.context.token === '') {
      return (
        // <div className="align-valign-center">
        //   <h2 className="text-center">ADMIN LOGIN</h2>
        //   <form>
        //     <table className="align-center">
        //       <tbody>
        //         <tr>
        //           <td>Username</td>
        //           <td>
        //             <input
        //               type="text"
        //               value={this.state.txtUsername}
        //               onChange={(e) => {
        //                 this.setState({ txtUsername: e.target.value });
        //               }}
        //             />
        //           </td>
        //         </tr>
        //         <tr>
        //           <td>Password</td>
        //           <td>
        //             <input
        //               type="password"
        //               value={this.state.txtPassword}
        //               onChange={(e) => {
        //                 this.setState({ txtPassword: e.target.value });
        //               }}
        //             />
        //           </td>
        //         </tr>
        //         <tr>
        //           <td></td>
        //           <td>
        //             <input
        //               type="submit"
        //               value="LOGIN"
        //               onClick={(e) => this.btnLoginClick(e)}
        //             />
        //           </td>
        //         </tr>
        //       </tbody>
        //     </table>
        //   </form>
        // </div>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(180deg, #4e73df 10%, #224abe 100%)'
      }}>
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-xl-10 col-lg-12 col-md-9">
                      <div class="card o-hidden border-0 shadow-lg my-5">
                          <div class="card-body p-0">
                              <div class="row">
                                  <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                  <div class="col-lg-6">
                                      <div class="p-5">
                                          <div class="text-center">
                                              <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                          </div>
                                          <form class="user">
                                              <div class="form-group">
                                                  <input
                                                      type="text"
                                                      value={this.state.txtUsername}
                                                      onChange={(e) => this.setState({ txtUsername: e.target.value })}
                                                      class="form-control"
                                                      placeholder="Enter Username..."
                                                  />
                                              </div>
                                              <div class="form-group">
                                                  <input
                                                      type="password"
                                                      value={this.state.txtPassword}
                                                      onChange={(e) => this.setState({ txtPassword: e.target.value })}
                                                      class="form-control"
                                                      placeholder="Enter Password..."
                                                  />
                                              </div>
                                              <div class="form-group">
                                                  <div class="custom-control custom-checkbox small">
                                                      <input type="checkbox" class="custom-control-input" id="customCheck"/>
                                                      <label class="custom-control-label" for="customCheck">Remember Me</label>
                                                  </div>
                                              </div>
                                              <button onClick={(e) => this.btnLoginClick(e)} class="btn btn-primary btn-user btn-block">
                                                  Login
                                              </button>
                                              {/* <a href="index.html" class="btn btn-google btn-user btn-block">
                                                  <i class="fab fa-google fa-fw"></i> Login with Google
                                              </a>
                                              <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                                  <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                              </a> */}
                                          </form>
                                          <div class="text-center">
                                              <a class="small" href="forgot-password.html">Forgot Password?</a>
                                          </div>
                                          <div class="text-center">
                                              <a class="small" href="register.html">Create an Account!</a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
      );
    }
    return <div />;
  }

  // event-handlers
  btnLoginClick(e) {
    e.preventDefault();
    const username = this.state.txtUsername;
    const password = this.state.txtPassword;
    if (username && password) {
      const account = { username: username, password: password };
      this.apiLogin(account);
    } else {
      alert('Please input username and password');
    }
  }

  // apis
  apiLogin(account) {
    axios.post('/api/admin/login', account).then((res) => {
      const result = res.data;
      if (result.success === true) {
        this.context.setToken(result.token);
        this.context.setUsername(account.username);
      } else {
        alert(result.message);
      }
    });
  }
  // Xử lý logout
  handleLogout() {
    this.context.setToken('');
    this.context.setUsername('');
  }
  
}

export default Login;
