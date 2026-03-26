import axios from 'axios';
import React, { Component } from 'react';
import MyContext from '../contexts/MyContexts';
import CategoryDetail from './CategoryDetailComponent';

class Category extends Component {
    static contextType = MyContext; // using this.context to access global state

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            itemSelected: null, // Dữ liệu của hàng được chọn
        };
    }

    componentDidMount() {
        this.apiGetCategories(); // Lấy dữ liệu khi component được render
    }

    // Render bảng dữ liệu
    render() {
        const cates = this.state.categories.map((item, index) => {
            return (
                <tr
                    key={item._id}
                    className="datatable-row"
                    onClick={() => this.trItemClick(item)} // Bắt sự kiện khi click
                >
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                </tr>
            );
        });

        return (
            <div className="category-container">
                {/* Danh sách category */}
                <div className="category-list">
                    <h2 className="text-center">DANH SÁCH DANH MỤC</h2>
                    <table className="datatable" border="1">
                        <tbody>
                            <tr className="datatable-header">
                                <th>STT</th>
                                <th>Tên danh mục</th>
                            </tr>
                            {cates}
                        </tbody>
                    </table>
                </div>
                {/* Hiển thị thông tin chi tiết */}
                <div className="category-detail">
                    <CategoryDetail
                        item={this.state.itemSelected} // Truyền dữ liệu hàng đã chọn
                        updateCategories={this.updateCategories}
                    />
                </div>

                <style>{`
    .category-container {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        width: 100%;
        padding: 20px;
    }

    .category-list {
        width: 50%;
        margin-right: 20px;
        text-align: center;
    }

    .category-detail {
        width: 50%;
        display: flex;
        justify-content: center; /* Center horizontally */
        align-items: center; /* Center vertically */
        border-left: 2px solid #ccc;
        padding-left: 20px;
    }

    .datatable {
        width: 100%;
        border-collapse: collapse;
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
    }

    .datatable th, .datatable td {
        padding: 10px;
        border: 1px solid #ddd;
    }

    .datatable-header {
        background: #4e73df;
        color: white;
        text-transform: uppercase;
    }

    .datatable-row:hover {
        background: #f5f5f5;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        .category-container {
            flex-direction: column;
            align-items: center;
        }

        .category-list, .category-detail {
            width: 100%;
            margin-right: 0;
            padding-left: 0;
            border-left: none;
        }

        .category-detail {
            margin-top: 20px;
        }
    }
`}</style>
            </div>
        );
    }

    // Cập nhật danh sách category
    updateCategories = (categories) => {
        this.setState({ categories: categories });
    }

    // Khi bấm vào một hàng
    trItemClick(item) {
        this.setState({ itemSelected: item }); // Lưu thông tin hàng đã chọn
    }

    // Lấy dữ liệu category từ API
    apiGetCategories() {
        const config = { headers: { 'x-access-token': this.context.token } };
        axios.get('/api/admin/categories', config)
            .then((res) => {
                const result = res.data;
                this.setState({ categories: result });
            })
            .catch((err) => {
                console.error('Error fetching categories:', err);
                alert('Failed to load categories. Please check your API or token.');
            });
    }
}

export default Category;