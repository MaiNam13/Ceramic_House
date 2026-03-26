// import React, { Component } from 'react';
// import MyContext from '../contexts/Mycontext';
// import CartUtil from '../utils/CartUtil';
// import axios from 'axios';
// import withRouter from '../utils/withRouter';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'react-toastify/dist/ReactToastify.css';
// class Mycart extends Component {
//   static contextType = MyContext; 
//   render() {
//     const mycart = this.context.mycart.map((item, index) => {
//       return (
//         <tbody>
//           <tr key={item.product._id} className="datatable" style={{fontSize:'20px'}}>
//           <td class="product-thumbnail">
//               <img src={"data:image/jpg;base64," + item.product.image} alt="Image" class="img-fluid" />
//             </td>
//             <td>{item.product.name}</td>
//             <td>{item.product.price}</td>
//             <td>{item.quantity}</td>
//             <td>{item.product.price * item.quantity}</td>
//             <td>
//                <a 
//                 href="#" 
//                 className="btn btn-black btn-sm" 
//                 onClick={() => this.lnkRemoveClick(item.product._id)}
//                 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}
//               >
//                 <i className="fas fa-trash-alt" style={{ color: '#ff0000' }}></i>
//               </a>

// </td>

//             <td>
              
//             </td>
//           </tr>
//         </tbody>
//       );
//     });
//     return (
//       <div class="untree_co-section before-footer-section">
//         <div class="container">
//           <div class="row mb-5" style={{fontStyle:'20px'}}>
//             <div class="site-blocks-table">
//               <table class="table">
//                 <thead>
//                   <tr>
//                     <th class="product-thumbnail">Hình ảnh</th>
//                     <th class="product-name">Sản phẩm</th>
//                     <th class="product-price">Giá</th>
//                     <th class="product-quantity">Số lượng</th>
//                     <th class="product-total">Tổng cộng</th>
//                     <th class="product-remove">Xóa</th>
//                   </tr>
//                 </thead>
//                 {mycart}
//       </table>
//             </div>
//           </div>
//         </div>
//         <div class="row">
//                   <div class="col-md-6 pl-5">
//                     <div class="row justify-content-end">
//                       <div class="col-md-7">
//                         <div class="row">
//                           <div class="col-md-12 text-right border-bottom mb-5">
//                             <h3 class="text-black h4 text-uppercase">Tổng số giỏ hàng</h3>
//                           </div>
//                         </div>
//                         <div class="row mb-5" style={{fontSize:'20px'}}>
//                           <div class="col-md-6">
//                             <span class="text-black">Tổng cộng</span>
//                           </div>
//                           <div class="col-md-6 text-right">
//                             <strong class="text-black">{CartUtil.getTotal(this.context.mycart)}</strong>
//                           </div>
//                         </div>

//                         <div class="row">
//                           <div class="col-md-12" style={{marginBottom:'90px'}}>
//                             <span className="link" class="btn btn-black btn-lg py-3 btn-block" onClick={() => this.lnkCheckoutClick()}>Tiến hành kiểm tra</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//       </div>
//     );
//   }
//   // event-handlers
//   lnkRemoveClick(id) {
//     const mycart = this.context.mycart;
//     const index = mycart.findIndex(x => x.product._id === id);
//     if (index !== -1) { // found, remove item
//       mycart.splice(index, 1);
//       this.context.setMycart(mycart);
//     }
//   }
//   // event-handlers
//   lnkCheckoutClick() {
//     if (window.confirm('Bạn có chắc chắn không?')) {
//       if (this.context.mycart.length > 0) {
//         const total = CartUtil.getTotal(this.context.mycart);
//         const items = this.context.mycart;
//         const customer = this.context.customer;
//         if (customer) {
//           this.apiCheckout(total, items, customer);
//         } else {
//           this.props.navigate('/login');
//         }
//       } else {
//         alert('Giỏ hàng của bạn bị trống!');
//       }
//     }
//   }
//   // apis
//   apiCheckout(total, items, customer) {
//     const body = { total: total, items: items, customer: customer };
//     const config = { headers: { 'x-access-token': this.context.token } };
//     axios.post('/api/customer/checkout', body, config).then((res) => {
//       const result = res.data;
//       if (result) {
//         alert('Thao tác thành công!');
//         this.context.setMycart([]);
//         this.props.navigate('/home');
//       } else {
//         alert('Có lỗi xảy ra!');
//       }
//     });
//   }
// }
// export default withRouter(Mycart);


import React, { Component } from 'react';
import MyContext from '../contexts/Mycontext';
import CartUtil from '../utils/CartUtil';
import axios from 'axios';
import withRouter from '../utils/withRouter';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

class Mycart extends Component {
  static contextType = MyContext;

  render() {
    const mycart = this.context.mycart.map((item, index) => (
      <tbody key={index}>
        <tr className="datatable" style={{ fontSize: '20px' }}>
          <td className="product-thumbnail">
            <img src={"data:image/jpg;base64," + item.product.image} alt="Product" className="img-fluid" />
          </td>
          <td>{item.product.name}</td>
          <td>{item.product.price}</td>
          <td>{item.quantity}</td>
          <td>{item.product.price * item.quantity}</td>
          <td>
            <button 
              className="btn btn-black btn-sm" 
              onClick={() => this.lnkRemoveClick(item.product._id)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', border: 'none', background: 'none' }}
            >
              <i className="fas fa-trash-alt" style={{ color: '#ff0000' }}></i>
            </button>
          </td>
        </tr>
      </tbody>
    ));

    return (
      <div className="untree_co-section before-footer-section">
        <div className="container">
          <div className="row mb-5">
            <div className="site-blocks-table">
              <table className="table">
                <thead>
                  <tr>
                    <th className="product-thumbnail">Hình ảnh</th>
                    <th className="product-name">Sản phẩm</th>
                    <th className="product-price">Giá</th>
                    <th className="product-quantity">Số lượng</th>
                    <th className="product-total">Tổng cộng</th>
                    <th className="product-remove">Xóa</th>
                  </tr>
                </thead>
                {mycart}
              </table>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 pl-5">
            <div className="row justify-content-end">
              <div className="col-md-7">
                <div className="row">
                  <div className="col-md-12 text-right border-bottom mb-5">
                    <h3 className="text-black h4 text-uppercase">Tổng số giỏ hàng</h3>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-6">
                    <span className="text-black">Tổng cộng</span>
                  </div>
                  <div className="col-md-6 text-right">
                    <strong className="text-black">{CartUtil.getTotal(this.context.mycart)}</strong>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 mb-5">
                    <button 
                      className="btn btn-black btn-lg py-3 btn-block"
                      onClick={() => this.lnkCheckoutClick()}
                    >
                      Tiến hành kiểm tra
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hiển thị thông báo */}
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar closeOnClick pauseOnHover />
      </div>
    );
  }

  // Xóa sản phẩm khỏi giỏ hàng
  lnkRemoveClick(id) {
    const mycart = [...this.context.mycart];
    const index = mycart.findIndex(x => x.product._id === id);
    if (index !== -1) { 
      mycart.splice(index, 1);
      this.context.setMycart(mycart);
      toast.success('🗑️ Sản phẩm đã được xóa khỏi giỏ hàng!');
    }
  }

  // Kiểm tra và tiến hành thanh toán
  lnkCheckoutClick() {
    if (window.confirm('Bạn có chắc chắn không?')) {
      if (this.context.mycart.length > 0) {
        const total = CartUtil.getTotal(this.context.mycart);
        const items = this.context.mycart;
        const customer = this.context.customer;
        if (customer) {
          this.apiCheckout(total, items, customer);
        } else {
          toast.warn('⚠️ Bạn cần đăng nhập trước khi thanh toán!');
          this.props.navigate('/login');
        }
      } else {
        toast.error('❌ Giỏ hàng của bạn đang trống!');
      }
    }
  }

  // Gửi yêu cầu thanh toán API
  apiCheckout(total, items, customer) {
    const body = { total: total, items: items, customer: customer };
    const config = { headers: { 'x-access-token': this.context.token } };
    
    axios.post('/api/customer/checkout', body, config).then((res) => {
      const result = res.data;
      if (result) {
        toast.success(' Thanh toán thành công!');
        this.context.setMycart([]);
        this.props.navigate('/home');
      } else {
        toast.error(' Có lỗi xảy ra khi thanh toán!');
      }
    }).catch(error => {
      toast.error('Lỗi hệ thống! Vui lòng thử lại sau.');
      console.error(error);
    });
  }
}

export default withRouter(Mycart);
