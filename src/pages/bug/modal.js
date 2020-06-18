import React from 'react';
import { Modal,Card, Avatar, Form, Select,Button, List, Input } from 'antd';
import axios from '../../axios';
import BugComment from './comment';
import './index.less'
const FormItem = Form.Item;
const {TextArea} = Input;


class EditModalTask extends React.Component{
    constructor(props){
        super(props)
        this.state={
            receiver:[],
            tags:[],
            fileList: [],
            state:'NEW',
            module:'',
            product:'',
            uploading: false,
            option:[
                'wang_renzhogn@topsec.com.cn',
                'wang_hogn@topsec.com.cn',
                'zagf_renzhogn@topsec.com.cn',
                'wa_renzhogn@topsec.com.cn',
                'wang_ogn@topsec.com.cn',
                'chen_renzhogn@topsec.com.cn',
                'acf_rhogn@topsec.com.cn'
            ],
            modules:[
                '物理接口',
                '系统设置',
                '聚合接口',
                '双机热备',
                'PPPOE',
                '访问控制'

            ],
            products:[
                'NGTOSV2.6',
                'NGTP2.2',
            ],
            states:['NEW','ASSI','REOP','FIXED','INVALID']
            
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
                url:'/needs',
                method:'get',
                data:{
                    id:id
                }
              }).then((res)=>{
                const need = res.data.need;
                const {receiver,tags,state,module} = need
                this.setState({receiver,tags,state,module})
              })
        }
    }
    receiverHandleChange = receiver => {
        this.setState({ receiver });
    };
    tagHandleChange = tags => {
        this.setState({ tags });
    };  
    stateHandleChange = state => {
        this.setState({ state });
    };    
    moduleHandleChange = module => {
        this.setState({ module });
    };  
    productHandleChange = product => {
        this.setState({ product });
    };    
    handleSubmit=(data,e)=>{
        const res = this.props.form.validateFields(['tags','receiver'],{force:true});
        res.then((r)=>{
            const id = this.props.match.params.tag;
            data.id = id;
            const tags = typeof(data.tags)=='string'?[data.tags]:data.tags
            const receiver = typeof(data.receiver)=='string'?[data.receiver]:data.receiver


            let formData = new FormData();
            formData.append('id',data.id)
            formData.append('tags',tags)
            formData.append('receiver',receiver)
            formData.append('state',data.state)
            if(data.file&&data.file.fileList.length!=0){
                formData.append('file',data.file.file)
            }
    
            axios.ajax({
                url:'needAdd',
                headers:{
                    "Content-Type":"multipart/form-data"
                  },
                method:'post',
                data:formData
              }).then((res)=>{
                if(res.result){
                    this.props.history.push('/bug/list/')
                    this.handleAdd()
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
        const { receiver,tags,state,module,product} = this.state;
        const filteredReceivers = this.state.option.filter(o => (!receiver.includes(o)))
        const filteredTags = this.state.modules.filter(o => (!tags.includes(o)))
        const filteredStates = this.state.states.filter(o => !state!=o)
        const filteredProducts = this.state.products.filter(o => !product!=o)
        const filteredModules = this.state.products.filter(o => !module!=o)



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
            },
            onChange:(file)=>{
                this.setState((state)=>{
                    const index = state.fileList.indexOf(file.file);
                    const newFileList = state.fileList.slice();
                    if(index!=0){
                        newFileList.splice(index-1, 1);
                    };
                    return {
                      fileList: newFileList,
                    };
                })
               
            }
        }
        return(
            <Modal 
            title="每周任务"
            visible={true}
            onCancel={()=>{
                this.props.history.push('/bug/list')
            }}
            onOk={()=>{this.handleSubmit(handleFormData(),event)}}
        >
             <Form >
             <FormItem label="产品系统" {...formItemLayout}>
                    {
                        getFieldDecorator('product',{
                            initialValue:tags,
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
                            <Select
                                placeholder="Inserted are removed"
                                onChange={this.productHandleChange}
                                style={{ width: '100%' }}
                            >
                                {filteredProducts.map(item => (
                                <Select.Option key={item} value={item}>
                                    {item}
                                </Select.Option>
                                ))}
                            </Select>
                        )
                    }
                </FormItem> 
                <FormItem label="模块" {...formItemLayout}>
                    {
                        getFieldDecorator('tags',{
                            initialValue:tags,
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
                            <Select
                                // mode="multiple"
                                placeholder="Inserted are removed"
                                onChange={this.tagHandleChange}
                                style={{ width: '100%' }}
                            >
                                {filteredModules.map(item => (
                                <Select.Option key={item} value={item}>
                                    {item}
                                </Select.Option>
                                ))}
                            </Select>
                        )
                    }
                </FormItem> 
                <FormItem label="处理人" {...formItemLayout}>
                    {
                        getFieldDecorator('receiver',{
                            initialValue:receiver,
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
                            <Select
                                placeholder="Inserted are removed"
                                onChange={this.receiverHandleChange}
                                style={{ width: '100%' }}
                            >
                                {filteredReceivers.map(item => (
                                    <Select.Option key={item} value={item}>
                                        {item}
                                    </Select.Option>
                                ))}
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="状态" {...formItemLayout}>
                    {
                        getFieldDecorator('status',{
                            initialValue:state,
                            rules: [
                                {
                                  required: true,
                                  message:  'validation.email.required' ,
                                }
                            ]
                        })(
                            <Select
                                placeholder="Inserted are removed"
                                onChange={this.stateHandleChange}
                                style={{ width: '100%' }}
                            >
                                {filteredStates.map(item => {
                                    return ( 
                                    <Select.Option key={item} value={item}>
                                        {item}
                                    </Select.Option>)
                                })}
                            </Select>
                        )
                    }
                </FormItem>
                
                <FormItem label="评论" {...formItemLayout}>
                {/* <Card bordered={false} style={{ width: 400 }}> */}
                    {
                        getFieldDecorator('des',{
                            initialValue:module,
                            rules: [
                                {
                                  required: false,
                                  message:  'validation.email.required' ,
                                },
                                // {
                                //   type: 'email',
                                //   message:'validation.email.wrong-format',
                                // }
                            ]
                        })(
                            <BugComment/>
                        )
                    }
                {/* </Card> */}
                </FormItem>
            </Form>
        </Modal>
        )
    }
}
EditModalTask = Form.create({})(EditModalTask);
export default EditModalTask;