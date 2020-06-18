import React from 'react';
import {Button,Table,Input,Row,Col} from 'antd';
import {Route, Link} from 'react-router-dom'
import EditModalTask from '../modal'
import axios from '../../axios';
import '../../mock/mockServer.js'
const {Search} = Input;


class BasicTable extends React.Component {
constructor(props){
    super(props);
    this.state = {
        top: 'topLeft',
        bottom: 'bottomRight',
        visible:false,
        columns:props.init.columns,
        initGrid:props.initGrid
    };
    this.handleDelete=this.props.init.handleDelete
    this.handleAdd = this.props.init.handleAdd

}

    //父组件props更新传值后，子组件同步更新传值，重新渲染
    componentWillReceiveProps(nextProps){
        this.setState({initGrid:nextProps.initGrid})
    }

  render() {
    return (
      <div>
          <Row type='flex'>
            <Col span={20}><Button type='primary'>
            <Link to={{pathname:this.props.init.addBtnLink,query:{handleAdd:this.handleAdd}}}>添加</Link>
            {/* <Link  to={this.props.init.addBtnLink}>添加</Link> */}
              </Button>
            </Col>

            <Col><Search style={{width:200}} placeholder="请输入查询内容" onSearch={value => console.log(value)} enterButton /></Col>
          </Row>
        <Table
          columns={this.state.columns}
          pagination={{ position: [this.state.top, this.state.bottom] }}
          dataSource={this.state.initGrid}
        />
      </div>
    );
  }
}

export default BasicTable;