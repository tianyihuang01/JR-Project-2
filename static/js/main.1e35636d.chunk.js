(this["webpackJsonpjr-project-2-weather"]=this["webpackJsonpjr-project-2-weather"]||[]).push([[0],{22:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var a,c,r,i,o,d,s,p,m,h,l,j,u,b,g,x,O,w,y,f,v,k,M=n(1),z=n.n(M),U=n(10),S=n.n(U),T=(n(22),n(4)),D=n(11),W=n(12),A=n(5),E=n(17),I=n(16),N=n(2),C=n(3),H=C.a.div(a||(a=Object(N.a)(["\n\tpadding: 0 96px;\n"]))),_=n(0),F=C.a.div(c||(c=Object(N.a)(["\n\tmargin: 0;\n\ttext-align: center;\n\tfont-size: 5rem;\n"]))),J=C.a.div(r||(r=Object(N.a)(["\n\tcolor: hsla(0, 0%, 100%, 0.7);\n\ttext-align: center;\n"]))),R=Object(C.a)(J)(i||(i=Object(N.a)(["\n\tfont-size: 1.5rem;\n\tletter-spacing: 5px;\n"]))),B=Object(C.a)(J)(o||(o=Object(N.a)(["\n\tmargin-top: 3rem;\n\tdisplay: flex;\n\tflex-direction: space-around;\n\tfont-size: 1rem;\n"]))),G=C.a.div(d||(d=Object(N.a)(["\n\twidth: 3px;\n\tmargin: 0 32px;\n\tbackground-color: hsla(0, 0%, 100%, 0.7);\n"]))),q=C.a.span(s||(s=Object(N.a)(["\n\tdisplay: inline-block;\n\tmargin-bottom: 0.75rem;\n"]))),L=function(t){var e=t.temp,n=t.weather,a=t.humidity,c=t.wind;return Object(_.jsxs)(H,{children:[Object(_.jsx)(F,{children:Object(_.jsxs)("span",{children:[Object(_.jsx)("span",{children:Math.trunc(e)}),Object(_.jsx)("span",{children:"\xb0"})]})}),Object(_.jsx)(R,{children:Object(_.jsx)("span",{children:n})}),Object(_.jsxs)(B,{children:[Object(_.jsxs)("div",{children:[Object(_.jsx)(q,{children:"HUMIDITY"}),Object(_.jsx)("br",{}),Object(_.jsxs)("span",{children:[a," %"]})]}),Object(_.jsx)(G,{}),Object(_.jsxs)("div",{children:[Object(_.jsx)(q,{children:"WIND"}),Object(_.jsx)("br",{}),Object(_.jsxs)("span",{children:[c," M/S"]})]})]})]})},P=C.a.div(p||(p=Object(N.a)(["\n\tpadding: 0 48px;\n\tborder: 0;\n\t","\n"])),""),Q=C.a.h2(m||(m=Object(N.a)(["\n\tmargin-bottom: 1rem;\n\tfont-size: 1.5rem;\n\tmargin: 0 0 0.5rem;\n\tletter-spacing: 2px;\n\tfont-weight: 300;\n"]))),X=C.a.div(h||(h=Object(N.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tmin-width: 280px;\n"]))),Y=C.a.div(l||(l=Object(N.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\ttext-align: center;\n\twidth: 50px;\n\tmargin: 0 10px;\n"]))),Z=C.a.h3(j||(j=Object(N.a)(["\n\tfont-weight: 400;\n\tletter-spacing: 1px;\n\tmargin: 0.85rem 0 0.66rem;\n"]))),K=C.a.div(u||(u=Object(N.a)(["\n\tfont-size: 1.25rem;\n\tcolor: rgba(0, 0, 0, 0.5);\n\tmargin-right: 10px;\n\tmargin: 0.6em 0 0 0;\n"]))),V=function(t){var e=t.daily,n=function(){var t=(new Date).getDay();return["MON","TUE","WED","THU","FRI","SAT","SUN","MON","TUE","WED","THU","FRI","SAT","SUN"].slice(t,t+5)}(),a=[{key:n[0],img:"http://openweathermap.org/img/wn/".concat(e[0].weather[0].icon,".png"),temp:"".concat(Math.trunc(e[0].temp.day),"\xb0")},{key:n[1],img:"http://openweathermap.org/img/wn/".concat(e[1].weather[0].icon,".png"),temp:"".concat(Math.trunc(e[1].temp.day),"\xb0")},{key:n[2],img:"http://openweathermap.org/img/wn/".concat(e[2].weather[0].icon,".png"),temp:"".concat(Math.trunc(e[2].temp.day),"\xb0")},{key:n[3],img:"http://openweathermap.org/img/wn/".concat(e[3].weather[0].icon,".png"),temp:"".concat(Math.trunc(e[3].temp.day),"\xb0")},{key:n[4],img:"http://openweathermap.org/img/wn/".concat(e[4].weather[0].icon,".png"),temp:"".concat(Math.trunc(e[4].temp.day),"\xb0")}];return Object(_.jsxs)(P,{children:[Object(_.jsx)(Q,{children:"Forecast"}),Object(_.jsx)(X,{children:a.map((function(t){var e=t.key,n=t.img,a=t.temp;return Object(_.jsxs)(Y,{children:[Object(_.jsx)(Z,{children:e}),Object(_.jsx)("img",{src:n,alt:"Clouds"}),Object(_.jsx)(K,{children:a})]},e)}))})]})},$={id:2158177,name:"Melbourne",state:"",country:"AU",coord:{lon:144.963318,lat:-37.813999}},tt={id:2147714,name:"Sydney",state:"",country:"AU",coord:{lon:151.207321,lat:-33.867851}},et={id:7839562,name:"Brisbane",state:"",country:"AU",coord:{lon:153.029938,lat:-27.44573}},nt={id:2153391,name:"Perth",state:"",country:"AU",coord:{lon:115.872223,lat:-31.99884}},at=C.a.div(b||(b=Object(N.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tfont-size: 1.5rem;\n\ttext-align: left;\n\twidth: 100%;\n\tletter-spacing: 2px;\n\tfont-weight: 400;\n\tfont-size: 1rem;\n"]))),ct=C.a.h3(g||(g=Object(N.a)(["\n\tfont-weight: 400;\n\twidth: 110px;\n\tletter-spacing: 1px;\n\tmargin: 0px;\n"]))),rt=C.a.div(x||(x=Object(N.a)(["\n\tfont-size: 1.25rem;\n\tcolor: rgba(0, 0, 0, 0.5);\n\tmargin-right: 10px;\n\twidth: 67px;\n"]))),it=function(t){var e=t.weather,n=[{key:e[tt.name].city,temp:"".concat(Math.trunc(e[tt.name].temp),"\xb0"),icon:"http://openweathermap.org/img/wn/".concat(e[tt.name].icon,".png")},{key:e[et.name].city,temp:"".concat(Math.trunc(e[et.name].temp),"\xb0"),icon:"http://openweathermap.org/img/wn/".concat(e[et.name].icon,".png")},{key:e[nt.name].city,temp:"".concat(Math.trunc(e[nt.name].temp),"\xb0"),icon:"http://openweathermap.org/img/wn/".concat(e[nt.name].icon,".png")}];return Object(_.jsxs)(P,{children:[Object(_.jsx)(Q,{children:"Other Cities"}),n.map((function(t){return Object(_.jsxs)(at,{children:[Object(_.jsx)(ct,{children:t.key}),Object(_.jsx)(rt,{children:t.temp}),Object(_.jsx)("img",{src:t.icon,alt:"Clouds"})]},t.key)}))]})},ot=C.a.div(O||(O=Object(N.a)(["\n\tmargin-top: 16px;\n\tfont-size: 2rem;\n\n\t&::after {\n\t\tcontent: '';\n\t\tborder: solid white 1px;\n\t\twidth: 60%;\n\t\tmargin: 10px auto;\n\t\tdisplay: block;\n\t}\n"]))),dt=function(t){var e=t.city;return Object(_.jsx)(H,{children:Object(_.jsx)(ot,{children:e})})},st=function(t){var e=$,n=tt,a=et,c=nt,r=[{lat:e.coord.lat,lon:e.coord.lon},{lat:n.coord.lat,lon:n.coord.lon},{lat:a.coord.lat,lon:a.coord.lon},{lat:c.coord.lat,lon:c.coord.lon}],i=[],o=new XMLHttpRequest;!function e(n,a){if(n>=a)t(i);else{var c="".concat("https://api.openweathermap.org/data/2.5/onecall?","lat=").concat(r[n].lat,"&lon=").concat(r[n].lon,"&exclude=").concat("minutely,hourly,alerts","&appid=").concat("999f0f8fefdcfd98119382216ae94e89","&units=").concat("metric");o.open("GET",c,!0),o.onreadystatechange=function(){4==this.readyState&&200==this.status&&(i.push(JSON.parse(o.responseText)),e(n+1,a))},o.send()}}(0,r.length)},pt=C.a.div(w||(w=Object(N.a)(["\n\twidth: 100%;\n\tmin-height: 100vh;\n\tbackground-image: url(https://wallpaperaccess.com/full/2629319.png);\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\tbackground-position: center;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n"]))),mt=C.a.div(y||(y=Object(N.a)(["\n\tmargin: 60px;\n\tbackground: #fff;\n\tborder-radius: 32px;\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n"]))),ht=C.a.div(f||(f=Object(N.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tpadding: 64px 0;\n\tbackground-image: url(https://i.imgur.com/GhQZhaO.jpg);\n\tbackground-size: cover;\n\tborder-top-left-radius: 32px;\n\tborder-top-right-radius: 32px;\n\tcolor: #fff;\n\tposition: relative;\n"]))),lt=C.a.div(v||(v=Object(N.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tpadding: 36px 0;\n}\n"]))),jt=C.a.div(k||(k=Object(N.a)(["\n\twidth: 3px;\n\tbackground-color: rgba(0, 0, 0, 0.1);\n"]))),ut=function(t){Object(E.a)(n,t);var e=Object(I.a)(n);function n(t){var a;return Object(D.a)(this,n),(a=e.call(this,t)).state={weather:void 0},a.setWeather=a.setWeather.bind(Object(A.a)(a)),a}return Object(W.a)(n,[{key:"setWeather",value:function(t){this.setState({weather:t})}},{key:"componentDidMount",value:function(){var t=this;st((function(e){var n;t.setWeather((n={},Object(T.a)(n,$.name,{city:$.name,temp:e[0].current.temp,weather:e[0].current.weather[0].main,humidity:e[0].current.humidity,wind:e[0].current.wind_speed,icon:e[0].current.weather[0].icon,daily:e[0].daily}),Object(T.a)(n,tt.name,{city:tt.name,temp:e[1].current.temp,weather:e[1].current.weather[0].main,humidity:e[1].current.humidity,wind:e[1].current.wind_speed,icon:e[1].current.weather[0].icon,daily:e[1].daily}),Object(T.a)(n,et.name,{city:et.name,temp:e[2].current.temp,weather:e[2].current.weather[0].main,humidity:e[2].current.humidity,wind:e[2].current.wind_speed,icon:e[2].current.weather[0].icon,daily:e[2].daily}),Object(T.a)(n,nt.name,{city:nt.name,temp:e[3].current.temp,weather:e[3].current.weather[0].main,humidity:e[3].current.humidity,wind:e[3].current.wind_speed,icon:e[3].current.weather[0].icon,daily:e[3].daily}),n))}))}},{key:"render",value:function(){var t=this.state.weather;return Object(_.jsx)(pt,{children:Object(_.jsxs)(mt,{children:[Object(_.jsxs)(ht,{children:[t&&Object(_.jsx)(L,{temp:t[$.name].temp,weather:t[$.name].weather,humidity:t[$.name].humidity,wind:t[$.name].wind}),t&&Object(_.jsx)(dt,{city:t[$.name].city})]}),Object(_.jsxs)(lt,{children:[t&&Object(_.jsx)(it,{weather:t}),Object(_.jsx)(jt,{}),t&&Object(_.jsx)(V,{daily:t[$.name].daily})]})]})})}}]),n}(z.a.Component);S.a.render(Object(_.jsx)(z.a.StrictMode,{children:Object(_.jsx)(ut,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.1e35636d.chunk.js.map