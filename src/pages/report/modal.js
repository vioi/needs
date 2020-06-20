import React from 'react';
import { Modal,Card, Avatar, Form, Upload,Button, List, Input } from 'antd';
import axios from '../../axios';
import Cookie from 'js-cookie'
import {UploadOutlined} from '@ant-design/icons';
const FormItem = Form.Item;
const {TextArea} = Input;


class EditModalTask extends React.Component{
    constructor(props){
        super(props)
        this.state={
            module:['子接口'],
            fileList:[],
            func:'',
            des:"1.如果IPV4有任意一条数据，则ipv6点击删除，删除不掉2.任意点开一个添加不填写数据，点击确定依旧下发",
            way: '详见《ISP路由WEBUI界面底层调用接口说明》文档，使用周二的版本包测试',
            other: ''
        }

        if( this.props.location.query){
            this.handleAdd = this.props.location.query.handleAdd
        }
    }
    // //父组件props更新传值后，子组件同步更新传值，重新渲染
    // componentWillReceiveProps(nextProps){
    //     this.setState({visible:nextProps.visible})
    // }
    componentDidMount(){
        const id = this.props.match.params.tag;
        if(id!="add"){
            axios.ajax({
                url:'/reports',
                method:'get',
                data:{
                    id:id
                }
              }).then((res)=>{
                const report = res.data.report;
                const {module,func,des,way,other} = report
                this.setState({module,func,des,way,other})
              })
        }
    }


    handleSubmit=(data,e)=>{
        const res = this.props.form.validateFields(['module','func','des','way'],{force:true});
        res.then((r)=>{
            const id = this.props.match.params.tag;
            data.id = id
            let formData = new FormData();
            formData.append('id',data.id)
            formData.append('module',data.module)
            formData.append('func',data.func)
            formData.append('des',data.des)
            formData.append('verifier',Cookie.get('username'))
            formData.append('way',data.way?data.way:'')
            formData.append('other',data.other?data.other:'')
            if(data.picture&&data.picture.fileList.length!=0){
                let pictureArr = []
                data.picture.fileList.map(x=>{pictureArr.push('/assets/reports/'+x.name)})
                formData.append('picture',pictureArr)
            }
    
            axios.ajax({
                url:'reportAdd',
                headers:{
                    "Content-Type":"multipart/form-data"
                  },
                method:'post',
                data:formData
              }).then((res)=>{
                if(res.result){
                    this.props.history.push('/blank/report')
                }
              })
        })
        
    }
    render(){
        const formItemLayout = {
            labelCol:{
                span:5
            },
            wrapperCol:{
                span:19
            }
        }
        const commentLayout = {
            labelCol:{
                span:4
            },
            wrapperCol:{
                span:20
            }
        }
        const { getFieldDecorator }  =this.props.form;
        // 弹框 form 数据
        const handleFormData = () => {
            // 每次打开弹窗时，初始化表单数据
            // form.resetFields();
            return this.props.form.getFieldsValue();
          }  
        
        const {module,func,des,way,other} = this.state;
        const uploadProps = {
            name: 'file',
            fileList:this.state.fileList,
            onRemove: file => {
                this.setState(state => {
                  const index = state.fileList.indexOf(file);
                  const newFileList = state.fileList.slice();
                  newFileList.splice(index, 1);
                  return {
                    fileList: newFileList,
                  };
                });
              },
            beforeUpload: (file)=>{
                this.setState(state => ({
                    fileList: [...state.fileList, file],
                  }));
              return false;
            }
        }
        return(
            <Modal 
            title="每周任务"
            visible={true}
            onCancel={()=>{
                this.props.history.push('/report/list')
            }}
            onOk={()=>{this.handleSubmit(handleFormData(),event)}}
        >
             <Form >
             <FormItem label="模块" {...formItemLayout}>
                    {
                        getFieldDecorator('module',{
                            initialValue:module,
                            rules: [
                                {
                                  required: true,
                                  message:  'validation.email.required' ,
                                },
                                // {
                                //   type: 'email',
                                //   message:'validation.email.wrong-format',
                                // }
                            ]
                        })(
                            <Input  
                            placeholder="Inserted are removed"
                            // onChange={}
                            style={{ width: '100%' }}>
                            
                            </Input>
                        )
                    }
                </FormItem> 
                <FormItem label="功能" {...formItemLayout}>
                    {
                        getFieldDecorator('func',{
                            initialValue:func,
                            rules: [
                                {
                                  required: true,
                                  message:  'validation.email.required' ,
                                },
                                // {
                                //   type: 'email',
                                //   message:'validation.email.wrong-format',
                                // }
                            ]
                        })(
                            <Input  
                            placeholder="Inserted are removed"
                            // onChange={}
                            style={{ width: '100%' }}>
                            
                            </Input>
                        )
                    }
                </FormItem> 
                <FormItem label="描述" {...formItemLayout}>
                    {
                        getFieldDecorator('des',{
                            initialValue:des,
                            rules: [
                                {
                                  required: true,
                                  message:  'validation.email.required' ,
                                }
                            ]
                        })(
                            <TextArea  
                            rows={4}
                            placeholder="Inserted are removed"
                            // onChange={}
                            style={{ width: '100%' }}>
                            </TextArea>
                        )
                    }
                </FormItem>
                <FormItem  label="解决办法" {...formItemLayout}>
                    {
                        getFieldDecorator('way',{
                            initialValue:way,
                            rules: [
                                {
                                  required: true,
                                  message:  'validation.email.required' ,
                                }
                            ]
                        })(
                            <TextArea 
                            rows={4} 
                            placeholder="Inserted are removed"
                            // onChange={}
                            style={{ width: '100%' }}>
                            </TextArea>
                        )
                    }
                </FormItem>
                <FormItem visible={this.state.admin} label="补充" {...formItemLayout}>
                    {
                        getFieldDecorator('other',{
                            initialValue:other,
                            rules: [
                                // {
                                //   required: false,
                                //   message:  'validation.email.required' ,
                                // }
                            ]
                        })(
                            <TextArea  
                            rows={4}
                            placeholder="Inserted are removed"
                            // onChange={}
                            style={{ width: '100%' }}>
                            </TextArea>
                        )
                    }
                </FormItem>
                <FormItem   label="上传截图" {...formItemLayout}>
                    {
                        getFieldDecorator('picture')(
                            <Upload {...uploadProps}>
                            <Button type="primary">
                              <UploadOutlined /> 上传
                            </Button>
                          </Upload>
                        )
                    }
               
                </FormItem>
            </Form>
        </Modal>
        )
    }
}
EditModalTask = Form.create({})(EditModalTask);
export default EditModalTask;