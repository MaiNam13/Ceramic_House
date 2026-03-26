import axios from 'axios';
import React, { Component } from 'react';
import MyContext from '../contexts/MyContexts';
import { ToastContainer, toast } from 'react-toastify';


class ProductDetail extends Component {
  static contextType = MyContext;

  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      txtID: '',
      txtName: '',
      txtPrice: 0,
      cmbCategory: '',
      imgProduct: '',
    };
  }

  render() {
    const cates = this.state.categories.map((cate) => (
      <option key={cate._id} value={cate._id} selected={this.props.item && cate._id === this.props.item.category._id}>
        {cate.name}
      </option>
    ));

    return (
      <div>
      <h2 className="text-center" style={{ textAlign: 'center', marginBottom: '20px', fontSize: '24px', color: '#333' }}>PRODUCT DETAIL</h2>
      <div className="float-right" style={{ maxWidth: '500px', margin: '2px auto', padding: '34px', border: '1px solid #ddd', borderRadius: '8px', background: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
  
  <form >
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <tbody>
        <tr>
          <td style={{paddingTop:'15px'}}>Tên sản phẩm</td>
          <td style={{paddingTop:'15px'}}>
            <input type="text" value={this.state.txtName} onChange={(e) => this.setState({ txtName: e.target.value })} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }} />
          </td>
        </tr>
        <tr>
          <td style={{paddingTop:'15px'}}>Giá</td>
          <td style={{paddingTop:'15px'}}>
            <input type="text" value={this.state.txtPrice} onChange={(e) => this.setState({ txtPrice: e.target.value })} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }} />
          </td>
        </tr>
        <tr>
          <td>Hình</td>
          <td style={{paddingTop:'15px'}}>
            <input type="file" accept="image/jpeg, image/png, image/gif" onChange={(e) => this.previewImage(e)} />
          </td>
        </tr>
        <tr >
          <td style={{paddingTop:'15px'}}>Category</td>
          <td style={{paddingTop:'15px'}}>
            <select onChange={(e) => this.setState({ cmbCategory: e.target.value })} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }}>
              {cates}
            </select>
          </td>
        </tr>
        <tr>
          <td></td>
          <td style={{paddingTop:'15px'}}>
            <input type="submit" value="Thêm mới" onClick={(e) => this.btnAddClick(e)} style={{ padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px', background: '#28a745', color: '#fff', marginRight: '10px' }} />
            <input type="submit" value="Chỉnh sửa" onClick={(e) => this.btnUpdateClick(e)} style={{ padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px', background: '#007bff', color: '#fff', marginRight: '10px' }} />
            <input type="submit" value="Xóa" onClick={(e) => this.btnDeleteClick(e)} style={{ padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px', background: '#dc3545', color: '#fff' }} />
          </td>
        </tr>
        <tr>
          <td colSpan="2" style={{paddingTop:'15px'}}>
            <img src={this.state.imgProduct} width="270px" height="270px" alt="" style={{ display: 'block', margin: '10px auto', borderRadius: '5px', objectFit: 'cover' }} />
          </td>
        </tr>
      </tbody>
    </table>
  </form>
</div>
<ToastContainer />

</div>
    );
  }

  componentDidMount() {
    this.apiGetCategories();
  }

  componentDidUpdate(prevProps) {
    if (this.props.item !== prevProps.item) {
      this.setState({
        txtID: this.props.item._id,
        txtName: this.props.item.name,
        txtPrice: this.props.item.price,
        cmbCategory: this.props.item.category._id,
        imgProduct: 'data:image/jpg;base64,' + this.props.item.image,
      });
    }
  }

  previewImage(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        this.setState({ imgProduct: evt.target.result });
      };
      reader.readAsDataURL(file);
    }
  }

  btnAddClick(e) {
    e.preventDefault();
    const { txtName, txtPrice, cmbCategory, imgProduct } = this.state;
    const price = parseInt(txtPrice);
    const image = imgProduct.replace(/^data:image\/[a-z]+;base64,/, '');

    if (txtName && price && cmbCategory && image) {
      this.apiPostProduct({ name: txtName, price, category: cmbCategory, image });
    } else {
      alert('Please input all fields');
    }
  }

  btnUpdateClick(e) {
    e.preventDefault();
    const { txtID, txtName, txtPrice, cmbCategory, imgProduct } = this.state;
    const price = parseInt(txtPrice);
    const image = imgProduct.replace(/^data:image\/[a-z]+;base64,/, '');

    if (txtID && txtName && price && cmbCategory && image) {
      this.apiPutProduct(txtID, { name: txtName, price, category: cmbCategory, image });
    } else {
      alert('Please input all fields');
    }
  }

  btnDeleteClick(e) {
    e.preventDefault();
    if (window.confirm('ARE YOU SURE?')) {
      if (this.state.txtID) {
        this.apiDeleteProduct(this.state.txtID);
      } else {
        alert('Please input ID');
      }
    }
  }

  apiGetCategories() {
    axios.get('/api/admin/categories', { headers: { 'x-access-token': this.context.token } })
      .then(res => this.setState({ categories: res.data }));
  }

  apiPostProduct(prod) {
    axios.post('/api/admin/products', prod, { headers: { 'x-access-token': this.context.token } })
      .then(res => res.data ? this.showToast('Thêm thành công!') && this.apiGetProducts() : alert('SORRY BABY!'));
  }

  apiGetProducts() {
    axios.get(`/api/admin/products?page=${this.props.curPage}`, { headers: { 'x-access-token': this.context.token } })
      .then(res => this.props.updateProducts(res.data.products, res.data.noPages));
  }

  apiPutProduct(id, prod) {
    axios.put(`/api/admin/products/${id}`, prod, { headers: { 'x-access-token': this.context.token } })
      .then(res => res.data ? this.showToast('Chỉnh sửa thành công!') && this.apiGetProducts() : alert('SORRY BABY!'));
  }

  apiDeleteProduct(id) {
    axios.delete(`/api/admin/products/${id}`, { headers: { 'x-access-token': this.context.token } })
      .then(res => res.data ? alert('OK BABY!') && this.apiGetProducts() : alert('SORRY BABY!'));
  }
  showToast = (message) => {
    toast.success(message, {
      position: "top-right"
    });
  };
  showErrorToast = (message) => {
    toast.error(message, {
      position: "top-right"
    });
  };
}

export default ProductDetail;
