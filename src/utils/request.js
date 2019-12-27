import axios from 'axios';
// import { Message } from 'element-ui';

const service = axios.create({
    // process.env.NODE_ENV === 'development' 来判断是否开发环境
    // easy-mock服务挂了，暂时不使用了
    // baseURL: "",
    timeout: 5000
});

service.interceptors.request.use(
    config => {
        // config.headers

        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            if (response.data.code == 0) {
                return response.data;
            } else {
                console.log(response.data.msg);
                // Message.error(response.data.msg);
                return Promise.reject(response.data.msg);
            }
        } else {
            // Message.error('');
            console.log(response.data.msg);
            return Promise.reject('网络错误--' + response.status);
        }
    },
    error => {
        console.log(error);
        return Promise.reject('网络错误');
    }
);

export default service;
