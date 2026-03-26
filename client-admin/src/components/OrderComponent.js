import axios from 'axios';
import React, { Component } from 'react';
import MyContext from '../contexts/MyContexts';
import { ToastContainer, toast } from 'react-toastify';


class Order extends Component {
    static contextType = MyContext;

    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            order: null
        };
    }

    componentDidMount() {
        this.apiGetOrders();
    }

    async apiGetOrders() {
        try {
            const config = { headers: { 'x-access-token': this.context.token } };
            const res = await axios.get('/api/admin/orders', config);
            this.setState({ orders: res.data });
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    }

    trItemClick(item) {
        this.setState({ order: item });
    }

    async apiPutOrderStatus(id, status) {
        const body = { status: status };
        const config = { headers: { 'x-access-token': this.context.token } };
        try {
            const res = await axios.put(`/api/admin/orders/status/${id}`, body, config);
            if (res.data) {
                this.apiGetOrders();
                this.showToast('Cập nhật trạng thái thành công');
            } else {
                alert('SORRY BABY!');
            }
        } catch (error) {
            console.error("Error updating order status:", error);
        }
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

    lnkApproveClick(id) {
        this.apiPutOrderStatus(id, 'APPROVED');
    }

    lnkCancelClick(id) {
        this.apiPutOrderStatus(id, 'CANCELED');
    }

    render() {
        const orders = Array.isArray(this.state.orders) ? this.state.orders.map((item, index) => {
            return (
                <tr key={item._id} className="datatable" onClick={() => this.trItemClick(item)}>
                    <td>{index + 1}</td>
                    <td>{new Date(item.cdate).toLocaleString()}</td>
                    <td>{item.customer.name}</td>
                    <td>{item.customer.phone}</td>
                    <td>{item.total}</td>
                    <td className={`status-${item.status.toLowerCase()}`}>{item.status}</td>
                    <td>
                        {item.status === 'PENDING' ? 
                            <div>
                                <span className="link approve" onClick={() => this.lnkApproveClick(item._id)}>APPROVE</span> | 
                                <span className="link cancel" onClick={() => this.lnkCancelClick(item._id)}>CANCEL</span>
                            </div>
                        : <div />}
                    </td>
                </tr>
            );
        }) : [];

        let items = [];
        if (this.state.order && Array.isArray(this.state.order.items)) {
            items = this.state.order.items.map((item, index) => {
                return (
                    <tr key={item.product._id} className="datatable">
                        <td>{index + 1}</td>
                        <td>{item.product.name}</td>
                        <td><img src={`data:image/jpg;base64,${item.product.image}`} width="70px" height="70px" alt="" /></td>
                        <td>{item.product.price}</td>
                        <td>{item.quantity}</td>
                        <td>{item.product.price * item.quantity}</td>
                    </tr>
                );
            });
        }

        return (
            <div>
                <style>
                    {`
                        body {
                            font-family: 'Roboto', sans-serif;
                            background-color: #f8f9fa;
                            color: #333;
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
                            margin-bottom: 20px;
                        }
                        .datatable th, .datatable td {
                            padding: 12px;
                            border-bottom: 1px solid #ddd;
                            text-align: left;
                        }
                        .datatable th {
                            background: #4e73df;
                            color: white;
                        }
                        .datatable tr:hover {
                            background-color: #ecf0f1;
                            cursor: pointer;
                        }
                        .status-pending {
                            color: #e67e22;
                            font-weight: bold;
                        }
                        .status-approved {
                            color: #2ecc71;
                            font-weight: bold;
                        }
                        .status-canceled {
                            color: #e74c3c;
                            font-weight: bold;
                        }
                        .link {
                            cursor: pointer;
                            font-weight: bold;
                            margin: 5px;
                        }
                        .approve {
                            color: #2ecc71;
                        }
                        .cancel {
                            color: #e74c3c;
                        }
                        .link:hover {
                            text-decoration: underline;
                        }
                    `}
                </style>
                <div className="align-center">
                    <h2 className="text-center">DANH SÁCH ĐẶT HÀNG</h2>
                    <table className="datatable" border="1">
                        <tbody>
                            <tr className="datatable">
                                <th>STT</th>
                                <th>Ngày tạo</th>
                                <th>Tên khách hàng</th>
                                <th>SDT</th>
                                <th>Tổng giá</th>
                                <th>Trạng thái</th>
                                <th>Hoạt động</th>
                            </tr>
                            {orders}
                        </tbody>
                    </table>
                </div>
                {this.state.order ?
                    <div className="align-center">
                        <h2 className="text-center">CHI TIẾT ĐẶT HÀNG</h2>
                        <table className="datatable" border="1">
                            <tbody>
                                <tr className="datatable">
                                    <th>STT</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Hình</th>
                                    <th>Giá</th>
                                    <th>Số lượng</th>
                                    <th>Tổng tiền</th>
                                </tr>
                                {items}
                            </tbody>
                        </table>
                    </div>
                : <div />}
                        <ToastContainer />

            </div>
        );
    }
}

export default Order;
