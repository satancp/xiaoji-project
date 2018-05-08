module.exports=function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/public/",n(n.s=62)}([function(e,t){("object"==typeof e&&"object"==typeof e.exports?e.exports:window).noop=function(){}},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("universal-cookie")},function(e,t,n){"use strict";n(0),n(0),n(4)},function(e,t,n){"use strict";n(0),n(0)},function(e,t,n){"use strict";n(0),n(0)},function(e,t,n){"use strict";var a=n(13),r=(n.n(a),n(14)),o=n.n(r),i=n(7),l=(n.n(i),n(8)),s=n.n(l),c=n(15),u=(n.n(c),n(16)),p=n.n(u),_=n(1),d=n.n(_),f=n(0),m=(n.n(f),n(0)),h=(n.n(m),n(2)),g=n.n(h),E=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var y=new g.a,O=p.a.Header,b=p.a.Content,T=p.a.Footer,R=p.a.Sider,A=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={collapsed:!1,mode:"inline"},e.toggle=function(){return e.__toggle__REACT_HOT_LOADER__.apply(e,arguments)},e.logout=function(){return e.__logout__REACT_HOT_LOADER__.apply(e,arguments)},e.gethome=function(){return e.__gethome__REACT_HOT_LOADER__.apply(e,arguments)},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,_["Component"]),E(t,[{key:"__gethome__REACT_HOT_LOADER__",value:function(){window.location="/"}},{key:"__logout__REACT_HOT_LOADER__",value:function(){y.remove("loginInfo"),y.remove("cacheInfo"),window.location="/user/login"}},{key:"__toggle__REACT_HOT_LOADER__",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){return d.a.createElement(p.a,null,d.a.createElement(R,{trigger:null,collapsible:!0,collapsed:this.state.collapsed},d.a.createElement(o.a,{theme:"dark",mode:"inline"},d.a.createElement(o.a.Item,{key:"home"},d.a.createElement("a",{onClick:this.gethome.bind(this)},d.a.createElement(s.a,{type:"home"}),"Home")),d.a.createElement(o.a.SubMenu,{key:"user",title:d.a.createElement("span",null,d.a.createElement(s.a,{type:"user"}),d.a.createElement("span",null,"User"))},d.a.createElement(o.a.Item,{key:"user-list"},d.a.createElement("a",{href:"/user/list"},d.a.createElement(s.a,{type:"api"}),"User List")),d.a.createElement(o.a.Item,{key:"user-add"},d.a.createElement("a",{href:"/user/add"},d.a.createElement(s.a,{type:"user-add"}),"Add New User"))),d.a.createElement(o.a.SubMenu,{key:"resource",title:d.a.createElement("span",null,d.a.createElement(s.a,{type:"folder"}),d.a.createElement("span",null,"Resource"))},d.a.createElement(o.a.Item,{key:"resource-list"},d.a.createElement("a",{href:"/resource/list"},d.a.createElement(s.a,{type:"switcher"}),"Resource List")),d.a.createElement(o.a.Item,{key:"resource-add"},d.a.createElement("a",{href:"/resource/add"},d.a.createElement(s.a,{type:"folder-add"}),"Add New Resource"))),d.a.createElement(o.a.SubMenu,{key:"tag",title:d.a.createElement("span",null,d.a.createElement(s.a,{type:"tags-o"}),d.a.createElement("span",null,"Tag"))},d.a.createElement(o.a.Item,{key:"tag-list"},d.a.createElement("a",{href:"/tag/list"},d.a.createElement(s.a,{type:"tags-o"}),"Tag List")),d.a.createElement(o.a.Item,{key:"tag-add"},d.a.createElement("a",{href:"/tag/add"},d.a.createElement(s.a,{type:"tag-o"}),"Add New Tag"))),d.a.createElement(o.a.SubMenu,{key:"category",title:d.a.createElement("span",null,d.a.createElement(s.a,{type:"database"}),d.a.createElement("span",null,"Category"))},d.a.createElement(o.a.Item,{key:"category-list"},d.a.createElement("a",{href:"/category/list"},d.a.createElement(s.a,{type:"switcher"}),"Category List")),d.a.createElement(o.a.Item,{key:"category-add"},d.a.createElement("a",{href:"/category/add"},d.a.createElement(s.a,{type:"form"}),"Add New Category"))),d.a.createElement(o.a.SubMenu,{key:"mainpage",title:d.a.createElement("span",null,d.a.createElement(s.a,{type:"appstore-o"}),d.a.createElement("span",null,"Mainpage"))},d.a.createElement(o.a.Item,{key:"home-star-list"},d.a.createElement("a",{href:"/home/star"},d.a.createElement(s.a,{type:"star-o"}),"Star Project List"))),d.a.createElement(o.a.Item,{key:"user-logout"},d.a.createElement("a",{onClick:this.logout.bind(this)},d.a.createElement(s.a,{type:"logout"}),"Logout")))),d.a.createElement(p.a,null,d.a.createElement(O,{style:{background:"#000",padding:0}},d.a.createElement("span",{style:{color:"#fff",paddingLeft:"2%",fontSize:"1.4em"}},d.a.createElement(s.a,{className:"trigger",type:this.state.collapsed?"menu-unfold":"menu-fold",onClick:this.toggle,style:{cursor:"pointer"}})),d.a.createElement("span",{style:{color:"#fff",paddingLeft:"2%",fontSize:"1.4em"}},"Dashboard For goLand")),d.a.createElement(b,{style:{margin:"0 16px"}},d.a.createElement("div",{style:{padding:24,background:"#fff",minHeight:780}},this.props.children)),d.a.createElement(T,{style:{textAlign:"center"}},"Dashboard For goLand ©2018 Created by Chris")))}}]),t}(),v=A;t.a=v;"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(y,"cookies","/Users/pengcheng/xiaoji-project/app/web/component/homelayout/homelayout.jsx"),__REACT_HOT_LOADER__.register(O,"Header","/Users/pengcheng/xiaoji-project/app/web/component/homelayout/homelayout.jsx"),__REACT_HOT_LOADER__.register(b,"Content","/Users/pengcheng/xiaoji-project/app/web/component/homelayout/homelayout.jsx"),__REACT_HOT_LOADER__.register(T,"Footer","/Users/pengcheng/xiaoji-project/app/web/component/homelayout/homelayout.jsx"),__REACT_HOT_LOADER__.register(R,"Sider","/Users/pengcheng/xiaoji-project/app/web/component/homelayout/homelayout.jsx"),__REACT_HOT_LOADER__.register(A,"HomeLayout","/Users/pengcheng/xiaoji-project/app/web/component/homelayout/homelayout.jsx"),__REACT_HOT_LOADER__.register(v,"default","/Users/pengcheng/xiaoji-project/app/web/component/homelayout/homelayout.jsx"))},function(e,t,n){"use strict";n(0)},function(e,t){e.exports=require("antd/lib/icon")},function(e,t,n){"use strict";n(0),n(0),n(3)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),r=n.n(a),o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),o(t,[{key:"render",value:function(){return r.a.createElement("html",null,r.a.createElement("head",null,r.a.createElement("title",null,this.props.title),r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("meta",{name:"viewport",content:"initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"}),r.a.createElement("meta",{name:"keywords",content:this.props.keywords}),r.a.createElement("meta",{name:"description",content:this.props.description}),r.a.createElement("link",{rel:"shortcut icon",href:"/favicon.ico",type:"image/x-icon"})),r.a.createElement("body",null,r.a.createElement("div",{id:"app"},this.props.children)))}}]),t}(),l=i;t.default=l;"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"Layout","/Users/pengcheng/xiaoji-project/app/web/framework/layout/layout.jsx"),__REACT_HOT_LOADER__.register(l,"default","/Users/pengcheng/xiaoji-project/app/web/framework/layout/layout.jsx"))},function(e,t){e.exports=require("axios")},function(e,t,n){"use strict";var a={server_url:"http://localhost:7001/api/"},r=a;t.a=r;"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(a,"configs","/Users/pengcheng/xiaoji-project/app/web/config/config.js"),__REACT_HOT_LOADER__.register(r,"default","/Users/pengcheng/xiaoji-project/app/web/config/config.js"))},function(e,t,n){"use strict";n(0),n(0),n(5)},function(e,t){e.exports=require("antd/lib/menu")},function(e,t,n){"use strict";n(0),n(0)},function(e,t){e.exports=require("antd/lib/layout")},function(e,t,n){"use strict";n(0),n(0),n(20)},function(e,t){e.exports=require("antd/lib/form")},function(e,t){e.exports=require("antd/lib/input")},function(e,t,n){"use strict";n(0),n(0)},function(e,t){e.exports=require("antd/lib/select")},function(e,t,n){"use strict";n(0),n(0),n(9)},function(e,t){e.exports=require("antd/lib/auto-complete")},function(e,t){e.exports=require("antd/lib/tooltip")},function(e,t){e.exports=require("antd/lib/button")},function(e,t,n){"use strict";n(0),n(0)},function(e,t,n){"use strict";n(0),n(0)},,,function(e,t,n){"use strict";n(0),n(0),n(31),n(5)},function(e,t,n){"use strict";n(0),n(0)},function(e,t){e.exports=require("antd/lib/upload")},function(e,t){e.exports=require("react-color")},function(e,t,n){"use strict";n(0),n(0),n(4)},function(e,t){e.exports=require("antd/lib/modal")},function(e,t,n){"use strict";n(0),n(0)},function(e,t,n){"use strict";n(0),n(0),n(26),n(36),n(38),n(27),n(39)},function(e,t,n){"use strict";n(0),n(0),n(4)},function(e,t,n){"use strict";n(0),n(0),n(9),n(3)},function(e,t){e.exports=require("antd/lib/table")},function(e,t,n){"use strict";n(0),n(0)},function(e,t){e.exports=require("antd/lib/divider")},,,,,,,function(e,t,n){"use strict";var a=n(30),r=(n.n(a),n(32)),o=n.n(r),i=n(3),l=(n.n(i),n(19)),s=n.n(l),c=n(7),u=(n.n(c),n(8)),p=n.n(u),_=n(22),d=(n.n(_),n(23)),f=n.n(d),m=n(9),h=(n.n(m),n(21)),g=n.n(h),E=n(17),y=(n.n(E),n(18)),O=n.n(y),b=n(1),T=n.n(b),R=n(0),A=(n.n(R),n(11)),v=n.n(A),j=n(12),w=n(33),C=(n.n(w),n(2)),x=n.n(C),D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},L=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var k,H=new x.a,M=O.a.Item,S=g.a.Option,U=f.a.Option,P=function(e,t){var n=new FileReader;n.addEventListener("load",function(){t(n.result)}),n.readAsDataURL(e)},I=function(e){var t=e.size/1024/1024<2;return t},q=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={confirmDirty:!1,autoCompleteResult:[],data:{},imageUrl:"",loading:!1,action:j.a.server_url+"category/upload"},e.handleSubmit=function(){return e.__handleSubmit__REACT_HOT_LOADER__.apply(e,arguments)},e.onChange=function(){return e.__onChange__REACT_HOT_LOADER__.apply(e,arguments)},e.handleChange=function(){return e.__handleChange__REACT_HOT_LOADER__.apply(e,arguments)},e.normFile=function(){return e.__normFile__REACT_HOT_LOADER__.apply(e,arguments)},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,b["Component"]),L(t,[{key:"__normFile__REACT_HOT_LOADER__",value:function(e){return Array.isArray(e)?e:e&&e.fileList}},{key:"__handleChange__REACT_HOT_LOADER__",value:function(e){var t=this;"uploading"!==e.file.status?"done"===e.file.status&&P(e.file.originFileObj,function(n){t.setState({imageUrl:e.file.response,loading:!1})}):this.setState({loading:!0})}},{key:"__onChange__REACT_HOT_LOADER__",value:function(e){var t=e.hex;this.setState({currentColor:t})}},{key:"__handleSubmit__REACT_HOT_LOADER__",value:function(e){var t=this;return new Promise(function(n,a){e.preventDefault(),t.props.form.validateFieldsAndScroll(function(e,r){if(e)a();else{var o=D({},r,{id:t.state.data.id,icon:t.state.imageUrl});v.a.post(j.a.server_url+"category/update",o).then(function(e){t.setState({data:e.data.data,loading:!1}),n()})}})})}},{key:"componentWillUnmount",value:function(){this.props.onRef(void 0)}},{key:"componentDidMount",value:function(){H.get("loginInfo")||(this.props.onRef(void 0),window.location="/user/login"),this.props.onRef(this),this.setState({uid:this.props.exist.id,data:{id:this.props.exist.id,display_name:this.props.exist.display_name,icon:this.props.exist.icon},imageUrl:this.props.exist.icon})}},{key:"componentDidUpdate",value:function(){this.state.uid&&this.state.uid!=this.props.exist.id&&this.setState({uid:this.props.exist.id,data:{id:this.props.exist.id,display_name:this.props.exist.display_name,icon:this.props.exist.icon},imageUrl:this.props.exist.icon})}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=(this.state.autoCompleteResult,{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}}),n=T.a.createElement("div",null,T.a.createElement(p.a,{type:this.state.loading?"loading":"plus"}),T.a.createElement("div",{className:"ant-upload-text"})),a=this.state.imageUrl;return T.a.createElement(O.a,{onSubmit:this.handleSubmit},T.a.createElement(M,D({},t,{label:"Name"}),e("display_name",{rules:[{required:!0,message:"Please input the name!"}],initialValue:this.state.data.display_name})(T.a.createElement(s.a,null))),T.a.createElement(M,D({},t,{label:"Preview Image"}),T.a.createElement("div",{className:"dropbox"},e("icon",{rules:[{required:!0,message:"Please select a file!"}],valuePropName:"fileList",getValueFromEvent:this.normFile})(T.a.createElement(o.a,{name:"avatar",listType:"picture-card",className:"avatar-uploader",showUploadList:!1,action:this.state.action,beforeUpload:I,onChange:this.handleChange,data:{fileType:"thumbnail"}},a?T.a.createElement("img",{src:a,style:{width:"100px",height:"100px"},alt:""}):n)))))}}]),t}(),F=k=O.a.create()(q);t.a=F;"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(H,"cookies","/Users/pengcheng/xiaoji-project/app/web/page/category/edit.jsx"),__REACT_HOT_LOADER__.register(M,"FormItem","/Users/pengcheng/xiaoji-project/app/web/page/category/edit.jsx"),__REACT_HOT_LOADER__.register(S,"Option","/Users/pengcheng/xiaoji-project/app/web/page/category/edit.jsx"),__REACT_HOT_LOADER__.register(U,"AutoCompleteOption","/Users/pengcheng/xiaoji-project/app/web/page/category/edit.jsx"),__REACT_HOT_LOADER__.register(k,"CategoryAdd","/Users/pengcheng/xiaoji-project/app/web/page/category/edit.jsx"),__REACT_HOT_LOADER__.register(P,"getBase64","/Users/pengcheng/xiaoji-project/app/web/page/category/edit.jsx"),__REACT_HOT_LOADER__.register(I,"beforeUpload","/Users/pengcheng/xiaoji-project/app/web/page/category/edit.jsx"),__REACT_HOT_LOADER__.register(q,"RegistrationForm","/Users/pengcheng/xiaoji-project/app/web/page/category/edit.jsx"),__REACT_HOT_LOADER__.register(F,"default","/Users/pengcheng/xiaoji-project/app/web/page/category/edit.jsx"))},,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),r=n.n(a),o=n(10),i=n(6),l=(n(34),n(35)),s=n.n(l),c=(n(37),n(40)),u=n.n(c),p=(n(41),n(42)),_=n.n(p),d=(n(5),n(24)),f=n.n(d),m=(n(4),n(25)),h=n.n(m),g=(n(17),n(18)),E=n.n(g),y=n(49),O=(n(0),n(11)),b=n.n(O),T=n(12),R=n(2),A=n.n(R),v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},j=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var w=new A.a,C=E.a.Item,x=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.columns=[{title:"ID",dataIndex:"id",key:"id",width:80,sorter:function(e,t){return e.id-t.id},render:function(e){return r.a.createElement("a",{href:"#"},e)}},{title:"Name",dataIndex:"display_name",key:"display_name",width:120},{title:"Icon",dataIndex:"icon",key:"icon",width:30,render:function(e){return r.a.createElement("img",{src:e,style:{width:100,height:100}})}},{title:"Action",key:"action",width:100,render:function(t,n){return r.a.createElement("span",null,r.a.createElement(f.a,{title:"Edit"},r.a.createElement(h.a,{type:"primary",shape:"circle",icon:"edit",onClick:function(){return e.showEditModal(n)}})),r.a.createElement(_.a,{type:"vertical"}),r.a.createElement(f.a,{title:"Delete"},r.a.createElement(h.a,{type:"danger",shape:"circle",icon:"delete",onClick:function(){return e.showDeleteModal(n)}})))}}],e.state={bordered:!0,loading:!0,editLoading:!1,deleteLoading:!1,visibleDeleteModal:!1,visibleEditModal:!1,pagination:{position:"bottom",pageSize:10},size:"default",title:void 0,showHeader:void 0,footer:void 0,scroll:void 0,currentId:void 0,currentData:void 0,data:[]},e.handleOkDeleteModal=function(){return e.__handleOkDeleteModal__REACT_HOT_LOADER__.apply(e,arguments)},e.handleCancelDeleteModal=function(){return e.__handleCancelDeleteModal__REACT_HOT_LOADER__.apply(e,arguments)},e.showDeleteModal=function(){return e.__showDeleteModal__REACT_HOT_LOADER__.apply(e,arguments)},e.handleOkEditModal=function(){return e.__handleOkEditModal__REACT_HOT_LOADER__.apply(e,arguments)},e.handleCancelEditModal=function(){return e.__handleCancelEditModal__REACT_HOT_LOADER__.apply(e,arguments)},e.showEditModal=function(){return e.__showEditModal__REACT_HOT_LOADER__.apply(e,arguments)},e.deleteData=function(){return e.__deleteData__REACT_HOT_LOADER__.apply(e,arguments)},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),j(t,[{key:"__deleteData__REACT_HOT_LOADER__",value:function(e){var t=this;b.a.post(T.a.server_url+"category/delete",{id:e}).then(function(e){t.setState({visibleDeleteModal:!1,deleteLoading:!1}),b.a.get(T.a.server_url+"category/list").then(function(e){return t.setState({data:e.data.data,loading:!1})})})}},{key:"__showEditModal__REACT_HOT_LOADER__",value:function(e){this.setState({visibleEditModal:!0,currentData:e})}},{key:"__handleCancelEditModal__REACT_HOT_LOADER__",value:function(){this.setState({visibleEditModal:!1})}},{key:"__handleOkEditModal__REACT_HOT_LOADER__",value:function(e){var t=this;this.setState({editLoading:!0}),this.editpage.handleSubmit(e).then(function(){t.setState({editLoading:!1,visibleEditModal:!1}),b.a.get(T.a.server_url+"category/list").then(function(e){return t.setState({data:e.data.data,loading:!1})})}).catch(function(e){t.setState({editLoading:!1})})}},{key:"__showDeleteModal__REACT_HOT_LOADER__",value:function(e){this.setState({visibleDeleteModal:!0,currentId:e.id})}},{key:"__handleCancelDeleteModal__REACT_HOT_LOADER__",value:function(){this.setState({visibleDeleteModal:!1})}},{key:"__handleOkDeleteModal__REACT_HOT_LOADER__",value:function(){this.setState({deleteLoading:!0}),this.deleteData(this.state.currentId)}},{key:"componentWillMount",value:function(){var e=this;b.a.get(T.a.server_url+"category/list").then(function(t){0==t.data.code&&(t=t.data),e.setState({data:t.data,loading:!1})})}},{key:"componentDidMount",value:function(){w.get("loginInfo")||(window.location="/user/login")}},{key:"render",value:function(){var e=this;this.state;return r.a.createElement(i.a,null,r.a.createElement(u.a,v({},this.state,{columns:this.columns,dataSource:this.state.data,rowKey:"id"})),r.a.createElement("div",null,r.a.createElement(s.a,{title:"Edit",visible:this.state.visibleEditModal,onOk:this.handleOkEditModal,confirmLoading:this.state.editLoading,onCancel:this.handleCancelEditModal,cancelText:"Cancel",okText:"Confirm"},r.a.createElement(y.a,{onRef:function(t){return e.editpage=t},exist:this.state.currentData}))),r.a.createElement("div",null,r.a.createElement(s.a,{title:"Delete",visible:this.state.visibleDeleteModal,onOk:this.handleOkDeleteModal,confirmLoading:this.state.deleteLoading,onCancel:this.handleCancelDeleteModal,cancelText:"Cancel",okText:"Confirm"},r.a.createElement("p",null,"Do you confirm to delete it?"))))}}]),t}(),D=x,L=D,k=("undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(w,"cookies","/Users/pengcheng/xiaoji-project/app/web/page/category/list.jsx"),__REACT_HOT_LOADER__.register(C,"FormItem","/Users/pengcheng/xiaoji-project/app/web/page/category/list.jsx"),__REACT_HOT_LOADER__.register(x,"CategoryList","/Users/pengcheng/xiaoji-project/app/web/page/category/list.jsx"),__REACT_HOT_LOADER__.register(D,"default","/Users/pengcheng/xiaoji-project/app/web/page/category/list.jsx")),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}());var H=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),k(t,[{key:"render",value:function(){return r.a.createElement(o.default,this.props,r.a.createElement(L,this.props))}}]),t}(),M=H;t.default=M,"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(H,"Page","/Users/pengcheng/xiaoji-project/app/web/page/category/list.jsx"),__REACT_HOT_LOADER__.register(M,"default","/Users/pengcheng/xiaoji-project/app/web/page/category/list.jsx"))}]);