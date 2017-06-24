import axios from 'axios'
import Qs from 'qs'
export default {
    //请求的地址
    // url:'https://demowl.11wlw.cn/handle/execute.jhtml',
    // url:window.location.protocol+'//'+window.location.hostname+'/handle/execute.jhtml',
    url:'http://192.168.200.16:8089/handle/execute.jhtml',
    isMobile: function() {
        var pType = navigator.userAgent.match(/(iphone|ipad|ipod|ios|android|mobile|blackberry|iemobile|mqqbrowser|juc|fennec|wosbrowser|browserng|Webos|symbian|windows phone)/i)[0];
        if (pType == 'iPhone' || pType == 'iPad' || pType == 'iPod') {
            return 'F';
        } else if (pType == 'Android') {
            return 'B';
        }
    },
    appendData: function(data){
      data.source=this.isMobile();
      data.version=100;
      //参数里面的地址
      // data.url='https://demowl.11wlw.cn/api/execute.jhtml'
      //data.url=window.location.protocol+'//'+window.location.hostname+'/api/execute.jhtml';
      data.url='http://192.168.200.16:8089/api/execute.jhtml';
      return Qs.stringify(data)
    },
    get:function(data){
        axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
      let config = {
        // `url` is the server URL that will be used for the request
        headers: {'X-Requested-With': 'XMLHttpRequest'}
      }
      return axios.get(this.url,this.config)
    },
  	post: function (data) {
      axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
      let config = {
        //请求的接口，在请求的时候，如axios.get(url,config);这里的url会覆盖掉config中的url
        url:'',

        // 请求方法同上
        method: 'post', // default
        // 基础url前缀
        baseURL: '',
        　　
        transformRequest: [function (data) {
          // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）
          data = Qs.stringify({});
          return data;
        }],

        transformResponse: [function (data) {
          // 这里提前处理返回的数据
          return data;
        }],

        // 请求头信息
        headers: {'X-Requested-With': 'XMLHttpRequest'},

        //parameter参数
        params: {
          timestamp: Date.parse(new Date()) / 1000
        },

        //post参数，使用axios.post(url,{},config);如果没有额外的也必须要用一个空对象，否则会报错
        data: this.appendData(data),

        //设置超时时间
        timeout: 5000,
        //返回数据类型
        responseType: 'json', // default
      }
      return axios.post(this.url,this.appendData(data), this.config)
  },
  jsBbridge: function(callback) {
      if (window.WebViewJavascriptBridge) {
          return callback(WebViewJavascriptBridge);
      } else {
          document.addEventListener(
              'WebViewJavascriptBridgeReady',
              function() {
                  callback(WebViewJavascriptBridge)
              },
              false
          );
      }
      if (window.WVJBCallbacks) {
          return window.WVJBCallbacks.push(callback);
      }
      window.WVJBCallbacks = [callback];
      var WVJBIframe = document.createElement('iframe');
      WVJBIframe.style.display = 'none';
      WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
      document.documentElement.appendChild(WVJBIframe);
      setTimeout(function() {
          document.documentElement.removeChild(WVJBIframe)
      }, 0);
  }
}
