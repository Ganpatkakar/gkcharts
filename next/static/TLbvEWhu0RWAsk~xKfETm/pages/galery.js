(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{255:function(e,t,a){__NEXT_REGISTER_PAGE("/galery",function(){return e.exports=a(256),{page:e.exports.default}})},256:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=(a(2),a(3)),l=a.n(i),o=a(4),c=a(5),h=a(55);t.default=function(){return n.a.createElement("div",null,n.a.createElement(l.a,null,n.a.createElement("title",null,"Open Source Chart Library : Gk-Chart - Galery page, Charts Galery"),n.a.createElement("meta",{name:"keywords",content:"Gk-Chart, gkchart, gk-chart, chart library, charts, javascript chart library, javascript chart, javascript library, line chart, bar cahrt, pie chart, meter cahrt, doughnut chart, bar cahrt comparision, line chart comparision"}),n.a.createElement("meta",{name:"author",content:"Ganpat Kakar"}),n.a.createElement("meta",{name:"og:Open Source Chart Library : Gk-Chart - Galery page, Charts Galery",property:"og:Open Source Chart Library : Gk-Chart - Galery page, Charts Galery",content:"Open Source Chart Library : Gk-Chart - Galery page, Charts Galery"}),n.a.createElement("meta",{name:"description",content:"Gk-Chart is an open source chart library provides charts as line chart, bar chart , pie chart, doughnut chart, meter chart, line chart comparison, bar chart comparison, bar and line chart comparison and 20 plus more charts with the business data presentation in chart view, integrate is easy with javascript"})),n.a.createElement(o.a,null,n.a.createElement(c.a,null,n.a.createElement("h1",null,"JavaScript Chart & Graph Galery"),n.a.createElement("p",null,"GkChart provide 20 plus charts to represent any business data in chart visual formate. With GkChart it is easy to implement and responsive charts for your business. GK-Chart galery provide you many examples which will help you to generate charts for your data. For example with Line chart, it is easy to compare year's, month wise progress and income. Below is an example of Line chart with HTML and JavaScript source code for intergration. Download our chart library and and use the provided source code. Print the generated chart functionality is provide for the user to print the chart for any hard copy presentation."),n.a.createElement(h.a,null))))}},55:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var r=a(0),n=a.n(r),i=a(303),l=a(304),o=a(6);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var m=function(e){function t(){var e,a,r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,l=new Array(i),h=0;h<i;h++)l[h]=arguments[h];return r=this,n=(e=s(t)).call.apply(e,[this].concat(l)),a=!n||"object"!==c(n)&&"function"!=typeof n?p(r):n,y(p(p(a)),"componentDidMount",function(){console.log("componentDidMount:Chart"),a.initialize()}),y(p(p(a)),"initialize",function(){var e={config:{title:"Line Chart",chartType:"line",printEnable:!0},data:[{chartColor:"#00d554",fill:!1,dataLabel:"Data Set 1",datapoints:[{label:"January",y:40},{label:"Feburary",y:160},{label:"March",y:80},{label:"April",y:200},{label:"May",y:140},{label:"June",y:240},{label:"July",y:120}]}]};Object(o.d)({id:"chartline",data:e})}),a}var a,r,m;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,n.a.Component),a=t,(r=[{key:"render",value:function(){return n.a.createElement("div",{className:""},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("div",{className:"chartDiv"},n.a.createElement("div",{id:"chartline",style:{height:"350px",width:"100%"}}," ")))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-12"},n.a.createElement(i.a,{defaultActiveKey:1,id:"example-code"},n.a.createElement(l.a,{eventKey:1,title:"HTML"},n.a.createElement("pre",null,n.a.createElement("xmp",null,'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>Document</title>\n  </head>\n  <body>\n    <div id="chartline" style="height:350px; width:100%;"></div>\n    <script type="text/javascript" src="gk-chart.min.js"><\/script>\n  </body>\n</html>'))),n.a.createElement(l.a,{eventKey:2,title:"JavaScript"},n.a.createElement("pre",null,n.a.createElement("code",null,'\nlet datapoints = [\n  { label: "January", y: 40 },\n  { label: "Feburary", y: 180 },\n  { label: "March", y: 60 },\n  { label: "April", y: 300 },\n  { label: "May", y: 140 },\n  { label: "June", y: 240 }\n];\n\nvar chartline = {\n  config: {\n    title: "Line Chart",\n    chartType: "line",\n    printEnable: true\n  },\n  data: [\n    {\n      chartColor: "#00d554",\n      fill: false,\n      dataLabel: "Data Set 1",\n      datapoints: datapoints\n    }\n  ]\n};\n\nnew GKChart({\n  id: "chartline",\n  data: chartline\n}) ;\n\n')))))))}}])&&h(a.prototype,r),m&&h(a,m),t}()}},[[255,1,0]]]);