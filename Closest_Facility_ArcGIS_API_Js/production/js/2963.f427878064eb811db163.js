"use strict";(self.webpackChunkarcgis_rm=self.webpackChunkarcgis_rm||[]).push([[2963],{5992:(e,t,r)=>{r.d(t,{e:()=>o});var i,s,n,a={exports:{}};i=a,s=function(){function e(e,r,s){s=s||2;var n,a,o,u,c,h,v,d=r&&r.length,f=d?r[0]*s:e.length,p=t(e,0,f,s,!0),x=[];if(!p||p.next===p.prev)return x;if(d&&(p=l(e,r,p,s)),e.length>80*s){n=o=e[0],a=u=e[1];for(var y=s;y<f;y+=s)(c=e[y])<n&&(n=c),(h=e[y+1])<a&&(a=h),c>o&&(o=c),h>u&&(u=h);v=0!==(v=Math.max(o-n,u-a))?1/v:0}return i(p,x,s,n,a,v),x}function t(e,t,r,i,s){var n,a;if(s===M(e,t,r,i)>0)for(n=t;n<r;n+=i)a=T(n,e[n],e[n+1],a);else for(n=r-i;n>=t;n-=i)a=T(n,e[n],e[n+1],a);if(a&&S(a,a.next)){var o=a.next;I(a),a=o}return a}function r(e,t){if(!e)return e;t||(t=e);var r,i=e;do{if(r=!1,i.steiner||!S(i,i.next)&&0!==g(i.prev,i,i.next))i=i.next;else{var s=i.prev;if(I(i),(i=t=s)===i.next)break;r=!0}}while(r||i!==t);return t}function i(e,t,l,u,c,h,v){if(e){!v&&h&&d(e,u,c,h);for(var f,p,x=e;e.prev!==e.next;)if(f=e.prev,p=e.next,h?n(e,u,c,h):s(e))t.push(f.i/l),t.push(e.i/l),t.push(p.i/l),I(e),e=p.next,x=p.next;else if((e=p)===x){v?1===v?i(e=a(r(e),t,l),t,l,u,c,h,2):2===v&&o(e,t,l,u,c,h):i(r(e),t,l,u,c,h,1);break}}}function s(e){var t=e.prev,r=e,i=e.next;if(g(t,r,i)>=0)return!1;for(var s=e.next.next;s!==e.prev;){if(x(t.x,t.y,r.x,r.y,i.x,i.y,s.x,s.y)&&g(s.prev,s,s.next)>=0)return!1;s=s.next}return!0}function n(e,t,r,i){var s=e.prev,n=e,a=e.next;if(g(s,n,a)>=0)return!1;for(var o=s.x<n.x?s.x<a.x?s.x:a.x:n.x<a.x?n.x:a.x,l=s.y<n.y?s.y<a.y?s.y:a.y:n.y<a.y?n.y:a.y,u=s.x>n.x?s.x>a.x?s.x:a.x:n.x>a.x?n.x:a.x,c=s.y>n.y?s.y>a.y?s.y:a.y:n.y>a.y?n.y:a.y,h=f(o,l,t,r,i),v=f(u,c,t,r,i),d=e.prevZ,p=e.nextZ;d&&d.z>=h&&p&&p.z<=v;){if(d!==e.prev&&d!==e.next&&x(s.x,s.y,n.x,n.y,a.x,a.y,d.x,d.y)&&g(d.prev,d,d.next)>=0)return!1;if(d=d.prevZ,p!==e.prev&&p!==e.next&&x(s.x,s.y,n.x,n.y,a.x,a.y,p.x,p.y)&&g(p.prev,p,p.next)>=0)return!1;p=p.nextZ}for(;d&&d.z>=h;){if(d!==e.prev&&d!==e.next&&x(s.x,s.y,n.x,n.y,a.x,a.y,d.x,d.y)&&g(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;p&&p.z<=v;){if(p!==e.prev&&p!==e.next&&x(s.x,s.y,n.x,n.y,a.x,a.y,p.x,p.y)&&g(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function a(e,t,i){var s=e;do{var n=s.prev,a=s.next.next;!S(n,a)&&m(n,s,s.next,a)&&b(n,a)&&b(a,n)&&(t.push(n.i/i),t.push(s.i/i),t.push(a.i/i),I(s),I(s.next),s=e=a),s=s.next}while(s!==e);return r(s)}function o(e,t,s,n,a,o){var l=e;do{for(var u=l.next.next;u!==l.prev;){if(l.i!==u.i&&y(l,u)){var c=L(l,u);return l=r(l,l.next),c=r(c,c.next),i(l,t,s,n,a,o),void i(c,t,s,n,a,o)}u=u.next}l=l.next}while(l!==e)}function l(e,i,s,n){var a,o,l,c=[];for(a=0,o=i.length;a<o;a++)(l=t(e,i[a]*n,a<o-1?i[a+1]*n:e.length,n,!1))===l.next&&(l.steiner=!0),c.push(p(l));for(c.sort(u),a=0;a<c.length;a++)s=r(s=h(c[a],s),s.next);return s}function u(e,t){return e.x-t.x}function c(e){if(e.next.prev===e)return e;let t=e;for(;;){const r=t.next;if(r.prev===t||r===t||r===e)break;t=r}return t}function h(e,t){var i=function(e,t){var r,i=t,s=e.x,n=e.y,a=-1/0;do{if(n<=i.y&&n>=i.next.y&&i.next.y!==i.y){var o=i.x+(n-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(o<=s&&o>a){if(a=o,o===s){if(n===i.y)return i;if(n===i.next.y)return i.next}r=i.x<i.next.x?i:i.next}}i=i.next}while(i!==t);if(!r)return null;if(s===a)return r;var l,u=r,c=r.x,h=r.y,d=1/0;i=r;do{s>=i.x&&i.x>=c&&s!==i.x&&x(n<h?s:a,n,c,h,n<h?a:s,n,i.x,i.y)&&(l=Math.abs(n-i.y)/(s-i.x),b(i,e)&&(l<d||l===d&&(i.x>r.x||i.x===r.x&&v(r,i)))&&(r=i,d=l)),i=i.next}while(i!==u);return r}(e,t);if(!i)return t;var s=L(i,e),n=r(i,i.next);let a=c(s);return r(a,a.next),n=c(n),c(t===i?n:t)}function v(e,t){return g(e.prev,e,t.prev)<0&&g(t.next,e,e.next)<0}function d(e,t,r,i){var s=e;do{if(null===s.z&&(s.z=f(s.x,s.y,t,r,i)),s.prev.next!==s||s.next.prev!==s)return s.prev.next=s,s.next.prev=s,d(e,t,r,i);s.prevZ=s.prev,s.nextZ=s.next,s=s.next}while(s!==e);s.prevZ.nextZ=null,s.prevZ=null,function(e){var t,r,i,s,n,a,o,l,u=1;do{for(r=e,e=null,n=null,a=0;r;){for(a++,i=r,o=0,t=0;t<u&&(o++,i=i.nextZ);t++);for(l=u;o>0||l>0&&i;)0!==o&&(0===l||!i||r.z<=i.z)?(s=r,r=r.nextZ,o--):(s=i,i=i.nextZ,l--),n?n.nextZ=s:e=s,s.prevZ=n,n=s;r=i}n.nextZ=null,u*=2}while(a>1)}(s)}function f(e,t,r,i,s){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-r)*s)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-i)*s)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function p(e){var t=e,r=e;do{(t.x<r.x||t.x===r.x&&t.y<r.y)&&(r=t),t=t.next}while(t!==e);return r}function x(e,t,r,i,s,n,a,o){return(s-a)*(t-o)-(e-a)*(n-o)>=0&&(e-a)*(i-o)-(r-a)*(t-o)>=0&&(r-a)*(n-o)-(s-a)*(i-o)>=0}function y(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!function(e,t){var r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==t.i&&r.next.i!==t.i&&m(r,r.next,e,t))return!0;r=r.next}while(r!==e);return!1}(e,t)&&(b(e,t)&&b(t,e)&&function(e,t){var r=e,i=!1,s=(e.x+t.x)/2,n=(e.y+t.y)/2;do{r.y>n!=r.next.y>n&&r.next.y!==r.y&&s<(r.next.x-r.x)*(n-r.y)/(r.next.y-r.y)+r.x&&(i=!i),r=r.next}while(r!==e);return i}(e,t)&&(g(e.prev,e,t.prev)||g(e,t.prev,t))||S(e,t)&&g(e.prev,e,e.next)>0&&g(t.prev,t,t.next)>0)}function g(e,t,r){return(t.y-e.y)*(r.x-t.x)-(t.x-e.x)*(r.y-t.y)}function S(e,t){return e.x===t.x&&e.y===t.y}function m(e,t,r,i){var s=V(g(e,t,r)),n=V(g(e,t,i)),a=V(g(r,i,e)),o=V(g(r,i,t));return s!==n&&a!==o||!(0!==s||!_(e,r,t))||!(0!==n||!_(e,i,t))||!(0!==a||!_(r,e,i))||!(0!==o||!_(r,t,i))}function _(e,t,r){return t.x<=Math.max(e.x,r.x)&&t.x>=Math.min(e.x,r.x)&&t.y<=Math.max(e.y,r.y)&&t.y>=Math.min(e.y,r.y)}function V(e){return e>0?1:e<0?-1:0}function b(e,t){return g(e.prev,e,e.next)<0?g(e,t,e.next)>=0&&g(e,e.prev,t)>=0:g(e,t,e.prev)<0||g(e,e.next,t)<0}function L(e,t){var r=new z(e.i,e.x,e.y),i=new z(t.i,t.x,t.y),s=e.next,n=t.prev;return e.next=t,t.prev=e,r.next=s,s.prev=r,i.next=r,r.prev=i,n.next=i,i.prev=n,i}function T(e,t,r,i){var s=new z(e,t,r);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function I(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function z(e,t,r){this.i=e,this.x=t,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function M(e,t,r,i){for(var s=0,n=t,a=r-i;n<r;n+=i)s+=(e[a]-e[n])*(e[n+1]+e[a+1]),a=n;return s}return e.deviation=function(e,t,r,i){var s=t&&t.length,n=s?t[0]*r:e.length,a=Math.abs(M(e,0,n,r));if(s)for(var o=0,l=t.length;o<l;o++){var u=t[o]*r,c=o<l-1?t[o+1]*r:e.length;a-=Math.abs(M(e,u,c,r))}var h=0;for(o=0;o<i.length;o+=3){var v=i[o]*r,d=i[o+1]*r,f=i[o+2]*r;h+=Math.abs((e[v]-e[f])*(e[d+1]-e[v+1])-(e[v]-e[d])*(e[f+1]-e[v+1]))}return 0===a&&0===h?0:Math.abs((h-a)/a)},e.flatten=function(e){for(var t=e[0][0].length,r={vertices:[],holes:[],dimensions:t},i=0,s=0;s<e.length;s++){for(var n=0;n<e[s].length;n++)for(var a=0;a<t;a++)r.vertices.push(e[s][n][a]);s>0&&(i+=e[s-1].length,r.holes.push(i))}return r},e},void 0!==(n=s())&&(i.exports=n);var o=a.exports},71200:(e,t,r)=>{r.d(t,{vX:()=>u,s5:()=>o,k3:()=>l,Or:()=>a}),Number.POSITIVE_INFINITY;const i=128/Math.PI,s=1/Math.LN2;function n(e,t){return(e%=t)>=0?e:e+t}function a(e){return n(e*i,256)}function o(e){return n(.7111111111111111*e,256)}function l(e){return Math.log(e)*s}function u(e,t,r){return e>=t&&e<=r||e>=r&&e<=t}},89106:(e,t,r)=>{r.d(t,{dk:()=>d,Gq:()=>y,a:()=>p,mE:()=>f,m2:()=>l,qr:()=>x,jj:()=>a,hF:()=>o});var i=r(70375),s=r(38716),n=r(65956);function a(e,t,r,i,n){switch(e){case s.LW.FILL:return d.from(t,i);case s.LW.LINE:return p.from(t,r);case s.LW.MARKER:return f.from(t);case s.LW.TEXT:return x.from(t);case s.LW.LABEL:return y.from(t,n);default:throw new Error(`Unable to createMaterialKey for unknown geometryType ${e}`)}}function o(e){switch(l.load(e).geometryType){case s.LW.MARKER:return new f(e);case s.LW.FILL:return new d(e);case s.LW.LINE:return new p(e);case s.LW.TEXT:return new x(e);case s.LW.LABEL:return new y(e)}}class l{constructor(e){this._data=0,this._data=e}static load(e){const t=this.shared;return t.data=e,t}set data(e){this._data=e}get data(){return this._data}get geometryType(){return this.bits(8,11)}set geometryType(e){this.setBits(e,8,11)}get mapAligned(){return!!this.bit(20)}set mapAligned(e){this.setBit(20,e)}get sdf(){return!!this.bit(11)}set sdf(e){this.setBit(11,e)}get pattern(){return!!this.bit(12)}set pattern(e){this.setBit(12,e)}get textureBinding(){return this.bits(0,8)}set textureBinding(e){this.setBits(e,0,8)}get geometryTypeString(){switch(this.geometryType){case s.LW.FILL:return"fill";case s.LW.MARKER:return"marker";case s.LW.LINE:return"line";case s.LW.TEXT:return"text";case s.LW.LABEL:return"label";default:throw new i.Z(`Unable to handle unknown geometryType: ${this.geometryType}`)}}setBit(e,t){const r=1<<e;t?this._data|=r:this._data&=~r}bit(e){return(this._data&1<<e)>>e}setBits(e,t,r){for(let i=t,s=0;i<r;i++,s++)this.setBit(i,0!=(e&1<<s))}bits(e,t){let r=0;for(let i=e,s=0;i<t;i++,s++)r|=this.bit(i)<<s;return r}hasVV(){return!1}setVV(e,t){}getVariation(){return{mapAligned:this.mapAligned,pattern:this.pattern,sdf:this.sdf}}getVariationHash(){return this._data&~(7&this.textureBinding)}}l.shared=new l(0);const u=e=>class extends e{get vvSizeMinMaxValue(){return 0!==this.bit(16)}set vvSizeMinMaxValue(e){this.setBit(16,e)}get vvSizeScaleStops(){return 0!==this.bit(17)}set vvSizeScaleStops(e){this.setBit(17,e)}get vvSizeFieldStops(){return 0!==this.bit(18)}set vvSizeFieldStops(e){this.setBit(18,e)}get vvSizeUnitValue(){return 0!==this.bit(19)}set vvSizeUnitValue(e){this.setBit(19,e)}hasVV(){return super.hasVV()||this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue}setVV(e,t){super.setVV(e,t);const r=function(e,t=!1){const r=s.X.SIZE_FIELD_STOPS|s.X.SIZE_MINMAX_VALUE|s.X.SIZE_SCALE_STOPS|s.X.SIZE_UNIT_VALUE,i=(e&(s.mf.FIELD_TARGETS_OUTLINE|s.mf.MINMAX_TARGETS_OUTLINE|s.mf.SCALE_TARGETS_OUTLINE|s.mf.UNIT_TARGETS_OUTLINE))>>>4;return t?r&i:r&~i}(e,t)&e;this.vvSizeMinMaxValue=!!(r&s.X.SIZE_MINMAX_VALUE),this.vvSizeFieldStops=!!(r&s.X.SIZE_FIELD_STOPS),this.vvSizeUnitValue=!!(r&s.X.SIZE_UNIT_VALUE),this.vvSizeScaleStops=!!(r&s.X.SIZE_SCALE_STOPS)}},c=e=>class extends e{get vvRotation(){return 0!==this.bit(15)}set vvRotation(e){this.setBit(15,e)}hasVV(){return super.hasVV()||this.vvRotation}setVV(e,t){super.setVV(e,t),this.vvRotation=!t&&!!(e&s.X.ROTATION)}},h=e=>class extends e{get vvColor(){return 0!==this.bit(13)}set vvColor(e){this.setBit(13,e)}hasVV(){return super.hasVV()||this.vvColor}setVV(e,t){super.setVV(e,t),this.vvColor=!t&&!!(e&s.X.COLOR)}},v=e=>class extends e{get vvOpacity(){return 0!==this.bit(14)}set vvOpacity(e){this.setBit(14,e)}hasVV(){return super.hasVV()||this.vvOpacity}setVV(e,t){super.setVV(e,t),this.vvOpacity=!t&&!!(e&s.X.OPACITY)}};class d extends(h(v(l))){static load(e){const t=this.shared;return t.data=e,t}static from(e,t){const r=this.load(0);return r.geometryType=s.LW.FILL,t?r.dotDensity=!0:r.setVV(e,!1),r.data}getVariation(){return{...super.getVariation(),dotDensity:this.dotDensity,vvColor:this.vvColor,vvOpacity:this.vvOpacity}}get dotDensity(){return!!this.bit(15)}set dotDensity(e){this.setBit(15,e)}}d.shared=new d(0);class f extends(h(v(c(u(l))))){static load(e){const t=this.shared;return t.data=e,t}static from(e){const t=this.load(0);return t.geometryType=s.LW.MARKER,t.setVV(e,!1),t.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvRotation:this.vvRotation,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}f.shared=new f(0);class p extends(h(v(u(l)))){static load(e){const t=this.shared;return t.data=e,t}static from(e,t){const r=this.load(0);return r.geometryType=s.LW.LINE,r.setVV(e,t),r.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}p.shared=new p(0);class x extends(h(v(c(u(l))))){static load(e){const t=this.shared;return t.data=e,t}static from(e){const t=this.load(e);return t.geometryType=s.LW.TEXT,t.setVV(e,!1),t.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvRotation:this.vvRotation,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}x.shared=new x(0);class y extends(u(l)){static load(e){const t=this.shared;return t.data=e,t}static from(e,t){const r=this.load(0);return r.geometryType=s.LW.LABEL,r.setVV(e,!1),r.mapAligned=(0,n.N)(t),r.data}getVariation(){return{...super.getVariation(),vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}y.shared=new y(0)},65956:(e,t,r)=>{function i(e){switch(e){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return!0;default:return!1}}r.d(t,{N:()=>i})},67766:(e,t,r)=>{r.d(t,{Z:()=>l});var i=r(36663),s=r(53280),n=r(81977),a=(r(39994),r(7283),r(13802),r(12571));let o=class extends s.r{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}};(0,i._)([(0,n.Cb)({readOnly:!0})],o.prototype,"supportsTileUpdates",null),(0,i._)([(0,n.Cb)({constructOnly:!0})],o.prototype,"remoteClient",void 0),(0,i._)([(0,n.Cb)({constructOnly:!0})],o.prototype,"service",void 0),(0,i._)([(0,n.Cb)()],o.prototype,"spatialReference",null),(0,i._)([(0,n.Cb)({constructOnly:!0})],o.prototype,"tileInfo",void 0),(0,i._)([(0,n.Cb)({constructOnly:!0})],o.prototype,"tileStore",void 0),o=(0,i._)([(0,a.j)("esri.views.2d.layers.features.processors.BaseProcessor")],o);var l=o},90263:(e,t,r)=>{r.r(t),r.d(t,{default:()=>V});var i=r(36663),s=(r(70375),r(39994)),n=r(13802),a=r(61681),o=r(78668),l=(r(81977),r(7283),r(12571)),u=r(27281),c=r(14685),h=r(88710),v=r(13191),d=r(12044),f=r(83823),p=r(41808),x=r(40576),y=r(67766),g=r(10289);function S(e,t){return(!e.minScale||e.minScale>=t)&&(!e.maxScale||e.maxScale<=t)}function m(e){const t=e.message,r={message:{data:{},tileKey:t.tileKey,tileKeyOrigin:t.tileKeyOrigin},transferList:new Array};for(const e in t.data){const i=t.data[e];if(r.message.data[e]=null,(0,a.pC)(i)){const t=i.stride,s=i.indices.slice(0),n=i.vertices.slice(0),o=i.records.slice(0),l={stride:t,indices:s,vertices:n,records:o,metrics:(0,a.Po)(i.metrics,(e=>e.slice(0)))};r.transferList.push(s,n,o),r.message.data[e]=l}}return r}n.Z.getLogger("esri.views.2d.layers.features.processors.SymbolProcessor");let _=class extends y.Z{constructor(){super(...arguments),this.type="symbol",this._matchers={feature:null,aggregate:null},this._bufferData=new Map,this._bufferIds=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}destroy(){}get supportsTileUpdates(){return!0}forEachBufferId(e){this._bufferIds.forEach((t=>{t.forEach(e)}))}async update(e,t){const r=t.schema.processors[0];if("symbol"!==r.type)return;const i=(0,u.Hg)(this._schema,r);(0,u.uD)(i,"mesh")&&((0,s.Z)("esri-2d-update-debug")&&console.debug("Applying Update - Processor:",i),e.mesh=!0,e.why.mesh.push("Symbology changed"),this._schema=r,this._factory=this._createFactory(r),this._factory.update(r,this.tileStore.tileScheme.tileInfo))}onTileMessage(e,t,r,i){return(0,o.k_)(i),this._onTileData(e,t,r,i)}onTileClear(e){return this._bufferData.delete(e.key.id),this._bufferIds.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:{clear:!0}})}onTileError(e,t,r){const i=r.signal,s={tileKey:e.id,error:t};return this.remoteClient.invoke("tileRenderer.onTileError",s,{signal:i})}onTileUpdate(e){for(const t of e.removed)this._bufferData.has(t.key.id)&&this._bufferData.delete(t.key.id),this._bufferIds.has(t.key.id)&&this._bufferIds.delete(t.key.id);for(const t of e.added)this._bufferData.forEach((e=>{for(const r of e)r.message.tileKey===t.id&&this._updateTileMesh("append",t,m(r),[],!1,!1,null)}))}_addBufferData(e,t){this._bufferData.has(e)||this._bufferData.set(e,[]),this._bufferData.get(e).push(m(t))}_createFactory(e){const{geometryType:t,objectIdField:r,fields:i}=this.service,s={geometryType:t,fields:i,spatialReference:c.Z.fromJSON(this.spatialReference)},n=new d.W(((e,t)=>this.remoteClient.invoke("tileRenderer.getMaterialItems",e,t)),this.tileStore.tileScheme.tileInfo),{matcher:o,aggregateMatcher:l}=e.mesh;return this._store=n,this._matchers.feature=(0,p.fL)(o,n,s),this._matchers.aggregate=(0,a.Po)(l,(e=>(0,p.fL)(e,n,s))),new v.j(t,r,n)}async _onTileData(e,t,r,i){(0,o.k_)(i);const{type:s,addOrUpdate:n,remove:l}=t,u=t.end,c=!!this._schema.mesh.sortKey;if(!n){const t={type:s,addOrUpdate:null,remove:l,clear:!1,end:u,sort:c};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},i)}const h=this._processFeatures(e,n,r,i);try{const r=await h;if((0,a.Wi)(r)){const t={type:s,addOrUpdate:null,remove:l,clear:!1,end:u,sort:c};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},i)}const n=[];for(const t of r){let r=!1;const i=t.message.bufferIds,s=e.key.id,o=t.message.tileKey;if(s!==o&&(0,a.pC)(i)){if(!this.tileStore.get(o))continue;let e=this._bufferIds.get(o);e||(e=new Set,this._bufferIds.set(o,e));const t=Array.from(i);for(const i of t){if(e.has(i)){r=!0;break}e.add(i)}}r||(this._addBufferData(s,t),n.push(t))}await(0,o.$6)(n.map((r=>{const n=e.key.id===r.message.tileKey,a=n?t.remove:[],o=n&&t.end;return this._updateTileMesh(s,e,r,a,o,t.clear,i.signal)})))}catch(t){this._handleError(e,t,i)}}async _updateTileMesh(e,t,r,i,s,n,l){const u=e,c=r.message.tileKey,h=!!this._schema.mesh.sortKey;c!==t.key.id&&(s=!1);const v=(0,a.Po)(r,(e=>e.message)),d=(0,a.Po)(r,(e=>e.transferList))||[],f={type:u,addOrUpdate:v,remove:i,clear:!1,end:s,sort:h},p={transferList:(0,a.Wg)(d)||[],signal:l};return(0,o.k_)(p),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:c,data:f},p)}async _processFeatures(e,t,r,i){if((0,a.Wi)(t)||!t.hasFeatures)return null;const s={transform:e.transform,hasZ:!1,hasM:!1},n=this._factory,l={viewingMode:"",scale:e.scale},u=await this._matchers.feature,c=await this._matchers.aggregate;(0,o.k_)(i);const h=this._getLabelInfos(e,t);return await n.analyze(t.getCursor(),u,c,s,l),(0,o.k_)(i),this._writeFeatureSet(e,t,s,h,n,r)}_writeFeatureSet(e,t,r,i,s,n){const o=t.getSize(),l="simple"===this._schema.mesh.matcher.type&&this._schema.mesh.matcher.isDotDensity,u=new h._(e.key.id,{features:o,records:o,metrics:0},l,n,!0),c={viewingMode:"",scale:e.scale},v=t.getCursor();for(;v.next();)try{const t=v.getDisplayId(),n=(0,a.pC)(i)?i.get(t):null;s.writeCursor(u,v,r,c,e.level,n)}catch(e){}const d=e.tileInfoView.tileInfo.isWrappable;return u.serialize(d)}_handleError(e,t,r){if(!(0,o.D_)(t)){const i={tileKey:e.id,error:t.message};return this.remoteClient.invoke("tileRenderer.onTileError",i,{signal:r.signal})}}_getLabelingSchemaForScale(e){const t=this._schema.mesh.labels;if((0,a.Wi)(t))return null;if("subtype"===t.type){const r={type:"subtype",classes:{}};let i=!1;for(const s in t.classes){const n=t.classes[s].filter((t=>S(t,e.scale)));i=i||!!n.length,r.classes[s]=n}return i?r:null}const r=t.classes.filter((t=>S(t,e.scale)));return r.length?{type:"simple",classes:r}:null}_getLabels(e,t){if("subtype"===t.type){var r;const i=this.service.subtypeField,s=(0,a.s3)(i,"Expected to find subtype Field"),n=e.readAttribute(s);return null==n?[]:null!=(r=t.classes[n])?r:[]}return t.classes}_getLabelInfos(e,t){const r=this._getLabelingSchemaForScale(e);if((0,a.Wi)(r))return null;const i=new Map,s=t.getCursor();for(;s.next();){const e=s.getDisplayId(),t=[],n=(0,g.nE)(e),a=n&&1!==s.readAttribute("cluster_count")?"aggregate":"feature",o=this._getLabels(s,r);for(const r of o){if(r.target!==a)continue;const i=s.getStorage(),o=n&&"feature"===a?i.getComputedStringAtIndex(s.readAttribute("referenceId"),r.fieldIndex):i.getComputedStringAtIndex(e,r.fieldIndex);if(!o)continue;const l=(0,f.E)(o.toString()),u=l[0],c=l[1];this._store.getMosaicItem(r.symbol,(0,x._)(u)).then((e=>{t[r.index]={glyphs:e.glyphMosaicItems,rtl:c,index:r.index}}))}i.set(e,t)}return i}};_=(0,i._)([(0,l.j)("esri.views.2d.layers.features.processors.SymbolProcessor")],_);var V=_}}]);