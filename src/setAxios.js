import axios from 'axios'
import store from './store'
import router from './router'

export default function setAxios() {

    // 请求拦截
    axios.interceptors.request.use(
        config => {
            if (store.state.token) {
                config.headers.token = store.state.token
            }
            return config;
        }
    )


    //响应拦截
    axios.interceptors.response.use(
        response=> {
            if(response.status == 200) {
                const data = response.data
                if(data.code == -1) {
                    store.setAxios('setToken', '')
                    localStorage.removeItem('token')
                    router.replace({path: '/login'})
                }
                return data;
            }
            return response;
        }
    )

}