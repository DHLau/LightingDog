window.cellSwipe = function(){
	window.addEventListener('load',function(){
          var initX;        //触摸位置
          var moveX;        //滑动时的位置
          var X = 0;        //移动距离
          var objX = 0;    //目标对象位置
          var deviceW = document.documentElement.clientWidth;
          var btnW = deviceW / 5;
          window.addEventListener('touchstart',function(event){
              var obj = getObj(event);
              if(obj.className == "list-li"){
                  initX = event.targetTouches[0].pageX;
                  objX =(obj.style.WebkitTransform.replace(/translateX\(/g,"").replace(/px\)/g,""))*1;
              }
              if( objX == 0){
                  window.addEventListener('touchmove',function(event) {
                      var obj = getObj(event);
                      if (obj.className == "list-li") {
                          moveX = event.targetTouches[0].pageX;
                          X = moveX - initX;
                          if (X >= 0) {
                              obj.style.WebkitTransform = "translateX(" + 0 + "px)";
                          }
                          else if (X < 0) {
                              var l = Math.abs(X);
                              obj.style.WebkitTransform = "translateX(" + -l + "px)";
                              if(l>btnW){
                                  l=btnW;
                                  obj.style.WebkitTransform = "translateX(" + -l + "px)";
                              }
                          }
                      }
                  });
              }
              else if(objX<0){
                  window.addEventListener('touchmove',function(event) {
                      var obj = getObj(event);
                      if (obj.className == "list-li") {
                          moveX = event.targetTouches[0].pageX;
                          X = moveX - initX;
                          if (X >= 0) {
                              var r = -btnW + Math.abs(X);
                              obj.style.WebkitTransform = "translateX(" + r + "px)";
                              if(r>0){
                                  r=0;
                                  obj.style.WebkitTransform = "translateX(" + r + "px)";
                              }
                          }
                          else {     //向左滑动
                              obj.style.WebkitTransform = "translateX(" + -btnW + "px)";
                          }
                      }
                  });
              }
  
          })
          window.addEventListener('touchend',function(event){
              var obj = getObj(event);
              if(obj.className == "list-li"){
                  objX =(obj.style.WebkitTransform.replace(/translateX\(/g,"").replace(/px\)/g,""))*1;
                  if(objX>-btnW/2){
                      obj.style.WebkitTransform = "translateX(" + 0 + "px)";
                      objX = 0;
                  }else{
                      obj.style.WebkitTransform = "translateX(" + -btnW + "px)";
                      objX = -btnW;
                  }
              }
           })
          function getObj(event){
            var obj = event.target;
            if (obj.className == 'tool-box') {
                // event.preventDefault && event.preventDefault();
                // event.returnValue=false;
                // event.stopPropagation && event.stopPropagation();
            } else {
            }
            obj = event.target.parentNode.parentNode;
            if (obj.className == "list-li") {
              return obj;
            } else {
              return obj = event.target.parentNode.parentNode.parentNode;
            }
          }
     })
}