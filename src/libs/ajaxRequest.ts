import axios from 'axios'
import store from '../store'
import { actionCreators } from './store'

class AjaxRequest {
  baseUrl: string;
  timeout: number;
  queue: {};

  constructor() {
    this.baseUrl = process.env.NODE_ENV === 'production' ? '/' : '/'
    this.timeout = 3000;
    this.queue = {}
  }

  merge(options) {
    return {...options, baseURL: this.baseUrl, timeout: this.timeout}
  }

  setInterceptor(instance, url) {  // 每次请求时 都会加一个 loading 效果
    // 如果上一个 promise 返回了一个常量， 会作为下一个 promise 的输入
    instance.interceptors.request.use((config) => {
      // config.headers.Authorization = getLocal('token')
      if (Object.keys(this.queue).length === 0) {
        store.dispatch(actionCreators.showLoading())
      }
      this.queue[url] = url;
      return config;
    })
    instance.interceptors.response.use((res) => { // 对响应来一个拦截
      delete this.queue[url];   // 每次请求成功后，都删除队列里的路径
      if (Object.keys(this.queue).length === 0) {
        store.dispatch(actionCreators.hideLoading())
      }
      return res.data
    })
  }

  request(options) {
    console.log(options)
    let instance = axios.create();  // 通过 axios 库创建一个 axios 实例
    this.setInterceptor(instance, options.url);  // 设置拦截器
    let config = this.merge(options)
    return instance(config)  // axios执行后返回的是一个promise
  }
}

export default new AjaxRequest;