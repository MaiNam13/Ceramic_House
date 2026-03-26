import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../interface/css/bootstrap.min.css'
import '../interface/css/tiny-slider.css'
import '../interface/css/style.css'
import Anh1 from '../interface/images/truck.svg'
import Anh2 from '../interface/images/bag.svg'
import Anh3 from '../interface/images/return.svg'
import Anh4 from '../interface/images/support.svg'
import Anh5 from '../interface/images/2.jpg'
import Anh6 from '../interface/images/5.jpg'
import Anh7 from '../interface/images/10.jpg'
import Anh8 from '../interface/images/12.png'
import Anh9 from '../interface/images/13.png'
import Anh10 from '../interface/images/14.png'
import Anh12 from '../interface/images/15.jpg'
import Anh13 from '../interface/images/16.jpg'
import Anh14 from '../interface/images/17.jpg'
import Anh15 from '../interface/images/18.png'
import Anh16 from '../interface/images/envelope-outline.svg'
import AnhMain from '../interface/images/10.jpg'
import btnAdd from '../interface/images/cross.svg'
import gom from '../interface/images/ceramic.png'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newprods: [],
      hotprods: []
    };
  }
  render() {
    const newprods = this.state.newprods.map((item) => {
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
    const hotprods = this.state.hotprods.map((item) => {
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
		            <h2 className="text-center">Sản phẩm mới</h2>

        <div class="untree_co-section product-section before-footer-section">
		    <div class="container">
		      	<div class="row">
          
          {newprods}
		  </div>
		    </div>
			</div>
        {this.state.hotprods.length > 0 ?
          <div class="untree_co-section product-section before-footer-section">
            <h2 className="text-center">Sản phẩm đang hot</h2>
			
		  <div class="container">
				<div class="row">
            {hotprods}
			</div>
			</div>
			</div>
          : <div />}
          <div class="why-choose-section">
	<div class="container">
		<div class="row justify-content-between">
			<div class="col-lg-6">
				<h2 class="section-title">Tại sao chọn chúng tôi</h2>
				<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

				<div class="row my-5">
					<div class="col-6 col-md-6">
						<div class="feature">
							<div class="icon">
              <div class="imf-fluid"><img src={Anh1}/></div>
							</div>
							<h3>Nhanh chống &amp; Miễn phí vận chuyển</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

					<div class="col-6 col-md-6">
						<div class="feature">
							<div class="icon">
              <div class="imf-fluid"><img src={Anh2}/></div>
							</div>
							<h3>Dễ dàng mua sắm</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

					<div class="col-6 col-md-6">
						<div class="feature">
							<div class="icon">
              <div class="imf-fluid"><img src={Anh3}/></div>
							</div>
							<h3>Hỗ trợ 24/7</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

					<div class="col-6 col-md-6">
						<div class="feature">
							<div class="icon">
              <div class="imf-fluid"><img src={Anh4}/></div>
							</div>
							<h3>Trả về phản hồi miễn phí</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

				</div>
			</div>

			<div class="col-lg-5">
				<div class="img-wrap">
					<img src={AnhMain} style={{width : '540px'}}/>
				</div>
</div>

		</div>
	</div>
</div>
<div class="we-help-section">
	<div class="container">
		<div class="row justify-content-between">
			<div class="col-lg-7 mb-5 mb-lg-0">
				<div class="imgs-grid">
				<div class="grid grid-1"><img src={Anh5}/></div>
				<div class="grid grid-2"><img src={Anh6}/></div>
				<div class="grid grid-3"><img src={Anh7}/></div>
				</div>
			</div>
			<div class="col-lg-5 ps-lg-5">
				<h2 class="section-title mb-4">Chúng tôi giúp bạn khám phá nghệ thuật gốm thủ công</h2>
				<p>Chúng tôi giúp bạn khám phá nghệ thuật gốm thủ công. Gốm không chỉ là một sản phẩm, mà còn là nghệ thuật. Với sự kết hợp giữa truyền thống và hiện đại, chúng tôi mang đến những tác phẩm gốm tinh tế, phù hợp với mọi không gian</p>

				<ul class="list-unstyled custom-list my-4">
					<li>Sản phẩm gốm tinh xảo, thủ công tỉ mỉ</li>
					<li>Chất liệu tự nhiên, bền đẹp theo thời gian</li>
					<li> Phù hợp với mọi không gian nội thất</li>
					<li>Mang đậm phong cách nghệ thuật truyền thống</li>
				</ul>
				{/* <p><a herf="#" class="btn">Khám phá</a></p> */}
			</div>
		</div>
	</div>
</div>

<div class="popular-product">
	<div class="container">
		<div class="row">

			<div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
				<div class="product-item-sm d-flex">
					<div class="thumbnail">
					<img src={Anh8} style={{width : '120px', height: '120px'}}/>
					</div>
					<div class="pt-3">
						<h3>Bình gốm Nordic</h3>
						<p>Thiết kế tinh tế, đường nét mềm mại, phù hợp trang trí không gian hiện đại. </p>
						{/* <p><a href="#">Đọc thêm</a></p> */}
					</div>
				</div>
			</div>

			<div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
				<div class="product-item-sm d-flex">
					<div class="thumbnail">
					<img src={Anh9} style={{width : '120px', height: '120px'}}/>
					</div>
					<div class="pt-3">
						<h3>Bình gốm Kruzo Aero</h3>
						<p>Sự kết hợp giữa nghệ thuật thủ công và nét đẹp cổ điển, tạo điểm nhấn sang trọng.</p>
						{/* <p><a href="#">Đọc thêm</a></p> */}
					</div>
				</div>
			</div>

			<div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
				<div class="product-item-sm d-flex">
					<div class="thumbnail">
					<img src={Anh10} style={{width : '120px', height: '120px'}}/>
					</div>
					<div class="pt-3">
						<h3>Bình gốm Ergonomic</h3>
						<p>Kiểu dáng độc đáo, chất liệu bền đẹp, mang đến vẻ ấm áp cho ngôi nhà của bạn.</p>
						{/* <p><a href="#">Đọc thêm</a></p> */}
					</div>
				</div>
			</div>

		</div>
	</div>
</div>



<div class="blog-section">
	<div class="container">
		<div class="row mb-5">
			<div class="col-md-6">
				<h2 class="section-title">Blog gần đây</h2>
			</div>
			<div class="col-md-6 text-start text-md-end">
				<a href="#" class="more">Xem tất cả bài post</a>
			</div>
		</div>

		<div class="row">

			<div class="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
				<div class="post-entry">
					<a href="#" class="post-thumbnail"><img src={Anh12} style={{width : '400px', height: '300px'}}/></a>
					<div class="post-content-entry">
						<h3><a href="#">Ý tưởng trang trí nhà với gốm sứ độc đáo</a></h3>
						<div class="meta">
							<span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
						</div>
					</div>
				</div>
			</div>

			<div class="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
				<div class="post-entry">
					<a href="#" class="post-thumbnail"><img src={Anh13} style={{width : '400px', height: '300px'}}/></a>
					<div class="post-content-entry">
						<h3><a href="#">Cách bảo quản và làm sạch đồ gốm đúng cách</a></h3>
						<div class="meta">
							<span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
						</div>
					</div>
				</div>
			</div>

			<div class="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
				<div class="post-entry">
					<a href="#" class="post-thumbnail"><img src={Anh14} style={{width : '400px', height: '300px'}}/></a>
					<div class="post-content-entry">
						<h3><a href="#">Lựa chọn gốm nghệ thuật cho không gian nhỏ</a></h3>
						<div class="meta">
							<span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</div>

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
					<p class="mb-2 text-center text-lg-start">Copyright &copy; <a href="https://untree.co">Untree.co</a> Distributed By <a hreff="https://themewagon.com">ThemeWagon</a>  
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
  componentDidMount() {
    this.apiGetNewProducts();
    this.apiGetHotProducts();
  }
  // apis
  apiGetNewProducts() {
    axios.get('/api/customer/products/new').then((res) => {
      const result = res.data;
      this.setState({ newprods: result });
    });
  }
  apiGetHotProducts() {
    axios.get('/api/customer/products/hot').then((res) => {
      const result = res.data;
      this.setState({ hotprods: result });
    });
  }
}
export default Home;