// import axios from 'axios';
// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import withRouter from '../utils/withRouter';
// import MyContext from '../contexts/Mycontext';
// import '../interface/css/bootstrap.min.css'
// import '../interface/css/tiny-slider.css'
// import '../interface/css/style.css'
// import ceramic from '../interface/images/ceramic.png';
// class Menu extends Component {
//   static contextType = MyContext;
//   constructor(props) {
//     super(props);
//     this.state = {
//       categories: [],
//       txtKeyword: ''
//     };
//   }
//   render() {
//     const cates = this.state.categories.map((item) => {
//       return (
//         <li key={item._id} className="nav-link"><Link style={{ textDecoration: "none"}} to={'/product/category/' + item._id}>{item.name}</Link></li>
//       );
//     });
//     return (
//       <div>
// <nav class="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar" >

// <div class="container">
//   {/* <a class="navbar-brand" href="#">Furni<span></span></a> */}
//   <Link to="/home" className="navbar-brand" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '#ffffff', padding: 0, height: '100px'}}>
//                 <img src={ceramic} alt='logo' style={{ width: '150px', height: 'auto',marginLeft:'-25px'}} />
//               </Link>
//   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>

//   <div class="collapse navbar-collapse" id="navbarsFurni">
//     <ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
//       <li class="nav-item active">
//         <Link class="nav-link" to='/'  style={{ textDecoration: "none"}}>Trang chủ</Link>
//       </li>
//       {cates}
//       <li class="nav-link">
//       {this.context.token === '' ?
//             <div><Link to='/login'style={{ textDecoration: "none"}}>Đăng nhập</Link></div>
//             :
//             <div>Xin chào <b>{this.context.customer.name}</b> | <Link to='/home' onClick={() => this.lnkLogoutClick()}>Đăng xuất</Link> | <Link to='/myprofile'>Thông tin</Link> | <Link to='/myorders'>Đơn đặt</Link></div>
//           }
//       </li>
//       <li class="nav-link" >
//       <Link to='/mycart' style={{ textDecoration: "none"}} >Giỏ hàng</Link><b>{this.context.mycart.length}</b>
//       </li>
//     </ul>
//   </div>
// </div>
  
// </nav>
// </div>

//       // <div className="border-bottom">
//       //   <div className="float-left">
//       //     <ul className="menu">
//       //       <li className="menu"><Link to='/'>Home</Link></li>
//       //       {cates}
//       //       <li className="menu">
//       //       {this.context.token === '' ?
//       //       <div><Link to='/login'>Login</Link> | <Link to='/signup'>Sign-up</Link> | <Link to='/active'>Active</Link></div>
//       //       :
//       //       <div>Hello <b>{this.context.customer.name}</b> | <Link to='/home' onClick={() => this.lnkLogoutClick()}>Logout</Link> | <Link to='/myprofile'>My profile</Link> | <Link to='/myorders'>My orders</Link></div>
//       //     }
//       //       </li>
//       //       <li className="menu">
//       //       <Link to='/mycart'>My cart</Link> have <b>{this.context.mycart.length}</b> items
//       //       </li>
//       //     </ul>
//       //   </div>
//       //   <div className="float-right">
//       //     <form className="search">
//       //       <input type="search" placeholder="Enter keyword" className="keyword" value={this.state.txtKeyword} onChange={(e) => { this.setState({ txtKeyword: e.target.value }) }} />
//       //       <input type="submit" value="SEARCH" onClick={(e) => this.btnSearchClick(e)} />
//       //     </form>
//       //   </div>
//       //   <div className="float-clear" />
//       // </div>
      
//     );
//   }
//   // event-handlers
//   btnSearchClick(e) {
//     e.preventDefault();
//     this.props.navigate('/product/search/' + this.state.txtKeyword);
//   }
//   componentDidMount() {
//     this.apiGetCategories();
//   }
//   lnkLogoutClick() {
//     this.context.setToken('');
//     this.context.setCustomer(null);
//     this.context.setMycart([]);
//   }
//   // apis
//   apiGetCategories() {
//     axios.get('/api/customer/categories').then((res) => {
//       const result = res.data;
//       this.setState({ categories: result });
//     });
//   }
// }
// export default withRouter(Menu);


import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouter from '../utils/withRouter';
import MyContext from '../contexts/Mycontext';
import ceramic from '../interface/images/ceramic.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

class Menu extends Component {
  static contextType = MyContext;
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      txtKeyword: '',
      showDropdown: false
    };
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({ showDropdown: !prevState.showDropdown }));
  };

  render() {
    const currentPath = window.location.pathname;
    const { showDropdown } = this.state;
    
    const cates = this.state.categories.map((item) => (
      <li key={item._id} className={`nav-item ${currentPath.includes('/product/category/' + item._id) ? 'active' : ''}`}>
        <Link className="nav-link" to={`/product/category/${item._id}`}>{item.name}</Link>
      </li>
    ));

    return (
      <div>
        <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container">
            <Link to="/home" className="navbar-brand" style={{ display: 'flex', alignItems: 'center', height: '100px' }}>
              <img src={ceramic} alt='logo' style={{ width: '150px', height: 'auto', marginLeft: '-25px' }} />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsFurni">
              <ul className="custom-navbar-nav navbar-nav ms-auto">
                <li className={`nav-item ${currentPath === '/' ? 'active' : ''}`}>
                  <Link className="nav-link" to="/">Trang chủ</Link>
                </li>
                {cates}
                <li className={`nav-item ${currentPath === '/mycart' ? 'active' : ''}`}>
                  <Link className="nav-link" to="/mycart">Giỏ hàng <b>{this.context.mycart.length}</b></Link>
                </li>
                <li 
                  className="nav-item dropdown"
                  onMouseEnter={this.toggleDropdown}
                  onMouseLeave={this.toggleDropdown}
                  style={{ position: 'relative' }}
                >
                  <div 
                    className="nav-link" 
                    style={{ 
                      cursor: 'pointer', 
                      display: 'flex', 
                      alignItems: 'center', 
                      fontSize: '20px', 
                      color: '#64483c', 
                      marginTop: '-5px' 
                    }}
                  >
                    <i 
                      className="fas fa-user" 
                      style={{ 
                        borderRadius: '50%', 
                        width: '40px', 
                        height: '40px', 
                        marginRight: '8px', 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center' 
                      }}
                    ></i>
                    {this.context.customer ? this.context.customer.name : 'Tài khoản'}
                  </div>

                  {showDropdown && (
                    <ul 
                      className="dropdown-menu show" 
                      style={{ 
                        position: 'absolute', 
                        right: 0, 
                        backgroundColor: 'white', 
                        boxShadow: '0px 4px 6px rgba(0,0,0,0.1)', 
                        borderRadius: '8px', 
                        padding: '10px', 
                        listStyle: 'none', 
                        minWidth: '150px',
                        zIndex: 1000
                      }}
                    >
                      {this.context.token === '' ? (
                        <li>
                          <Link 
                            className="dropdown-item" 
                            to="/login" 
                            onMouseDown={(e) => {
                              e.target.style.backgroundColor = '#d2b48c';
                              setTimeout(() => e.target.style.backgroundColor = '', 150);
                            }}
                          >
                            Đăng nhập
                          </Link>
                        </li>
                      ) : (
                        <>
                          <li>
                            <Link 
                              className="dropdown-item" 
                              to="/myprofile" 
                              onMouseDown={(e) => {
                                e.target.style.backgroundColor = '#d2b48c';
                                setTimeout(() => e.target.style.backgroundColor = '', 150);
                              }}
                            >
                              Thông tin
                            </Link>
                          </li>
                          <li>
                            <Link 
                              className="dropdown-item" 
                              to="/myorders" 
                              onMouseDown={(e) => {
                                e.target.style.backgroundColor = '#d2b48c';
                                setTimeout(() => e.target.style.backgroundColor = '', 150);
                              }}
                            >
                              Đơn đặt
                            </Link>
                          </li>
                          <li>
                            <Link 
                              className="dropdown-item" 
                              to="/home" 
                              onClick={() => this.lnkLogoutClick()} 
                              onMouseDown={(e) => {
                                e.target.style.backgroundColor = '#d2b48c';
                                setTimeout(() => e.target.style.backgroundColor = '', 150);
                              }}
                            >
                              Đăng xuất
                            </Link>
                          </li>
                        </>
                      )}
                    </ul>
                  )}
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }

  componentDidMount() {
    this.apiGetCategories();
  }

  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setCustomer(null);
    this.context.setMycart([]);
  }

  apiGetCategories() {
    axios.get('/api/customer/categories').then((res) => {
      this.setState({ categories: res.data });
    });
  }
}

export default withRouter(Menu);
