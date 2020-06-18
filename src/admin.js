import React from 'react'
import { Row,Col } from 'antd';
import Header from './components/Header'
import { connect } from 'react-redux'
import {DoubleRightOutlined } from '@ant-design/icons';
import NavLeft from './components/NavLeft'
import {menuHandleState } from './redux/action'
import './style/common.less'
import './admin.less'


class Admin extends React.Component{
    menuHandlePush=()=>{
        const { dispatch } = this.props;
        dispatch(menuHandleState('push'));
    }
    render(){
        const {menuState} = this.props;
        let menu = 3;
        let main = 21;
        if(menuState == 'pull'){
            menu = 1;
            main = 23;
        }else{
            menu = 3;
            main = 21;
        }
        return (
            <Row className="container">
                <Col span={menu} className="nav-left">
                    {menuState=='push'?<NavLeft />: <a className='adminPullTag' onClick={this.menuHandlePush}>
                <DoubleRightOutlined />
                </a>}    
                </Col>
                <Col span={main} className="main">
                    <Header/>
                    <Row className="content">
                        {/* <Home/> */}
                        {this.props.children}
                    </Row>
                    {/* <Footer/> */}
                </Col>
            </Row>
        );
    }
}
const mapStateToProps = state => {
    return {
        menuState: state.menuState
    }
};
export default connect(mapStateToProps)(Admin)