webpackJsonp([1],{NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),s=i("BO1k"),r=i.n(s),l={props:{id:{type:Number,require:!0},x1:{type:Number,require:!0},y1:{type:Number,require:!0},x2:{type:Number,require:!0},y2:{type:Number,require:!0},color:{type:String,require:!0},width:{type:Number,require:!0}},data:function(){return{lineShow:!1}},computed:{top:function(){return this.y1-this.y2>0?this.y2:this.y1},left:function(){return this.x2-this.x1>0?this.x1:this.x2},w:function(){var t=Math.abs(this.x1-this.x2);return t<2?2:t},h:function(){var t=Math.abs(this.y1-this.y2);return t<2?2:t},lineY1:function(){return 0!==this.h&&this.x1<this.x2&&this.y1<this.y2||this.x1>this.x2&&this.y1>this.y2?this.h:0},lineY2:function(){return 0!==this.h&&this.x1<this.x2&&this.y1<this.y2||this.x1>this.x2&&this.y1>this.y2?0:this.h},style:function(){return"stroke:"+this.color+";stroke-width:"+this.width}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"lineSvg",style:"top:"+t.top+"px;left:"+t.left+"px;width:"+t.w+"px;height:"+t.h+"px;",attrs:{id:"line"+t.id},on:{mouseout:function(e){t.lineShow=!1},mouseover:function(e){e.stopPropagation(),t.lineShow=!0}}},[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:t.w+"px",height:t.h+"px"}},[i("line",{style:t.style,attrs:{x1:t.w,x2:"0",y1:t.lineY1,y2:t.lineY2}})]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:t.lineShow,expression:"lineShow"}],staticClass:"lineClose",attrs:{lineId:t.id}})])},staticRenderFns:[]};var h=i("VU/8")(l,o,!1,function(t){i("r13X")},null,null).exports;let a={};var u={install:function(t,e){const i=t.extend(h);let n={drawLine:function(t,e){let n=e.color||"#29c1e8",s=e.width||1,r=new i({propsData:{id:e.id,x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,color:n,width:s}}).$mount();a[e.id]={vm:r,target:t},t.appendChild(r.$el)},closeLine:function(t){let e=a[t],i=e.vm;e.target.removeChild(i.$el),delete a[t]},closeAll:function(){for(let t in a){let e=a[t],i=e.vm;e.target.removeChild(i.$el)}a={}}};t.prototype.$lineJs||(t.prototype.$lineJs=n)}};n.default.use(u);var c={data:function(){return{flag:!1,x1:-1,x2:-1,y1:-1,y2:-1}},methods:{link:function(){this.flag=!0},closeAll:function(){this.$lineJs.closeAll()},clickEvent:function(t){var e=!0,i=!0,n=!1,s=void 0;try{for(var l,o=r()(t.path);!(i=(l=o.next()).done);i=!0){var h=l.value;if(h.nodeName&&"span"===h.nodeName.toLowerCase()&&"lineClose"===h.className){var a=h.getAttribute("lineid");this.$lineJs.closeLine(a),e=!1;break}}}catch(t){n=!0,s=t}finally{try{!i&&o.return&&o.return()}finally{if(n)throw s}}if(this.flag&&e){var u=t.clientX,c=t.clientY;this.x1<0&&this.y1<0?(this.x1=u,this.y1=c):(this.x2=u,this.y2=c),this.x1>0&&this.y1>0&&this.x2>0&&this.y2>0&&(this.$lineJs.drawLine(this.$refs.optionsMod,{id:Math.random(),x1:this.x1,y1:this.y1,x2:this.x2,y2:this.y2,color:"#000000",width:1}),this.flag=!1,this.x1=-1,this.x2=-1,this.y1=-1,this.y2=-1)}}}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.link()}}},[t._v("划线")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.closeAll()}}},[t._v("删除所有")]),t._v("\n\t点击划线按钮后，在框内点击两个点，画出一条线，点击线上的x按钮可以删除划线\n    "),i("div",{ref:"optionsMod",staticClass:"optionsMod",staticStyle:{width:"1500px",height:"800px",border:"1px solid #000"},on:{click:t.clickEvent}})],1)},staticRenderFns:[]},y=i("VU/8")(c,p,!1,null,null,null).exports,d=i("zL8q"),x=i.n(d);i("tvR6");n.default.config.productionTip=!1,n.default.use(x.a),new n.default({el:"#app",components:{App:y},template:"<App/>"})},r13X:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.296a19b82e6ca5cb5435.js.map