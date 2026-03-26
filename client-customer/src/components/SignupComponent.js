// import axios from 'axios';
// import React, { Component } from 'react';
// import '../interface/css/bootstrap.min.css'
// // import { Link } from 'react-router-dom';
// import '../interface/css/tiny-slider.css'
// import '../interface/css/style.css'
// import Anh15 from '../interface/images/18.png'

// class Signup extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       txtUsername: '',
//       txtPassword: '',
//       txtName: '',
//       txtPhone: '',
//       txtEmail: ''
//     };
//   }
//   render() {
//     return (
// <div class="container">


// <div class="row justify-content-center">

// 	<div class="col-xl-10 col-lg-12 col-md-9">

// 		<div class="card o-hidden border-0 shadow-lg my-5">
// 			<div class="card-body p-0">

// 				<div class="row">
// 					<div class="col-lg-6 d-none d-lg-block bg-login-image">
// 					<img src={Anh15} />
// 					</div>
// 					<div class="col-lg-6">
// 						<div class="p-3">
// 							<div class="text-center">
// 								<h1 class="h4 text-gray-900 mb-4">Đăng Ký</h1>
// 							</div>
// 							<form class="user">
// 								<div class="form-group" >
									
// 									<input type="text" value={this.state.txtUsername} onChange={(e) => { this.setState({ txtUsername: e.target.value }) }} 
// 									class="form-control form-control-user" placeholder="Tài khoản" style={{width:"350px"}}/>
// 								</div>
// 								<br/>
// 								<div class="form-group">
// 									<input type="password" value={this.state.txtPassword} onChange={(e) => { this.setState({ txtPassword: e.target.value }) }} 
// 									class="form-control form-control-user" placeholder="Mật khẩu" style={{width:"350px"}}/>
// 								</div>
// 								<br/>
// 								<div class="form-group">
// 									<input type="text" value={this.state.txtName} onChange={(e) => { this.setState({ txtName: e.target.value }) }} 
// 									class="form-control form-control-user" placeholder="Tên" style={{width:"350px"}}/>
// 								</div>
// 								<br/>
// 								<div class="form-group">
// 									<input type="tel" value={this.state.txtPhone} onChange={(e) => { this.setState({ txtPhone: e.target.value }) }} 
// 									class="form-control form-control-user" placeholder="Số điện thoại" style={{width:"350px"}}/>
// 								</div>
// 								<br/>
// 								<div class="form-group">
// 									<input type="email" value={this.state.txtEmail} onChange={(e) => { this.setState({ txtEmail: e.target.value }) }} 
// 									class="form-control form-control-user" placeholder="Email" style={{width:"350px"}}/>
// 								</div>
// 								<br/>
// 								<a href="/login" class="btn btn-primary btn-user btn-block"  onClick={(e) => this.btnSignupClick(e)} >
// 									Đăng ký
// 								</a>
// 							</form>
// 							<hr/>
// 							<div class="text-center">
// 								<a class="small" href ='/login'>Tôi đã có tài khoản!</a>
// 								<div>
// 								<a class="small" href ='/active'>Kích hoạt tài khoản!!</a>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>

// 	</div>

// </div>

// </div>
//     );
//   }
//   // event-handlers
//   btnSignupClick(e) {
//     e.preventDefault();
//     const username = this.state.txtUsername;
//     const password = this.state.txtPassword;
//     const name = this.state.txtName;
//     const phone = this.state.txtPhone;
//     const email = this.state.txtEmail;
//     if (username && password && name && phone && email) {
//       const account = { username: username, password: password, name: name, phone: phone, email: email };
//       this.apiSignup(account);
//     } else {
//       alert('Vui lòng nhập đầy đủ thông tin!');
//     }
//   }
//   // apis
//   apiSignup(account) {
//     axios.post('/api/customer/signup', account).then((res) => {
//       const result = res.data;
//       alert(result.message);
//     });
//   }
// }
// export default Signup;



import axios from 'axios';
import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import '../interface/css/bootstrap.min.css';
import '../interface/css/tiny-slider.css';
import '../interface/css/style.css';
import Anh15 from '../interface/images/18.png';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: '',
      txtPassword: '',
      txtName: '',
      txtPhone: '',
      txtEmail: ''
    };
  }

  render() {
    return (
      <div className="container">
        <ToastContainer />
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5 custom-card">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image">
                    <img src={Anh15} className="img-fluid rounded-start" alt="Decoration" />
                  </div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center" style={{ placeItems: 'center' }}>
                        <h1 className="h4 text-primary mb-4">Đăng Ký</h1>
                      </div>
                      <form className="user">
                        <div className="form-group mb-3">
                          <input type="text" value={this.state.txtUsername} onChange={(e) => this.setState({ txtUsername: e.target.value })}
                            className="form-control input-custom" placeholder="Tài khoản" />
                        </div>
                        <div className="form-group mb-3">
                          <input type="password" value={this.state.txtPassword} onChange={(e) => this.setState({ txtPassword: e.target.value })}
                            className="form-control input-custom" placeholder="Mật khẩu" />
                        </div>
                        <div className="form-group mb-3">
                          <input type="text" value={this.state.txtName} onChange={(e) => this.setState({ txtName: e.target.value })}
                            className="form-control input-custom" placeholder="Tên" />
                        </div>
                        <div className="form-group mb-3">
                          <input type="tel" value={this.state.txtPhone} onChange={(e) => this.setState({ txtPhone: e.target.value })}
                            className="form-control input-custom" placeholder="Số điện thoại" />
                        </div>
                        <div className="form-group mb-4">
                          <input type="email" value={this.state.txtEmail} onChange={(e) => this.setState({ txtEmail: e.target.value })}
                            className="form-control input-custom" placeholder="Email" />
                        </div>
                        <button className="btn btn-primary btn-user btn-block custom-btn mb-3" onClick={(e) => this.btnSignupClick(e)}>
                          Đăng ký
                        </button>
                      </form>
                      <hr />
                      <div className="text-center">
                        <a className="small text-secondary d-block mb-2" href='/login'>Tôi đã có tài khoản!</a>
                        <a className="small text-secondary" href='/active'>Kích hoạt tài khoản!</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>
          {`
            .custom-card {
              border-radius: 15px;
              overflow: hidden;
              box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            }
            .custom-btn {
              background-color: #b0855b;
              border: none;
              padding: 12px;
              font-size: 16px;
              transition: 0.3s;
            }
            .custom-btn:hover {
              background-color: #a07249;
            }
            .input-custom {
              border-radius: 8px;
              padding: 12px;
              font-size: 16px;
            }
            .text-secondary {
              font-size: 14px;
            }
          `}
        </style>
      </div>
    );
  }

  btnSignupClick(e) {
    e.preventDefault();
    const { txtUsername, txtPassword, txtName, txtPhone, txtEmail } = this.state;
    if (txtUsername && txtPassword && txtName && txtPhone && txtEmail) {
      const account = { username: txtUsername, password: txtPassword, name: txtName, phone: txtPhone, email: txtEmail };
      this.apiSignup(account);
    } else {
      toast.error('Vui lòng nhập đầy đủ thông tin!', { position: 'top-center' });
    }
  }

  apiSignup(account) {
    axios.post('/api/customer/signup', account).then((res) => {
      if (res.data.success) {
        toast.success(res.data.message, { position: 'top-center' });
      } else {
        toast.error(res.data.message, { position: 'top-center' });
      }
    }).catch(() => {
      toast.error('Đăng ký thất bại, vui lòng thử lại!', { position: 'top-center' });
    });
  }
}

export default Signup;
