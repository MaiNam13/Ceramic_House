import axios from 'axios';
import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import MyContext from '../contexts/Mycontext';
import Anh15 from '../interface/images/18.png'
import gom from '../interface/images/ceramic.png'
import Anh16 from '../interface/images/envelope-outline.svg'
import { ToastContainer, toast } from 'react-toastify';
class Myprofile extends Component {
  static contextType = MyContext; // using this.context to access global state
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
    if (this.context.token === '') return (<Navigate replace to='/login' />);
    return (
      <div>
      <div class="align-center w-50">
        <h2 className="text-center">Thông tin cá nhân</h2>
        <form>
        <div class="form-group row mb-3">
          <label for="inputUsername" class="col-form-label col-md-3">Tên tài khoản</label>
          <div class="col-md-9">
            <input type="text" value={this.state.txtUsername} onChange={(e) => { this.setState({ txtUsername: e.target.value }) }} class="form-control h-100" id="inputUsername"/>
          </div>
        </div>
        <div class="form-group row mb-3">
          <label for="inputPassword" class="col-form-label col-md-3">Mật khẩu</label>
          <div class="col-md-9">
            <input type="password" value={this.state.txtPassword} onChange={(e) => { this.setState({ txtPassword: e.target.value }) }}  class="form-control h-100" id="inputPassword"/>
          </div>
        </div>
        <div class="form-group row mb-3">
        <label for="inputName" class="col-form-label col-md-3">Tên</label>
          <div class="col-md-9">
          <input type="text" value={this.state.txtName} onChange={(e) => { this.setState({ txtName: e.target.value }) }}  class="form-control h-100" id="inputName"/>
          </div>
        </div>
        <div class="form-group row mb-3">
        <label for="inputPhone" class="col-form-label col-md-3">Số điện thoại</label>
          <div class="col-md-9">
          <input type="tel" value={this.state.txtPhone} onChange={(e) => { this.setState({ txtPhone: e.target.value }) }}  class="form-control h-100" id="inputPhone"/>
          </div>
        </div>
        <div class="form-group row mb-3">
        <label for="inputEmail" class="col-form-label col-md-3">Email</label>
          <div class="col-md-9">
          <input type="email" value={this.state.txtEmail} onChange={(e) => { this.setState({ txtEmail: e.target.value }) }}  class="form-control h-100" id="inputEmail"/>
          </div>
        </div>
        <div class="align-center">
        <input class="btn btn-primary" type="submit" value="UPDATE" onClick={(e) => this.btnUpdateClick(e)} />
        </div>
         

        </form>
        
      </div>
      <br/><br/><br/>
      <footer class="footer-section">
	<div class="container relative">

		<div class="sofa-img">
		<img src={Anh15}/>
		</div>

		<div class="row">
			<div class="col-lg-8">
				<div class="subscription-form">
					<h3 class="d-flex align-items-center"><span class="me-1"><img src={Anh16}/></span><span>Đăng ký tin</span></h3>

					<form action="#" class="row g-3">
						<div class="col-auto">
						<input type="text" placeholder="Nhập tên của bạn" class="form-control"/>
						</div>
						<div class="col-auto">
						<input type="text" placeholder="Nhập email của bạn" class="form-control"/>
						</div>
						<div class="col-auto">
							<button class="btn btn-primary">
								<span>Gửi</span>
							</button>
						</div>
					</form>

				</div>
			</div>
		</div>

		<div class="row g-5 mb-5">
			<div class="col-lg-4">
				<div class="mb-4 footer-logo-wrap"><a href="#" class="footer-logo"><span><img src={gom}style={{width: '50%', height: 'auto', display: 'block' ,margin: '0 auto'}}/></span></a></div>
                <p class="mb-4">Gốm sứ là một phần không thể thiếu trong nghệ thuật và đời sống. Những sản phẩm gốm không chỉ mang giá trị thẩm mỹ mà còn thể hiện sự tinh tế qua từng đường nét. Từ các bình hoa, chén đĩa đến những tác phẩm nghệ thuật, gốm sứ luôn mang lại vẻ đẹp mộc mạc nhưng đầy cuốn hút</p>
        
				<ul class="list-unstyled custom-social">
					<li><a href="#"><span class="fa fa-brands fa-facebook-f"></span></a></li>
					<li><a href="#"><span class="fa fa-brands fa-twitter"></span></a></li>
					<li><a href="#"><span class="fa fa-brands fa-instagram"></span></a></li>
					<li><a href="#"><span class="fa fa-brands fa-linkedin"></span></a></li>
				</ul>
			</div>

			<div class="col-lg-8">
				<div class="row links-wrap">
					<div class="col-6 col-sm-6 col-md-3">
						<ul class="list-unstyled">
							<li><a href="#">Về chúng tôi</a></li>
							<li><a href="#">Dịch vụ</a></li>
							<li><a href="#">Blog</a></li>
							<li><a href="#">Liên hệ</a></li>
						</ul>
					</div>

					<div class="col-6 col-sm-6 col-md-3">
						<ul class="list-unstyled">
							<li><a href="#">Hỗ trợ</a></li>
							<li><a href="#">Kiến thức cơ bản</a></li>
							<li><a href="#">Tin nhắn trực tiếp</a></li>
						</ul>
					</div>

					<div class="col-6 col-sm-6 col-md-3">
						<ul class="list-unstyled">
							<li><a href="#">Nghề nghiệp</a></li>
							<li><a href="#">Nhóm của chúng tôi</a></li>
							<li><a href="#">Khả năng lãnh đạo</a></li>
							<li><a href="#">Chính sách bảo mật</a></li>
						</ul>
					</div>

					
				</div>
			</div>

		</div>

		<div class="border-top copyright">
			<div class="row pt-4">
				<div class="col-lg-6">
					<p class="mb-2 text-center text-lg-start">Copyright &copy;. All Rights Reserved. &mdash; Designed with love by <a href="https://untree.co">Untree.co</a> Distributed By <a hreff="https://themewagon.com">ThemeWagon</a>  
    </p>
				</div>

				<div class="col-lg-6 text-center text-lg-end">
					<ul class="list-unstyled d-inline-flex ms-auto">
						<li class="me-4"><a href="#">Terms &amp; Conditions</a></li>
						<li><a href="#">Privacy Policy</a></li>
					</ul>
				</div>

			</div>
		</div>
    <ToastContainer />
	</div>
</footer>
      </div>
    );
  }
  componentDidMount() {
    if (this.context.customer) {
      this.setState({
        txtUsername: this.context.customer.username,
        txtPassword: this.context.customer.password,
        txtName: this.context.customer.name,
        txtPhone: this.context.customer.phone,
        txtEmail: this.context.customer.email
      });
    }
  }
  // event-handlers
  btnUpdateClick(e) {
    e.preventDefault();
    const { txtUsername, txtPassword, txtName, txtPhone, txtEmail } = this.state;

    if (txtUsername && txtPassword && txtName && txtPhone && txtEmail) {
      const customer = { username: txtUsername, password: txtPassword, name: txtName, phone: txtPhone, email: txtEmail };
      this.apiPutCustomer(this.context.customer._id, customer);
    } else {
      toast.error('Vui lòng nhập đầy đủ thông tin!', { position: "top-right" });
    }
  }

  // apis
  apiPutCustomer(id, customer) {
    const config = { headers: { 'x-access-token': this.context.token } };
    axios.put(`/api/customer/customers/${id}`, customer, config).then((res) => {
      const result = res.data;
      if (result) {
        toast.success('Thao tác thành công!', { position: "top-right" });
        this.context.setCustomer(result);
      } else {
        toast.error('Có lỗi xảy ra!', { position: "top-right" });
      }
    }).catch(() => {
      toast.error('Lỗi kết nối đến server!', { position: "top-right" });
    });
  }
}

export default Myprofile;