(this.webpackJsonpprac=this.webpackJsonpprac||[]).push([[0],{14:function(e,t,n){},8:function(e,t,n){e.exports=n(9)},9:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n(2),i=n(3),r=n(5),u=n(4),c=n(0),s=n.n(c),o=n(7),h=n.n(o),m=(n(14),function(e){Object(r.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={date:new Date},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"tenthDigit",value:function(e){return Math.floor(e/10)}},{key:"firstDigit",value:function(e){return e%10}},{key:"render",value:function(){var e=this.state.date,t=1*e.getHours(),n=1*e.getMinutes(),a=1*e.getSeconds();return s.a.createElement("div",{className:"time"},s.a.createElement("h2",null,this.tenthDigit(t)),s.a.createElement("h2",null,this.firstDigit(t)),s.a.createElement("h2",null,":"),s.a.createElement("h2",null,this.tenthDigit(n)),s.a.createElement("h2",null,this.firstDigit(n)),s.a.createElement("h2",null,":"),s.a.createElement("h2",null,this.tenthDigit(a)),s.a.createElement("h2",null,this.firstDigit(a)))}}]),n}(s.a.Component)),g=function(e){Object(r.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).state={isLogin:!1,value:""},i.handleLogin=i.handleLogin.bind(Object(a.a)(i)),i.handleChange=i.handleChange.bind(Object(a.a)(i)),i}return Object(i.a)(n,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleLogin",value:function(e){this.setState((function(e){return{isLogin:!e.isLogin}})),e.preventDefault()}},{key:"render",value:function(){return this.state.isLogin?s.a.createElement("div",null,s.a.createElement("h1",null,"Welcome ",s.a.createElement("br",null)," ",this.state.value),s.a.createElement("div",{className:"Above"},s.a.createElement(m,null),s.a.createElement("form",{onSubmit:this.handleLogin,className:"logout"},s.a.createElement("input",{type:"submit",value:"LOGOUT"})))):s.a.createElement("fieldset",{className:"loginControl"},s.a.createElement("legend",null,"LOGIN"),s.a.createElement("form",{onSubmit:this.handleLogin,className:"Login"},s.a.createElement("label",null,"name:",s.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange})),s.a.createElement("input",{type:"submit",value:"LOGIN"})))}}]),n}(s.a.Component);h.a.render(s.a.createElement(g,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.bce9671e.chunk.js.map