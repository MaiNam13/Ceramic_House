// import axios from 'axios';
// import React, { Component } from 'react';
// import '../interface/css/bootstrap.min.css'
// import '../interface/css/tiny-slider.css'
// import '../interface/css/style.css'
// import Anh15 from '../interface/images/18.png'
// import { ToastContainer, toast } from 'react-toastify';
// class Active extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       txtID: '',
//       txtToken: ''
//     };
//   }
  
//   render() {
//     return (
// //       <div>
// //       <div className="align-center">
// //         <h2 className="text-center">ACTIVE ACCOUNT</h2>
// //         <form>
// //           <table className="align-center">
// //             <tbody>
// //               <tr>
// //                 <td>ID</td>
// //                 <td><input type="text" value={this.state.txtID} onChange={(e) => { this.setState({ txtID: e.target.value }) }} /></td>
// //               </tr>
// //               <tr>
// //                 <td>Token</td>
// //                 <td><input type="text" value={this.state.txtToken} onChange={(e) => { this.setState({ txtToken: e.target.value }) }} /></td>
// //               </tr>
// //               <tr>
// //                 <td></td>
// //                 <td><input type="submit" value="ACTIVE" onClick={(e) => this.btnActiveClick(e)} /></td>
// //               </tr>
// //             </tbody>
// //           </table>
// //         </form>
// //       </div>
// //       <footer class="footer-section">
// // 	<div class="container relative">

// // 		<div class="sofa-img">
// // 		<img src={Anh15}/>
// // 		</div>

// // 		<div class="row">
// // 			<div class="col-lg-8">
// // 				<div class="subscription-form">
// // 					<h3 class="d-flex align-items-center"><span class="me-1"><img src={Anh16}/></span><span>Subscribe to Newsletter</span></h3>

// // 					<form action="#" class="row g-3">
// // 						<div class="col-auto">
// // 						<input type="text" placeholder="Enter your name" class="form-control"/>
// // 						</div>
// // 						<div class="col-auto">
// // 						<input type="text" placeholder="Enter your email" class="form-control"/>
// // 						</div>
// // 						<div class="col-auto">
// // 							<button class="btn btn-primary">
// // 								<span class="fa fa-paper-plane"></span>
// // 							</button>
// // 						</div>
// // 					</form>

// // 				</div>
// // 			</div>
// // 		</div>

// // 		<div class="row g-5 mb-5">
// // 			<div class="col-lg-4">
// // 				<div class="mb-4 footer-logo-wrap"><a href="#" class="footer-logo">Furni<span>.</span></a></div>
// // 				<p class="mb-4">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>

// // 				<ul class="list-unstyled custom-social">
// // 					<li><a href="#"><span class="fa fa-brands fa-facebook-f"></span></a></li>
// // 					<li><a href="#"><span class="fa fa-brands fa-twitter"></span></a></li>
// // 					<li><a href="#"><span class="fa fa-brands fa-instagram"></span></a></li>
// // 					<li><a href="#"><span class="fa fa-brands fa-linkedin"></span></a></li>
// // 				</ul>
// // 			</div>

// // 			<div class="col-lg-8">
// // 				<div class="row links-wrap">
// // 					<div class="col-6 col-sm-6 col-md-3">
// // 						<ul class="list-unstyled">
// // 							<li><a href="#">About us</a></li>
// // 							<li><a href="#">Services</a></li>
// // 							<li><a href="#">Blog</a></li>
// // 							<li><a href="#">Contact us</a></li>
// // 						</ul>
// // 					</div>

// // 					<div class="col-6 col-sm-6 col-md-3">
// // 						<ul class="list-unstyled">
// // 							<li><a href="#">Support</a></li>
// // 							<li><a href="#">Knowledge base</a></li>
// // 							<li><a href="#">Live chat</a></li>
// // 						</ul>
// // 					</div>

// // 					<div class="col-6 col-sm-6 col-md-3">
// // 						<ul class="list-unstyled">
// // 							<li><a href="#">Jobs</a></li>
// // 							<li><a href="#">Our team</a></li>
// // 							<li><a href="#">Leadership</a></li>
// // 							<li><a href="#">Privacy Policy</a></li>
// // 						</ul>
// // 					</div>

// // 					<div class="col-6 col-sm-6 col-md-3">
// // 						<ul class="list-unstyled">
// // 							<li><a href="#">Nordic Chair</a></li>
// // 							<li><a href="#">Kruzo Aero</a></li>
// // 							<li><a href="#">Ergonomic Chair</a></li>
// // 						</ul>
// // 					</div>
// // 				</div>
// // 			</div>

// // 		</div>

// // 		<div class="border-top copyright">
// // 			<div class="row pt-4">
// // 				<div class="col-lg-6">
// // 					<p class="mb-2 text-center text-lg-start">Copyright &copy;. All Rights Reserved. &mdash; Designed with love by <a href="https://untree.co">Untree.co</a> Distributed By <a hreff="https://themewagon.com">ThemeWagon</a>  
// //     </p>
// // 				</div>

// // 				<div class="col-lg-6 text-center text-lg-end">
// // 					<ul class="list-unstyled d-inline-flex ms-auto">
// // 						<li class="me-4"><a href="#">Terms &amp; Conditions</a></li>
// // 						<li><a href="#">Privacy Policy</a></li>
// // 					</ul>
// // 				</div>

// // 			</div>
// // 		</div>

// // 	</div>
// // </footer>
// //       </div>

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
// 								<h1 class="h4 text-gray-900 mb-4">Kích hoạt tài khoản của bạn</h1>
// 							</div>
// 							<form class="user">
// 								<div class="form-group" >
// 									<input type="text" value={this.state.txtID} onChange={(e) => { this.setState({ txtID: e.target.value }) }} 
// 									class="form-control form-control-user" placeholder="ID" style={{width:"350px"}}/>
// 								</div>
// 								<br/>
// 								<div class="form-group">
// 									<input type="text" value={this.state.txtToken} onChange={(e) => { this.setState({ txtToken: e.target.value }) }} 
// 									class="form-control form-control-user" placeholder="Nhập mật khẩu" style={{width:"350px"}}/>
// 								</div>
// 								<br/>
// 								<a href="/login" class="btn btn-primary btn-user btn-block"  onClick={(e) => this.btnActiveClick(e)} >
// 									Kích hoạt
// 								</a>
// 							</form>
// 							<hr/>
// 							<div class="text-center">
// 							<a class="small" href ='/login'>Bạn có sẵn sàng để tạo một tài khoản?</a>
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
//   btnActiveClick(e) {
//     e.preventDefault();
//     const id = this.state.txtID;
//     const token = this.state.txtToken;
//     if (id && token) {
//       this.apiActive(id, token);
//     } else {
//       alert('Vui lòng nhập đầy đủ thông tin!');
//     }
//   }
//   // apis
//   apiActive(id, token) {
//     const body = { id: id, token: token };
//     axios.post('/api/customer/active', body).then((res) => {
//       const result = res.data;
//       if (result) {
//         alert('Thao tác thành công');
//       } else {
//         alert('Có lỗi xảy ra!!');
//       }
//     });

//   }
// }
// export default Active;





import axios from 'axios';
import React, { Component } from 'react';
import '../interface/css/bootstrap.min.css'
import '../interface/css/tiny-slider.css'
import '../interface/css/style.css'
import Anh15 from '../interface/images/18.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Active extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtID: '',
      txtToken: ''
    };
  }
  
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image">
                    <img src={Anh15} alt="Login" />
                  </div>
                  <div className="col-lg-6">
                    <div className="p-3">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Kích hoạt tài khoản của bạn</h1>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input 
                            type="text" 
                            value={this.state.txtID} 
                            onChange={(e) => this.setState({ txtID: e.target.value })} 
                            className="form-control form-control-user" 
                            placeholder="ID" 
                            style={{width:"350px"}}
                          />
                        </div>
                        <br/>
                        <div className="form-group">
                          <input 
                            type="text" 
                            value={this.state.txtToken} 
                            onChange={(e) => this.setState({ txtToken: e.target.value })} 
                            className="form-control form-control-user" 
                            placeholder="Nhập mật khẩu" 
                            style={{width:"350px"}}
                          />
                        </div>
                        <br/>
                        <a href="/login" className="btn btn-primary btn-user btn-block" onClick={(e) => this.btnActiveClick(e)}>
                          Kích hoạt
                        </a>
                      </form>
                      <hr/>
                      <div className="text-center">
                        <a className="small" href='/login'>Bạn có sẵn sàng để tạo một tài khoản?</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }

  // event-handlers
  btnActiveClick(e) {
    e.preventDefault();
    const { txtID, txtToken } = this.state;
    if (txtID && txtToken) {
      this.apiActive(txtID, txtToken);
    } else {
      toast.error('Vui lòng nhập đầy đủ thông tin!');
    }
  }

  // apis
  apiActive(id, token) {
    const body = { id, token };
    axios.post('/api/customer/active', body)
      .then((res) => {
        const result = res.data;
        if (result) {
          toast.success('Thao tác thành công');
        } else {
          toast.error('Có lỗi xảy ra!!');
        }
      })
      .catch(() => {
        toast.error('Lỗi kết nối máy chủ!');
      });
  }
}

export default Active;
