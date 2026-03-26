// import axios from 'axios';
// import React, { Component } from 'react';
// import MyContext from '../contexts/Mycontext';
// import withRouter from '../utils/withRouter';
// import '../interface/css/bootstrap.min.css'
// import '../interface/css/tiny-slider.css'
// import '../interface/css/style.css'
// import Anh15 from '../interface/images/18.png'
// class Login extends Component {
//   static contextType = MyContext; 
//   constructor(props) {
//     super(props);
//     this.state = {
//       txtUsername: '',
//       txtPassword: ''
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
// 								<h1 class="h4 text-gray-900 mb-4">Đăng nhập</h1>
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
// 									<div class="custom-control custom-checkbox small">
// 										<input type="checkbox" class="custom-control-input" id="customCheck"/>
// 										<label class="custom-control-label" for="customCheck">Lưu đăng nhập</label>
// 									</div>
// 								</div>
// 								<br/>
// 								<a href="index.html" class="btn btn-primary btn-user btn-block"  onClick={(e) => this.btnLoginClick(e)} >
// 									Đăng nhập
// 								</a>
// 							</form>
// 							<hr/>
// 							<div class="text-center">
// 								<a class="small"href='/signup'>Tạo tài khoản mới!</a>
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
//   btnLoginClick(e) {
//     e.preventDefault();
//     const username = this.state.txtUsername;
//     const password = this.state.txtPassword;
//     if (username && password) {
//       const account = { username: username, password: password };
//       this.apiLogin(account);
//     } else {
//       alert('Vui lòng nhập đầy đủ thông tin!');
//     }
//   }
//   // apis
//   apiLogin(account) {
//     axios.post('/api/customer/login', account).then((res) => {
//       const result = res.data;
//       if (result.success === true) {
//         this.context.setToken(result.token);
//         this.context.setCustomer(result.customer);
//         this.props.navigate('/home');
//       } else {
//         alert(result.message);
//       }
//     });
//   }
// }
// export default withRouter(Login);



import axios from 'axios';
import React, { Component } from 'react';
import MyContext from '../contexts/Mycontext';
import withRouter from '../utils/withRouter';
import Anh15 from '../interface/images/18.png';

class Login extends Component {
  static contextType = MyContext; 
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: '',
      txtPassword: ''
    };
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          {/* Cột hình ảnh */}
          <div style={styles.imageContainer}>
            <img src={Anh15} alt="Login Illustration" style={styles.image} />
          </div>

          {/* Cột đăng nhập */}
          <div style={styles.formContainer}>
            <h1 style={styles.title}>Đăng nhập</h1>

            <form style={styles.form}>
              <input 
                type="text" 
                value={this.state.txtUsername} 
                onChange={(e) => this.setState({ txtUsername: e.target.value })} 
                placeholder="Tài khoản" 
                style={styles.input} 
              />

              <input 
                type="password" 
                value={this.state.txtPassword} 
                onChange={(e) => this.setState({ txtPassword: e.target.value })} 
                placeholder="Mật khẩu" 
                style={styles.input} 
              />

              <div style={styles.checkboxContainer}>
                <input type="checkbox" id="rememberMe" style={styles.checkbox} />
                <label htmlFor="rememberMe" style={styles.checkboxLabel}>Lưu đăng nhập</label>
              </div>

              <button onClick={(e) => this.btnLoginClick(e)} style={styles.button}>Đăng nhập</button>
            </form>

            <hr style={styles.divider} />

            <div style={styles.registerLink}>
              <a href='/signup'>Tạo tài khoản mới!</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  btnLoginClick(e) {
    e.preventDefault();
    const username = this.state.txtUsername;
    const password = this.state.txtPassword;
    if (username && password) {
      const account = { username, password };
      this.apiLogin(account);
    } else {
      alert('Vui lòng nhập đầy đủ thông tin!');
    }
  }

  apiLogin(account) {
    axios.post('/api/customer/login', account).then((res) => {
      const result = res.data;
      if (result.success) {
        this.context.setToken(result.token);
        this.context.setCustomer(result.customer);
        this.props.navigate('/home');
      } else {
        alert(result.message);
      }
    });
  }
}

export default withRouter(Login);

// CSS-in-JS
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#F7F5EE',
  },
  card: {
    display: 'flex',
    width: '800px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#FDF5E6',
  },
  image: {
    width: '100%',
    maxWidth: '250px',
    objectFit: 'cover',
  },
  formContainer: {
    flex: 1,
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#654321',
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    padding: '12px',
    marginBottom: '15px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
    outline: 'none',
    transition: 'border 0.3s',
  },
  button: {
    width: '95%',
    padding: '12px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#D2B48C',
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '90%',
    marginBottom: '10px',
  },
  checkbox: {
    marginRight: '10px',
  },
  checkboxLabel: {
    fontSize: '14px',
    color: '#555',
  },
  divider: {
    width: '90%',
    margin: '20px 0',
    borderTop: '1px solid #ddd',
  },
  registerLink: {
    fontSize: '14px',
    color: '#654321',
  },
};
