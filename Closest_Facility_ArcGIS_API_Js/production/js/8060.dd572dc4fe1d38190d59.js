"use strict";(self.webpackChunkarcgis_rm=self.webpackChunkarcgis_rm||[]).push([[8060],{8060:(e,r,t)=>{t.r(r),t.d(r,{create:()=>s,projectGeometry:()=>l});var i=t(51366),o=t(70375),n=t(26869),a=t(41268);async function s(e=null,r){if(i.Z.geometryServiceUrl)return new(0,(await t.e(7722).then(t.bind(t,74660))).default)({url:i.Z.geometryServiceUrl});if(!e)throw new o.Z("internal:geometry-service-url-not-configured");let a;if(a="portal"in e?e.portal||n.Z.getDefault():e,await a.load({signal:r}),a.helperServices&&a.helperServices.geometry&&a.helperServices.geometry.url)return new(0,(await t.e(7722).then(t.bind(t,74660))).default)({url:a.helperServices.geometry.url});throw new o.Z("internal:geometry-service-url-not-configured")}async function l(e,r,t=null,i){const n=await s(t,i),l=new a.Z;l.geometries=[e],l.outSpatialReference=r;const u=await n.project(l,{signal:i});if(u&&Array.isArray(u)&&1===u.length)return u[0];throw new o.Z("internal:geometry-service-projection-failed")}},41268:(e,r,t)=>{t.d(r,{Z:()=>u});var i=t(36663),o=t(49004),n=t(81977),a=(t(39994),t(7283),t(13802),t(12571)),s=t(53736);let l=class extends o.wq{constructor(e){super(e),this.geometries=null,this.outSpatialReference=null,this.transformation=null,this.transformForward=null}toJSON(){const e=this.geometries.map((function(e){return e.toJSON()})),r=this.geometries[0],t={};return t.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),t.inSR=r.spatialReference.wkid||JSON.stringify(r.spatialReference.toJSON()),t.geometries=JSON.stringify({geometryType:(0,s.Ji)(r),geometries:e}),this.transformation&&(t.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(t.transformForward=this.transformForward),t}};(0,i._)([(0,n.Cb)()],l.prototype,"geometries",void 0),(0,i._)([(0,n.Cb)({json:{read:{source:"outSR"}}})],l.prototype,"outSpatialReference",void 0),(0,i._)([(0,n.Cb)()],l.prototype,"transformation",void 0),(0,i._)([(0,n.Cb)()],l.prototype,"transformForward",void 0),l=(0,i._)([(0,a.j)("esri.rest.support.ProjectParameters")],l);var u=l}}]);