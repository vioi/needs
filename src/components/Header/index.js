import React from 'react'
import { Row,Col,Button,Tooltip } from "antd"
import './index.less'
import Util from '../../utils/utils'
import axios from '../../axios'
import { connect } from 'react-redux'
import { UserOutlined,PoweroffOutlined  } from '@ant-design/icons';
class Header extends React.Component{
    state={}
    componentWillMount(){
        this.setState({
            userName:'superman'
        })
        setInterval(()=>{
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        },1000)
        this.getWeatherAPIData();
    }

    getWeatherAPIData(){
        let city = '北京';
        axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res)=>{
            if(res.status == 'success'){
                let data = res.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl:data.dayPictureUrl,
                    weather:data.weather
                })
            }
        })
    }
    render(){
        const { menuName} = this.props;
        return (
            <div className="header">
                <Row className="header-top">
                <Col span={4} className="logo">
                                <img src="/assets/logo.png" alt=""/>
                                {/* <span style={{color:"red"}}>需求管理</span> */}
                            </Col>
                    <Col span={6}>
                                {menuName || '首页'}
                            </Col>
                    <Col span={6}>
                        <span>
                        <UserOutlined /> 
                            {this.state.userName}
                        </span>
                    </Col>
                    <Col span={3}>
                    <span className="logout">  
                    <Tooltip title="退出">
                    <Button type="primary" shape="round"><PoweroffOutlined/></Button>
                        </Tooltip>
                        </span>
                    </Col>
                   
                </Row>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        menuName: state.menuName
    }
};
export default connect(mapStateToProps)(Header)