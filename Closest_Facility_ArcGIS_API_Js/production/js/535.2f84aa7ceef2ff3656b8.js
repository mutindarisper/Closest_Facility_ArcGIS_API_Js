"use strict";(self.webpackChunkarcgis_rm=self.webpackChunkarcgis_rm||[]).push([[535],{26488:(t,e,n)=>{n.d(e,{QB:()=>h});var i=n(7753),s=n(61681),r=n(17135),o=n(80657);class h{constructor(t=9,e){this.compareMinX=c,this.compareMinY=d,this.toBBox=function(t){return t},this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&("function"==typeof e?this.toBBox=e:this._initFormat(e)),this.clear()}destroy(){this.clear(),y.prune(),B.prune(),M.prune(),b.prune()}all(t){this._all(this.data,t)}search(t,e){let n=this.data;const i=this.toBBox;if(p(t,n))for(y.clear();n;){for(let s=0,r=n.children.length;s<r;s++){const r=n.children[s],o=n.leaf?i(r):r;p(t,o)&&(n.leaf?e(r):_(t,o)?this._all(r,e):y.push(r))}n=y.pop()}}collides(t){let e=this.data;const n=this.toBBox;if(!p(t,e))return!1;for(y.clear();e;){for(let i=0,s=e.children.length;i<s;i++){const s=e.children[i],r=e.leaf?n(s):s;if(p(t,r)){if(e.leaf||_(t,r))return!0;y.push(s)}}e=y.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let e=0,n=t.length;e<n;e++)this.insert(t[e]);return this}let e=this._build(t.slice(0,t.length),0,t.length-1,0);if(this.data.children.length)if(this.data.height===e.height)this._splitRoot(this.data,e);else{if(this.data.height<e.height){const t=this.data;this.data=e,e=t}this._insert(e,this.data.height-e.height-1,!0)}else this.data=e;return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=new Y([]),this}remove(t){if(!t)return this;let e,n=this.data,r=null,o=0,h=!1;const a=this.toBBox(t);for(M.clear(),b.clear();n||M.length>0;){var l;if(n||(n=(0,s.j0)(M.pop()),r=M.data[M.length-1],o=null!=(l=b.pop())?l:0,h=!0),n.leaf&&(e=(0,i.cq)(n.children,t,n.children.length,n.indexHint),-1!==e))return n.children.splice(e,1),M.push(n),this._condense(M),this;h||n.leaf||!_(n,a)?r?(o++,n=r.children[o],h=!1):n=null:(M.push(n),b.push(o),o=0,r=n,n=n.children[0])}return this}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,e){let n=t;for(B.clear();n;){var i;if(!0===n.leaf)for(const t of n.children)e(t);else B.pushArray(n.children);n=null!=(i=B.pop())?i:null}}_build(t,e,n,i){const s=n-e+1;let r=this._maxEntries;if(s<=r){const i=new Y(t.slice(e,n+1));return a(i,this.toBBox),i}i||(i=Math.ceil(Math.log(s)/Math.log(r)),r=Math.ceil(s/r**(i-1)));const o=new X([]);o.height=i;const h=Math.ceil(s/r),l=h*Math.ceil(Math.sqrt(r));I(t,e,n,l,this.compareMinX);for(let s=e;s<=n;s+=l){const e=Math.min(s+l-1,n);I(t,s,e,h,this.compareMinY);for(let n=s;n<=e;n+=h){const s=Math.min(n+h-1,e);o.children.push(this._build(t,n,s,i-1))}}return a(o,this.toBBox),o}_chooseSubtree(t,e,n,i){for(;i.push(e),!0!==e.leaf&&i.length-1!==n;){let n,i=1/0,s=1/0;for(let r=0,o=e.children.length;r<o;r++){const o=e.children[r],h=m(o),a=x(t,o)-h;a<s?(s=a,i=h<i?h:i,n=o):a===s&&h<i&&(i=h,n=o)}e=n||e.children[0]}return e}_insert(t,e,n){const i=this.toBBox,s=n?t:i(t);M.clear();const r=this._chooseSubtree(s,this.data,e,M);for(r.children.push(t),u(r,s);e>=0&&M.data[e].children.length>this._maxEntries;)this._split(M,e),e--;this._adjustParentBBoxes(s,M,e)}_split(t,e){const n=t.data[e],i=n.children.length,s=this._minEntries;this._chooseSplitAxis(n,s,i);const r=this._chooseSplitIndex(n,s,i);if(!r)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const o=n.children.splice(r,n.children.length-r),h=n.leaf?new Y(o):new X(o);h.height=n.height,a(n,this.toBBox),a(h,this.toBBox),e?t.data[e-1].children.push(h):this._splitRoot(n,h)}_splitRoot(t,e){this.data=new X([t,e]),this.data.height=t.height+1,a(this.data,this.toBBox)}_chooseSplitIndex(t,e,n){let i,s,r;i=s=1/0;for(let o=e;o<=n-e;o++){const e=l(t,0,o,this.toBBox),h=l(t,o,n,this.toBBox),a=g(e,h),u=m(e)+m(h);a<i?(i=a,r=o,s=u<s?u:s):a===i&&u<s&&(s=u,r=o)}return r}_chooseSplitAxis(t,e,n){const i=t.leaf?this.compareMinX:c,s=t.leaf?this.compareMinY:d;this._allDistMargin(t,e,n,i)<this._allDistMargin(t,e,n,s)&&t.children.sort(i)}_allDistMargin(t,e,n,i){t.children.sort(i);const s=this.toBBox,r=l(t,0,e,s),o=l(t,n-e,n,s);let h=f(r)+f(o);for(let i=e;i<n-e;i++){const e=t.children[i];u(r,t.leaf?s(e):e),h+=f(r)}for(let i=n-e-1;i>=e;i--){const e=t.children[i];u(o,t.leaf?s(e):e),h+=f(o)}return h}_adjustParentBBoxes(t,e,n){for(let i=n;i>=0;i--)u(e.data[i],t)}_condense(t){for(let e=t.length-1;e>=0;e--){const n=t.data[e];if(0===n.children.length)if(e>0){const s=t.data[e-1],r=s.children;r.splice((0,i.cq)(r,n,r.length,s.indexHint),1)}else this.clear();else a(n,this.toBBox)}}_initFormat(t){const e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function a(t,e){l(t,0,t.children.length,e,t)}function l(t,e,n,i,s){s||(s=new Y([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let r,o=e;o<n;o++)r=t.children[o],u(s,t.leaf?i(r):r);return s}function u(t,e){t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY)}function c(t,e){return t.minX-e.minX}function d(t,e){return t.minY-e.minY}function m(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function f(t){return t.maxX-t.minX+(t.maxY-t.minY)}function x(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function g(t,e){const n=Math.max(t.minX,e.minX),i=Math.max(t.minY,e.minY),s=Math.min(t.maxX,e.maxX),r=Math.min(t.maxY,e.maxY);return Math.max(0,s-n)*Math.max(0,r-i)}function _(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function p(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function I(t,e,n,i,r){const h=[e,n];for(;h.length;){const e=(0,s.j0)(h.pop()),n=(0,s.j0)(h.pop());if(e-n<=i)continue;const a=n+Math.ceil((e-n)/i/2)*i;(0,o.q)(t,a,n,e,r),h.push(n,a,a,e)}}const y=new r.Z,B=new r.Z,M=new r.Z,b=new r.Z({deallocator:void 0});class v extends class{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}{constructor(){super(...arguments),this.height=1,this.indexHint=new i.SO}}class Y extends v{constructor(t){super(),this.children=t,this.leaf=!0}}class X extends v{constructor(t){super(),this.children=t,this.leaf=!1}}},61107:(t,e,n)=>{n.d(e,{N:()=>i});const i={convertToGEGeometry:function(t,e){return null==e?null:t.convertJSONToGeometry(e)},exportPoint:function(t,e,n){const i=new s(t.getPointX(e),t.getPointY(e),n),r=t.hasZ(e),o=t.hasM(e);return r&&(i.z=t.getPointZ(e)),o&&(i.m=t.getPointM(e)),i},exportPolygon:function(t,e,n){return new r(t.exportPaths(e),n,t.hasZ(e),t.hasM(e))},exportPolyline:function(t,e,n){return new o(t.exportPaths(e),n,t.hasZ(e),t.hasM(e))},exportMultipoint:function(t,e,n){return new h(t.exportPoints(e),n,t.hasZ(e),t.hasM(e))},exportExtent:function(t,e,n){const i=t.hasZ(e),s=t.hasM(e),r=new a(t.getXMin(e),t.getYMin(e),t.getXMax(e),t.getYMax(e),n);if(i){const n=t.getZExtent(e);r.zmin=n.vmin,r.zmax=n.vmax}if(s){const n=t.getMExtent(e);r.mmin=n.vmin,r.mmax=n.vmax}return r}};class s{constructor(t,e,n){this.x=t,this.y=e,this.spatialReference=n,this.z=void 0,this.m=void 0}}class r{constructor(t,e,n,i){this.rings=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}class o{constructor(t,e,n,i){this.paths=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}class h{constructor(t,e,n,i){this.points=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}class a{constructor(t,e,n,i,s){this.xmin=t,this.ymin=e,this.xmax=n,this.ymax=i,this.spatialReference=s,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},7505:(t,e,n)=>{n.d(e,{ym:()=>_,RF:()=>g,vY:()=>a,J9:()=>p,U1:()=>I,Ie:()=>y,G6:()=>B});var i=n(61681),s=n(53736);const r=(t,e,n)=>[e,n],o=(t,e,n)=>[e,n,t[2]],h=(t,e,n)=>[e,n,t[2],t[3]];function a(t){return t?{originPosition:"upper-left"===t.originPosition?"upperLeft":"lower-left"===t.originPosition?"lowerLeft":t.originPosition,scale:t.tolerance?[t.tolerance,t.tolerance]:[1,1],translate:t.extent?[t.extent.xmin,t.extent.ymax]:[0,0]}:null}function l({scale:t,translate:e},n){return Math.round((n-e[0])/t[0])}function u({scale:t,translate:e},n){return Math.round((e[1]-n)/t[1])}function c(t,e,n){const i=[];let s,r,o,h;for(let a=0;a<n.length;a++){const c=n[a];a>0?(o=l(t,c[0]),h=u(t,c[1]),o===s&&h===r||(i.push(e(c,o-s,h-r)),s=o,r=h)):(s=l(t,c[0]),r=u(t,c[1]),i.push(e(c,s,r)))}return i.length>0?i:null}function d({scale:t,translate:e},n){return n*t[0]+e[0]}function m({scale:t,translate:e},n){return e[1]-n*t[1]}function f(t,e,n){const i=new Array(n.length);if(!n.length)return i;const[s,r]=t.scale;let o=d(t,n[0][0]),h=m(t,n[0][1]);i[0]=e(n[0],o,h);for(let t=1;t<n.length;t++){const a=n[t];o+=a[0]*s,h-=a[1]*r,i[t]=e(a,o,h)}return i}function x(t,e,n){const i=new Array(n.length);for(let s=0;s<n.length;s++)i[s]=f(t,e,n[s]);return i}function g(t,e,n,i,s){return e.x=l(t,n.x),e.y=u(t,n.y),e!==n&&(i&&(e.z=n.z),s&&(e.m=n.m)),e}function _(t,e){return t&&e?(0,s.wp)(e)?g(t,{},e,!1,!1):(0,s.l9)(e)?function(t,e,n,i,s){const a=function(t,e,n,i){const s=[],a=n?i?h:o:i?o:r;for(let n=0;n<e.length;n++){const i=c(t,a,e[n]);i&&i.length>=2&&s.push(i)}return s.length?s:null}(t,n.paths,i,s);return a?(e.paths=a,e):null}(t,{},e,!1,!1):(0,s.oU)(e)?function(t,e,n,i,s){const a=function(t,e,n,i){const s=[],a=n?i?h:o:i?o:r;for(let n=0;n<e.length;n++){const i=c(t,a,e[n]);i&&i.length>=3&&s.push(i)}return s.length?s:null}(t,n.rings,i,s);return a?(e.rings=a,e):null}(t,{},e,!1,!1):(0,s.aW)(e)?function(t,e,n,i,s){return e.points=function(t,e,n,i){return c(t,n?i?h:o:i?o:r,e)}(t,n.points,i,s),e}(t,{},e,!1,!1):(0,s.YX)(e)?function(t,e,n,i,s){return e.xmin=l(t,n.xmin),e.ymin=u(t,n.ymin),e.xmax=l(t,n.xmax),e.ymax=u(t,n.ymax),e}(t,{},e):null:null}function p(t,e,n,s,a){return(0,i.pC)(n)&&(e.points=function(t,e,n,i){return f(t,n?i?h:o:i?o:r,e)}(t,n.points,s,a)),e}function I(t,e,n,s,r){return(0,i.Wi)(n)||(e.x=d(t,n.x),e.y=m(t,n.y),e!==n&&(s&&(e.z=n.z),r&&(e.m=n.m))),e}function y(t,e,n,s,a){return(0,i.pC)(n)&&(e.rings=function(t,e,n,i){return x(t,n?i?h:o:i?o:r,e)}(t,n.rings,s,a)),e}function B(t,e,n,s,a){return(0,i.pC)(n)&&(e.paths=function(t,e,n,i){return x(t,n?i?h:o:i?o:r,e)}(t,n.paths,s,a)),e}},33480:(t,e,n)=>{n.d(e,{Y:()=>r});var i=n(61681);function s(t,e){return t?e?4:3:e?3:2}function r(t,e,n,r,a){if((0,i.Wi)(e)||!e.lengths.length)return null;const l="upperLeft"===(null==a?void 0:a.originPosition)?-1:1;t.lengths.length&&(t.lengths.length=0),t.coords.length&&(t.coords.length=0);const u=t.coords,c=[],d=n?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:m,coords:f}=e,x=s(n,r);let g=0;for(const t of m){const e=o(d,f,g,t,n,r,l);e&&c.push(e),g+=t*x}if(c.sort(((t,e)=>{let i=l*t[2]-l*e[2];return 0===i&&n&&(i=t[4]-e[4]),i})),c.length){let t=6*c[0][2];u[0]=c[0][0]/t,u[1]=c[0][1]/t,n&&(t=6*c[0][4],u[2]=0!==t?c[0][3]/t:0),(u[0]<d[0]||u[0]>d[1]||u[1]<d[2]||u[1]>d[3]||n&&(u[2]<d[4]||u[2]>d[5]))&&(u.length=0)}if(!u.length){const t=e.lengths[0]?h(f,0,m[0],n,r):null;if(!t)return null;u[0]=t[0],u[1]=t[1],n&&t.length>2&&(u[2]=t[2])}return t}function o(t,e,n,i,r,o,h=1){const a=s(r,o);let l=n,u=n+a,c=0,d=0,m=0,f=0,x=0;for(let n=0,s=i-1;n<s;n++,l+=a,u+=a){const n=e[l],i=e[l+1],s=e[l+2],o=e[u],h=e[u+1],a=e[u+2];let g=n*h-o*i;f+=g,c+=(n+o)*g,d+=(i+h)*g,r&&(g=n*a-o*s,m+=(s+a)*g,x+=g),n<t[0]&&(t[0]=n),n>t[1]&&(t[1]=n),i<t[2]&&(t[2]=i),i>t[3]&&(t[3]=i),r&&(s<t[4]&&(t[4]=s),s>t[5]&&(t[5]=s))}if(f*h>0&&(f*=-1),x*h>0&&(x*=-1),!f)return null;const g=[c,d,.5*f];return r&&(g[3]=m,g[4]=.5*x),g}function h(t,e,n,i,r){const o=s(i,r);let h=e,d=e+o,m=0,f=0,x=0,g=0;for(let e=0,s=n-1;e<s;e++,h+=o,d+=o){const e=t[h],n=t[h+1],s=t[h+2],r=t[d],o=t[d+1],_=t[d+2],p=i?l(e,n,s,r,o,_):a(e,n,r,o);if(p)if(m+=p,i){const t=c(e,n,s,r,o,_);f+=p*t[0],x+=p*t[1],g+=p*t[2]}else{const t=u(e,n,r,o);f+=p*t[0],x+=p*t[1]}}return m>0?i?[f/m,x/m,g/m]:[f/m,x/m]:n>0?i?[t[e],t[e+1],t[e+2]]:[t[e],t[e+1]]:null}function a(t,e,n,i){const s=n-t,r=i-e;return Math.sqrt(s*s+r*r)}function l(t,e,n,i,s,r){const o=i-t,h=s-e,a=r-n;return Math.sqrt(o*o+h*h+a*a)}function u(t,e,n,i){return[t+.5*(n-t),e+.5*(i-e)]}function c(t,e,n,i,s,r){return[t+.5*(i-t),e+.5*(s-e),n+.5*(r-n)]}},117:(t,e,n)=>{n.d(e,{H:()=>o});var i=n(39994),s=n(26488);const r={minX:0,minY:0,maxX:0,maxY:0};class o{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new s.QB(9,(0,i.Z)("csp-restrictions")?t=>({minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const t=new Array(this._idByBounds.size);let e=0;this._idByBounds.forEach(((n,i)=>{t[e++]=i})),this._indexInvalid=!1,this._index.clear(),this._index.load(t)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter((t=>this._idByBounds.has(t)))),this._boundsToLoad.length=0)}}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(t){const e=this._boundsById.get(t);this._boundsById.delete(t),e&&(this._idByBounds.delete(e),this._indexInvalid||this._index.remove(e))}forEachInBounds(t,e){this._loadIndex(),function(t,e,n){r.minX=e[0],r.minY=e[1],r.maxX=e[2],r.maxY=e[3],t.search(r,n)}(this._index,t,(t=>e(this._idByBounds.get(t))))}get(t){return this._boundsById.get(t)}has(t){return this._boundsById.has(t)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(t,e){if(!this._indexInvalid){const e=this._boundsById.get(t);e&&(this._index.remove(e),this._idByBounds.delete(e))}this._boundsById.set(t,e),e&&(this._idByBounds.set(e,t),this._indexInvalid||(this._boundsToLoad.push(e),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},4811:(t,e,n)=>{n.d(e,{Z:()=>x});var i=n(70375),s=n(31355),r=n(13802),o=n(61681),h=n(37116),a=n(24568),l=n(12065),u=n(117),c=n(33480),d=n(59958),m=n(15540);const f={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t,e)=>new d.ZP(e,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(t,e)=>(t.centroid||(t.centroid=(0,c.Y)(new m.Z,t.geometry,e.hasZ,e.hasM)),t.centroid)};class x{constructor(t){this.geometryInfo=t,this._boundsStore=new u.H,this._featuresById=new Map,this._markedIds=new Set,this.events=new s.Z,this.featureAdapter=f}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){if(!this.numFeatures)return null;const t=(0,a.Ue)(a.Gv);return this._featuresById.forEach((e=>{const n=this._boundsStore.get(e.objectId);n&&(t[0]=Math.min(n[0],t[0]),t[1]=Math.min(n[1],t[1]),t[2]=Math.max(n[2],t[2]),t[3]=Math.max(n[3],t[3]))})),t}get storeStatistics(){let t=0;return this._featuresById.forEach((e=>{(0,o.pC)(e.geometry)&&e.geometry.coords&&(t+=e.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:t/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(t){this._add(t),this._emitChanged()}addMany(t){for(const e of t)this._add(e);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(t){const e=this._featuresById.get(t);return e?(this._remove(e),this._emitChanged(),e):null}removeManyById(t){this._boundsStore.invalidateIndex();for(const e of t){const t=this._featuresById.get(e);t&&this._remove(t)}this._emitChanged()}forEachBounds(t,e,n){for(const i of t){const t=this._boundsStore.get(i.objectId);t&&e((0,h.JR)(n,t))}}getFeature(t){return this._featuresById.get(t)}has(t){return this._featuresById.has(t)}forEach(t){this._featuresById.forEach((e=>t(e)))}forEachInBounds(t,e){this._boundsStore.forEachInBounds(t,(t=>{e(this._featuresById.get(t))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let t=!1;this._featuresById.forEach(((e,n)=>{this._markedIds.has(n)||(t=!0,this._remove(e))})),this._markedIds.clear(),t&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(t){if(!t)return;const e=t.objectId;if(null==e)return void r.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new i.Z("featurestore:invalid-feature","feature id is missing",{feature:t}));const n=this._featuresById.get(e);let s;if(this._markedIds.add(e),n?(t.displayId=n.displayId,s=this._boundsStore.get(e),this._boundsStore.delete(e)):(0,o.pC)(this.onFeatureAdd)&&this.onFeatureAdd(t),(0,o.Wi)(t.geometry)||!t.geometry.coords||!t.geometry.coords.length)return this._boundsStore.set(e,null),void this._featuresById.set(e,t);s=(0,l.$)((0,o.pC)(s)?s:(0,a.Ue)(),t.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),(0,o.pC)(s)&&this._boundsStore.set(e,s),this._featuresById.set(e,t)}_remove(t){return(0,o.pC)(this.onFeatureRemove)&&this.onFeatureRemove(t),this._markedIds.delete(t.objectId),this._boundsStore.delete(t.objectId),this._featuresById.delete(t.objectId),t}}},66069:(t,e,n)=>{n.d(e,{_W:()=>d,iV:()=>x,oj:()=>_});var i=n(61681),s=n(27199),r=n(61107),o=n(35925),h=n(39536);const a=[0,0];function l(t,e){if(!e)return null;if("x"in e){const n={x:0,y:0};return[n.x,n.y]=t(e.x,e.y,a),null!=e.z&&(n.z=e.z),null!=e.m&&(n.m=e.m),n}if("xmin"in e){const n={xmin:0,ymin:0,xmax:0,ymax:0};return[n.xmin,n.ymin]=t(e.xmin,e.ymin,a),[n.xmax,n.ymax]=t(e.xmax,e.ymax,a),e.hasZ&&(n.zmin=e.zmin,n.zmax=e.zmax,n.hasZ=!0),e.hasM&&(n.mmin=e.mmin,n.mmax=e.mmax,n.hasM=!0),n}return"rings"in e?{rings:u(e.rings,t),hasM:e.hasM,hasZ:e.hasZ}:"paths"in e?{paths:u(e.paths,t),hasM:e.hasM,hasZ:e.hasZ}:"points"in e?{points:c(e.points,t),hasM:e.hasM,hasZ:e.hasZ}:void 0}function u(t,e){const n=[];for(const i of t)n.push(c(i,e));return n}function c(t,e){const n=[];for(const i of t){const t=e(i[0],i[1],[0,0]);n.push(t),i.length>2&&t.push(i[2]),i.length>3&&t.push(i[3])}return n}async function d(t,e){if(!e)return;const n=Array.isArray(t)?t.map((t=>(0,i.pC)(t.geometry)&&t.geometry.spatialReference)):[t];await(0,s.iQ)(n.map((t=>({source:t,dest:e}))))}const m=l.bind(null,h.hG),f=l.bind(null,h.R6);function x(t,e,n){return t?(n||(n=e,e=t.spatialReference),(0,o.JY)(e)&&(0,o.JY)(n)&&!(0,o.fS)(e,n)?(0,h.Q8)(e,n)?(0,o.sS)(n)?m(t):f(t):(0,s.oj)(r.N,[t],e,n,null)[0]:t):t}const g=new class{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(t,e,n){if(!t||!t.length||!e||!n||(0,o.fS)(e,n))return t;const i={geometries:t,inSpatialReference:e,outSpatialReference:n,resolve:null};return this._jobs.push(i),new Promise((t=>{i.resolve=t,null===this._timer&&(this._timer=setTimeout(this._process,10))}))}_process(){this._timer=null;const t=this._jobs.shift();if(!t)return;const{geometries:e,inSpatialReference:n,outSpatialReference:i,resolve:a}=t;(0,h.Q8)(n,i)?(0,o.sS)(i)?a(e.map(m)):a(e.map(f)):a((0,s.oj)(r.N,e,n,i,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}};function _(t,e,n){return g.push(t,e,n)}}}]);