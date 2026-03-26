import React, { Component } from "react";
import MyContext from "../contexts/MyContexts";
import Home from "./HomeComponent";
import Category from "./CategoryComponent";
import Order from "./OrderComponent";
import Customer from "./CustomerComponent";
import Product from "./ProductComponent";
import hinh from "../dist/img/hinh.png";
import { Link, Routes, Route, Navigate } from "react-router-dom";

class Main extends Component {
  static contextType = MyContext;
  state = {
    showDropdown: false,
  };

  toggleSidebar = () => {
    document.body.classList.toggle("sidebar-toggled");
    document.getElementById("accordionSidebar").classList.toggle("toggled");
  };

  toggleDropdown = () => {
    this.setState({ showDropdown: !this.state.showDropdown });
  };

  handleClickOutside = (event) => {
    if (!event.target.closest(".user-menu")) {
      this.setState({ showDropdown: false });
    }
  };

  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  }
 // event-handlers
 lnkLogoutClick() {
  this.context.setToken('');
  this.context.setUsername('');
}
  render() {
    if (this.context.token !== "") {
      return (
        <div id="page-top">
          <div id="wrapper">
            {/* Sidebar */}
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
              <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/admin/home">
                <div className="sidebar-brand-icon rotate-n-15">
                  <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
              </Link>
              <hr className="sidebar-divider my-0" />
              <li className="nav-item active">
                <Link className="nav-link" to="/admin/home">
                  <i className="fas fa-fw fa-tachometer-alt"></i>
                  <span>TRANG CHỦ</span>
                </Link>
              </li>
              <hr className="sidebar-divider" />
              <div className="sidebar-heading">Interface</div>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/category">
                  <i className="fas fa-list-ul"></i>
                  <span>DANH MỤC SẢN PHẨM</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/product">
                  <i className="fas fa-paw"></i>
                  <span>SẢN PHẨM</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/order">
                  <i className="fas fa-truck-moving"></i>
                  <span>ĐƠN HÀNG</span>
                </Link> 
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/customer">
                  <i className="fas fa-user"></i>
                  <span>KHÁCH HÀNG</span>
                </Link>
              </li>
              <hr className="sidebar-divider d-none d-md-block" />
              <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle" onClick={this.toggleSidebar}></button>
              </div>
            </ul>

            {/* Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                {/* Topbar */}
                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                  <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3" onClick={this.toggleSidebar}>
                    <i className="fa fa-bars"></i>
                  </button>
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown no-arrow user-menu">
                    <a className="nav-link dropdown-toggle" href="#" role="button" onClick={this.toggleDropdown}>
  <span style={{ fontSize: '12px', color: '#4e73df', marginRight: '8px' }}>
    <b>{this.context.username}</b>
  </span>
  <img src={hinh} alt='avta' style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
</a>

                      {this.state.showDropdown && (
                        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in show">
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" ></i>
                            <Link to='/admin/home'  style={{ color: 'red', textDecoration: 'none' }} onClick={() => this.lnkLogoutClick()}>Đăng xuất</Link>
                          </a>
                        </div>
                      )}
                    </li>
                  </ul>
                </nav>

                {/* Main Content */}
                <div className="container-fluid">
                  <Routes>
                    <Route path="/admin" element={<Navigate replace to="/admin/home" />} />
                    <Route path="/admin/category" element={<Category />} />
                    <Route path="/admin/home" element={<Home />} />
                    <Route path="/admin/product" element={<Product />} />
                    <Route path="/admin/customer" element={<Customer />} />
                    <Route path="/admin/order" element={<Order />} />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <div />;
  }
}

export default Main;
