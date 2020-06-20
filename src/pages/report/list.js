import React from 'react';
import {FileTextOutlined ,EditOutlined} from '@ant-design/icons';
import {Tag,Popconfirm} from 'antd';
import {Route,Link} from 'react-router-dom'
import axios from '../../axios';
import AddReqortModal from './modal'
import BasicTable from '../table/basicTable.js'
import Zmage from 'react-zmage' 
class BugList extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            columns:[
                {
                  title: 'ID',
                  dataIndex: 'key',
                  key: 'key',
                  width:"5%"
                },
                {
                  title: '模块',
                  dataIndex: 'module',
                  width:"8%",
                  key: 'module',
                },
                {
                  title: '功能',
                  dataIndex: 'func',
                  width:"8%",
                  key: 'func',
                },
                {
                  title: '问题截图',
                  dataIndex: 'picture',
                  width:"10%",
                  key: 'picture',
                  render:(picture)=>{
                      return (
                          <div>
                              {
                                picture.map(x=>(
                                    <Zmage style={{width:'100%'}} src={x}></Zmage>
                                ))
                              }
                          </div>
                         
                      )
                  }
                },
                {
                    title: '描述',
                    width:"20%",
                    dataIndex: 'des',
                    key: 'des',
                    
                },
                {
                  title: '验证人',
                  dataIndex: 'verifier',
                  width:"10%",
                  key: 'verifier',

                },
                {
                  title: '解决办法',
                  width:"18%",
                  dataIndex: 'way',
                  key: 'way',
                },
                {
                  title: '补充',
                  key: 'other',
                  dataIndex: 'other',
                  width:"10%"
                },
                {
                  title: '回复',
                  key: 'replay',
                  width:"6%",
                  render: (text, record) => (
                      <span>
                        <Link to={{pathname:'/report/list/modalForm/'+record.key}}>
                            <FileTextOutlined  style={{marginRight:12}} />
                        </Link>
                      </span>
                  ),
                },
              ],
              initGrid:[]
             
        }
    }
    imgHandleBig =(item)=>{
        console.warn(item)
    }
    getReportList=()=>{
        axios.ajax({
          url:'/reports',
          method:'get'
        }).then((res)=>{
            const reports = res.data.reports;
            this.setState({initGrid:reports})
          })
      }
  
      componentWillMount(){
        this.getReportList()
      }
      render(){
        const init ={
            columns:this.state.columns,
            addBtnLink:'/report/list/modalForm/add'

        }
        return(
            <div>
                <BasicTable initGrid={this.state.initGrid} init={init}></BasicTable>
                <Route path='/report/list/modalForm/:tag' component={AddReqortModal} />
            </div>
        )
    }
}
export default BugList