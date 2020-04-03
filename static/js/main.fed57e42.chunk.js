(this["webpackJsonptetris-app"]=this["webpackJsonptetris-app"]||[]).push([[0],{11:function(n,e,t){n.exports=t.p+"static/media/bg.2810fe6b.png"},14:function(n,e,t){n.exports=t(22)},19:function(n,e,t){},22:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(7),c=t.n(a),i=(t(19),t(1)),u=t(2),l=t(3);function f(){var n=Object(u.a)(["\n  width: auto;\n  background: rgba(",", 0.8);\n  border: ",";\n  border-bottom-color: rgba(",", 0.1);\n  border-right-color: rgba(",", 1);\n  border-top-color: rgba(",", 1);\n  border-left-color: rgba(",", 0.2);\n"]);return f=function(){return n},n}var d=l.a.div(f(),(function(n){return n.color}),(function(n){return 0===n.type?"0px solid":"4px solid"}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color})),s={0:{shape:[[0]],color:"0, 0, 0"},I:{shape:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]],color:"80, 227, 230"},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],color:"36, 95, 223"},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],color:"223, 173, 36"},O:{shape:[["O","O"],["O","O"]],color:"223, 217, 36"},S:{shape:[[0,"S","S"],["S","S",0],[0,0,0]],color:"48, 211, 56"},T:{shape:[["T","T","T"],[0,"T",0],[0,0,0]],color:"132, 61, 198"},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],color:"227, 78, 78"}},p=function(){var n="IJLOSTZ"[Math.floor(Math.random()*"IJLOSTZ".length)];return s[n]},b=o.a.memo((function(n){var e=n.type;return o.a.createElement(d,{type:e,color:s[e].color})}));function m(){var n=Object(u.a)(["\n  display: grid;\n  grid-template-rows: repeat(\n    ",",\n    calc(25vw / ",")\n  );\n  grid-template-columns: repeat(",", 1fr);\n  grid-gap: 1px;\n  border: 2px solid #333;\n  width: 100%;\n  max-width: 25vw;\n  background: #111;\n"]);return m=function(){return n},n}var v=l.a.div(m(),(function(n){return n.height}),(function(n){return n.width}),(function(n){return n.width})),x=function(n){var e=n.stage;return o.a.createElement(v,{width:e[0].length,height:e.length},e.map((function(n){return n.map((function(n,e){return o.a.createElement(b,{key:e,type:n[0]})}))})))};function g(){var n=Object(u.a)(["\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  margin: 0 0 20px 0;\n  padding: 20px;\n  border: 4px solid #333;\n  min-height: 30px;\n  width: 100%;\n  border-radius: 20px;\n  color: ",";\n  background: #000;\n  font-family: Pixel, Arial, Helvetica, sans-serif;\n  font-size: 0.8rem;\n"]);return g=function(){return n},n}var h=l.a.div(g(),(function(n){return n.gameOver?"red":"#999"})),O=function(n){var e=n.gameOver,t=n.text;return o.a.createElement(h,{gameOver:e},t)};function y(){var n=Object(u.a)(["\n  box-sizing: border-box;\n  margin: 0 0 20px 0;\n  padding: 20px 10px 20px 20px;\n  border: 4px solid #333;\n  min-height: 30px;\n  width: 100%;\n  border-radius: 20px;\n  color: ",";\n  background: #000;\n  font-family: Pixel, Arial, Helvetica, sans-serif;\n  font-size: 0.8rem;\n"]);return y=function(){return n},n}var j=l.a.div(y(),(function(n){return n.gameOver?"red":"#999"})),E=function(n){n.gameOver,n.text;return o.a.createElement(j,null,o.a.createElement("div",null,"Move: Left, Right"),o.a.createElement("br",null),o.a.createElement("div",null,"Drop: Down"),o.a.createElement("br",null),o.a.createElement("div",null,"Rotation: Up"))};function w(){var n=Object(u.a)(["\n  box-sizing: border-box;\n  margin: 0 0 20px 0;\n  padding: 20px;\n  min-height: 30px;\n  width: 100%;\n  border-radius: 20px;\n  border: none;\n  color: white;\n  background: #333;\n  font-family: Pixel, Arial, Helvetica, sans-serif;\n  font-size: 1rem;\n  outline: none;\n  cursor: pointer;\n"]);return w=function(){return n},n}var S=l.a.button(w()),k=function(n){var e=n.callback;return o.a.createElement(S,{onClick:e},"Start Game")},I=t(11),J=t.n(I);function L(){var n=Object(u.a)(["\n  display: flex;\n  align-items: flex-start;\n  padding: 40px;\n  margin: 0 auto;\n  max-width: 900px;\n\n  aside {\n    width: 100%;\n    max-width: 200px;\n    display: block;\n    padding: 0 20px;\n  }\n"]);return L=function(){return n},n}function z(){var n=Object(u.a)(["\n  width: 100vw;\n  height: 100vh;\n  background: url(",") #000;\n  background-size: cover;\n  overflow: hidden;\n"]);return z=function(){return n},n}var A=l.a.div(z(),J.a),T=l.a.div(L()),Z=function(){return Array.from(Array(20),(function(){return new Array(12).fill([0,"clear"])}))},C=function(n,e,t){for(var r=t.x,o=t.y,a=0;a<n.tetromino.length;a+=1)for(var c=0;c<n.tetromino[a].length;c+=1)if(0!==n.tetromino[a][c]&&(!e[a+n.pos.y+o]||!e[a+n.pos.y+o][c+n.pos.x+r]||"clear"!==e[a+n.pos.y+o][c+n.pos.x+r][1]))return!0},R=t(12),D=function(n,e){var t=Object(r.useState)(Z()),o=Object(i.a)(t,2),a=o[0],c=o[1],u=Object(r.useState)(0),l=Object(i.a)(u,2),f=l[0],d=l[1];return Object(r.useEffect)((function(){d(0);var t=function(t){var r=t.map((function(n){return n.map((function(n){return"clear"===n[1]?[0,"clear"]:n}))}));return n.tetromino.forEach((function(e,t){e.forEach((function(e,o){0!==e&&(r[t+n.pos.y][o+n.pos.x]=[e,"".concat(n.collided?"merged":"clear")])}))})),n.collided?(e(),function(n){return n.reduce((function(e,t){return-1===t.findIndex((function(n){return 0===n[0]}))?(d((function(n){return n+1})),e.unshift(new Array(n[0].length).fill([0,"clear"])),e):(e.push(t),e)}),[])}(r)):r};c((function(n){return t(n)}))}),[n,e]),[a,c,f]};var H=function(n){n.callback;var e=Object(r.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],u=Object(r.useState)(!1),l=Object(i.a)(u,2),f=l[0],d=l[1],b=function(){var n=Object(r.useState)({pos:{x:0,y:0},tetromino:s[0].shape,collided:!1}),e=Object(i.a)(n,2),t=e[0],o=e[1],a=function(n,e){var t=n.map((function(e,t){return n.map((function(n){return n[t]}))}));return e>0?t.map((function(n){return n.reverse()})):t.reverse()},c=Object(r.useCallback)((function(){o((function(n){return{pos:{x:4,y:0},tetromino:p().shape,collided:!1}}))}),[]);return[t,function(n){var e=n.x,t=n.y,r=n.collided;o((function(n){return Object(R.a)({},n,{pos:{x:n.pos.x+=e,y:n.pos.y+=t},collided:r})}))},c,function(n,e){var r=JSON.parse(JSON.stringify(t));r.tetromino=a(r.tetromino,e);for(var c=r.pos.x,i=1;C(r,n,{x:0,y:0});)if(r.pos.x+=i,(i=-(i+(i>0?1:-1)))>r.tetromino[0].length)return a(r.tetromino,-e),void(r.pos.x=c);o(r)}]}(),m=Object(i.a)(b,4),v=m[0],g=m[1],h=m[2],y=m[3],j=D(v,h),w=Object(i.a)(j,3),S=w[0],I=w[1],J=function(n){var e=Object(r.useState)(0),t=Object(i.a)(e,2),o=t[0],a=t[1],c=Object(r.useState)(0),u=Object(i.a)(c,2),l=u[0],f=u[1],d=Object(r.useState)(0),s=Object(i.a)(d,2),p=s[0],b=s[1],m=[40,100,300,1200],v=Object(r.useCallback)((function(){n>0&&(a((function(e){return e+m[n-1]*(p+1)})),f((function(e){return e+n})))}),[p,m,n]);return Object(r.useEffect)((function(){v()}),[o,v,n]),[o,a,l,f,p,b]}(w[2]),L=Object(i.a)(J,6),z=L[0],H=L[1],M=L[2],P=L[3],G=L[4],K=L[5],N=function(n){C(v,S,{x:n,y:0})||g({x:n,y:0})},U=function(){M>G+1&&(K((function(n){return n+1})),c(1e3/(G+1)+200)),C(v,S,{x:0,y:1})?(v.pos.y<1&&(d(!0),c(null)),g({x:0,y:0,collided:!0})):g({x:0,y:1,collided:!1})},B=function(){c(null),U()};return function(n,e){var t=Object(r.useRef)();Object(r.useEffect)((function(){t.current=n}),[n]),Object(r.useEffect)((function(){if(null!==e){var n=setInterval((function(){t.current()}),e);return function(){clearInterval(n)}}}),[e])}((function(){U()}),a),o.a.createElement(A,{role:"button",tabIndex:"0",onKeyDown:function(n){return function(n){var e=n.keyCode;f||(37===e?N(-1):39===e?N(1):40===e?B():38===e&&y(S,1))}(n)},onKeyUp:function(n){var e=n.keyCode;f||40===e&&c(1e3/(G+1)+200)}},o.a.createElement(T,null,o.a.createElement(x,{stage:S}),o.a.createElement("aside",null,f?o.a.createElement("div",null,o.a.createElement(O,{text:"Score: ".concat(z)}),o.a.createElement(O,{gameOver:f,text:"Game Over"})):o.a.createElement("div",null,o.a.createElement(O,{text:"Score: ".concat(z)}),o.a.createElement(O,{text:"Rows: ".concat(M)}),o.a.createElement(O,{text:"Level: ".concat(G)}),o.a.createElement(E,null)),o.a.createElement(k,{callback:function(){I(Z()),c(1e3),h(),d(!1),H(0),P(0),K(0)}}))))},M=function(){return o.a.createElement("div",null,o.a.createElement(H,null))};c.a.render(o.a.createElement(M,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.fed57e42.chunk.js.map