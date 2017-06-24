const JsBridge = (callback) =>{
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
};

export const navBack = () =>{
	JsBridge(bridge => {
                bridge.callHandler('navBack')
            })
};

