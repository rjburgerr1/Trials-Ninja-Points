(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{26:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),c=a(19),l=a.n(c),r=a(7),i=(a(26),a(27),a(28),a(2)),o=a(9),h=a(10),m=a(12),j=a(11),d=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).handleEmailChange=function(e){e.preventDefault(),s.setState({email:e.target.value})},s.handlePasswordChange=function(e){s.setState({password:e.target.value})},s.handleLogin=function(){console.log("Email: "+s.state.email),console.log("Password: "+s.state.password)},s.state={email:"",password:""},s}return Object(h.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("form",{action:"http://localhost:3002/users",method:"post",children:[Object(s.jsx)("h3",{children:"Sign In"}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Email address"}),Object(s.jsx)("input",{value:this.state.email,type:"email",className:"form-control",placeholder:"Enter email",name:"email",onChange:this.handleEmailChange})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Password"}),Object(s.jsx)("input",{value:this.state.password,type:"password",className:"form-control",placeholder:"Enter password",name:"password",onChange:this.handlePasswordChange})]}),Object(s.jsx)("div",{className:"form-group",children:Object(s.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(s.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1"}),Object(s.jsx)("label",{className:"custom-control-label",htmlFor:"customCheck1",children:"Remember me"})]})}),Object(s.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",onClick:this.handleLogin,children:"Submit"}),Object(s.jsxs)("p",{className:"forgot-password text-right",children:["Forgot ",Object(s.jsx)("a",{href:"/#",children:"password?"})]})]})}}]),a}(n.Component),b=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).handleEmailChange=function(e){s.setState({email:e.target.value})},s.handlePasswordChange=function(e){s.setState({password:e.target.value})},s.state={email:"",password:""},s}return Object(h.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("form",{action:"http://localhost:3002/sign-up-complete",method:"POST",children:[Object(s.jsx)("h3",{children:"Sign Up"}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Email"}),Object(s.jsx)("input",{type:"text",className:"form-control",placeholder:"Email",name:"email",onChange:this.handleEmailChange})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Password"}),Object(s.jsx)("input",{type:"text",className:"form-control",placeholder:"Password",name:"password",onChange:this.handlePasswordChange})]}),Object(s.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",children:"Sign Up"}),Object(s.jsxs)("p",{className:"forgot-password text-right",children:["Already registered ",Object(s.jsx)("a",{href:"/#",children:"sign in?"})]})]})}}]),a}(n.Component),u=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).handlegamertagChange=function(e){s.setState({gamertag:e.target.value})},s.handleRankChange=function(e){s.setState({rank:e.target.value})},s.handleFaultsChange=function(e){s.setState({faults:e.target.value})},s.handleTimeChange=function(e){s.setState({time:e.target.value})},s.handleTrackChange=function(e){s.setState({trackname:e.target.value})},s.handleninjapointsChange=function(e){s.setState({ninjapoints:e.target.value})},s.handleSubmit=function(){},s.state={gamertag:"",rank:"",faults:"",time:"",trackname:"",ninjapoints:""},s}return Object(h.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("form",{action:"http://localhost:3002/users",method:"get",children:[Object(s.jsx)("h3",{children:"Submit Your Run"}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"gamertag"}),Object(s.jsx)("input",{value:this.state.gamertag,type:"text",className:"form-control",placeholder:"Enter gamertag",name:"gamertag",onChange:this.handlegamertagChange})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Rank"}),Object(s.jsx)("input",{value:this.state.rank,type:"text",className:"form-control",placeholder:"Enter rank",name:"rank",onChange:this.handleRankChange})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Faults"}),Object(s.jsx)("input",{value:this.state.faults,type:"text",className:"form-control",placeholder:"Enter faults",name:"faults",onChange:this.handleFaultsChange})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Time"}),Object(s.jsx)("input",{value:this.state.time,type:"text",className:"form-control",placeholder:"Enter time",name:"time",onChange:this.handleTimeChange})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Track Name"}),Object(s.jsx)("input",{value:this.state.trackname,type:"text",className:"form-control",placeholder:"Enter track name",name:"track-name",onChange:this.handleTrackChange})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Ninja Points"}),Object(s.jsx)("input",{value:this.state.ninjapoints,type:"text",className:"form-control",placeholder:"Enter NinjaPoints",name:"ninja-points",onChange:this.handleninjapointsChange})]}),Object(s.jsx)("div",{className:"form-group",children:Object(s.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(s.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1"}),Object(s.jsx)("label",{className:"custom-control-label",htmlFor:"customCheck1",children:"Remember me"})]})}),Object(s.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",onClick:this.handleSubmit,children:"Submit"}),Object(s.jsxs)("p",{className:"forgot-password text-right",children:["Forgot ",Object(s.jsx)("a",{href:"/#",children:"password?"})]})]})}}]),a}(n.Component);var p=function(){return Object(s.jsx)(r.a,{children:Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(r.b,{className:"navbar-brand",to:"/sign-in",children:"Trials.com"}),Object(s.jsx)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02",children:Object(s.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(r.b,{className:"nav-link",to:"/submit",children:"Submit"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(r.b,{className:"nav-link",to:"/sign-in",children:"Login"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(r.b,{className:"nav-link",to:"/sign-up",children:"Sign up"})})]})})]})}),Object(s.jsx)("div",{className:"auth-wrapper",children:Object(s.jsx)("div",{className:"auth-inner",children:Object(s.jsxs)(i.c,{children:[Object(s.jsx)(i.a,{exact:!0,path:"/",component:d}),Object(s.jsx)(i.a,{path:"/submit",component:u}),Object(s.jsx)(i.a,{path:"/sign-in",component:d}),Object(s.jsx)(i.a,{path:"/sign-up",component:b})]})})})]})})};l.a.render(Object(s.jsx)(r.a,{children:Object(s.jsx)(p,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.5ded5868.chunk.js.map