import axios from 'axios'; 
import React, { Component } from 'react'; 
import MyContext from '../contexts/MyContexts';
import { ToastContainer, toast } from 'react-toastify';


class CategoryDetail extends Component { 
    static contextType = MyContext; // using this.context to access global state 
    
    constructor(props) { 
        super(props); 
        this.state = { 
            txtID: '', 
            txtName: '' 
        };
    }

    render() { 
        return (
            <div className="float-right" style={{ margin: '50px' }}>
                <h2 className="text-center" style={{ lineHeight: 'inherit',marginTop:'-50px' ,marginBottom:'20px'}}>CHI TIẾT DANH MỤC</h2>
                <form>
                    <table>
                        <tbody>
                             <tr>
                            <td style={{ paddingRight: '10px' }}>TÊN DANH MỤC</td>
                            <td>
                                <input 
                                    type="text" 
                                    style={{ borderRadius: '3px', marginLeft: '10px' }} // Add margin to the input
                                    value={this.state.txtName} 
                                    onChange={(e) => { 
                                        this.setState({ txtName: e.target.value }); 
                                    }} 
                                />
                            </td>
                        </tr>
                            <tr>
                                <td colSpan="2" style={{ height: '10px' }}></td> {/* Hàng trống tạo khoảng cách */}
                            </tr>
                            <tr>
                                <td></td> 
                                <td>
                                    <input 
                                        type="submit" 
                                        value="Thêm mới" 
                                        onClick={(e) => this.btnAddClick(e)} 
                                        style={{ backgroundColor: 'green', color: 'white', marginRight: '10px',borderRadius:'6px' }}
                                    />
                                    <input 
                                        type="submit" 
                                        value="Chỉnh sửa" 
                                        onClick={(e) => this.btnUpdateClick(e)} 
                                        style={{ backgroundColor: 'blue', color: 'white', marginRight: '10px' ,borderRadius:'6px'}}
                                    />
                                    <input 
                                        type="submit" 
                                        value="Xóa" 
                                        onClick={(e) => this.btnDeleteClick(e)} 
                                        style={{ backgroundColor: 'red', color: 'white',borderRadius:'6px' }}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                <ToastContainer />
            </div>
        );
    }
    // event-handlers 
    btnAddClick(e) {
        e.preventDefault(); 
        const name = this.state.txtName; 
        if (name) {
            const cate = { name: name };
            this.apiPostCategory(cate);
        } else {
            alert('Please input name');
        }
    }
    btnUpdateClick(e) {
        e.preventDefault();
        const id = this.state.txtID;
        const name = this.state.txtName;
        if (id && name) {
            const cate = { name: name };
            this.apiPutCategory(id, cate);
        } else {
            alert('Please input id and name');
        }
    }
    btnDeleteClick(e) {
        e.preventDefault();
        if (window.confirm('ARE YOU SURE?')) {
            const id = this.state.txtID;
        if (id) {
            this.apiDeleteCategory(id);
        } else {
            alert('Please input id');
            }
        }
    }
    // apis 
    apiPostCategory(cate) { 
        const config = { headers: { 'x-access-token': this.context.token } }; 
        axios.post('/api/admin/categories', cate, config).then((res) => { 
            const result = res.data; 
            if (result) { 
                this.apiGetCategories();
                this.showToast('Thêm thành công!'); 
            } else {
                alert('SORRY BABY!');
            }
        });
    } 
    apiGetCategories() {
    const config = { headers: { 'x-access-token': this.context.token } }; 
    axios.get('/api/admin/categories', config).then((res) => { 
        const result = res.data;
        this.props.updateCategories(result); 
    });   
}

    componentDidUpdate(prevProps) { 
        if (this.props.item !== prevProps.item) { 
            this.setState({ 
                txtID: this.props.item._id, 
                txtName: this.props.item.name 
            });
        }
    }

    apiPutCategory(id, cate) {
        const config = { headers: { 'x-access-token': this.context.token } };
        axios.put('/api/admin/categories/' + id, cate, config).then((res) => {
            const result = res.data;
            if (result) {
                this.apiGetCategories();
                this.showToast('Chỉnh sửa thành công!'); 
            } else {
                alert('SORRY BABY!');
            }
        });
    }
    apiDeleteCategory(id) {
        const config = { headers: { 'x-access-token': this.context.token } };
        axios.delete('/api/admin/categories/' + id, config).then((res) => {
            const result = res.data;
            if (result) {
                alert('OK BABY!');
                this.apiGetCategories();
            } else {
            alert('SORRY BABY!');
            }
        });
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

export default CategoryDetail;
