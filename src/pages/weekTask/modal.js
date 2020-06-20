import React from 'react';
import {Modal,Form,Button,Select,Upload,Input} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import axios from '../../axios';
const {TextArea} = Input;
const FormItem = Form.Item;
class EditModalTask extends React.Component{
    constructor(props){
        super(props)
        this.state={
            receiver:[],
            tags:[],
            fileList: [],
            state:'',
            module:'',
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
            states:['未接收','已接收','进行中','已完成']
            
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
    optionHandleChange = receiver => {
        this.setState({ receiver });
    };
    modulesHandleChange = tags => {
        this.setState({ tags });
    };  
    stateHandleChange = state => {
        this.setState({ state });
    };    
    handleSubmit=(data,e)=>{
        const res = this.props.form.validateFields(['module','tags','receiver'],{force:true});
        res.then((r)=>{
            const id = this.props.match.params.tag;
            data.id = id;
            const tags = typeof(data.tags)=='string'?[data.tags]:data.tags
            const receiver = typeof(data.receiver)=='string'?[data.receiver]:data.receiver
            let formData = new FormData();
            formData.append('id',data.id)
            formData.append('tags',tags)
            formData.append('receiver',receiver)
            formData.append('module',data.module)
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
                    this.props.history.push('/weekTask/list')
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
    
        const { getFieldDecorator }  =this.props.form;
        // 弹框 form 数据
        const handleFormData = () => {
            // 每次打开弹窗时，初始化表单数据
            // form.resetFields();
            return this.props.form.getFieldsValue();
          }  
        const { receiver,tags,state,module} = this.state;
        const filteredOptions = this.state.option.filter(o => (!receiver.includes(o)))
        const filteredModules = this.state.modules.filter(o => (!tags.includes(o)))
        const filteredStates = this.state.states.filter(o => !state!=o)

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
                this.props.history.push('/weekTask/list')
            }}
            onOk={()=>{this.handleSubmit(handleFormData(),event)}}
        >
             <Form >
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
                                mode="multiple"
                                placeholder="Inserted are removed"
                                onChange={this.modulesHandleChange}
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
                <FormItem label="接收人" {...formItemLayout}>
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
                                mode="multiple"
                                placeholder="Inserted are removed"
                                onChange={this.optionHandleChange}
                                style={{ width: '100%' }}
                            >
                                {filteredOptions.map(item => (
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
                        getFieldDecorator('state',{
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
                <FormItem label="需求描述" {...formItemLayout}>
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
                            <TextArea rows={4} />
                        )
                    }
                </FormItem>
                <FormItem label="需求文档" {...formItemLayout}>
                    {
                        getFieldDecorator('file')(
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