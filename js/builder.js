if(/^u/.test(typeof define)){var def={};this.define=function(g,p){def[g]=p()};this.require=function(g){return def[g]}}
define("minifiedUtil",function(){function g(f){return null!=f?""+f:""}function p(f){return"string"==typeof f}function j(f){return"function"==typeof f}function m(f){return!!f&&"object"==typeof f}function h(f){return"number"==typeof f}function t(f){return m(f)&&!!f.getDay}function w(f){return!0===f||!1===f}function e(f){var a=typeof f;return"object"==a?!(!f||!f.getDay):"string"==a||"number"==a||w(f)}function d(f){return!!f&&null!=f.length&&!p(f)&&!(f&&f.nodeType)&&!j(f)}function u(f){return f}function v(f,
a,b){return g(f).replace(a,null!=b?b:"")}function F(f){return v(f,/[\\\[\]\/{}()*+?.$|^-]/g,"\\$&")}function C(f){return v(f,/^\s+|\s+$/g)}function z(f,a){for(var b in f)f.hasOwnProperty(b)&&a(b,f[b]);return f}function A(f,a){if(f)for(var b=0;b<f.length;b++)a(f[b],b);return f}function O(f,a){var b=[];A(f,function(f,c){a(f,c)&&b.push(f)});return b}function D(f,a,b){var c=[];f(a,function(f,a){d(f=b(f,a))?A(f,function(f){c.push(f)}):null!=f&&c.push(f)});return c}function G(f,a){return D(A,f,a)}function L(f){var a=
[];z(f,function(f){a.push(f)});return new M(a)}function y(f,a){var b=[];A(f,function(f,c){b.push(a(f,c))});return b}function B(f,a,b){var c=a;z(f,function(f,a){c=b(c,f,a)});return c}function I(f,a,b){if(d(f)){var c=a;A(f,function(f,a){c=b(c,f,a)});return c}return B(f,a,b)}function H(f,a){if(d(f)){var b=P(a);return c(P(f).sub(0,b.length),b)}return null!=a&&f.substr(0,a.length)==a}function S(f,a){if(d(f)){var b=P(a);return P(f).sub(-b.length).equals(b)||!b.length}return null!=a&&f.substr(f.length-a.length)==
a}function N(f,a,b){if(!d(f))return[];var c=f.length,q=0>a?c+a:a,l=null==b?c:0<=b?b:c+b;return O(f,function(f,a){return a>=q&&a<l})}function Q(f,a){var b={};A(f,function(f){b[f]=a});return b}function a(f,a){for(var b=j(a)?a:function(f,b){if(a===f)return b},c,d=0;d<f.length;d++)if(null!=(c=b(f[d],d)))return c}function b(f,a){if(d(f))for(var b=0;b<f.length;b++)if(f[b]==a)return!0;return!1}function c(f,b){if(f==b)return!0;if(null==f||null==b)return!1;if(e(f)||e(b))return t(f)&&t(b)&&f.getTime()==b.getTime();
if(d(f))return d(b)?f.length!=b.length?!1:!a(f,function(f,a){if(!c(f,b[a]))return!0}):!1;if(d(b))return!1;var q=L(f),l=q.length,n=0;z(b,function(){n++});return l!=n?!1:!a(q,function(a){if(!c(f[a],b[a]))return!0})}function q(f,a,b){return f.apply(b&&a,y(b||a,u))}function l(a,b,c,d){return function(){return q(a,b,G([c,arguments,d],u))}}function n(a,b,c,d){setTimeout(l(b,c,d),a)}function E(a,b,c){"undefined"!=typeof process&&process.nextTick?process.nextTick(l(a,b,c)):n(0,a,b,c)}function x(a,b){return W(b,
0,0,0,a)}function W(a,b,c,d,q,l,n){function e(a){var f=a.length;return f>n?e(a.substring(0,f-n))+(l||",")+a.substr(f-n):a}var g=0>a,x=/(\d+)(\.(.*))?/.exec((g?-a:a).toFixed(b));a=x[1];for(d=(d||".")+x[3];a.length<(q||1);)a="0"+a;n&&(a=e(a));return(g?"-":"")+a+(b?c?v(d,/[.,]?0+$/):d:"")}function X(a,b,c){c=c.getTimezoneOffset();return 60*parseInt(a[b])+parseInt(a[b+1])+c}function ca(f,b){f=v(f,/^\?/);if(t(b)){var c,q,l=f,n=b,e={y:"FullYear",M:["Month",function(a){return a+1}],n:["Month",function(a,
b){return(b||da)[a]}],N:["Month",function(a,b){return(b||Y)[a]}],d:"Date",m:"Minutes",H:"Hours",h:["Hours",function(a){return a%12}],K:["Hours",function(a){return a+1}],k:["Hours",function(a){return a%12+1}],s:"Seconds",S:"Milliseconds",a:["Hours",function(a,b){return(b||ea)[12>a?0:1]}],w:["Day",function(a,b){return(b||"Sun Mon Tue Wed Thu Fri Sat".split(" "))[a]}],W:["Day",function(a,b){return(b||"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "))[a]}],z:["TimezoneOffset",function(a){if(c)return c;
var b=0<a?a:-a;return(0>a?"+":"-")+x(2,Math.floor(b/60))+x(2,b%60)}]};if(q=/^\[(([+-]\d\d)(\d\d))\]\s*(.*)/.exec(f))c=q[1],n=Z(b,"minutes",X(q,2,b)),l=q[4];return v(l,/(y+|M+|n+|N+|d+|m+|H+|h+|K+|k+|s+|S+|a+|w+|W+|z+)(?:\[([^\]]+)\])?/g,function(a,b,f){a=b.length;b=e[b.charAt(0)];var c=n["get"+(d(b)?b[0]:b)].call(n);d(b)&&(f=f?f.split(","):null,c=b[1](c,f));null!=c&&!p(c)&&(c=x(a,c));return c})}return a(f.split(/\s*\|\s*/),function(a){var f,c;if(f=/^([<>]?)(=?)([^:]*?)\s*:\s*(.*)$/.exec(a)){a=b;var d=
parseFloat(f[3]);if(isNaN(d)||!h(a))a=null==a?"null":g(a),d=f[3];if(f[1]){if(!f[2]&&a==d||"<"==f[1]&&a>d||">"==f[1]&&a<d)return null}else if(a!=d)return null;a=f[4]}if(h(b)&&(f=/(?:(0[0.,]*)|(#[#.,]*))(_*)(9*)/.exec(a))){c=g(f[1])+g(f[2]);var d=g(f[1]).length?v(c,/[.,]/g).length:1,q=v(v(c,/^.*[0#]/),/[^,.]/g),l=g(f[3]).length+g(f[4]).length,n,e;if(c=/([.,])[^.,]+[.,]/.exec(f[0]))n=c[1],e=c[0].length-2;n=W(b,l,g(f[3]).length,q,d,n,e);e=a;a=f.index;f=g(f[0]).length;return e.substr(0,a)+n+e.substr(a+
f)}return a})}function fa(a,b){if(1==arguments.length)return fa(null,a);if(/^\?/.test(a)){if(""==C(b))return null;a=a.substr(1)}var c,d=(c=/[0#]([.,])[_9]/.exec(a))?c[1]:(c=/^[.,]$/.exec(a))?c[0]:".";c=parseFloat(v(v(v(b,","==d?/\./g:/,/g),d,"."),/^[^\d-]*(-?\d)/,"$1"));return isNaN(c)?T:c}function U(a){return new Date(a.getTime())}function aa(a,b,c){a["set"+b].call(a,a["get"+b].call(a)+c)}function Z(a,b,c){if(3>arguments.length)return Z(new Date,a,b);var d=U(a),q=b.charAt(0).toUpperCase()+b.substr(1);
aa(d,q,c);return d}function ga(a,b,c){var d=b.getTime(),q=c.getTime(),l=q-d;if(0>l)return-ga(a,c,b);if(b={milliseconds:1,seconds:1E3,minutes:6E4,hours:36E5}[a])return l/b;b=a.charAt(0).toUpperCase()+a.substr(1);a=Math.floor(l/{fullYear:31536E6,month:2628E6,date:864E5}[a]-2);d=new Date(d);aa(d,b,a);for(l=a;l<1.2*a+4;l++)if(aa(d,b,1),d.getTime()>q)return l}function ba(a,b,c){var d=/([^.]+)\.(.*)/.exec(a);if(d){var q=b[d[1]];return ba(d[2],j(q)?q():q,c)}q=b[a];return c===T?j(q)?q():q:j(q)?q(c):b[a]=
c}function M(a,b){for(var c=0,q=0;q<a.length;q++){var l=a[q];if(b&&d(l))for(var n=0;n<l.length;n++)this[c++]=l[n];else this[c++]=l}this.length=c;this._=!0}function P(){return new M(arguments,!0)}function V(a){return function(b,c){return new M(a(this,b,c))}}function J(a){return function(b,c){return a(this,b,c)}}function R(a){return function(b,c,d){return new M(a(b,c,d))}}var T,Y="January February March April May June July August September October November December".split(" "),da=y(Y,function(a){return a.substr(0,
3)}),ea=["am","pm"];z({each:J(A),filter:V(O),collect:V(G),map:V(y),reduce:J(I),toObject:J(Q),equals:J(c),sub:V(N),find:J(a),startsWith:J(H),endsWith:J(S),contains:J(b),array:function(){return y(this,u)},join:function(a){return y(this,u).join(a)},sort:function(a){return new M(y(this,u).sort(a))},uniq:function(){var a={};return this.filter(function(b){if(a[b])return!1;a[b]=1;return!0})},intersection:function(a){var b=Q(a,1);return this.filter(function(a){var c=b[a];b[a]=0;return c})},tap:function(a){a(this);
return this},toString:function(){return"["+this.map(function(a){return p(a)?"'"+v(a,/'/g,"\\'")+"'":a}).join(", ")+"]"}},function(a,b){M.prototype[a]=b});z({bind:l,partial:function(a,b,c){return l(a,null,b,c)},once:function(a){var b=0;return function(){if(!b++)return q(a,this,arguments)}},selfFunc:u,each:A,eachObj:z,toObject:Q,filter:R(O),filterObj:function(a,b){var c={};z(a,function(a,f){b(a,f)&&(c[a]=f)});return c},collect:R(G),collectObj:R(function(a,b){return D(z,a,b)}),map:R(y),mapObj:function(a,
b){var c={};z(a,function(a,f){c[a]=b(a,f)});return c},reduce:I,reduceObj:B,find:a,contains:b,sub:R(N),startsWith:H,endsWith:S,equals:c,toString:g,isList:d,isFunction:j,isObject:m,isNumber:h,isBool:w,isDate:t,isValue:e,isString:p,toString:g,prop:ba,escapeRegExp:F,trim:C,defer:E,delay:n,dateClone:U,dateAdd:Z,dateDiff:ga,dateMidnight:function(a){a=a||new Date;return new Date(a.getFullYear(),a.getMonth(),a.getDate())},formatNumber:W,pad:x,formatValue:ca,parseDate:function(b,c){var q={y:0,M:[1,1],n:[1,
da],N:[1,Y],d:2,m:4,H:3,h:3,K:[3,1],k:[3,1],s:5,S:6,a:[3,ea]},l={},n=1,e=0,g,x;if(/^\?/.test(b)){if(""==C(c))return null;b=b.substr(1)}if(x=/^\[([+-]\d\d)(\d\d)\]\s*(.*)/.exec(b))e=X(x,1,new Date),b=x[3];if(!(x=RegExp(b.replace(/(m+|y+|d+|h+|k+|s+|z+|\s+|n+|a+|w+)(?:\[([^\]]*)\])?/ig,function(a,b,c){a=b.charAt(0);return/[dmhkyhs]/i.test(a)?(l[n++]=a,b=b.length,"(\\d"+(2>b?"+":"{1,"+b+"}")+")"):"z"==a?(g=n,n+=2,"([+-]\\d\\d)(\\d\\d)"):/[Nna]/.test(a)?(l[n++]=[a,c&&c.split(",")],"(\\w+)"):/w/i.test(a)?
"\\w+":/\s/.test(a)?"\\s+":F(b)})).exec(c)))return T;null!=g&&(e=X(x,g,new Date));for(var e=[0,0,0,0,-e,0,0],h=1;h<n;h++){var m=x[h],j=l[h];if(d(j)){var E=j[0],u=q[E],p=u[0],j=a(j[1]||u[1],function(a,b){return H(m.toLowerCase(),a.toLowerCase())?b:null});if(null==j)return T;e[p]="a"==E?e[p]+12*j:j}else j&&(E=parseInt(m),u=q[j],d(u)?e[u[0]]+=E-u[1]:e[u]+=E)}return new Date(e[0],e[1],e[2],e[3],e[4],e[5],e[6])},parseNumber:fa,keys:L,values:function(a){var b=[];z(a,function(a,c){b.push(c)});return new M(b)},
copyObj:function(a,b,c){z(a,function(a,f){if(null==b[a]||!c)b[a]=f});return b},coal:function(){for(var a=arguments,b=0;b<a.length;b++)if(null!=a[b])return a[b]},promise:function ha(){function a(q,e){null==b&&(b=q,c=d(e)?e:[e],E(function(){A(l,function(a){a()})}))}var b,c=[],l=[],e=arguments,n=e.length,g=0,c=[];A(e,function ia(b,d){try{b.then(function(b){b&&j(b.then)?ia(b.then,d):(c[d]=y(arguments,u),++g==n&&a(!0,2>n?c[d]:c))},function(b){c[d]=y(arguments,u);a(!1,2>n?c[d]:[c[d][0],c,d])})}catch(q){a(!1,
[q,c,d])}});a.then=function(a,d){var e=ha(),n=function(){try{var l=b?a:d;if(j(l)){var n=q(l,c);n&&j(n.then)?n.then(function(a){e(!0,[a])},function(a){e(!1,[a])}):e(!0,[n])}else e(b,c)}catch(g){e(!1,[g])}};null!=b?E(n):l.push(n);return e};a.always=function(a){return then(a,a)};a.error=function(a){return then(0,a)};return a},format:function(a,b){return v(a,/{([^,}]*)(,([^}]*))?}/g,function(a,c,d,q){a=""==c?b:ba(c,b);return d?ca(q,a):g(a)})}},function(a,b){P[a]=b});return{_:P}});var k=!0,r=null,s=!1;if(/^u/.test(typeof define)){var K={};this.define=function(g,p){K[g]=p()};this.require=function(g){return K[g]}}
define("minified",function(){function g(a){return a!=r?""+a:""}function p(a){return"string"==typeof a}function j(a){return"function"==typeof a}function m(a){return a&&a.length!=r&&!p(a)&&!(a&&a.nodeType)&&!j(a)}function h(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c]);return a}function t(a,b){if(a)for(var c=0;c<a.length;c++)b(a[c],c);return a}function w(a,b){var c=[];t(a,function(a,d){b(a,d)&&c.push(a)});return c}function e(a,b,c){var d=[];(c||t)(a,function(a,c){m(a=b(a,c))?t(a,function(a){d.push(a)}):
a!=r&&d.push(a)});return d}function d(a,b,c){return g(a).replace(b,c||"")}function u(a){return parseFloat(d(a,/^[^\d-]/))}function v(a){var b={o:"absolute",g:"hidden",d:"block",f:r},c=a.get(b);a.set(b);b=a[0].offsetHeight;a.set(c);return b}function F(a){a()}function C(){t(I,F);I=r}function z(a){I?I.push(a):y.setTimeout(a,0)}function A(){function a(a,e){b==r&&(b=a,c=e,y.setTimeout(function(){t(d,F)},0))}var b,c=[],d=[],e=a.then=function(a,e){function l(){try{var d=b?a:e;if(j(d)){var q=d.apply(r,c);
q&&j(q.then)?q.then(function(a){g(k,[a])},function(a){g(s,[a])}):g(k,[q])}else g(b,c)}catch(x){g(s,[x])}}var g=A();b!=r?y.setTimeout(l,0):d.push(l);return g};a.always=function(a){return e(a,a)};a.error=function(a){return e(0,a)};return a}function O(a){return Q[a]||"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}function D(a,b,c){return j(a)?z(a):new L(G(a,b,c))}function G(a,b,c){function q(a){return m(a)?e(a,q):a}function l(a){a=q(a);return n?w(a,function(a){for(;a=a.parentNode;){if(a===n)return k;
if(c)return s}}):a}var n,g,x,j,h;if(b&&1!=(b=G(b)).length)return e(b,function(b){return G(a,b)});n=b&&b[0];if(!p(a))return l(m(a)?a:[a]);if(1<(b=a.split(/\s*,\s*/)).length)return e(b,function(a){return G(a,n)});if(b=/(\S+)\s+(.+)$/.exec(a))return G(b[2],G(b[1],n));if(a!=(b=d(a,/^#/)))return l([B.getElementById(b)]);n=n||B;g=(b=/([^.]*)\.?([^.]*)/.exec(a))[1];j=b[2];b=(x=n.getElementsByClassName&&j)?n.getElementsByClassName(j):n.getElementsByTagName(g||"*");if(g=x?g:j)h=RegExp("\\b"+g+"\\b","i"),b=
w(b,function(a){return h.test(a[x?"nodeName":"className"])});return c?l(b):b}function L(a){for(var b=0;b<a.length;b++)this[b]=a[b];this.length=a.length}var y=this,B=document,I=[],H=[],S=e(["msR","webkitR","mozR","r"],function(a){return y[a+"equestAnimationFrame"]})[0]||function(a){y.setTimeout(a,33)},N=!!B.all&&!I.map,Q={"\t":"\\t","\r":"\\r","\n":"\\n",'"':'\\"',"\\":"\\\\"};h({each:function(a){t(this,a);return this},filter:function(a){return new L(w(this,a))},collect:function(a){return new L(e(this,
a))},sub:function(a,b){var c=this.length,d=0>a?c+a:a,e=b==r?c:0<=b?b:c+b;return this.filter(function(a,b){return b>=d&&b<e})},find:function(a){for(var b=j(a)?a:function(b,c){if(a===b)return c},c,d=0;d<this.length;d++)if((c=b(this[d],d))!=r)return c},hasClass:function(a){var b=RegExp("\\b"+a+"\\b");return this.find(function(a){return b.test(a.className)?a:r})},remove:function(){this.each(function(a){a.parentNode.removeChild(a)})},get:function(a,b){var c=this,e=c[0];if(e){if(p(a)){var l=d(a,/^[$@]/),
n,g=/^\$\$/.test(a)&&("hidden"==c.get("$visibility")||"none"==c.get("$display"));n="$"==a?e.className:"$$"==a?N?e.style.cssText:e.getAttribute("style"):"$$fade"==a?isNaN(n=g?0:N?u(c.get("$filter"))/100:u(c.get("$opacity")))?1:n:"$$slide"==a?(g?0:e.offsetHeight)+"px":/^\$/.test(a)?y.getComputedStyle?y.getComputedStyle(e,r).getPropertyValue(d(l,/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):e.currentStyle[l]:/^@/.test(a)?e.getAttribute(l):e[l];return b?u(n):n}var x={};(m(a)?t:h)(a,function(a){x[a]=
c.get(a,b)});return x}},set:function(a,b,c){var e=this,l;void 0!==b?"$$fade"==a||"$$slide"==a?e.set({g:0<(l=u(b))?"visible":"hidden",d:"block"}).set("$$fade"==a?N?{k:"alpha(opacity = "+100*l+")",p:1}:{l:l}:{f:/px$/.test(b)?b:function(a,b,c){return l*(l&&v($(c)))+"px"},m:"hidden"}):e.each(function(e,q){var l=j(b)?b:c,g=d(a,/^[@$]/),h=e.className||"",m=/^\$/.test(a)?e.style:e,l=l?l(D(e).get(a),q,e,b):b;"$"==a?(t(l.split(/\s+/),function(a){var b=d(a,/^[+-]/),c=h;h=d(h,RegExp("\\b"+b+"\\b"));if(/^\+/.test(a)||
b==a&&c==h)h+=" "+b}),e.className=d(h,/^\s+|\s+(?=\s|$)/g)):"$$"==a?N?m.cssText=l:e.setAttribute("style",l):/^@/.test(a)?l!=r&&m.setAttribute(g,l):m[g]=l}):p(a)||j(a)?e.set("$",a):h(a,function(a,b){e.set(a,b,c)});return e},append:function(a,b){return this.set(a,b,function(a,b,d,e){return g(a)+e})},prepend:function(a,b){return this.set(a,b,function(a,b,d,e){return e+g(a)})},add:function(a,b){return this.each(function(c,d){var e;(function E(a){m(a)?t(a,E):j(a)?E(a(c,d)):a!=r&&(a=a&&a.nodeType?a:B.createTextNode(a),
e?e.parentNode.insertBefore(a,e.nextSibling):b?b(a,c,c.parentNode):c.appendChild(a),e=a)})(a&&a.nodeType&&d?r:a)})},fill:function(a){return this.each(function(a){D(a.childNodes).remove()}).add(a)},addBefore:function(a){return this.add(a,function(a,c,d){d.insertBefore(a,c)})},addAfter:function(a){return this.add(a,function(a,c,d){d.insertBefore(a,c.nextSibling)})},addFront:function(a){return this.add(a,function(a,c){c.insertBefore(a,c.firstChild)})},replace:function(a){return this.add(a,function(a,
c,d){d.replaceChild(a,c)})},clone:function(){return this.collect(function(a){var b={},c,d=a&&a.nodeType;return 1==d?(t(a.attributes,function(a){c=a.name;"id"!=c&&(b["style"==c?"$$":"class"==c?"$":"@"+c]=a.value)}),D.EE(a.tagName,b,D(a.childNodes).clone())):5>d?a.textContent:r})},animate:function(a,b,c,e){var l=this,g=[],j=/-?[\d.]+/,m,p=A();e=e||{};e.time=0;e.stop=function(){m();p(s)};b=b||500;c=c||0;l.each(function(b){var c={b:D(b),a:{},c:{}};h(c.a=c.b.get(a),function(b,e){var g=a[b];"$$slide"==
b&&(g=g*v(c.b)+"px");c.c[b]=/^[+-]=/.test(g)?d(g.substr(2),j,u(e)+u(d(g,/\+?=/))):g});g.push(c)});m=D.loop(function(a){function v(a,b){return/^#/.test(a)?parseInt(6<a.length?a.substr(1+2*b,2):(a=a.charAt(1+b))+a,16):parseInt(d(a,/[^\d,]+/g).split(",")[b])}function w(d,e){return d+a/b*(e-d)*(c+(1-c)*a/b*(3-2*a/b))}e.time=a;a>=b||0>a?(t(g,function(a){a.b.set(a.c)}),m(),e.time=r,p(k,[l])):t(g,function(a){h(a.a,function(b,c){var e="rgb(",g=a.c[b];if(/^#|rgb\(/.test(g))for(var l=0;3>l;l++)e+=Math.round(w(v(c,
l),v(g,l)))+(2>l?",":")");else e=d(g,j,w(u(c),u(g)));a.b.set(b,e)})})});return p},toggle:function(a,b,c,e){var g={},h=s,j=/\b(?=\w)/g,m=this;return!b?m.toggle(d(a,j,"-"),d(a,j,"+")):m.set(a)&&function(d){d!==h&&(h="boolean"==typeof d?d:!h,c?m.q(h?b:a,g.stop?g.stop()||g.time:c,e,g):m.set(h?b:a))}},on:function(a,b,c,d){return this.each(function(e,g){function h(a){a=a||y.event;if(!b.apply(d?c:a.target,d||c||[a,g])||d)a.stopPropagation&&(a.preventDefault(),a.stopPropagation()),a.returnValue=s,a.cancelBubble=
k}(b.M=b.M||[]).push({e:e,h:h,n:a});e.addEventListener?e.addEventListener(a,h,k):e.attachEvent("on"+a,h)})},offset:function(){for(var a=this[0],b={x:0,y:0};a;)b.x+=a.offsetLeft,b.y+=a.offsetTop,a=a.offsetParent;return b}},function(a,b){L.prototype[a]=b});h({$$:function(a){return G(a)[0]},EE:function(a,b,c,d){return function(){var e=B.documentElement.namespaceURI,e=D(e?B.createElementNS(e,a):B.createElement(a));m(b)||"object"!=typeof b?e.add(b):e.set(b).add(c);d&&d(e);return e}},request:function(a,
b,c,d,l,j){var u,v=c,t=0,w=A();try{return u=y.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Msxml2.XMLHTTP.3.0"),c!=r&&(d=d||{},!p(c)&&!(c&&c.nodeType)&&(v=e(c,function U(a,b){return m(b)?e(b,function(b){return U(a,b)}):encodeURIComponent(a)+(b!=r?"="+encodeURIComponent(b):"")},h).join("&")),/post/i.test(a)?!(c&&c.nodeType)&&!p(c)&&!d["Content-Type"]&&(d["Content-Type"]="application/x-www-form-urlencoded"):(b+="?"+v,v=r)),u.open(a,b,k,l,j),h(d,function(a,b){u.setRequestHeader(a,b)}),u.onreadystatechange=
function(){4==u.readyState&&!t++&&(200==u.status?w(k,[u.responseText,u.responseXML]):w(s,[u.status,u.statusText,u.responseText]))},u.send(v),w}catch(z){t||w(s,[0,r,g(z)])}},toJSON:function b(c){return c==r?""+c:p(c=c.valueOf())?'"'+d(c,/[\\\"\x00-\x1f\x22\x5c]/g,O)+'"':m(c)?"["+e(c,b).join()+"]":"object"==typeof c?"{"+e(c,function(c,d){return b(c)+":"+b(d)},h).join()+"}":g(c)},parseJSON:y.JSON?y.JSON.parse:function(b){b=d(b,/[\x00\xad\u0600-\uffff]/g,O);if(/^[[\],:{}\s]*$/.test(d(d(b,/\\["\\\/bfnrtu]/g),
/"[^"\\\n\r]*"|true|false|null|[\d.eE+-]+/g)))return eval("("+b+")")},ready:z,setCookie:function(b,c,d,e,g,h){B.cookie=b+"="+(h?c:escape(c))+(d?"; expires="+("object"==typeof d?d:new Date((new Date).getTime()+864E5*d)).toUTCString():"")+"; path="+(e?escapeURI(e):"/")+(g?"; domain="+escape(g):"")},getCookie:function(b,c){var d,e=(d=RegExp("(^|;)\\s*"+b+"=([^;]*)").exec(B.cookie))&&d[2];return c?e:e&&unescape(e)},loop:function(b){var c={i:b,j:(new Date).getTime(),a:function(){for(var b=0;b<H.length;b++)H[b]===
c&&H.splice(b--,1)}};2>H.push(c)&&function l(){t(H,function(b){b.i(Math.max(0,(new Date).getTime()-b.j),b.a)}).length&&S(l)}();return c.a},off:function(b){t(b.M,function(b){b.e.addEventListener?b.e.removeEventListener(b.n,b.h,k):b.e.detachEvent("on"+b.n,b.h)});b.M=r}},function(b,c){D[b]=c});y.onload=C;B.addEventListener&&B.addEventListener("DOMContentLoaded",C,s);return{$:D}});var _=require("minifiedUtil")._;
function parseSourceSections(g){function p(){return{id:"anon"+j++,src:[],desc:"",requires:{},requiredBy:{},syntax:[],example:[],params:[]}}g=g.split("\n");var j=100,m=[],h=p(),t=!1;_.each(g,function(g){if(t&&/^.*\*\/\s*$/.test(g))t=!1;else if(t){var e=g.replace(/^\s*(\*\s?)?/,"").replace(/\s*$/,""),d=e.match(/^\s*@([a-z]+)/);d?(d=d[1],e=_.trim(e.replace(/^\s*@[a-z]+\s*/,"")),"syntax"==d||"example"==d?h[d].push(e):"requires"==d?e.length&&_.each(e.split(/\s+/),function(d){h.requires[d]=1}):"param"==
d?h.params.push({name:e.replace(/\s.*$/,""),desc:e.replace(/^\S+\s+/,"")}):"return"==d?h.params.push({name:"@return",desc:e}):"function"==d?h.params[h.params.length-1].funcs.push(e):h[d]=""!=e?e:1):h.params.length?h.params[h.params.length-1].desc+="\n"+_.trim(e):h.example.length?h.example[h.example.length-1]+="\n"+e:h.desc+=e+"\n"}else/^\s*\/\*\$/.test(g)&&!/\*\/\s*$/.test(g)&&(t=!0,m.push(h),h=p());h.src.push(g)});m.push(h);return m}
function createSectionMap(g){var p={};_.each(g,function(g){p[g.id]=g});return p}function completeRequirements(g,p){var j=0;_.each(g,function(g){_.eachObj(g.requires,function(h){var t=p[h];if(!t)throw Error('Unknown id in requirement: "'+h+'"');_.eachObj(t.requires,function(h){g.requires[h]||(j++,g.requires[h]=1)})})});0<j?completeRequirements(g,p):_.each(g,function(g){_.eachObj(g.requires,function(h){p[h].requiredBy[g.id]=1})})}
function calculateDependencies(g,p){var j={};_.eachObj(p,function(m){p[m]&&(j[m]=1,_.eachObj(g[m].requires,function(g){j[g]=1}))});return j}function createDefaultConfigurationMap(g,p){var j={};_.each(g,function(g){if(g.configurable&&("default"==g.configurable||p))j[g.id]=1});return j}
function compile(g,p,j){var m="",h=calculateDependencies(p,j),t=[],w=!0;_.filter(g,function(e){return h[e.id]||!(e.configurable||e.dependency)}).each(function(e){_.each(e.src,function(d){if(/^\s*$/.test(d))w||(m+="\n"),w=!0;else{var e=d.match(/^(\s*)\/\/\s*@(cond|condblock)\s+(\!?)(\w*)\s*(.*)$/);if(e&&"cond"==e[2]&&!!h[e[4]]!=("!"==e[3]))m+=e[1]+e[5]+"\n";else if(e&&"condblock"==e[2])t.unshift(!!h[e[4]]!=("!"==e[3]));else if(t.length&&/^\s*\/\/\s*@condend(\s|$)/.test(d))t.shift();else if(0==t.length||
t[0])m+=d+"\n";w=!1}})});return m}function prepareSections(g){g=parseSourceSections(g);var p=createSectionMap(g);completeRequirements(g,p);var j=createDefaultConfigurationMap(g);return{sections:g,sectionMap:p,enabledSections:j}}var CONFIG_START="minified.js config start --",CONFIG_COMMENT="// - ",CONFIG_ALL="All sections",CONFIG_ALL_EXCEPT="All sections except ",CONFIG_ONLY="Only sections ";
function serializeEnabledSections(g,p){var j=_.filter(g,function(d){return d.configurable}),m=_.filter(_.keys(p),function(d){return p[d]}),h,t=[];m.length==j.length?(h=CONFIG_COMMENT+CONFIG_ALL,t=[]):m.length>j.length/2?(h=CONFIG_COMMENT+CONFIG_ALL_EXCEPT,t=_.filter(j,function(d){return!p[d.id]}).collect(function(d){return d.id})):(h=CONFIG_COMMENT+CONFIG_ONLY,t=m);var w="// "+CONFIG_START+" use this comment to re-create your build configuration\n"+h,e=50;_(t).sort().each(function(d){e<d.length?(e=
70,w+="\n// - "+d+", "):(w+=d+", ",e-=d.length+2)});return w=w.replace(/,\s*$/,".\n")}
function deserializeEnabledSections(g,p){function j(d){return RegExp("^"+d.replace(/ /g,"\\s+"))}for(var m=j(CONFIG_START+".*"),h=j(CONFIG_ALL+"\\s*\\."),t=j(CONFIG_ALL_EXCEPT+"\\s*"),w=j(CONFIG_ONLY+"\\s*"),e=j(CONFIG_COMMENT),d=p.split("\n"),u=0;u<d.length;u++){var v=d[u];if(/^\s*\/\/s*/.test(v)&&(v=v.replace(/^\s*\/\/\s*/,""),m.test(v)&&u+1<d.length)){for(var v="",F=u+1;F<d.length;F++)if(e.test(d[F])){if(v+=d[F].replace(e,""),/\s*\.\s*$/.test(d[F]))break}else break;if(h.test(v))return createDefaultConfigurationMap(g,
!0);v=v.replace(/\s*\.\s*$/,"");if(t.test(v)){var C=createDefaultConfigurationMap(g,!0);_.each(v.replace(t,"").split(/\s*,\s*/),function(d){delete C[d]});return C}if(w.test(v))return C={},_.each(v.replace(w,"").split(/\s*,\s*/),function(d){C[d]=1}),C}}return null};var $=require("minified").$,$$=$.$$,EE=$.EE,_=require("minifiedUtil")._,SRC="minified-src.js",MODULES="INTERNAL SELECTORS ELEMENT REQUEST JSON EVENTS COOKIE ANIMATION OPTIONS".split(" ");
function closureCompile(g,p,j){$.request("post","http://closure-compiler.appspot.com/compile",{js_code:g,output_format:"json",output_info:["compiled_code","statistics"],output_file_name:"minified-custom.js",compilation_level:p?"ADVANCED_OPTIMIZATIONS":"SIMPLE_OPTIMIZATIONS"}).then(function(g){j&&j($.parseJSON(g))},function(g,h,p){window.console&&console.log("error",g,h,p);j&&j(null)}).error(function(g){window.console&&console.log(g)})}
function setUpConfigurationUI(g){function p(){$(".modCheck").each(function(e){var d=0;$(".secCheck",e.parentNode.parentNode).each(function(e){e.checked&&d++});e.checked=0<d})}function j(e){var d=g.sectionMap[e.id.substr(4)];e.checked?_.eachObj(d.requires,function(d){$("#sec-"+d).set("checked",!0)}):_.eachObj(d.requiredBy,function(d){$("#sec-"+d).set("checked",!1)})}$("#compile").on("click",function(){var e={};$(".secCheck").each(function(d){d.checked&&(e[d.id.substr(4)]=1)});var d=compile(g.sections,
g.sectionMap,e),h=serializeEnabledSections(g.sections,e);$$("#compressionAdvanced").checked||$$("#compressionSimple").checked?($$("#compile").disabled=!0,closureCompile(d,$$("#compressionAdvanced").checked,function(d){$$("#compile").disabled=!1;d?($$("#compile").disabled=!1,$("#gzipRow, #downloadRow").set({$display:"table-row"}),$$("#resultSrc").value=h+"\n"+d.compiledCode,$("#resultPlain").fill((d.statistics.compressedSize/1024).toFixed(2)+"kb ("+d.statistics.compressedSize+" bytes)"),$("#resultGzipped").fill((d.statistics.compressedGzipSize/
1024).toFixed(2)+"kb ("+d.statistics.compressedGzipSize+" bytes)"),$$("#resultLink").setAttribute("href","http://closure-compiler.appspot.com"+d.outputFilePath)):alert("Google Closure Service not availble. Try again later.")})):($$("#resultSrc").value=h+d,$("#resultPlain").fill((d.length/1024).toFixed(2)+"kb"),$("#gzipRow, #downloadRow").set({$display:"none"}));return!1});for(var m=1;m<MODULES.length;m++){var h,t;$("#sectionCheckboxes").add(t=EE("div",{"@id":"divMod-"+m},EE("div",{className:"moduleDescriptor"},
[h=EE("input",{"@id":"mod-"+m,className:"modCheck","@type":"checkbox",checked:"checked"})(),EE("label",{"@for":"mod-"+m},MODULES[m])]))());$(h).on("change",function(){var e=this.checked;$(".secCheck",this.parentNode.parentNode).each(function(d){d.checked=e;j(d)});p();return!0});var w;_.filter(g.sections,function(e){return e.module==MODULES[m]&&e.configurable}).sort(function(e,d){var g=e.name||e.id,h=d.name||d.id;return g==h?0:g>h?1:-1}).each(function(e){function d(d,e){var h=_.filter(_.keys(e),function(d){return!!e[d].name});
if(!h.length)return null;var j=0,m=d;_.each(h,function(d){j++<Math.min(h.length,8)&&(1<j&&(m=j==Math.min(h.length,8)?m+" and ":m+", "),m=8==j&&8<h.length?m+"more":m+(g.sectionMap[d].name||g.sectionMap[d].id))});return m+="."}var h=d("Required by ",e.requiredBy),m=d("Requires ",e.requires);t.add(EE("div",{className:"sectionDescriptor"},[w=EE("input",{className:"secCheck","@type":"checkbox","@id":"sec-"+e.id,checked:"default"==e.configurable?"checked":null})(),EE("label",{"@for":"sec-"+e.id},e.name||
e.id),EE("div",{className:"requirements"},[h?[h,EE("br")]:null,m])]));$(w).on("change",function(){j(this);p();return!0})})}}$(function(){$.request("get",SRC,null).then(function(g){setUpConfigurationUI(prepareSections(g))}).error(function(g){window.console&&console.log(g)})});