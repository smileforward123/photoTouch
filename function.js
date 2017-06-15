    function $(selector,content){
                    if(selector.charAt(0)==="#"){
                        return document.getElementById(selector.substring(1));
                    }else{
                        var c = content || document;
                        return  c.getElementsByTagName(selector);
                    }
    }
    function getStyle( obj,attr ){
                        if( obj.currentStyle ){
                            //IE6,7,8支持
                            return obj.currentStyle[attr];
                        }else{
                            //标准浏览器支持
                            return getComputedStyle(obj)[attr];
                        }
    }
    function domove(obj,attr,target,speed,callback){
                 var n = parseInt( getStyle(obj,attr) );//当前位置
                 clearInterval(obj.timer);//点击之前清除所有的timer
                 //速度取决于当前位置和目标位置的大小
                 //当前位置小于目标位置，speed为正;
                 //当前位置大于目标位置,speed 为负;
                 speed=n<target? Math.abs(speed):-Math.abs(speed);
                  obj.timer= setInterval(function(){
                        n+=speed;
                        if(n>=target&&speed>0||n<=target&&speed<0){
                          clearInterval(obj.timer);
                          n=target;
                           obj.style[attr]=n+"px";
                           /*if(callback && typeof callback==="function"){
                              callback();
                           }*/
                          typeof callback==="function"&& callback();
                          
                        }else{
                            obj.style[attr]=n+"px";
                        }
                        
                        
                    },30);
             }