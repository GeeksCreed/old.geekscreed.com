(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+6XX":function(e,t,n){var r=n("y1pI");e.exports=function(e){return r(this.__data__,e)>-1}},"/9aa":function(e,t,n){var r=n("NykK"),o=n("ExA7");e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},"2gN3":function(e,t,n){var r=n("Kz5y")["__core-js_shared__"];e.exports=r},"3Fdi":function(e,t,n){n("a1Th"),n("h7Nl"),n("Btvt");var r=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return r.call(e)}catch(t){}try{return e+""}catch(t){}}return""}},"44Ds":function(e,t,n){var r=n("e4Nc");function o(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function n(){var r=arguments,o=t?t.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=e.apply(this,r);return n.cache=a.set(o,i)||a,i};return n.cache=new(o.Cache||r),n}o.Cache=r,e.exports=o},"4kuk":function(e,t,n){var r=n("SfRM"),o=n("Hvzi"),a=n("u8Dt"),i=n("ekgI"),s=n("JSQU");function c(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=s,e.exports=c},"4uTw":function(e,t,n){var r=n("Z0cm"),o=n("9ggG"),a=n("GNiM"),i=n("dt0z");e.exports=function(e,t){return r(e)?e:o(e,t)?[e]:a(i(e))}},"7evw":function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var r=n("UZsz"),o=n("Bp/N"),a=n("HhXV");t.CommentCount=r.CommentCount,t.CommentEmbed=o.CommentEmbed,t.DiscussionEmbed=a.DiscussionEmbed;var i={CommentCount:r.CommentCount,CommentEmbed:o.CommentEmbed,DiscussionEmbed:a.DiscussionEmbed};t.default=i},"9Nap":function(e,t,n){var r=n("/9aa");e.exports=function(e){if("string"==typeof e||r(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}},"9ggG":function(e,t,n){var r=n("Z0cm"),o=n("/9aa"),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;e.exports=function(e,t){if(r(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!o(e))||(i.test(e)||!a.test(e)||null!=t&&e in Object(t))}},AP2z:function(e,t,n){n("a1Th"),n("h7Nl"),n("Btvt");var r=n("nmnc"),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,s=r?r.toStringTag:void 0;e.exports=function(e){var t=a.call(e,s),n=e[s];try{e[s]=void 0;var r=!0}catch(c){}var o=i.call(e);return r&&(t?e[s]=n:delete e[s]),o}},"Bp/N":function(e,t,n){"use strict";n("xfY5"),n("a1Th"),n("h7Nl"),n("Btvt"),n("/SS/"),n("hHhE"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n("q1tI"),i=(r=a)&&r.__esModule?r:{default:r};function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(t.CommentEmbed=function(e){function t(){return s(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return i.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}(i.default.Component)).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},Cwc5:function(e,t,n){var r=n("NKxu"),o=n("Npjl");e.exports=function(e,t){var n=o(e,t);return r(n)?n:void 0}},E2jh:function(e,t,n){n("rGqo"),n("yt8O"),n("Btvt");var r,o=n("2gN3"),a=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";e.exports=function(e){return!!a&&a in e}},EpBk:function(e,t){e.exports=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},ExA7:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},GNiM:function(e,t,n){n("pIFo");var r=n("I01J"),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,i=r((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(o,(function(e,n,r,o){t.push(r?o.replace(a,"$1"):n||e)})),t}));e.exports=i},GoyQ:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},H8j4:function(e,t,n){var r=n("QkVE");e.exports=function(e,t){var n=r(this,e),o=n.size;return n.set(e,t),this.size+=n.size==o?0:1,this}},HhXV:function(e,t,n){"use strict";n("/SS/"),n("hHhE"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n("q1tI"),i=(r=a)&&r.__esModule?r:{default:r},s=n("ZMnY");function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}t.DiscussionEmbed=function(e){function t(){return c(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,s.shallowComparison)(this.props,e)}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,s.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return i.default.createElement("div",{id:"disqus_thread"})}}]),t}(i.default.Component)},Hvzi:function(e,t){e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},I01J:function(e,t,n){var r=n("44Ds");e.exports=function(e){var t=r(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}},JHgL:function(e,t,n){var r=n("QkVE");e.exports=function(e){return r(this,e).get(e)}},JSQU:function(e,t,n){var r=n("YESw");e.exports=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=r&&void 0===t?"__lodash_hash_undefined__":t,this}},KMkd:function(e,t){e.exports=function(){this.__data__=[],this.size=0}},KfNM:function(e,t,n){n("a1Th"),n("h7Nl"),n("Btvt");var r=Object.prototype.toString;e.exports=function(e){return r.call(e)}},Kz5y:function(e,t,n){var r=n("WFqU"),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},NKxu:function(e,t,n){n("pIFo"),n("Oyvg"),n("a1Th"),n("h7Nl"),n("Btvt");var r=n("lSCD"),o=n("E2jh"),a=n("GoyQ"),i=n("3Fdi"),s=/^\[object .+?Constructor\]$/,c=Function.prototype,l=Object.prototype,u=c.toString,p=l.hasOwnProperty,f=RegExp("^"+u.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!a(e)||o(e))&&(r(e)?f:s).test(i(e))}},Npjl:function(e,t){e.exports=function(e,t){return null==e?void 0:e[t]}},NykK:function(e,t,n){var r=n("nmnc"),o=n("AP2z"),a=n("KfNM"),i=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?o(e):a(e)}},QkVE:function(e,t,n){n("bWfx");var r=n("EpBk");e.exports=function(e,t){var n=e.__data__;return r(t)?n["string"==typeof t?"string":"hash"]:n.map}},SfRM:function(e,t,n){var r=n("YESw");e.exports=function(){this.__data__=r?r(null):{},this.size=0}},UZsz:function(e,t,n){"use strict";n("/SS/"),n("hHhE"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n("q1tI"),i=(r=a)&&r.__esModule?r:{default:r},s=n("ZMnY");function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=(0,s.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1);t.CommentCount=function(e){function t(){return c(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,s.shallowComparison)(this.props,e)}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?u():(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,s.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return i.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}(i.default.Component)},WFqU:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n("yLpj"))},Xi7e:function(e,t,n){var r=n("KMkd"),o=n("adU4"),a=n("tMB7"),i=n("+6XX"),s=n("Z8oC");function c(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=s,e.exports=c},YESw:function(e,t,n){var r=n("Cwc5")(Object,"create");e.exports=r},Z0cm:function(e,t,n){n("LK8F");var r=Array.isArray;e.exports=r},Z8oC:function(e,t,n){var r=n("y1pI");e.exports=function(e,t){var n=this.__data__,o=r(n,e);return o<0?(++this.size,n.push([e,t])):n[o][1]=t,this}},ZMnY:function(e,t,n){"use strict";n("rE2o"),n("ioFf"),n("RW0V"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("T39b"),n("dZ+Y"),n("LK8F"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r=void 0;return function(){var o=this,a=arguments,i=function(){r=null,n||e.apply(o,a)},s=n&&!r;window.clearTimeout(r),r=setTimeout(i,t),s&&e.apply(o,a)}},t.isReactElement=i,t.shallowComparison=function(e,t){var n=new Set(Object.keys(e),Object.keys(t)),r=!0,o=!1,a=void 0;try{for(var s,c=n[Symbol.iterator]();!(r=(s=c.next()).done);r=!0){var l=s.value;if(e[l]!==t[l]&&!i(e[l]))return!0}}catch(u){o=!0,a=u}finally{try{!r&&c.return&&c.return()}finally{if(o)throw a}}return!1};var r,o=n("q1tI"),a=(r=o)&&r.__esModule?r:{default:r};function i(e){return!!a.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return a.default.isValidElement(e)}))}},ZWtO:function(e,t,n){var r=n("4uTw"),o=n("9Nap");e.exports=function(e,t){for(var n=0,a=(t=r(t,e)).length;null!=e&&n<a;)e=e[o(t[n++])];return n&&n==a?e:void 0}},ZgsS:function(e,t,n){"use strict";n.r(t);n("KKXr");var r=n("q1tI"),o=n.n(r),a=n("TJpk"),i=n.n(a),s=n("Wbzz"),c=n("7evw"),l=n("9eSz"),u=n.n(l),p=n("mwIZ"),f=n.n(p),d=(n("f3/d"),n("0mN4"),n("Zq3e")),m=function(e){var t=e.author;return o.a.createElement("footer",{className:"post-full-footer"},o.a.createElement("div",{className:"author-card"},t.profileImageFile?o.a.createElement(u.a,{className:"author-profile-image",fixed:t.profileImageFile.childImageSharp.fixed,alt:t.name}):o.a.createElement("span",{className:"avatar-wrapper"},o.a.createElement(d.a.avatar,null)),o.a.createElement("div",{className:"author-card-content"},o.a.createElement("h4",{className:"author-card-name"},o.a.createElement(s.Link,{to:"/author/"+t.id},t.name)),t.bio?o.a.createElement("p",null,t.bio):o.a.createElement("p",null,"Read ",o.a.createElement(s.Link,{to:"/author/"+t.id}," more posts")," by this author."))),o.a.createElement("div",{className:"post-full-footer-right"},o.a.createElement(s.Link,{className:"author-card-button",to:"/author/"+t.id},"Read More")))},h=n("sCQE"),v=n("H6XL"),y=n("zrOQ"),g=function(e){var t=e.relatedPosts.edges,n=e.relatedPosts.totalCount,r={}.featuredImage||{}.coverImage;return o.a.createElement("aside",{className:"read-next outer"},o.a.createElement("div",{className:"inner"},o.a.createElement("div",{className:"read-next-feed"},o.a.createElement("article",{className:"read-next-card",style:{backgroundImage:"url("+r+")"}},o.a.createElement("header",{className:"read-next-card-header"},o.a.createElement("small",{className:"read-next-card-header-sitetitle"},"— ",e.siteTitle," —"),o.a.createElement("h3",{className:"read-next-card-header-title"},o.a.createElement(s.Link,{to:"/tag/"+e.primaryTag},e.primaryTag))),o.a.createElement("div",{className:"read-next-divider"},o.a.createElement(d.a.infinity,null)),o.a.createElement("div",{className:"read-next-card-content"},o.a.createElement("ul",null,t.map((function(e){var t=e.node;return o.a.createElement("li",{key:t.fields.slug},o.a.createElement(s.Link,{to:t.fields.slug},t.frontmatter.title))})))),o.a.createElement("footer",{className:"read-next-card-footer"},o.a.createElement(s.Link,{to:"/tag/"+e.primaryTag},0===n?"No posts":1===n?"1 post":"See all "+n+" posts"," ","→"))),e.nextPost&&o.a.createElement(y.a,{post:e.nextPost,rel:"next"}),e.previousPost&&o.a.createElement(y.a,{post:e.previousPost,rel:"prev"}))))},w=n("9N19"),E=n.n(w);n.d(t,"pageQuery",(function(){return _}));var b=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).onScroll=function(){n.lastScrollY=window.scrollY,n.requestTick()},n.onResize=function(){n.lastWindowHeight=window.innerHeight,n.lastDocumentHeight=document.documentElement.offsetHeight,n.requestTick()},n.requestTick=function(){n.rafTicking||(n.rafInProgress=requestAnimationFrame(n.update)),n.rafTicking=!0},n.update=function(){var e=n.titleRef.current.getBoundingClientRect().top+window.scrollY,t=n.titleRef.current.offsetHeight+35,r=n.lastDocumentHeight-n.lastWindowHeight;n.lastScrollY>=e+t?n.headerRef.current.classList.add("floating-active"):n.headerRef.current.classList.remove("floating-active"),n.progressBarRef.current.setAttribute("max",r),n.progressBarRef.current.setAttribute("value",n.lastScrollY),n.rafTicking=!1},n.shareHandler=function(e){e.preventDefault();var t=e.currentTarget.dataset.shareSite,r=n.props.data.post.frontmatter.title,o=n.props.location.href;switch(t){case"facebook":window.open("https://www.facebook.com/sharer/sharer.php?u="+o,"share-facebook","width=580,height=296");break;case"twitter":window.open("https://twitter.com/share?text="+r+"&url="+o,"share-twitter","width=550,height=235")}},n.getPageTitle=function(e){var t=e.split(" ");return t.length>1?(t[t.length-2]+="&nbsp;"+t[t.length-1],t.pop(),t.join(" ")):e},n.progressBarRef=o.a.createRef(),n.headerRef=o.a.createRef(),n.titleRef=o.a.createRef(),n.rafTicking=!1,n.rafInProgress=null,n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=r.prototype;return a.componentDidMount=function(){this.lastScrollY=window.scrollY,this.lastWindowHeight=window.innerHeight,this.lastDocumentHeight=document.documentElement.offsetHeight,window.addEventListener("scroll",this.onScroll,{passive:!0}),window.addEventListener("resize",this.onResize,!1),this.requestTick()},a.componentWillUnmount=function(){cancelAnimationFrame(this.rafInProgress),window.removeEventListener("scroll",this.onScroll,{passive:!0}),window.removeEventListener("resize",this.onResize,!1)},a.componentDidUpdate=function(){this.onResize()},a.render=function(){var e=this.props,t=e.data,n=e.pageContext,r=e.location,a=t.post,l=t.previousPost,p=t.nextPost,y=a.frontmatter,w=a.fields,b=y.tags,_=y.featuredImage,N=f()(this.props,"data.site.siteMetadata.title"),x=f()(this.props,"data.site.siteMetadata.siteUrl"),S=f()(this.props,"data.site.siteMetadata.config.disqus"),I=f()(y,"author.twitter"),k=f()(this.props,"data.site.siteMetadata.social.twitter"),C=a.excerpt,j=y.title,O=w.slug,T=n.primaryTag,P=t.relatedPosts,M=j+" | "+N,q={url:r.href,identifier:O,title:M};return o.a.createElement(v.a,{location:r},o.a.createElement(i.a,{meta:[{name:"description",content:C},{name:"twitter:site",content:"@"+k},{name:"twitter:creator",content:"@"+I},{name:"twitter:card",content:"summary_large_image"},{property:"og:url",content:""+x+O},{property:"og:type",content:"article"},{property:"og:title",content:M},{property:"og:description",content:C},{property:"og:image",content:""+x+_.childImageSharp.fluid.src}],bodyAttributes:{class:"post-template"},title:M}),o.a.createElement("header",{className:"site-header outer"},o.a.createElement("div",{className:"inner"},o.a.createElement(h.a,{location:r}))),o.a.createElement("main",{id:"site-main",className:"site-main outer"},o.a.createElement("div",{className:"inner"},o.a.createElement("article",{className:"post-full post "+(_||"no-image")},o.a.createElement("header",{className:"post-full-header"},o.a.createElement("div",{className:"post-full-meta"},o.a.createElement("time",{className:"post-full-meta-date",dateTime:"{frontmatter.date}"},y.date),o.a.createElement("span",{className:"date-divider"},"/"),b.map((function(e,t){return o.a.createElement(o.a.Fragment,{key:e},o.a.createElement(s.Link,{to:"/tag/"+e,rel:""}," ",e," "),t!==b.length-1&&o.a.createElement("span",null," , "))}))),o.a.createElement("h1",{className:"post-full-title js-foating-header-trigger js-no-widows",dangerouslySetInnerHTML:{__html:this.getPageTitle(j)},ref:this.titleRef})),_&&o.a.createElement(u.a,{className:"post-full-image",fluid:_.childImageSharp.fluid}),o.a.createElement("section",{className:"post-full-content",dangerouslySetInnerHTML:{__html:a.html}}),o.a.createElement(m,{author:y.author}),S&&o.a.createElement("section",{className:"post-full-comments"},o.a.createElement(c.DiscussionEmbed,{shortname:S,config:q}))))),P&&o.a.createElement(g,{primaryTag:T,siteTitle:N,relatedPosts:P,previousPost:l,nextPost:p}),o.a.createElement("div",{className:"floating-header",ref:this.headerRef},o.a.createElement("div",{className:"floating-header-logo"},o.a.createElement(s.Link,{to:"/"},o.a.createElement("img",{src:E.a,alt:N+" logo"}),o.a.createElement("span",null,N))),o.a.createElement("span",{className:"floating-header-divider"},"—"),o.a.createElement("div",{className:"floating-header-title"},j),o.a.createElement("div",{className:"floating-header-share"},o.a.createElement("div",{className:"floating-header-share-label"},"Share this ",o.a.createElement(d.a.point,null)),o.a.createElement("a",{className:"floating-header-share-tw","data-share-site":"twitter",onClick:this.shareHandler},o.a.createElement(d.a.twitter,null)),o.a.createElement("a",{className:"floating-header-share-fb","data-share-site":"facebook",onClick:this.shareHandler},o.a.createElement(d.a.facebook,null))),o.a.createElement("progress",{ref:this.progressBarRef,className:"progress",value:"0"},o.a.createElement("div",{className:"progress-container"},o.a.createElement("span",{className:"progress-bar"})))))},r}(o.a.Component),_=(t.default=b,"322418290")},adU4:function(e,t,n){var r=n("y1pI"),o=Array.prototype.splice;e.exports=function(e){var t=this.__data__,n=r(t,e);return!(n<0)&&(n==t.length-1?t.pop():o.call(t,n,1),--this.size,!0)}},dt0z:function(e,t,n){var r=n("zoYe");e.exports=function(e){return null==e?"":r(e)}},e4Nc:function(e,t,n){var r=n("fGT3"),o=n("k+1r"),a=n("JHgL"),i=n("pSRY"),s=n("H8j4");function c(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=s,e.exports=c},eUgh:function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}},ebwN:function(e,t,n){var r=n("Cwc5")(n("Kz5y"),"Map");e.exports=r},ekgI:function(e,t,n){var r=n("YESw"),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return r?void 0!==t[e]:o.call(t,e)}},fGT3:function(e,t,n){var r=n("4kuk"),o=n("Xi7e"),a=n("ebwN");e.exports=function(){this.size=0,this.__data__={hash:new r,map:new(a||o),string:new r}}},"k+1r":function(e,t,n){var r=n("QkVE");e.exports=function(e){var t=r(this,e).delete(e);return this.size-=t?1:0,t}},lSCD:function(e,t,n){var r=n("NykK"),o=n("GoyQ");e.exports=function(e){if(!o(e))return!1;var t=r(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},ljhN:function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},mwIZ:function(e,t,n){var r=n("ZWtO");e.exports=function(e,t,n){var o=null==e?void 0:r(e,t);return void 0===o?n:o}},nmnc:function(e,t,n){var r=n("Kz5y").Symbol;e.exports=r},pSRY:function(e,t,n){var r=n("QkVE");e.exports=function(e){return r(this,e).has(e)}},tMB7:function(e,t,n){var r=n("y1pI");e.exports=function(e){var t=this.__data__,n=r(t,e);return n<0?void 0:t[n][1]}},u8Dt:function(e,t,n){var r=n("YESw"),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(r){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return o.call(t,e)?t[e]:void 0}},xfY5:function(e,t,n){"use strict";var r=n("dyZX"),o=n("aagx"),a=n("LZWt"),i=n("Xbzi"),s=n("apmT"),c=n("eeVq"),l=n("kJMx").f,u=n("EemH").f,p=n("hswa").f,f=n("qncB").trim,d=r.Number,m=d,h=d.prototype,v="Number"==a(n("Kuth")(h)),y="trim"in String.prototype,g=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){var n,r,o,a=(t=y?t.trim():f(t,3)).charCodeAt(0);if(43===a||45===a){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===a){switch(t.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+t}for(var i,c=t.slice(2),l=0,u=c.length;l<u;l++)if((i=c.charCodeAt(l))<48||i>o)return NaN;return parseInt(c,r)}}return+t};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof d&&(v?c((function(){h.valueOf.call(n)})):"Number"!=a(n))?i(new m(g(t)),n,d):g(t)};for(var w,E=n("nh4g")?l(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;E.length>b;b++)o(m,w=E[b])&&!o(d,w)&&p(d,w,u(m,w));d.prototype=h,h.constructor=d,n("KroJ")(r,"Number",d)}},y1pI:function(e,t,n){var r=n("ljhN");e.exports=function(e,t){for(var n=e.length;n--;)if(r(e[n][0],t))return n;return-1}},zoYe:function(e,t,n){n("a1Th"),n("h7Nl"),n("Btvt");var r=n("nmnc"),o=n("eUgh"),a=n("Z0cm"),i=n("/9aa"),s=r?r.prototype:void 0,c=s?s.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(a(t))return o(t,e)+"";if(i(t))return c?c.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-ghost-casper-src-templates-blog-post-js-a4ed800ad25d52812b72.js.map