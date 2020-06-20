import { Table } from 'antd';
import React from 'react'
import data from './dataSource'
// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0
const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    props: {},
  };
  // if (index === 4) {
  //   obj.props.colSpan = 0;
  // }
  return obj;
};

const columns = [
  {
    title: '分类',
    width:"10%",
    dataIndex: 'name',
    render: (value, row, index) => {
      const obj = {
        children: value,
        props: {},
      };
      if (index == 0) {
            obj.props.rowSpan = 3;
      }
      if (index == 1||index == 2) {
        obj.props.rowSpan = 0;
      }
      if (index == 3) {
        obj.props.rowSpan = 5;
      }
      if (index >3&&index <8) {
        obj.props.rowSpan = 0;
      }

      if (index == 8) {
        obj.props.rowSpan = 7;
      }
      if (index >8&&index <15) {
        obj.props.rowSpan = 0;
      }
      if (index == 15) {
        obj.props.rowSpan = 9;
      }
      if (index >15&&index <24) {
        obj.props.rowSpan = 0;
      }
      if (index == 25) {
        obj.props.rowSpan = 2;
      }
      if (index >25&&index <27) {
        obj.props.rowSpan = 0;
      }
      if (index == 27) {
        obj.props.rowSpan = 6;
      }
      if (index >27) {
        obj.props.rowSpan = 0;
      }
      return obj;
      // return {
      //   children: <a>{text}</a>,
      //   props: {
      //     colSpan: 5,
      //   },
      // };
    },
  },
  {
    title: '错误号',
    dataIndex: 'sn',
    width:"10%",
    render: (value, row, index) => {
      const obj = {
        children: value,
        props: {},
      };
      if (index === 0||index === 2||index===26) {
        obj.children = <a style={{color:'green'}}>{value}</a>;
        }
        if (index>5&&index< 9||index === 14) {
          obj.children = <a style={{color:'orange'}}>{value}</a>;
        }
        if (index===11) {
          obj.children = <a style={{color:'blue'}}>{value}</a>;
        }
        if (index===15||index === 24) {
          obj.children = <a style={{color:'red'}}>{value}</a>;
        }
      return obj;
    }
  },
  {
    title: '内容',
    dataIndex: 'content',
    width:"30%",
    render: (value, row, index) => {
      const obj = {
        children: value,
        props: {},
      };
      if (index === 0||index === 2||index===26) {
      obj.children = <a style={{color:'green'}}>{value}</a>;
      }
      if (index>5&&index< 9||index === 14) {
        obj.children = <a style={{color:'orange'}}>{value}</a>;
      }
      if (index===11) {
        obj.children = <a style={{color:'blue'}}>{value}</a>;
      }
      if (index===15||index === 24) {
        obj.children = <a style={{color:'red'}}>{value}</a>;
      }
      return obj;
    }
  },
  {
    title: '描述',
    dataIndex: 'des',
    width:"30%",
    render: (value, row, index) => {
      const obj = {
        children: value,
        props: {},
      };
      if (index === 0||index === 2||index===26) {
      obj.children = <a style={{color:'green'}}>{value}</a>;
      }
      if (index>5&&index< 9||index === 14) {
        obj.children = <a style={{color:'orange'}}>{value}</a>;
      }
      if (index===11) {
        obj.children = <a style={{color:'blue'}}>{value}</a>;
      }
      if (index===15||index === 24) {
        obj.children = <a style={{color:'red'}}>{value}</a>;
      }
      return obj;
    }
  },
  {
    title: 'fixer',
    width:"20%",
    dataIndex: 'fixer',
    render: (value, row, index) => {
      const obj = {
        children: value,
        props: {},
      };
      if (index === 0||index === 2||index===26) {
        obj.children = <a style={{color:'green'}}>{value}</a>;
      }
      if (index>5&&index< 9||index === 14) {
        obj.children = <a style={{color:'orange'}}>{value}</a>;
      }
      if (index===11) {
        obj.children = <a style={{color:'blue'}}>{value}</a>;
      }
      if (index===15||index === 24) {
        obj.children = <a style={{color:'red'}}>{value}</a>;
      }
      return obj;
    }
  },
];


class ErrorNum extends React.Component{
    render(){
        return(
            <Table columns={columns} pagination={false} dataSource={data} bordered />
        )
    }
}
export default ErrorNum;