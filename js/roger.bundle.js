!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){n(1),n(2),n(3),n(4),n(5),t.exports=n(6)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();e.RogerAnimation=function(){function t(e,n,i,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=e,this.spriteSheetUrl=n.getURL(),this.spriteAnimation=[],this.setSpriteAnimation(n,i),this.setOptions(o)}return i(t,[{key:"setOption",value:function(t){this.options=t}},{key:"setLoop",value:function(t){this.options.loop=t}},{key:"getAnimation",value:function(){return this}},{key:"getName",value:function(){return this.name}},{key:"getURL",value:function(){return this.spriteSheetUrl}},{key:"getSprite",value:function(t){return this.spriteAnimation[t]}},{key:"setSpriteAnimation",value:function(t,e){for(var n=0;n<e.length;n++)this.spriteAnimation.push(t.getSprite(e[n]))}},{key:"setOptions",value:function(t){var e={delay:0,loops:0,direction:"forward",callBack:null};this.options=t?{delay:t.delay?t.delay:e.delay,loops:t.loops?t.loops:e.loops,direction:t.direction?t.direction:e.direction,callBack:t.callBack?t.callBack:e.callBack}:e,this.resetAnimation()}},{key:"resetAnimation",value:function(){this.options.delayTime=this.options.delay-1,this.options.loopsNumber=this.options.loops-1}},{key:"getNextFrame",value:function(t){var e=void 0,n=this.spriteAnimation.length;return this.options.delayTime<=0?"forward"===this.options.direction?e=t+1:"backward"===this.options.direction?e=t-1:"random"===this.options.direction&&(e=Math.floor(Math.random()*n+0)):(e=t,this.options.delayTime--),(e>=n||e<0)&&(-1===this.options.loops||this.options.loopsNumber>0?(e>=n?e=0:e<0&&(e=n),-1!=this.options.loops&&this.options.loopsNumber--,this.options.delayTime=this.options.delay):e=-1,null!=this.options.callBack&&this.options.callBack()),e}}]),t}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();e.RogerClock=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.clock=0,this.clockInterval,this.delta=e,this.deltaTime=1e3*this.delta,this.objects=[]}return i(t,[{key:"init",value:function(){var t=this;this.clock=0,this.clockInterval=setInterval(function(){return t.update()},this.deltaTime)}},{key:"stop",value:function(){clearInterval(this.clockInterval)}},{key:"update",value:function(){this.clock=Math.round(10*(this.clock+this.delta))/10;for(var t=0;t<this.objects.length;t++)this.objects[t]&&this.objects[t].update()}},{key:"addObject",value:function(t){this.objects.push(t)}},{key:"removeObject",value:function(t){}}]),t}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();e.RogerObject=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.id=e,this.clock=n,this.elem=document.getElementById(e),this.anim=[],this.currentAnimation,this.currentFrame,this.clock.addObject(this)}return i(t,[{key:"addAnimation",value:function(t){var e=t.getName();if(-1===this.getAnimationByName(e)){var n=document.createElement("div");n.id=e,n.className="animation",n.style.backgroundImage="url('"+t.getURL()+"')",n.style.display="none",this.elem.appendChild(n),this.anim.push(t),this.setFrame(t,0)}else alert("The RogerObject '"+this.id+"' has ALREADY an animation with the name: '"+e+"'\n Please choose another name and try it again.")}},{key:"setDefaultAnimation",value:function(t){var e=this.getAnimationByName(t),n=this.anim[this.getAnimationByName(t)].getAnimation();this.anim[e]=this.anim[0],this.anim[0]=n}},{key:"playAnimation",value:function(t){this.currentAnimation&&(document.getElementById(this.currentAnimation.getName()).style.display="none"),this.currentAnimation=this.anim[this.getAnimationByName(t)].getAnimation(),this.currentFrame=0,this.currentAnimation.resetAnimation(),document.getElementById(t).style.display="block"}},{key:"getAnimationByName",value:function(t){for(var e=-1,n=0;n<this.anim.length;n++)this.anim[n].getName()===t&&(e=n);return e}},{key:"setFrame",value:function(t,e){this.currentAnimation=t,this.currentFrame=e;var n=t.getName(),i=t.getSprite(e);document.getElementById(n).style.width=i.getWidth(),document.getElementById(n).style.height=i.getHeight(),document.getElementById(n).style.backgroundPositionX=-i.getX()+"px",document.getElementById(n).style.backgroundPositionY=-i.getY()+"px"}},{key:"update",value:function(){-1!=this.currentFrame&&(this.setFrame(this.currentAnimation,this.currentFrame),this.currentFrame=this.currentAnimation.getNextFrame(this.currentFrame))}}]),t}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.RogerRegularSheet=function(t){function e(t,n,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var o=[],r=0,a=0,s=Math.floor(n.w/i.w),u=Math.floor(n.h/i.h),c=0;c<u;c++){for(var l=0;l<s;l++){var h={w:i.w,h:i.h,x:r,y:a};o.push(h),r+=i.w,0}r=0,a+=i.h}return function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,o))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,RogerSheet),e}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();e.RogerSheet=function(){function t(e,n,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.url=e,this.width=n.w,this.height=n.h,this.map=[];for(var o=0;o<i.length;o++)this.map.push(new RogerSprite(i[o].w,i[o].h,i[o].x,i[o].y))}return i(t,[{key:"getURL",value:function(){return this.url}},{key:"getSprite",value:function(t){return this.map[t]}}]),t}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();e.RogerSprite=function(){function t(e,n,i,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.w=e,this.h=n,this.x=i,this.y=o}return i(t,[{key:"getWidth",value:function(){return this.w}},{key:"getHeight",value:function(){return this.h}},{key:"getX",value:function(){return this.x}},{key:"getY",value:function(){return this.y}}]),t}()}]);