(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{202:function(e,t,n){},247:function(e,t,n){"use strict";n(202)},264:function(e,t,n){"use strict";n.r(t);var a={data:()=>({map:null}),methods:{initMap(e){e.load({key:"7daf2dde397dccec810608d28f5b1937",version:"2.0",plugins:["AMap.ToolBar","AMap.ControlBar"]}).then(e=>{this.map=new e.Map("container",{zoom:9,center:[106.746099,34.069106],mapStyle:"amap://styles/whitesmoke"}),this.initMarkers(),this.map.addControl(new e.ToolBar),this.map.addControl(new e.ControlBar)}).catch(e=>{})},initMarkers(){let e=[{name:"驻马店市平舆县",center:"114.618537,32.96344",type:2},{name:"南京市",center:"118.796624,32.059344",type:1},{name:"郑州市",center:"113.625351,34.746303",type:1},{name:"杭州市",center:"120.210792,30.246026",type:1},{name:"上海市",center:"121.473667,31.230525",type:1},{name:"湖州市",center:"120.086881,30.894178",type:1},{name:"阜阳市",center:"115.814252,32.891032",type:1},{name:"新乡市",center:"113.92679,35.303589",type:1}];for(var t=0;t<e.length;t++){new AMap.Marker({icon:this.$withBase("/img/qizi.png"),position:e[t].center.split(","),offset:new AMap.Pixel(-2,-18),zIndex:101,title:e[t].name,map:this.map})}this.map.setFitView(null,!1,[150,60,100,60])}},mounted(){n.e(12).then(n.t.bind(null,259,7)).then(e=>{this.initMap(e)})},destroyed(){this.map&&this.map.destroy()}},i=(n(247),n(2)),r=Object(i.a)(a,(function(){return(0,this._self._c)("div",{attrs:{id:"container"}})}),[],!1,null,"2b24f125",null);t.default=r.exports}}]);