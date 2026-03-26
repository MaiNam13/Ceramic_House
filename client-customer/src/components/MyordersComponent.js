import axios from 'axios';
import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import MyContext from '../contexts/Mycontext';

class Myorders extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      order: null
    };
  }
  render() {
    if (this.context.token === '') return (<Navigate replace to='/login' />);
    const orders = this.state.orders.map((item) => {
      return (
        <tr key={item._id} className="datatable" onClick={() => this.trItemClick(item)}>
          <td>{new Date(item.cdate).toLocaleString()}</td>
          <td>{item.customer.name}</td>
          <td>{item.customer.phone}</td>
          <td>{item.total}</td>
          <td>{item.status}</td>
        </tr>
      );
    });
    if (this.state.order) {
      var items = this.state.order.items.map((item, index) => {
        return (
          <tr key={item.product._id} className="datatable">
            <td>{index + 1}</td>
            <td>{item.product.name}</td>
            <td><img src={"data:image/jpg;base64," + item.product.image} width="70px" height="70px" alt="" /></td>
            <td>{item.product.price}</td>
            <td>{item.quantity}</td>
            <td>{item.product.price * item.quantity}</td>
          </tr>
        );
      });
    }
    return (
      <div class="untree_co-section before-footer-section">
        <div class="container">
          <div class="row mb-5">
            <div class="site-blocks-table">
              <table class="table">
                <thead>
                  <tr>
                    <th>Ngày khởi tạo</th>
                    <th>Tên khách hàng</th>
                    <th>Số điện thoại</th>
                    <th>Tổng cộng</th>
                    <th>Tình trạng</th>
                  </tr>
                </thead>
                {orders}
                </table>
                </div>
                {this.state.order ?
          <div className="align-center">
            <h2 className="text-center">Chi tiết đặt hàng</h2>
            <div class="site-blocks-table">
              <table class="table">
                <thead>
                  <tr>
                  <th>Số thứ tự</th>
                  <th>Tên sản phẩm</th>
                  <th>Hình ảnh</th>
                  <th>Giá tiền</th>
                  <th>Số lượng </th>
                  <th>Giá tổng</th>
                  </tr>
                </thead>
                {items}
                </table>
                </div>
          </div>
          : <div />}
          </div>
        </div>
        
        
      </div>
    );
  }
  componentDidMount() {
    if (this.context.customer) {
      const cid = this.context.customer._id;
      this.apiGetOrdersByCustID(cid);
    }
  }
  // event-handlers
  trItemClick(item) {
    this.setState({ order: item });
  }
  // apis
  apiGetOrdersByCustID(cid) {
    const config = { headers: { 'x-access-token': this.context.token } };
    axios.get('/api/customer/orders/customer/' + cid, config).then((res) => {
      const result = res.data;
      this.setState({ orders: result });
    });
  }
}
export default Myorders;