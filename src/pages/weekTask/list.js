import React from 'react';
import {DeleteOutlined,EditOutlined} from '@ant-design/icons';
import {Tag,Popconfirm} from 'antd';
import {Route,Link} from 'react-router-dom'
import axios from '../../axios';
import EditModalTask from './modal'

import BasicTable from '../table/basicTable.js'
class WeekList extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            columns:[
              {
                title: 'ID',
                dataIndex: 'key',
                key: 'key',
              },
                {
                  title: '需求',
                  dataIndex: 'module',
                  key: 'module',
                  ellipsis: true
                },
                {
                  title: '发布人',
                  dataIndex: 'issuer',
                  key: 'issuer',
                },
                {
                  title: '执行人',
                  dataIndex: 'receiver',
                  key: 'receiver',
                },
                {
                    title: '日期',
                    dataIndex: 'date',
                    key: 'date',
                  },
                {
                  title: '模块',
                  key: 'tags',
                  dataIndex: 'tags',
                  render: (tags) => (
                    <span>
                      {tags.map((tag) => {
                        return (
                          <Tag color={'pink'} key={tag}>
                            {tag}
                          </Tag>
                        );
                      })}
                    </span>
                  ),
                },
                {
                    title: '状态',
                    dataIndex: 'state',
                    key: 'state',
                    // sorter: {
                    //     compare: (a, b) => { debugger ;return a.state - b.state},
                    //     multiple: 1,
                    //   },
                    render: (state) => (
                        <span>
                        {(()=>{
                            let color = 'green';
                            switch (state) {
                                case "未接收":
                                    color ='red'
                                    break;
                                case "已接收":
                                    color ='green'
                                    break;
                                case "进行中":
                                    color ='yellow'
                                break;    
                                case "已完成":
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
                  title: '操作',
                  key: 'action',
                  render: (text, record) => (
                      <span>
                      <Link to={'/weekTask/list/modalForm/'+record.key}>
                      <EditOutlined  style={{marginRight:12}} />
                      </Link>
                    <Popconfirm title="确定要删除吗?" onConfirm={() => this.handleDelete(record.key)}>
                      <DeleteOutlined/>
                    </Popconfirm>
                      </span>
                  ),
                },
              ],
              initGrid:[]
             
        }
    }
    
    getWeekList=()=>{
      axios.ajax({
        url:'/needs',
        method:'get'
      }).then((res)=>{
          const needs = res.data.needs;
          this.setState({initGrid:needs})
        })
    }

    componentWillMount(){
      this.getWeekList()
    }
    handleDelete =(key)=>{
        axios.ajax({
          url:'/needDel',
          method:'post',
          data:{
            'key':key
          }
        }).then((res)=>{
          this.getWeekList()
        })
      }

      handleAdd=()=>{
        this.getWeekList()
      }
    render(){
        const init ={
            columns:this.state.columns,
            handleDelete:this.handleDelete,
            handleAdd:this.handleAdd,
            addBtnLink:'/weekTask/list/modalForm/add'

        }
        return(
            <div>
                <BasicTable initGrid={this.state.initGrid} init={init}></BasicTable>
                <Route path='/weekTask/list/modalForm/:tag' component={EditModalTask} />

            </div>
        )
    }
}
export default WeekList