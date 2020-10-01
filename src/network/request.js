import axios from 'axios'

export  function request(config) {
    //创建axios实例
    const instance = axios.create({
        baseURL:'http://106.54.54.237:8000/api/mn',
        timeout: 5000
    })
    //axios拦截器
    instance.interceptors.request.use(config => {
        //请求拦截的作用
        //例如config中有信息不符合服务器的要求
        //比如每次进行网络请求时，希望在界面中显示一个请求图标
        //某些网络请求。比如token，必须携带一些特殊的信息
        return config
    }, err => {
        console.log(err);
    })
    //响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err);
    })
    //发送真正的网络拦截
    return instance(config)
}