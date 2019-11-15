(this.webpackJsonpkryptodash=this.webpackJsonpkryptodash||[]).push([[0],{25:function(e,t,n){e.exports=n(42)},30:function(e,t,n){},31:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(12),i=n.n(o),c=(n(30),n(31),n(13)),l=n(4),u=n.n(l),s=n(5),f=n(10),p=n(14),d=n(15),m=n(21),v=n(16),b=n(22),g=n(3),C=n.n(g);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=n(35),E=a.a.createContext({page:"",favorites:[],prices:[],filteredCoins:[],currentFavorite:"",confirmFavorites:function(){},firstVisit:!1,setPage:function(){},addCoin:function(){},removeCoin:function(){},isInFavorites:function(){return!1},setFilteredCoins:function(){},setCurrentFavorite:function(){}}),O=10,j=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(v.a)(t).call(this,e))).componentDidMount=function(){n.fetchCoins(),n.fetchPrices()},n.addCoin=function(e){var t=Object(f.a)(n.state.favorites);t.length<O&&(t.push(e),n.setState({favorites:t}))},n.removeCoin=function(e){var t=Object(f.a)(n.state.favorites);n.setState({favorites:C.a.pull(t,e)})},n.fetchCoins=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.coinList();case 2:t=e.sent.Data,console.log("fetch",t),n.setState({coinList:t});case 5:case"end":return e.stop()}}),e)}))),n.fetchPrices=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.firstVisit){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.prices();case 4:t=(t=e.sent).filter((function(e){return Object.keys(e).length})),console.log("prices",t),n.setState({prices:t});case 8:case"end":return e.stop()}}),e)}))),n.prices=Object(s.a)(u.a.mark((function e(){var t,r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],r=0;case 2:if(!(r<n.state.favorites.length)){e.next=16;break}return e.prev=3,e.next=6,x.priceFull(n.state.favorites[r],"USD");case 6:a=e.sent,t.push(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.warn("Fetch price error: ",e.t0);case 13:r++,e.next=2;break;case 16:return e.abrupt("return",t);case 17:case"end":return e.stop()}}),e,null,[[3,10]])}))),n.isInFavorites=function(e){return C.a.includes(n.state.favorites,e)},n.confirmFavorites=function(){var e=n.state.favorites[0]||"";n.setState({firstVisit:!1,page:"dashboard",currentFavorite:e},(function(){n.fetchPrices()})),localStorage.setItem("kryptoDash",JSON.stringify({favorites:n.state.favorites,currentFavorite:e}))},n.setCurrentFavorite=function(e){n.setState({currentFavorite:e}),localStorage.setItem("kryptoDash",JSON.stringify(h({},JSON.parse(String(localStorage.getItem("kryptoDash"))),{currentFavorite:e})))},n.savedSettings=function(){var e=JSON.parse(String(localStorage.getItem("kryptoDash")));return e?{favorites:e.favorites,currentFavorite:e.currentFavorite}:{page:"settings",firstVisit:!0}},n.setPage=function(e){n.setState({page:e})},n.setFilteredCoins=function(e){return n.setState({filteredCoins:e})},n.state=h({page:"dashboard",favorites:["BTC","LTC","ETH","ZEC","DASH","XRP","XMR","BCH","NEO","EOS"],currentFavorite:"BTC",prices:[],filteredCoins:[]},n.savedSettings(),{confirmFavorites:n.confirmFavorites,setPage:n.setPage,addCoin:n.addCoin,removeCoin:n.removeCoin,isInFavorites:n.isInFavorites,setFilteredCoins:n.setFilteredCoins,setCurrentFavorite:n.setCurrentFavorite}),n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return a.a.createElement(E.Provider,{value:this.state},this.props.children)}}]),t}(a.a.Component),k=function(){return a.a.createElement(E.Consumer,null,(function(e){return e.firstVisit?a.a.createElement("div",null,"Welcome to Kryptodash, please select your favorite coin to begin."):null}))},F=n(1),S=n(2),A="background-color: ".concat("#061a44"),w="background-color: ".concat("#010e2c",";"),P=("background-color: ".concat("#42ff3a",";"),"box-shadow: 0px 0px 4px 2px #5fff17");function D(){var e=Object(F.a)(["\n  display: grid;\n  justify-content: center;\n"]);return D=function(){return e},e}function B(){var e=Object(F.a)(["\n  margin: 20px;\n  color: ",";\n  border-radius: 5px;\n  ","\n  padding: 6px 12px;\n  cursor: pointer;\n  &:hover {\n    ","\n  }\n"]);return B=function(){return e},e}var I=S.b.div(B(),"#42ff3a","font-size: 1.0em;",P),L=S.b.div(D()),T=function(){return a.a.createElement(E.Consumer,null,(function(e){var t=e.confirmFavorites;return a.a.createElement(L,null,a.a.createElement(I,{onClick:t},"Confirm Favorites"))}))},N=function(e){return a.a.createElement(E.Consumer,null,(function(t){return t.page!==e.name?null:a.a.createElement("div",null,e.children)}))};function H(){var e=Object(F.a)(["\n  pointer-events: none;\n  opacity: 0.4;\n"]);return H=function(){return e},e}function V(){var e=Object(F.a)(["\n  &:hover {\n    cursor: pointer;\n    ","\n  }\n"]);return V=function(){return e},e}function W(){var e=Object(F.a)(["\n  &:hover {\n    cursor: pointer;\n    ","\n  }\n"]);return W=function(){return e},e}function z(){var e=Object(F.a)(["\n  ","\n  ","\n  border-radius: 5px;\n  padding: 10px;\n"]);return z=function(){return e},e}var G=S.b.div(z(),"box-shadow: 0px 0px 5px 1px #121d5b",A),K=Object(S.b)(G)(W(),P),M=Object(S.b)(K)(V(),"box-shadow: 0px 0px 2px 2px #e41111"),R=Object(S.b)(G)(H());function U(){var e=Object(F.a)(["\n  justify-self: right;\n  display: none;\n  ",": hover & {\n    display: block;\n    color: red;\n  }\n"]);return U=function(){return e},e}function J(){var e=Object(F.a)(["\n  justify-self: right;\n"]);return J=function(){return e},e}function X(){var e=Object(F.a)(["\n  margin-right: 10px;\n"]);return X=function(){return e},e}function $(){var e=Object(F.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  margin-bottom: 10px;\n"]);return $=function(){return e},e}var Y=S.b.div($()),Z=S.b.div(X()),q=S.b.div(J()),Q=S.b.div(U(),M),_=function(e){return a.a.createElement(Y,null,a.a.createElement(Z,null,e.name),e.topSection?a.a.createElement(Q,null," X "):a.a.createElement(q,null,e.symbol))};function ee(){var e=Object(F.a)(["\n      height: 200px;\n      margin: auto;\n      display: block;\n    "]);return ee=function(){return e},e}function te(){var e=Object(F.a)(["\n  height: 50px;\n  ","\n"]);return te=function(){return e},e}var ne=S.b.img(te(),(function(e){return e.spotlight&&Object(S.a)(ee())})),re=function(e){var t=e.coin,n=e.spotlight;return a.a.createElement(ne,{spotlight:n,alt:t.CoinSymbol,src:"http://cryptocompare.com/".concat(t.ImageUrl)})};function ae(e,t,n,r){return e?function(){r(t)}:function(){n(t)}}var oe=function(e){return a.a.createElement(E.Consumer,null,(function(t){var n=t.coinList,r=t.addCoin,o=t.removeCoin,i=t.isInFavorites,c=n[e.coinKey],l=K;return e.topSection?l=M:i(e.coinKey)&&(l=R),a.a.createElement(l,{onClick:ae(e.topSection,e.coinKey,r,o)},a.a.createElement(_,{topSection:e.topSection,name:c.CoinName,symbol:c.Symbol}),a.a.createElement(re,{coin:c}))}))};function ie(){var e=Object(F.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  grid-gap: 15px;\n  margin-top: 60px;\n"]);return ie=function(){return e},e}var ce=S.b.div(ie());function le(e,t,n,r){return t?n:function(e,t){return Object.keys(t).length>0?Object.keys(t):Object.keys(e).slice(0,100)}(e,r)}var ue=function(e){return a.a.createElement(E.Consumer,null,(function(t){var n=t.coinList,r=t.favorites,o=t.filteredCoins;return a.a.createElement(ce,null,le(n,!!e.topSection,r,o).map((function(t){return a.a.createElement(oe,{key:t,topSection:!!e.topSection,coinKey:t})})))}))},se=n(19),fe=n.n(se);function pe(){var e=Object(F.a)(["\n  ","\n  ","\n  padding: 4px;\n  border-radius: 5px;\n  border: 1px solid;\n  height: 25px;\n  color: #1163c9;\n  place-self: center left;\n"]);return pe=function(){return e},e}function de(){var e=Object(F.a)(["\n  display: grid;\n  grid-template-columns: 200px 1fr;\n"]);return de=function(){return e},e}var me=S.b.div(de()),ve=S.b.input(pe(),w,"font-size: 1.0em;"),be=C.a.debounce((function(e,t,n){var r=Object.keys(t),a=r.map((function(e){return t[e].CoinName})),o=r.concat(a),i=fe.a.filter(e,o,{}).map((function(e){return e.string}));n(C.a.pickBy(t,(function(e,t){var n=e.coinName;return C.a.includes(i,t)||C.a.includes(i,n)})))}),500);var ge=function(){return a.a.createElement(E.Consumer,null,(function(e){var t=e.setFilteredCoins,n=e.coinList;return a.a.createElement(me,null,a.a.createElement("p",null," Search All Coins "),a.a.createElement(ve,{onKeyUp:function(e){return function(e,t,n){var r=e.target.value;r?be(r,n,t):t([])}(e,t,n)}}))}))},Ce=function(){return a.a.createElement(N,{name:"settings"},a.a.createElement(k,null),a.a.createElement(ue,{topSection:!0}),a.a.createElement(T,null),a.a.createElement(ge,null),a.a.createElement(ue,null))};function ye(){var e=Object(F.a)(["\n  padding: 40px;\n"]);return ye=function(){return e},e}var he=S.b.div(ye());function xe(){var e=Object(F.a)(["\n      text-shadow: 0 0 60px #03ff03;\n    "]);return xe=function(){return e},e}function Ee(){var e=Object(F.a)(["\n  cursor: pointer;\n  ","\n"]);return Ee=function(){return e},e}function Oe(){var e=Object(F.a)(["\n  ","\n"]);return Oe=function(){return e},e}function je(){var e=Object(F.a)(["\n  display: grid;\n  grid-template-columns: 200px auto 160px 160px;\n"]);return je=function(){return e},e}var ke=S.b.div(je()),Fe=S.b.div(Oe(),"font-size: 1.4em"),Se=S.b.div(Ee(),(function(e){return e.active&&Object(S.a)(xe())})),Ae=function(e){return a.a.createElement(E.Consumer,null,(function(t){var n,r=t.page,o=t.setPage;return a.a.createElement(Se,{active:r===e.name,onClick:function(){return o(e.name)}},(n=e.name).charAt(0).toUpperCase()+n.substr(1))}))},we=function(){return a.a.createElement(ke,null,a.a.createElement(Fe,null," KRYPTODASH "),a.a.createElement("div",null),a.a.createElement(Ae,{active:!0,name:"dashboard"}),a.a.createElement(Ae,{name:"settings"}))};function Pe(){var e=Object(F.a)(["\n  margin-top: 40px;\n"]);return Pe=function(){return e},e}var De=S.b.div(Pe()),Be=function(e){return a.a.createElement(E.Consumer,null,(function(t){var n=t.coinList,r=t.prices,o=t.firstVisit;return n?o||r?a.a.createElement(De,null,e.children):a.a.createElement(De,null," Loading Prices "):a.a.createElement(De,null," Loading Coins ")}))};function Ie(){var e=Object(F.a)(["\n      ","\n      pointer-events: none;\n    "]);return Ie=function(){return e},e}function Le(){var e=Object(F.a)(["\n      display: grid;\n      ","\n      grid-gap: 5px;\n      grid-template-columns: repeat(3, 1fr);\n      justify-items: right;\n    "]);return Le=function(){return e},e}function Te(){var e=Object(F.a)(["\n  ","\n\n  ","\n"]);return Te=function(){return e},e}function Ne(){var e=Object(F.a)(["\n      color: red;\n    "]);return Ne=function(){return e},e}function He(){var e=Object(F.a)(["\n  color: green;\n  ","\n"]);return He=function(){return e},e}function Ve(){var e=Object(F.a)(["\n  ","\n"]);return Ve=function(){return e},e}function We(){var e=Object(F.a)(["\n  justify-self: left;\n"]);return We=function(){return e},e}function ze(){var e=Object(F.a)(["\n  justify-self: right;\n"]);return ze=function(){return e},e}var Ge=S.b.div(ze()),Ke=S.b.div(We()),Me=S.b.div(Ve(),"font-size: 1.2em"),Re=S.b.div(He(),(function(e){return e.red&&Object(S.a)(Ne())})),Ue=function(e){return+(e+"").slice(0,7)},Je=Object(S.b)(K)(Te(),(function(e){return e.compact&&Object(S.a)(Le(),"font-size: 0.75em")}),(function(e){return e.currentFavorite&&Object(S.a)(Ie(),P)})),Xe=function(e){var t=e.data;return a.a.createElement(Ge,null,a.a.createElement(Re,{red:t.CHANGEPCT24HOUR<0},Ue(t.CHANGEPCT24HOUR),"%"))},$e=function(e){var t=e.sym,n=e.data,r=e.currentFavorite,o=e.setCurrentFavorite;return a.a.createElement(Je,{currentFavorite:r,onClick:o},a.a.createElement(Y,null,a.a.createElement(Ke,null,t),a.a.createElement(Xe,{data:n}),a.a.createElement(Me,null,"$",Ue(n.PRICE))))},Ye=function(e){var t=e.sym,n=e.data,r=e.currentFavorite,o=e.setCurrentFavorite;return a.a.createElement(Je,{compact:!0,currentFavorite:r,onClick:o},a.a.createElement(Ke,null,t),a.a.createElement(Xe,{data:n}),a.a.createElement("div",null,"$",Ue(n.PRICE)))},Ze=function(e){var t=e.price,n=e.index,r=Object.keys(t)[0],o=t[r].USD,i=n<5?$e:Ye;return a.a.createElement(E.Consumer,null,(function(e){var t=e.currentFavorite,n=e.setCurrentFavorite;return a.a.createElement(i,{sym:r,data:o,currentFavorite:t===r,setCurrentFavorite:function(e){return n(r)}})}))};function qe(){var e=Object(F.a)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-gap: 15px;\n  margin-top: 40px;\n"]);return qe=function(){return e},e}var Qe=S.b.div(qe()),_e=function(){return a.a.createElement(E.Consumer,null,(function(e){var t=e.prices;return a.a.createElement(Qe,null,t.map((function(e,t){return a.a.createElement(Ze,{key:t,price:e,index:t})})))}))};function et(){var e=Object(F.a)(["\n  text-align: center;\n  ",";\n  margin-bottom: 20px;\n  margin-top: 20px;\n"]);return et=function(){return e},e}var tt=S.b.div(et(),"font-size: 1.2em"),nt=function(){return a.a.createElement(E.Consumer,null,(function(e){var t=e.currentFavorite,n=e.coinList;return a.a.createElement(G,null,a.a.createElement(tt,null,n[t].CoinName),a.a.createElement(re,{spotlight:!0,coin:n[t]}))}))},rt=n(20),at=n(9),ot=n.n(at);ot.a.Highcharts.setOptions({colors:["#61d936","#552ccb","#1163c9","#04a1ee","#08c6e0","#146b9e","#f376c1","#1b2839"],chart:{backgroundColor:"#061a44",className:"dark-container",plotBackgroundColor:"#061a44",plotBorderColor:"#CCCCCC",plotBorderWidth:0},title:{style:{color:"#C0C0C0",font:'bold 16px "Trebuchet MS", Verdana, sans-serif'}},subtitle:{style:{color:"#666666",font:'bold 12px "Trebuchet MS", Verdana, sans-serif'}},xAxis:{gridLineColor:"#333333",gridLineWidth:0,labels:{style:{color:"#A0A0A0"}},lineColor:"#A0A0A0",tickColor:"#A0A0A0",title:{style:{color:"#CCC",fontWeight:"bold",fontSize:"12px",fontFamily:"Trebuchet MS, Verdana, sans-serif"}}},yAxis:{gridLineColor:"#333333",labels:{style:{color:"#A0A0A0"}},lineColor:"#A0A0A0",minorTickInterval:null,tickColor:"#A0A0A0",tickWidth:1,title:{style:{color:"#CCC",fontWeight:"bold",fontSize:"12px",fontFamily:"Trebuchet MS, Verdana, sans-serif"}}},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.75)",style:{color:"#F0F0F0"}},toolbar:{itemStyle:{color:"silver"}},plotOptions:{line:{dataLabels:{color:"#CCC"},marker:{lineColor:"#333"}},spline:{marker:{lineColor:"#333"}},scatter:{marker:{lineColor:"#333"}},candlestick:{lineColor:"white"}},legend:{backgroundColor:"rgba(0, 0, 0, 0.5)",itemStyle:{font:"9pt Trebuchet MS, Verdana, sans-serif",color:"#A0A0A0"},itemHoverStyle:{color:"#FFF"},itemHiddenStyle:{color:"#444"},title:{style:{color:"#C0C0C0"}}},credits:{enabled:!1},labels:{style:{color:"#CCC"}},navigation:{buttonOptions:{symbolStroke:"#DDDDDD",theme:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#606060"],[.6,"#333333"]]},stroke:"#000000"}}},rangeSelector:{buttonTheme:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},stroke:"#000000",style:{color:"#CCC",fontWeight:"bold"},states:{hover:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#BBB"],[.6,"#888"]]},stroke:"#000000",style:{color:"white"}},select:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.1,"#000"],[.3,"#333"]]},stroke:"#000000",style:{color:"yellow"}}}},inputStyle:{backgroundColor:"#333",color:"silver"},labelStyle:{color:"silver"}},navigator:{handles:{backgroundColor:"#666",borderColor:"#AAA"},outlineColor:"#CCC",maskFill:"rgba(16, 16, 16, 0.5)",series:{color:"#7798BF",lineColor:"#A6C7ED"}},scrollbar:{barBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},barBorderColor:"#CCC",buttonArrowColor:"#CCC",buttonBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},buttonBorderColor:"#CCC",rifleColor:"#FFF",trackBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#000"],[1,"#333"]]},trackBorderColor:"#666"}});var it=function(){return a.a.createElement(E.Consumer,null,(function(e){return Object(rt.a)(e),a.a.createElement(G,null,a.a.createElement(ot.a,{config:{title:{text:""},yAxis:{title:{text:"Price"}},legend:{layout:"vertical",align:"right",verticalAlign:"middle"},plotOptions:{series:{label:{connectorAllowed:!1},pointStart:2010}},series:[{name:"Installation",data:[43934,52503,57177,69658,97031,119931,137133,154175]}],responsive:{rules:[{condition:{maxWidth:500},chartOptions:{legend:{layout:"horizontal",align:"center",verticalAlign:"bottom"}}}]}}}))}))};function ct(){var e=Object(F.a)(["\n  display: grid;\n  margin-top: 20px;\n  grid-gap: 15px;\n  grid-template-columns: 1fr 3fr;\n"]);return ct=function(){return e},e}var lt=S.b.div(ct()),ut=function(){return a.a.createElement(N,{name:"dashboard"},a.a.createElement(_e,null),a.a.createElement(lt,null,a.a.createElement(nt,null),a.a.createElement(it,null)))},st=function(){return a.a.createElement(he,null,a.a.createElement(j,null,a.a.createElement(we,null),a.a.createElement(Be,null,a.a.createElement(Ce,null),a.a.createElement(ut,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(st,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.2a564cd4.chunk.js.map