import axios from 'axios'
import router from '@/router/index'
import { Notification, MessageBox } from 'element-ui'
import envConfig from '@/utils/baseUrl'
// 创建axios实例
const service = axios.create({
    baseURL:envConfig.httpUrl
    // timeout: Config.timeout // 请求超时时间
})
// request拦截器
service.interceptors.request.use(
    config => {
        let token = localStorage.getItem("studtoken");
        if (token) {
            config.headers.token = `${token}`;
        }
        config.headers['Content-Type'] = 'application/json'
        return config
    },
    error => {
        return Promise.reject(err);
        // Do something with request error
        console.log(error) // for debug
        Promise.reject(error)
    }
)
service.interceptors.response.use(
    function (response) {
        // token 已过期，重定向到登录页面
        if (response.data.code == 4011) {
            localStorage.clear();
            router.replace({
                path: "/index"
            });
        }
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);
export default service