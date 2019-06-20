(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){e.exports=a.p+"static/media/shape.43e76283.svg"},109:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(31),l=a.n(o),c=a(16),s=a(10),i=a(21),m=a(17),u=a(22),d=a(32),h=a(59),p=a.n(h),g=a(20),v=a.n(g),E=a(118),f=a(124),b=a(117),y=a(122),B=a(57);B.defaultFormat("0,000");var O=[{value:500,label:"500$"},{value:1e3,label:"1000$"},{value:2e3,label:"2000$"},{value:3e3,label:"3000$"},{value:4e3,label:"4000$"},{value:5e3,label:"5000$"}],k=[{value:6,label:"6 M"},{value:12,label:"12 M"},{value:18,label:"18 M"},{value:24,label:"24 M"}];function x(e){return"".concat(e)}var j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).changeOnDebounce=p()(function(){a.props.calculateInstalment(a.state.amount,a.state.numOfMonths)},500),a.handleAmountChange=function(e,t){a.setState({amount:t},function(){a.state.amount&&a.state.numOfMonths&&a.changeOnDebounce()})},a.handleTenureChange=function(e,t){a.setState({numOfMonths:t},function(){a.state.amount&&a.state.numOfMonths&&a.changeOnDebounce()})},a.state={amount:1e3,numOfMonths:12},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.state.amount&&this.state.numOfMonths&&this.props.calculateInstalment(this.state.amount,this.state.numOfMonths)}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.amount,n=t.numOfMonths;return r.a.createElement("div",{className:e.root},r.a.createElement(b.a,{container:!0,justify:"center"},r.a.createElement(b.a,{spacing:4,alignItems:"center",justify:"center",container:!0,className:e.grid},r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement("div",{className:e.topBar},r.a.createElement("div",{className:e.blockCenter},r.a.createElement(f.a,{variant:"h4",gutterBottom:!0,className:e.block},"Loan Calculator"),r.a.createElement(f.a,{variant:"h6"},"Select Loan Amount and Tenure, to view details")))),r.a.createElement(b.a,{item:!0,xs:12,md:6},r.a.createElement(E.a,{className:e.paper},r.a.createElement("div",null,r.a.createElement(f.a,{variant:"h6",gutterBottom:!0},"Amount"),r.a.createElement(f.a,{variant:"body1"},"Use slider to set the amount you need."),r.a.createElement("div",{className:e.blockCenter},r.a.createElement(f.a,{color:"secondary",variant:"h6",gutterBottom:!0},B(a).format()," USD")),r.a.createElement("div",null,r.a.createElement(y.a,{min:500,max:5e3,getAriaValueText:x,step:100,valueLabelDisplay:"auto",marks:O,value:this.state.amount,onChange:this.handleAmountChange}))))),r.a.createElement(b.a,{item:!0,xs:12,md:6},r.a.createElement(E.a,{className:e.paper},r.a.createElement("div",null,r.a.createElement(f.a,{variant:"h6",gutterBottom:!0},"Tenure"),r.a.createElement(f.a,{variant:"body1"},"Use slider to set the tenure."),r.a.createElement("div",{className:e.blockCenter},r.a.createElement(f.a,{color:"secondary",variant:"h6",gutterBottom:!0},n," Months")),r.a.createElement("div",null,r.a.createElement(y.a,{min:6,max:24,getAriaValueText:x,step:1,valueLabelDisplay:"auto",marks:k,value:this.state.numOfMonths,onChange:this.handleTenureChange}))))))))}}]),t}(r.a.Component),w=v()(function(e){return{root:{flexGrow:1},grid:Object(d.a)({width:"80%",margin:"0 ".concat(e.spacing(2),"px")},e.breakpoints.down("sm"),{width:"calc(100% - 20px)"}),paper:{padding:e.spacing(3),textAlign:"left",color:e.palette.text.secondary},blockCenter:{padding:e.spacing(2),textAlign:"center"},block:{padding:e.spacing(2)}}})(j),N=a(119),C=a(57);C.defaultFormat("0,000");var M=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;if(!this.props.result.interestRate)return r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.blockCenter},r.a.createElement(f.a,{variant:"h4",gutterBottom:!0,className:e.block},"Select Amount and Tenure to calculate")));var t=this.props.result.monthlyPayment.amount,a=this.props.result.numPayments,n=this.props.result.interestRate,o=t*a,l=this.props.result.principal.amount,c=o-l;return r.a.createElement("div",{className:e.root},r.a.createElement(b.a,{container:!0,justify:"center"},r.a.createElement(b.a,{container:!0,spacing:4,justify:"center",className:e.grid},r.a.createElement(b.a,{item:!0,xs:12,md:4},r.a.createElement(E.a,{className:e.paper,style:{position:"relative"}},r.a.createElement("div",null,r.a.createElement(f.a,{variant:"h6",gutterBottom:!0},"Details"),r.a.createElement(N.a,null),r.a.createElement("div",{className:e.mainBadge},r.a.createElement(f.a,{variant:"subtitle1",gutterBottom:!0},"Monthly Payments"),r.a.createElement(f.a,{variant:"h5",color:"secondary",gutterBottom:!0},C(t).format()," USD")),r.a.createElement("div",{className:e.mainBadge},r.a.createElement(f.a,{variant:"subtitle1",gutterBottom:!0},"Number of Payments"),r.a.createElement(f.a,{variant:"h5",color:"secondary",gutterBottom:!0},C(a).format())),r.a.createElement("div",{className:e.mainBadge},r.a.createElement(f.a,{variant:"subtitle1",gutterBottom:!0},"Interest Rate"),r.a.createElement(f.a,{variant:"h5",color:"secondary",gutterBottom:!0},n," %")),r.a.createElement(N.a,null),r.a.createElement("div",{className:e.mainBadge},r.a.createElement(f.a,{variant:"subtitle1",gutterBottom:!0},"Total"),r.a.createElement(f.a,{variant:"h5",color:"secondary",gutterBottom:!0},C(o).format()," USD")),r.a.createElement("div",{className:e.mainBadge},r.a.createElement(f.a,{variant:"subtitle1",gutterBottom:!0},"Principal Amount"),r.a.createElement(f.a,{variant:"h6",color:"secondary",gutterBottom:!0},C(l).format()," USD")),r.a.createElement("div",{className:e.mainBadge},r.a.createElement(f.a,{variant:"subtitle1",gutterBottom:!0},"Interest Amount"),r.a.createElement(f.a,{variant:"h6",color:"secondary",gutterBottom:!0},C(c).format()," USD"))))))))}}]),t}(r.a.Component),A=v()(function(e){return{root:{flexGrow:1},grid:Object(d.a)({width:"80%",margin:"0 ".concat(e.spacing(2),"px")},e.breakpoints.down("sm"),{width:"calc(100% - 20px)"}),paper:{padding:e.spacing(3),textAlign:"left",color:e.palette.text.secondary},blockCenter:{padding:e.spacing(2),textAlign:"center"},block:{padding:e.spacing(2)},mainBadge:{display:"flex",alignItems:"center",justifyContent:"space-between",textAlign:"right"}}})(M),D={calculate:function(e,t){var a="https://ftl-frontend-test.herokuapp.com/interest?amount=".concat(e,"&numMonths=").concat(t);return fetch(a).then(function(e){return e.json()}).then(function(e){return e||null})}},S=a(62),I=a(121),T=a(120),U=a(39),$=a(123),P=a(108),L=Object(S.a)({palette:{secondary:{main:T.a[900]},primary:{main:U.a[700]}}}),F=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).calculateInstalment=function(e,t){D.calculate(e,t).then(function(e){a.setState({result:e})}).catch(function(e){console.log("Error fetching data",e.message)})},a.state={result:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(I.a,{theme:L},r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,null),r.a.createElement("div",{className:e.root},r.a.createElement(w,{data:this.state,calculateInstalment:this.calculateInstalment}),r.a.createElement(A,{result:this.state.result}))))}}]),t}(r.a.Component),G=v()(function(e){return{root:{flexGrow:1,backgroundColor:e.palette.grey[100],overflow:"hidden",background:"url(".concat(P,") no-repeat"),backgroundSize:"cover",backgroundPosition:"0 400px",paddingBottom:200}}})(F);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},66:function(e,t,a){e.exports=a(109)}},[[66,1,2]]]);
//# sourceMappingURL=main.23f5d26d.chunk.js.map