(this.webpackJsonpproject_react=this.webpackJsonpproject_react||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),l=a.n(o),c=a(1),u=a(2),i=a(4),d=a(3),s=a(5),m=a(8),v=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:"",value2:""},e.valuechanged=function(t){e.setState(Object(m.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault(),e.props.addtodo(e.state),e.setState({value:"",value2:""})},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{className:"form",onSubmit:this.onSubmit},r.a.createElement("input",{onChange:this.valuechanged,type:"text",name:"value",placeholder:"First name...",value:this.state.value}),r.a.createElement("input",{onChange:this.valuechanged,type:"text",name:"value2",placeholder:"Last name...",value:this.state.value2}),r.a.createElement("input",{type:"submit",value:"Add Name"})))}}]),a}(n.Component),h=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.todo,t=e.id,a=e.value,n=e.value2,o=e.marked;return r.a.createElement("div",null,r.a.createElement("div",{className:"todoitem"},r.a.createElement("p",{className:"todocontent"},a),r.a.createElement("p",{className:"todocontent"},n),r.a.createElement("input",{className:"todocontent",type:"checkbox",onChange:this.props.markedItem.bind(this,t),checked:o}),r.a.createElement("button",{className:"todocontent",onClick:this.props.delTodo.bind(this,t)},"x")))}}]),a}(n.Component),p=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={todos:[{id:1,value:"Noman",value2:"Chowdhury",marked:!1},{id:2,value:"Munna",value2:"Chowdhury",marked:!1},{id:3,value:"Nahid",value2:"Chowdhury",marked:!1},{id:4,value:"Abu Bokkor",value2:"Siddque",marked:!1}],filteritem:""},e.delTodo=function(t){e.setState({todos:Object(s.a)(e.state.todos.filter((function(e){return e.id!==t})))})},e.addtodo=function(t){if(""===t.value||""===t.value2)alert("please fill out the forms");else{var a={id:t.value,value:t.value,value2:t.value2,marked:!1};e.setState({todos:[].concat(Object(s.a)(e.state.todos),[a])})}},e.deletemarked=function(){e.setState({todos:Object(s.a)(e.state.todos.filter((function(e){return!1===e.marked})))})},e.markedItem=function(t){e.setState({todos:e.state.todos.map((function(e){return e.id===t&&(e.marked=!e.marked),e}))})},e.markall=function(){e.setState({todos:e.state.todos.map((function(e){return!1===e.marked&&(e.marked=!e.marked),e}))})},e.unmarkall=function(){e.setState({todos:e.state.todos.map((function(e){return!0===e.marked&&(e.marked=!e.marked),e}))})},e.setstatefilteritem=function(t){var a=t.target.value.toLowerCase();e.setState({filteritem:a})},e}return Object(u.a)(a,[{key:"searchingfrom",value:function(e){return function(t){return t.value.toLowerCase().includes(e)||!e}}},{key:"render",value:function(){var e=this,t=this.state,a=t.filteritem,n=t.todos;return r.a.createElement("div",null,r.a.createElement("div",{className:"topbtns"},r.a.createElement("button",{className:"deletemarked",onClick:this.markall},"Select All"),r.a.createElement("button",{className:"deletemarked",onClick:this.unmarkall},"Unselect All"),r.a.createElement("button",{className:"deletemarked",onClick:this.deletemarked},"Delete Marked"),r.a.createElement("input",{type:"text",placeholder:"Filter by first name",onChange:this.setstatefilteritem,value:a})),r.a.createElement(v,{addtodo:this.addtodo}),n.filter(this.searchingfrom(a)).map((function(t){return r.a.createElement(h,{key:t.id,editItem:e.editItem,markedItem:e.markedItem,todo:t,delTodo:e.delTodo})})))}}]),a}(n.Component),f=(a(14),function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"This is a Simple Todo App"),r.a.createElement("div",{className:"main"},r.a.createElement(p,null)))}}]),a}(n.Component));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.214f85f0.chunk.js.map