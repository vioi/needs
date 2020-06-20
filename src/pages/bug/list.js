import React from 'react';
import {FileTextOutlined ,EditOutlined} from '@ant-design/icons';
import {Tag,Popconfirm} from 'antd';
import {Route,Link} from 'react-router-dom'
import axios from '../../axios';
import EditModalTask from './modal'
import BasicTable from '../table/basicTable.js'
class BugList extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            columns:[
                {
                  title: 'ID',
                  dataIndex: 'key',
                  key: 'key',
                  width:"10%"
                },
                {
                  title: '产品系统',
                  dataIndex: 'product',
                  width:"10%",
                  key: 'product',
                },
                {
                  title: '模块',
                  dataIndex: 'module',
                  width:"10%",
                  key: 'module',
                },
                {
                  title: '处理人',
                  dataIndex: 'receiver',
                  width:"10%",
                  key: 'receiver',
                },
                {
                    title: '状态',
                    width:"10%",
                    dataIndex: 'state',
                    key: 'state',
                    render: (state) => (
                        <span>
                        {(()=>{
                            let color = 'green';
                            switch (state) {
                                case "NEW":
                                    color ='red'
                                    break;
                                case "ASSI":
                                    color ='green'
                                    break;
                                case "REOP":
                                    color ='yellow'
                                    break;    
                                case "INVALID":
                                    color ='yellow'
                                    break;    
                                  case "FIXED":
                                    color ='gray'
                                    break;  
                            };
                            return (
                              <Tag color={color} key={state}>
                                {state}
                              </Tag>
                            );
                        })()
                          }
                        </span>
                      ),
                },
                {
                  title: '描述',
                  dataIndex: 'des',
                  width:"50%",
                  key: 'des',
                  ellipsis: true

                },
                {
                  title: '日期',
                  width:"10%",
                  dataIndex: 'date',
                  key: 'date',
                },
                {
                  title: '操作',
                  key: 'action',
                  width:"10%",
                  render: (text, record) => (
                      <span>
                      <Link to={'/bug/list/modalForm/'+record.key}>
                      <FileTextOutlined  style={{marginRight:12}} />
                      </Link>
                    {/* <Popconfirm title="确定要删除吗?" onConfirm={() => this.handleDelete(record.key)}>
                      <DeleteOutlined/>
                    </Popconfirm> */}
                      </span>
                  ),
                },
              ],
              initGrid:[]
             
        }
    }
    getBugList=()=>{
        axios.ajax({
          url:'/bugs',
          method:'get'
        }).then((res)=>{
            const bugs = res.data.bugs;
            this.setState({initGrid:bugs})
          })
      }
  
      componentWillMount(){
        this.getBugList()
      }
      handleDelete =(key)=>{
          axios.ajax({
            url:'/needDel',
            method:'post',
            data:{
              'key':key
            }
          }).then((res)=>{
            this.getBugList()
          })
        }
  
        handleAdd=()=>{
          this.getBugList()
        }
    render(){
        const init ={
            columns:this.state.columns,
            handleDelete:this.handleDelete,
            handleAdd:this.handleAdd,
            addBtnLink:'/bug/list/modalForm/add'

        }
        return(
            <div>
                <BasicTable initGrid={this.state.initGrid} init={init}></BasicTable>
                <Route path='/bug/list/modalForm/:tag' component={EditModalTask} />
            </div>
        )
    }
}
export default BugList