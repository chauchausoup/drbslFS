(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{31:function(e,t,a){e.exports=a(68)},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(29),r=a.n(c),o=(a(36),a(8)),u=(a(37),a(3)),i=(a(38),a(2));function m(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1];function r(){c(!a)}return l.a.createElement("div",null,l.a.createElement("nav",{className:"Nav"},l.a.createElement("div",{className:"head"},l.a.createElement(i.b,{to:"/"},l.a.createElement("h1",{id:"headline"},"drbuddhisagarlamichhane.com")),l.a.createElement("div",{id:"btn",onClick:r},"|||")),l.a.createElement("div",{className:a?"drop":"ceil"},l.a.createElement("ul",{id:"socials1"},l.a.createElement("li",{className:"soc"},l.a.createElement("a",{href:"/#"},"Email")),l.a.createElement("li",{className:"soc"},l.a.createElement("a",{href:"/#"},"Facebook")),l.a.createElement("li",{className:"soc"},l.a.createElement("a",{href:"/#"},"Viber"))),l.a.createElement("ul",{id:"routes"},l.a.createElement("li",{onClick:r},l.a.createElement(i.b,{to:"/news"}," News"))),l.a.createElement("ul",{id:"socials2"},l.a.createElement("li",{className:"soc"},l.a.createElement("a",{href:"/#"},"Email")),l.a.createElement("li",{className:"soc"},l.a.createElement("a",{href:"/#"},"Facebook")),l.a.createElement("li",{className:"soc"},l.a.createElement("a",{href:"/#"},"Viber"))))))}a(44);var s=function(){return l.a.createElement("div",{className:"footer"},"&copy ChauChauSoup")};a(45);var p=function(){var e=[1,2,3,4,5],t=Object(n.useState)(0),a=Object(u.a)(t,2),c=a[0],r=a[1],o=-100*(e.length-1);return Object(n.useEffect)((function(){var e=setInterval((function(){r(c-100),c===o&&r(0)}),4e3);return function(){return clearInterval(e)}}),[c,o]),l.a.createElement("div",{className:"carousel"},e.map((function(e,t){return l.a.createElement("div",{key:t,className:"item",style:{transform:"translateX(".concat(c,"%)")}},e)})))},E=a(7),b=a.n(E),d=a(13),f=(a(47),a(6));var h=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("/hospital");case 2:t=e.sent,c(t.data.items);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),l.a.createElement("div",{className:"hospitals"},l.a.createElement("h1",{id:"head"},"Hospitals that I have served:"),l.a.createElement("div",{className:"boxes"},a.map((function(e,t){return l.a.createElement("div",{className:"box",key:t},"Name : ",l.a.createElement("label",{id:"name"},e.name),l.a.createElement("br",null),"Location : ",l.a.createElement("label",{id:"location"},e.location),l.a.createElement("br",null),"Speciality : ",l.a.createElement("label",{id:"speciality"},e.speciality),l.a.createElement("br",null),"From : ",l.a.createElement("label",{id:"from"},e.from),l.a.createElement("br",null),"To : ",l.a.createElement("label",{id:"to"},e.to),l.a.createElement("br",null))}))))},v=a(4),y=(a(65),a(1)),g=a(6),w=a.n(g);function O(){var e=function(e,t){t.persist(),b((function(a){return Object(v.a)(Object(v.a)({},a),{},Object(o.a)({},e,t.target.value))}))};function t(){m(i+1)}function a(){m(i-1)}var c=Object(n.useState)(1),r=Object(u.a)(c,2),i=r[0],m=r[1],s=Object(n.useState)({name:"krishna",phoneNo:"977",location:"Pokhara",problem:"abc",history:"xyz",date:"2020-02-01"}),p=Object(u.a)(s,2),E=p[0],b=p[1],d=Object(v.a)({},E);switch(i){case 1:return l.a.createElement(j,{value1:d,handleChange:e,nextStep:t});case 2:return l.a.createElement(x,{value1:d,nextStep:t,prevStep:a,handleChange:e});case 3:return l.a.createElement(k,{value1:d,handleChange:e,nextStep:t,prevStep:a});case 4:return l.a.createElement(S,{value1:d,handleChange:e});default:return l.a.createElement(j,{value1:d,handleChange:e,nextStep:t})}}function j(e){var t=e.value1,a=e.handleChange;return l.a.createElement("div",null,l.a.createElement("input",{defaultValue:t.name,id:"appoiName",onChange:function(e){a("name",e)}}),l.a.createElement("br",null),l.a.createElement("input",{defaultValue:t.phoneNo,id:"appoiPno",onChange:function(e){a("phoneNo",e)}}),l.a.createElement("br",null),l.a.createElement("input",{defaultValue:t.location,id:"appoiLocation",onChange:function(e){a("location",e)}}),l.a.createElement("br",null),l.a.createElement("input",{type:"button",value:"Next",onClick:function(t){t.preventDefault(),e.nextStep()}}),l.a.createElement("br",null))}function x(e){var t=e.value1,a=e.handleChange;return l.a.createElement("div",null,l.a.createElement("input",{defaultValue:t.history,id:"appoiHistory",onChange:function(e){a("history",e)}}),"  ",l.a.createElement("br",null),l.a.createElement("input",{defaultValue:t.problem,id:"appoiProblem",onChange:function(e){a("problem",e)}}),"  ",l.a.createElement("br",null),l.a.createElement("input",{type:"button",value:"Next",onClick:function(t){t.preventDefault(),e.nextStep()}}),l.a.createElement("br",null),l.a.createElement("input",{type:"button",value:"Prev",onClick:function(t){t.preventDefault(),e.prevStep()}}),l.a.createElement("br",null))}function k(e){var t=Object(y.f)();var a=e.value1,n=e.handleChange;return l.a.createElement("div",null,l.a.createElement("ul",{id:"toConfirm"},l.a.createElement("li",{key:"1"},a.name),l.a.createElement("br",null),l.a.createElement("li",{key:"2"},a.phoneNo),l.a.createElement("br",null),l.a.createElement("li",{key:"3"},a.location),l.a.createElement("br",null),l.a.createElement("li",{key:"4"},a.history),l.a.createElement("br",null),l.a.createElement("li",{key:"5"},a.problem),l.a.createElement("br",null)),l.a.createElement("input",{type:"text",placeholder:"Date",onChange:function(e){n("date",e)}}),l.a.createElement("br",null),l.a.createElement("input",{type:"button",value:"Confirm",onClick:function(a){a.preventDefault();var n={name:e.value1.name,phoneNo:e.value1.phoneNo,location:e.value1.location,problem:e.value1.problem,history:e.value1.history,date:e.value1.date};console.log(n),w.a.post("/appointment",n).then((function(e){console.log(e),200===e.status&&t.push("/")})).catch((function(e){console.log(e)})),e.nextStep()}}),l.a.createElement("br",null),l.a.createElement("input",{type:"button",value:"Prev",onClick:function(t){t.preventDefault(),e.prevStep()}}),l.a.createElement("br",null))}function S(e){return l.a.createElement("div",{id:"success"},l.a.createElement("h1",null,"Thank You for your submission"),l.a.createElement("br",null),l.a.createElement("p",null,"Will email you shortly!"))}var C=function(){return l.a.createElement("div",{className:"appoi"},l.a.createElement("h1",{id:"header"},"My Appointment Form"),l.a.createElement("div",{id:"form"},l.a.createElement(O,null)))};a(66);function D(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w()("/news");case 2:t=e.sent,c(t.data.items);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),a.map((function(e,t){return t<=1?l.a.createElement("div",{id:"newz",key:t},l.a.createElement("label",{id:"news-title"},e.title),l.a.createElement("br",null),l.a.createElement("label",{id:"news-content"},e.content.split(" ").splice(0,10).join(" ")),l.a.createElement("br",null),l.a.createElement("label",{id:"news-date"},e.date)):void 0}))}var N=function(){return l.a.createElement("div",{className:"handlers"},l.a.createElement("div",{id:"facebook"},"here is the fb"),l.a.createElement("div",{id:"news"},l.a.createElement(D,null),l.a.createElement(i.b,{to:"/news",id:"seeMore"},"See More")))};function _(){return l.a.createElement("div",null,"hello location")}function A(){return l.a.createElement("div",null,l.a.createElement(p,null),l.a.createElement(h,null),l.a.createElement(_,null),l.a.createElement(C,null),l.a.createElement(N,null))}var I=a(6);var T=function(){var e=Object(n.useState)({email:"",password:""}),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(0),i=Object(u.a)(r,2),m=(i[0],i[1]),s=Object(y.f)();function p(e){c(Object(v.a)(Object(v.a)({},a),{},Object(o.a)({},e.target.name,e.target.value)))}return l.a.createElement("div",{className:"login"},l.a.createElement("h3",null,"Welcome to the Logination page."),l.a.createElement("p",null,"hello user"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log(a);var t={email:a.email,password:a.password};I.post("/login",t).then((function(e){200===e.status&&m((function(t){(t=!t)&&(s.push("/admin"),sessionStorage.setItem("userData",e))})),console.log(e)})).catch((function(e){console.log(e)}))}},l.a.createElement("input",{type:"text",name:"email",id:"login_email",onChange:p}),l.a.createElement("br",null),l.a.createElement("input",{type:"password",name:"password",id:"login_password",onChange:p}),l.a.createElement("br",null),l.a.createElement("button",{type:"submit"},"Login")))};var B=function(){return l.a.createElement("div",null,l.a.createElement(i.a,null,l.a.createElement(y.c,null,l.a.createElement(y.a,{path:"/news/:newsId",exact:!0,component:L}),l.a.createElement(y.a,{path:"/news",exact:!0,component:F}))))};function F(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w()("/news");case 2:t=e.sent,c(t.data.items);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),a.map((function(e,t){console.log(e);var a=e.id;return l.a.createElement(i.b,{to:"/news/".concat(a),style:{textDecoration:"none"},key:a},l.a.createElement("div",{id:"newz",key:a},l.a.createElement("label",{id:"news-title"},e.title),l.a.createElement("br",null),l.a.createElement("label",{id:"news-content"},e.content.split(" ").splice(0,40).join(" ")),l.a.createElement("br",null),l.a.createElement("label",{id:"news-date"},e.date),l.a.createElement("br",null)))}))}function L(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),c=a[0],r=a[1],o=Object(y.f)();console.log(e.location.pathname),Object(n.useEffect)((function(){(function(){var t=Object(d.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:w.a.get("",{params:{ID:e.location.pathname}}).then((function(e){r(e.data.item)})).catch((function(e){console.log(e)})).finally((function(){}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var m=function(){o.push("/news"),o.go()};return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,null,l.a.createElement(y.c,null,l.a.createElement(y.a,{path:"/news/:newsId/edit",render:function(){return l.a.createElement(M,{myProp:c})}}),l.a.createElement(y.a,{path:"/news/:newsId/delete",component:P})),l.a.createElement("div",{key:c._id},l.a.createElement("h2",null,c.title),l.a.createElement("br",null),l.a.createElement("p",null,c.content),l.a.createElement("br",null),l.a.createElement("strong",null,c.date),l.a.createElement("br",null),sessionStorage.getItem("userData")?l.a.createElement("div",null,l.a.createElement("input",{type:"button",value:"GO BACK",onClick:m}),l.a.createElement("br",null),l.a.createElement(i.b,{to:"/news/".concat(c._id,"/edit"),style:{textDecoration:"none"}},l.a.createElement("input",{type:"button",value:"EDIT"}),l.a.createElement("br",null)),l.a.createElement(i.b,{to:"/news/".concat(c._id,"/delete"),style:{textDecoration:"none"}},l.a.createElement("input",{type:"button",value:"DELETE"}),l.a.createElement("br",null))):l.a.createElement("input",{type:"button",value:"GO BACK",onClick:m}))))}function P(e){var t=Object(y.f)();return l.a.createElement("div",null,l.a.createElement("h1",null,"Are you sure ?"),l.a.createElement("input",{type:"button",value:"YES",onClick:function(a){a.preventDefault(),function(){var a=Object(d.a)(b.a.mark((function a(){return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:w.a.delete("",{params:{ID:e.location.pathname}}).then((function(e){t.push("/news"),t.go()})).catch((function(e){console.log(e)}));case 1:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()()}}),l.a.createElement("br",null),l.a.createElement(i.b,{to:"/news/",style:{textDecoration:"none"}},l.a.createElement("input",{type:"button",value:"NO"}),l.a.createElement("br",null)))}function M(e){var t=Object(y.f)(),a=Object(n.useState)(e.myProp),c=Object(u.a)(a,2),r=c[0],m=c[1];console.log("edit"),console.log(e);var s=function(e){e.preventDefault(),m(Object(v.a)(Object(v.a)({},r),{},Object(o.a)({},e.target.name,e.target.value))),console.log(r)};return l.a.createElement("div",null,l.a.createElement("form",{id:"recent_news_edit"},l.a.createElement("h3",null,"Add Recent News"),l.a.createElement("label",null,"Title:"),l.a.createElement("input",{type:"text",name:"title",value:r.title,id:"news_title",onChange:s}),l.a.createElement("br",null),l.a.createElement("label",null,"Date:"),l.a.createElement("input",{type:"text",name:"date",value:r.date,id:"news_date",onChange:s}),l.a.createElement("br",null),l.a.createElement("label",null,"Body:"),l.a.createElement("textarea",{name:"content",value:r.content,id:"news_body",onChange:s}),l.a.createElement("br",null),l.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),console.log("submitted"),console.log(r);var a={_id:r._id,title:r.title,content:r.content,date:r.date};w.a.patch("/news/".concat(r._id),a).then((function(e){console.log(e),200===e.status&&(t.push("/news"),t.go())})).catch((function(e){console.log(e)}))}},"Submit"),l.a.createElement(i.b,{to:"/news/",style:{textDecoration:"none"}},l.a.createElement("input",{type:"button",value:"GO BACK"}))))}var V=function(){var e=Object(y.f)(),t=Object(n.useState)({title:"",content:"",date:""}),a=Object(u.a)(t,2),c=a[0],r=a[1],i=function(e){r(Object(v.a)(Object(v.a)({},c),{},Object(o.a)({},e.target.name,e.target.value))),console.log(c)};return l.a.createElement("div",{id:"news_dashboard"},l.a.createElement("form",{id:"recent_news",onSubmit:function(t){t.preventDefault(),console.log(c);var a={title:c.title,content:c.content,date:c.date};w.a.post("/admin/news",a).then((function(t){console.log(t),200===t.status&&e.push("/admin")})).catch((function(e){console.log(e)}))}},l.a.createElement("h3",null,"Add Recent News"),l.a.createElement("label",null,"Title:"),l.a.createElement("input",{type:"text",name:"title",id:"news_title",onChange:i}),l.a.createElement("br",null),l.a.createElement("label",null,"Date:"),l.a.createElement("input",{type:"text",name:"date",id:"news_date",onChange:i}),l.a.createElement("br",null),l.a.createElement("label",null,"Body:"),l.a.createElement("textarea",{name:"content",id:"news_body",onChange:i}),l.a.createElement("br",null),l.a.createElement("button",{type:"submit"},"Submit")))},W=a(6);var G=function(){var e=Object(y.f)(),t=Object(n.useState)({name:"",location:"",speciality:"",from:"",to:""}),a=Object(u.a)(t,2),c=a[0],r=a[1],i=function(e){r(Object(v.a)(Object(v.a)({},c),{},Object(o.a)({},e.target.name,e.target.value))),console.log(c)};return l.a.createElement("div",{id:"hospital_dashboard"},l.a.createElement("h3",null,"Add Recent Hospital:"),l.a.createElement("form",{id:"recent_hospital",onSubmit:function(t){t.preventDefault(),console.log(c);var a={name:c.name,location:c.location,speciality:c.speciality,from:c.from,to:c.to};W.post("/admin/hospital",a).then((function(t){200===t.status&&e.push("/admin")})).catch((function(e){console.log(e)}))}},l.a.createElement("label",null,"Name:"),l.a.createElement("input",{type:"text",name:"name",id:"hospital_name",onChange:i}),l.a.createElement("br",null),l.a.createElement("label",null,"Location:"),l.a.createElement("input",{type:"text",name:"location",id:"hospital_locaiton",onChange:i}),l.a.createElement("br",null),l.a.createElement("label",null,"Speciality:"),l.a.createElement("input",{type:"text",name:"speciality",id:"hospital_speciality",onChange:i}),l.a.createElement("br",null),l.a.createElement("label",null,"From:"),l.a.createElement("input",{type:"text",name:"from",id:"hospital_from_date",onChange:i}),l.a.createElement("br",null),l.a.createElement("label",null,"To:"),l.a.createElement("input",{type:"text",name:"to",id:"hospital_to_date",onChange:i}),l.a.createElement("br",null),l.a.createElement("button",{type:"submit"},"Submit")))};var H=function(){return l.a.createElement("div",{id:"weekdays_dashboard"},l.a.createElement("h3",null,"Select WeekDays for Appointment:"),l.a.createElement("form",null,l.a.createElement("label",null,"Sunday"),l.a.createElement("input",{type:"checkbox",name:"Sunday",id:"sunday"}),l.a.createElement("br",null),l.a.createElement("label",null,"Monday"),l.a.createElement("input",{type:"checkbox",name:"Monday",id:"monday"}),l.a.createElement("br",null),l.a.createElement("label",null,"Tuesday"),l.a.createElement("input",{type:"checkbox",name:"Tuesday",id:"tuesday"}),l.a.createElement("br",null),l.a.createElement("label",null,"Wednesday"),l.a.createElement("input",{type:"checkbox",name:"Wednesday",id:"wednesday"}),l.a.createElement("br",null),l.a.createElement("label",null,"Thursday"),l.a.createElement("input",{type:"checkbox",name:"Thursday",id:"thursday"}),l.a.createElement("br",null),l.a.createElement("label",null,"Friday"),l.a.createElement("input",{type:"checkbox",name:"Friday",id:"friday"}),l.a.createElement("br",null),l.a.createElement("label",null,"Saturday"),l.a.createElement("input",{type:"checkbox",name:"Saturday",id:"saturday"}),l.a.createElement("br",null)),l.a.createElement("button",{type:"submit"},"Submit"))};a(67);var K=function(){return l.a.createElement("div",null,l.a.createElement(i.a,null,l.a.createElement(y.c,null,l.a.createElement(y.a,{exact:!0,path:"/admin/viewAppointments/",component:R}),l.a.createElement(y.a,{exact:!0,path:"/appointment/:appointmentId",component:z}))))};function R(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w()("/appointment");case 2:t=e.sent,c(t.data.items);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),a.map((function(e,t){var a=e.id;return console.log(a),l.a.createElement("div",{key:a},l.a.createElement(i.b,{to:"/appointment/".concat(a),style:{textDecoration:"none"}},l.a.createElement("div",{key:a,id:"appoi"},l.a.createElement("label",{id:"appointment-title"},e.name),l.a.createElement("br",null),l.a.createElement("label",{id:"appointment-location"},e.location),l.a.createElement("br",null),l.a.createElement("label",{id:"appointment-phoneNo"},e.phoneNo),l.a.createElement("br",null),l.a.createElement("label",{id:"appointment-problem"},e.problem.split(" ").splice(0,10).join(" ")),l.a.createElement("br",null),l.a.createElement("label",{id:"appointment-history"},e.history.split(" ").splice(0,10).join(" ")),l.a.createElement("br",null))))}))}function z(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),c=a[0],r=a[1],o=Object(y.f)();Object(n.useEffect)((function(){(function(){var t=Object(d.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:w.a.get("",{params:{ID:e.location.pathname}}).then((function(e){console.log(e),r(e.data.item)})).catch((function(e){console.log(e)})).finally((function(){}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,null,l.a.createElement(y.c,null,l.a.createElement(y.a,{exact:!0,path:"/appointment/:appointmentId/edit",render:function(){return l.a.createElement(J,{myProp:c})}})),l.a.createElement("div",{key:c._id},l.a.createElement("h2",null,c.name),l.a.createElement("br",null),l.a.createElement("p",null,c.phoneNo),l.a.createElement("br",null),l.a.createElement("strong",null,c.locaiton),l.a.createElement("p",null,c.problem),l.a.createElement("br",null),l.a.createElement("p",null,c.history),l.a.createElement("br",null),l.a.createElement("p",null,c.date),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"button",value:"GO BACK",onClick:function(){o.push("/admin/viewAppointments")}}),l.a.createElement("br",null),c.date?l.a.createElement(i.b,{to:"/appointment/".concat(c._id,"/edit/"),style:{textDecoration:"none"}},l.a.createElement("input",{type:"button",value:"EDIT"}),l.a.createElement("br",null)):null)))}function J(e){console.log(e);var t=Object(y.f)(),a=Object(n.useState)(e.myProp),c=Object(u.a)(a,2),r=c[0],m=c[1];return l.a.createElement("div",null,l.a.createElement("h2",null,"My date:"),l.a.createElement("input",{type:"text",name:"date",value:r.date,id:"date_edit",onChange:function(e){e.preventDefault(),"date"===e.target.name&&m(Object(v.a)(Object(v.a)({},r),{},Object(o.a)({},e.target.name,e.target.value)))}}),l.a.createElement("br",null),l.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),console.log("submitted"),console.log(r);var a={_id:r._id,name:r.name,location:r.location,problem:r.problem,history:r.history,date:r.date};console.log(a),t.push("/admin/"),t.go(),w.a.patch("/appointment/".concat(r._id),a).then((function(e){console.log(e),200===e.status&&(t.push("/news"),t.go())})).catch((function(e){console.log(e)}))}},"Submit"),l.a.createElement(i.b,{to:"/admin/viewAppointments",style:{textDecoration:"none"}},l.a.createElement("input",{type:"button",value:"GO BACK"})))}var Y=function(){return l.a.createElement("div",{className:"dasboard"},l.a.createElement("h3",null,"DASH BOARD FOR ADMIN"),l.a.createElement(i.a,null,l.a.createElement(y.c,null,l.a.createElement(y.a,{exact:!0,path:"/admin/location",component:_}),l.a.createElement(y.a,{exact:!0,path:"/admin/news",component:V}),l.a.createElement(y.a,{exact:!0,path:"/admin/hospital",component:G}),l.a.createElement(y.a,{exact:!0,path:"/admin/weekDays",component:H}),l.a.createElement(y.a,{exact:!0,path:"/admin/viewAppointments",component:K})),l.a.createElement(i.b,{to:"/admin/location"},l.a.createElement("input",{type:"button",value:"Set Location"})),l.a.createElement("br",null),l.a.createElement(i.b,{to:"/admin/hospital"},l.a.createElement("input",{type:"button",value:"Set New Hospital"})),l.a.createElement("br",null),l.a.createElement(i.b,{to:"/admin/news"},l.a.createElement("input",{type:"button",value:"Set News"})),l.a.createElement("br",null),l.a.createElement(i.b,{to:"/admin/weekDays"},l.a.createElement("input",{type:"button",value:"Set Days for the week"})),l.a.createElement("br",null),l.a.createElement(i.b,{to:"/admin/viewAppointments"},l.a.createElement("input",{type:"button",value:"View Appointments"})),l.a.createElement("br",null)))};var X=function(){var e=Object(y.f)();return l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){console.info("Logouting clearing session"),e.push("/"),sessionStorage.setItem("userData",""),sessionStorage.clear()}},"Logout"))};var $=function(){var e=Object(y.f)();return Object(n.useEffect)((function(){sessionStorage.getItem("userData")||e.push("/")})),l.a.createElement("div",null,l.a.createElement(Y,null),l.a.createElement(X,null))};var q=function(){var e;return l.a.createElement(i.a,null,l.a.createElement("div",null,l.a.createElement(m,null),l.a.createElement(y.c,null,l.a.createElement(y.a,{exact:!0,path:"/",component:A}),l.a.createElement(y.a,(e={exact:!0,path:"/news"},Object(o.a)(e,"exact",!0),Object(o.a)(e,"component",B),e)),l.a.createElement(y.a,{exact:!0,path:"/login",component:T}),l.a.createElement(y.a,{exact:!0,path:"/admin",component:$})),l.a.createElement(s,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.bb01b88d.chunk.js.map