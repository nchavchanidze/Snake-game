(this["webpackJsonpsnake-game"]=this["webpackJsonpsnake-game"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(3),c=a.n(o),i=(a(14),a(1)),r=a(4),h=a(5),l=a(7),u=a(6),k=a(8),d=function(e){return s.a.createElement("div",null,e.snakeDots.map((function(e,t){var a={left:"".concat(e[0],"%"),top:"".concat(e[1],"%")};return s.a.createElement("div",{className:"snake-dot",key:t,style:a})})))},f=function(e){var t={left:"".concat(e.dot[0],"%"),top:"".concat(e.dot[1],"%")};return s.a.createElement("div",{className:"snake-food",style:t})},m=function(){return[2*Math.floor((98*Math.random()+1)/2),2*Math.floor((98*Math.random()+1)/2)]},v={food:m(),speed:100,direction:"RIGHT",snakeDots:[[0,0],[2,0]],count:0},p=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state=v,a.onKeyDown=function(e){switch((e=e||window.event).keyCode){case 38:a.setState({direction:"UP"});break;case 40:a.setState({direction:"DOWN"});break;case 37:a.setState({direction:"LEFT"});break;case 39:a.setState({direction:"RIGHT"})}},a.moveSnake=function(){var e=Object(i.a)(a.state.snakeDots),t=e[e.length-1];switch(a.state.direction){case"RIGHT":t=[t[0]+2,t[1]];break;case"LEFT":t=[t[0]-2,t[1]];break;case"DOWN":t=[t[0],t[1]+2];break;case"UP":t=[t[0],t[1]-2]}e.push(t),e.shift(),a.setState({snakeDots:e})},a}return Object(k.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){setInterval(this.moveSnake,this.state.speed),document.onkeydown=this.onKeyDown}},{key:"componentDidUpdate",value:function(){this.checkIfOutOfBorders(),this.checkIfCollapsed(),this.chekIfEat()}},{key:"checkIfOutOfBorders",value:function(){var e=this.state.snakeDots[this.state.snakeDots.length-1];(e[0]>=100||e[1]>=100||e[0]<0||e[1]<0)&&this.onGameOver()}},{key:"checkIfCollapsed",value:function(){var e=this,t=Object(i.a)(this.state.snakeDots),a=t[t.length-1];t.pop(),t.forEach((function(t){a[0]===t[0]&&a[1]===t[1]&&e.onGameOver()}))}},{key:"chekIfEat",value:function(){var e=this.state.snakeDots[this.state.snakeDots.length-1],t=this.state.food;e[0]===t[0]&&e[1]===t[1]&&(this.setState({food:m()}),this.enlargeSnake(),this.increaseSpeed(),this.increment())}},{key:"increment",value:function(){this.setState({count:this.state.count+1})}},{key:"enlargeSnake",value:function(){var e=Object(i.a)(this.state.snakeDots);e.unshift([]),this.setState({snakeDots:e})}},{key:"increaseSpeed",value:function(){this.state.speed>10&&this.setState({speed:this.state.speed-10})}},{key:"onGameOver",value:function(){alert("Game Over. \ud83d\udc80 You Scored ".concat(this.state.snakeDots.length-2," \ud83c\udf4e")),this.setState(v)}},{key:"render",value:function(){return s.a.createElement("div",{className:"game-area"},s.a.createElement(d,{snakeDots:this.state.snakeDots}),s.a.createElement(f,{dot:this.state.food}),s.a.createElement("span",{role:"img","aria-label":"Apple",className:"counter"},"\ud83c\udf4e: ",this.state.count))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.82b2f135.chunk.js.map