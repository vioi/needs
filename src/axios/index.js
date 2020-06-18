import JsonP from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd'
import qs from 'qs'
import Cookie from 'js-cookie'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
axios.interceptors.request.use(function (config) {
    const token = Cookie.get('info');
    token&&(config.headers.authorization=token)
    if(config.method=="get"){
        config.params = config.data;
    };
    if(process.env.NODE_ENV=='production'){
        if(config.method =='post'){
            if(config.headers['Content-Type']!='application/json; charset=UTF-8')
            config.data = qs.stringify(config.data)
        }
    }
    return config
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
export default class Axios {
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: 'callback'
            }, function (err, response) {
                if (response.status == 'success') {
                    resolve(response);
                } else {
                    reject(response.messsage);
                }
            })
        })
    }
        static ajax(options){
            let loading;
            loading = document.getElementById('ajaxLoading');
            loading.style.display = 'block';
            let baseURL = 'http://localhost:3000';
            return new Promise((resolve,reject)=>{
                let newOpt = {
                    url:options.url,
                    method:options.method,
                    baseURL:baseURL,
                    timeout:50000,
                    data: options.data|| ''
                }
                if(options.headers){
                    newOpt.headers = options.headers
                };
                axios(newOpt).then((response)=>{
                    if (options.data && options.data.isShowLoading !== false) {
                        loading = document.getElementById('ajaxLoading');
                        loading.style.display = 'none';
                    }
                    if (response.status == '200'){
                        let res = response.data;
                        if (res.result){
                            resolve(res);
                            loading.style.display = 'none';
                        }else{
                            Modal.info({
                                title:"提示",
                                content:res.data
                            })
                        }
                    }else{
                        reject(response.data);
                    }
                }).catch((error)=>{
                    loading.style.display = 'none';
                })
            });
        }
    }