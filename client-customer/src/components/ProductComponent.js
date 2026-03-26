import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouter from '../utils/withRouter';
import '../interface/css/bootstrap.min.css'
import '../interface/css/tiny-slider.css'
import '../interface/css/style.css'
import Anh15 from '../interface/images/18.png'
import Anh16 from '../interface/images/envelope-outline.svg'
import btnAdd from '../interface/images/cross.svg'
import gom from '../interface/images/ceramic.png'
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  render() {
    const prods = this.state.products.map((item) => {
      return (
		<div  key={item._id} class="col-12 col-md-4 col-lg-3 mb-5">
						<Link class="product-item" to={'/product/' + item._id}>
							<img src={"data:image/jpg;base64," + item.image} class="img-fluid product-thumbnail"/>
							<h3 class="product-title">{item.name}</h3>
							<strong class="product-price">{item.price}</strong>

							<span class="icon-cross">
								<img src={btnAdd} class="img-fluid"/>
							</span>
						</Link>
					</div> 
      );
    });
    return (
		
      <div>
		<br/>
		<div>
		<form className="search" style={{textAlign:'right'}}>
             <input style={{width:'300px',borderRadius:'4px',borderColor:'#dfc89c'}} type="search" placeholder="Tìm kiếm" className="keyword" value={this.state.txtKeyword} onChange={(e) => { this.setState({ txtKeyword: e.target.value }) }} />
             <input style={{color:'white', background:'#dfc89c', borderColor:'#dfc89c', marginLeft:'-1px'}} type="submit" value="SEARCH" onClick={(e) => this.btnSearchClick(e)} />
           </form>
		</div>
		
		<h2 className="text-center">Danh sách sản phẩm</h2>
      <div class="untree_co-section product-section before-footer-section">
		    <div class="container" >
		      	<div class="row" >
        
        {prods}
		</div>
		    </div>
		</div>
		<br/><br/><br/><br/>
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
				
					</div>
				</footer>
      </div>
    );
  }
  btnSearchClick(e) {
    e.preventDefault();
    this.props.navigate('/product/search/' + this.state.txtKeyword);
  }
  componentDidMount() { // first: /product/...
    const params = this.props.params;
    if (params.cid) {
      this.apiGetProductsByCatID(params.cid);
    } else if (params.keyword) {
      this.apiGetProductsByKeyword(params.keyword);
    }
  }
  componentDidUpdate(prevProps) { // changed: /product/...
    const params = this.props.params;
    if (params.cid && params.cid !== prevProps.params.cid) {
      this.apiGetProductsByCatID(params.cid);
    } else if (params.keyword && params.keyword !== prevProps.params.keyword) {
      this.apiGetProductsByKeyword(params.keyword);
    }
  }
  // apis
  apiGetProductsByKeyword(keyword) {
    axios.get('/api/customer/products/search/' + keyword).then((res) => {
      const result = res.data;
      this.setState({ products: result });
    });
  }
  // apis
  apiGetProductsByCatID(cid) {
    axios.get('/api/customer/products/category/' + cid).then((res) => {
      const result = res.data;
      this.setState({ products: result });
    });
  }
}
export default withRouter(Product);