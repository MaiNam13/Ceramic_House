import axios from 'axios';
import React, { Component } from 'react';
import withRouter from '../utils/withRouter';
import MyContext from '../contexts/Mycontext';
import Anh15 from '../interface/images/18.png'
import Anh16 from '../interface/images/envelope-outline.svg'
import gom from '../interface/images/ceramic.png'
import { ToastContainer, toast } from 'react-toastify';
class ProductDetail extends Component {
  static contextType = MyContext; // using this.context to access global stat
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      txtQuantity: 1
    };
  }
  render() {
    const prod = this.state.product;
    if (prod != null) {
      return (
        <div>
        <h2 style={{ textAlign: "center", color: "#3e2723", marginBottom: "20px",marginTop:'70px' }}>
          Chi Tiết Sản Phẩm
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "80vh",
            marginBottom: '70px'
          }}
        >
          <div
            style={{
              background: "#f9f3e9",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              width: "500px",
              textAlign: "center",
            }}
          >
            <img
              src={"data:image/jpg;base64," + prod.image}
              alt=""
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
              }}
            />
            <h1
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginTop: "10px",
                color: "#3e2723",
              }}
            >
              {prod.name}
            </h1>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#bf360c",
              }}
            >
              {prod.price}đ
            </p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p
                style={{
                  fontSize: "16px",
                  color: "#5d4037",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                Số lượng:
                <input
                  style={{
                    width: "60px",
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "16px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                  type="number"
                  min="1"
                  max="99"
                  value={this.state.txtQuantity}
                  onChange={(e) => this.setState({ txtQuantity: e.target.value })}
                />
              </p>
              <div style={{ marginLeft: "auto" }}>
                <input
                  style={{
                    background: "#cfa980",
                    border: "none",
                    padding: "10px 15px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "0.3s",
                    color: "#fff",
                  }}
                  type="submit"
                  value="Thêm vào giỏ hàng"
                  onMouseOver={(e) => (e.target.style.background = "#b17453")}
                  onMouseOut={(e) => (e.target.style.background = "#cfa980")}
                  onClick={(e) => this.btnAdd2CartClick(e)}
                />
              </div>
            </div>
            
          </div>
     
      
      
        {/* <div className="align-center">
          <h2 className="text-center">Chi Tiết Sản Phẩm</h2>
          <figure className="caption-right">
            <img src={"data:image/jpg;base64," + prod.image} width="400px" height="400px" alt="" />
            <figcaption style={{fontSize:"18px"}}>
              <form >
                <table >
                  <tbody>
                    <tr >
                      <td align="center">ID:</td>
                      <td>{prod._id}</td>
                    </tr>
                    <tr>
                      <td align="center"></td>
                      <td>{prod.name}</td>
                    </tr>
                    <tr>
                      <td align="center"></td>
                      <td>{prod.price}</td>
                    </tr>
                    <tr>
                      <td align="center"></td>
                      <td>{prod.category.name}</td>
                    </tr>
                    <tr>
                      <td align="center"></td>
                      <td><input type="number" min="1" max="99" value={this.state.txtQuantity} onChange={(e) => { this.setState({ txtQuantity: e.target.value }) }} /></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td ><input class="btn btn-primary mx-1" type="submit" value="Thêm vào giỏ hàng" onClick={(e) => this.btnAdd2CartClick(e)} /></td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </figcaption>
          </figure> */}
          
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
<ToastContainer />
        </div>
      );
    }
    return (<div />);
  }
  componentDidMount() {
    const params = this.props.params;
    this.apiGetProduct(params.id);
  }

  apiGetProduct(id) {
    axios.get('/api/customer/products/' + id).then((res) => {
      const result = res.data;
      this.setState({ product: result });
    });
  }

  btnAdd2CartClick(e) {
    e.preventDefault();
    const product = this.state.product;
    const quantity = parseInt(this.state.txtQuantity);
    if (quantity) {
      const mycart = this.context.mycart;
      const index = mycart.findIndex(x => x.product._id === product._id);
      if (index === -1) { 
        const newItem = { product: product, quantity: quantity };
        mycart.push(newItem);
      } else { 
        mycart[index].quantity += quantity;
      }
      this.context.setMycart(mycart);
      toast.success('Thao tác thành công!');
    } else {
      toast.error('Vui lòng nhập số lượng!');
    }
  }
}
export default withRouter(ProductDetail);