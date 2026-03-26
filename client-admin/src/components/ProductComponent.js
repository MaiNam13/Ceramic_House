import axios from 'axios';
import React, { Component } from 'react';
import MyContext from '../contexts/MyContexts';
import ProductDetail from './ProductDetailComponent';

class Product extends Component {
  static contextType = MyContext;

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      noPages: 0,
      curPage: 1,
      itemSelected: null,
    };
  }

  render() {
    const prods = this.state.products.map((item, index) => {
      return (
        <tr
          key={item._id}
          className="datatable"
          onClick={() => this.trItemClick(item)}
        >
          <td>{index + 1}</td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>{new Date(item.cdate).toLocaleString()}</td>
          <td>{item.category.name}</td>
          <td>
            <img
              src={"data:image/jpg;base64," + item.image}
              width="100px"
              height="100px"
              alt=""
            />
          </td>
        </tr>
      );
    });

    const pagination = (
      <div className="pagination-container">
        <span className="pagination-arrow" onClick={() => this.changePage(-1)}>&#60;</span>
        {Array.from({ length: this.state.noPages }, (_, index) => (
          <span
            key={index}
            className={index + 1 === this.state.curPage ? "pagination-active" : "pagination-link"}
            onClick={() => this.lnkPageClick(index + 1)}
          >
            {index + 1}
          </span>
        ))}
        <span className="pagination-arrow" onClick={() => this.changePage(1)}>&#62;</span>
      </div>
    );

    return (
      <div>
        <style>
          {`
            body {
              font-family: 'Roboto', sans-serif;
              background-color: #f4f4f9;
              color: #333;
              margin: 0;
              padding: 0;
            }
            h2.text-center {
              text-align: center;
              color: #2c3e50;
              font-size: 24px;
              margin-bottom: 20px;
            }
            table.datatable {
              width: 100%;
              border-collapse: collapse;
              background: white;
              box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
              border-radius: 8px;
              overflow: hidden;
            }
            .datatable th {
              background: #4e73df;
              color: white;
              padding: 12px;
              text-align: left;
            }
            .datatable td {
              padding: 10px;
              border-bottom: 1px solid #ddd;
            }
            .datatable tr:hover {
              background-color: #ecf0f1;
              cursor: pointer;
            }
            .datatable img {
              border-radius: 8px;
              object-fit: cover;
            }
            .pagination-container {
              display: flex;
              align-items: center;
              justify-content: center;
              background: #f4f4f9;
              padding: 8px;
              border-radius: 24px;
              width: fit-content;
              margin: 10px auto;
            }
            .pagination-link {
              cursor: pointer;
              color: #555;
              font-weight: bold;
              margin: 0 5px;
              padding: 10px;
              border-radius: 50%;
              transition: background 0.3s ease;
            }
            .pagination-link:hover {
              background-color: #ddd;
              color: #000;
            }
            .pagination-active {
              background-color: #4e73df;
              color: white;
              padding: 12px;
              border-radius: 50%;
              font-weight: bold;
            }
            .pagination-arrow {
              cursor: pointer;
              color: #888;
              font-size: 18px;
              margin: 0 10px;
            }
            .pagination-arrow:hover {
              color: #555;
            }
          `}
        </style>
        <div className="float-left">
          <h2 className="text-center">DANH SÁCH SẢN PHẨM</h2>
          <table className="datatable" border="1">
            <tbody>
              <tr className="datatable">
                <th>STT</th>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Ngày tạo</th>
                <th>Danh mục</th>
                <th>Hình</th>
              </tr>
              {prods}
              <tr>
                <td colSpan="6">{pagination}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="inline" />
        <ProductDetail item={this.state.itemSelected} curPage={this.state.curPage}
            updateProducts={this.updateProducts} />
        <div className="float-clear" />
      </div>
    );
  }

  componentDidMount() {
    this.apiGetProducts(this.state.curPage);
  }
  updateProducts = (products, noPages) => {
    this.setState({ products: products, noPages: noPages });
  }

  lnkPageClick(index) {
    this.apiGetProducts(index);
  }

  trItemClick(item) {
    this.setState({ itemSelected: item });
  }

  changePage(offset) {
    const newPage = this.state.curPage + offset;
    if (newPage >= 1 && newPage <= this.state.noPages) {
      this.apiGetProducts(newPage);
    }
  }

  apiGetProducts(page) {
    const config = { headers: { 'x-access-token': this.context.token } };
    axios
      .get('/api/admin/products?page=' + page, config)
      .then((res) => {
        const result = res.data;
        this.setState({
          products: result.products,
          noPages: result.noPages,
          curPage: result.curPage,
        });
      });
  }
}

export default Product;
