"use strict";(self.webpackChunkarcgis_rm=self.webpackChunkarcgis_rm||[]).push([[1500],{71500:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var o=r(36663),l=r(66591),a=r(15842),n=r(81977),i=(r(39994),r(7283),r(13802),r(34248)),s=r(12571),u=r(41633),c=r(76136),p=r(43330),d=r(18241);let y=class extends((0,p.q)((0,d.I)((0,a.R)(c.Z)))){constructor(...e){super(...e),this.type="route"}get barrierLines(){return this._getNamedFeatureLayer("PolylineBarriers")}get barrierPoints(){return this._getNamedFeatureLayer("Barriers")}get barrierPolygons(){return this._getNamedFeatureLayer("PolygonBarriers")}get directionLines(){return this._getNamedFeatureLayer("DirectionLines")}get directionPoints(){return this._getNamedFeatureLayer("DirectionPoints")}readFeatureCollectionsFromItem(e,t,r){return this.revert("featureCollections","portal-item"),t.layers.map((e=>{const t=new u.default;return t.read(e,r),t}))}readFeatureCollectionsFromWebMap(e,t,r){return t.featureCollection.layers.map((e=>{const t=new u.default;return t.read(e,r),t}))}get fullExtent(){return this.featureCollections?this.featureCollections.reduce(((e,t)=>e?e.union(t.fullExtent):t.fullExtent),null):null}get maxScale(){return this.featureCollections?this.featureCollections.reduce(((e,t)=>null==e?t.maxScale:Math.min(e,t.maxScale)),null):0}set maxScale(e){this.featureCollections.forEach((t=>{t.maxScale=e})),this._set("maxScale",e)}get minScale(){return this.featureCollections?this.featureCollections.reduce(((e,t)=>null==e?t.minScale:Math.min(e,t.minScale)),null):0}set minScale(e){this.featureCollections.forEach((t=>{t.minScale=e})),this._set("minScale",e)}get routeInfo(){return this._getNamedFeatureLayer("RouteInfo")}get stops(){return this._getNamedFeatureLayer("Stops")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}_getNamedFeatureLayer(e){if(this.featureCollections)return this.featureCollections.find((t=>t.title===e))}};(0,o._)([(0,n.Cb)()],y.prototype,"barrierLines",null),(0,o._)([(0,n.Cb)()],y.prototype,"barrierPoints",null),(0,o._)([(0,n.Cb)()],y.prototype,"barrierPolygons",null),(0,o._)([(0,n.Cb)()],y.prototype,"directionLines",null),(0,o._)([(0,n.Cb)()],y.prototype,"directionPoints",null),(0,o._)([(0,n.Cb)({type:l.Z.ofType(u.default)})],y.prototype,"featureCollections",void 0),(0,o._)([(0,i.r)("portal-item","featureCollections",["layers"])],y.prototype,"readFeatureCollectionsFromItem",null),(0,o._)([(0,i.r)("web-map","featureCollections",["featureCollection.layers"])],y.prototype,"readFeatureCollectionsFromWebMap",null),(0,o._)([(0,n.Cb)({readOnly:!0})],y.prototype,"fullExtent",null),(0,o._)([(0,n.Cb)({type:["show","hide"]})],y.prototype,"listMode",void 0),(0,o._)([(0,n.Cb)()],y.prototype,"maxScale",null),(0,o._)([(0,n.Cb)()],y.prototype,"minScale",null),(0,o._)([(0,n.Cb)()],y.prototype,"routeInfo",null),(0,o._)([(0,n.Cb)()],y.prototype,"stops",null),(0,o._)([(0,n.Cb)({readOnly:!0,json:{read:!1}})],y.prototype,"type",void 0),y=(0,o._)([(0,s.j)("esri.layers.RouteLayer")],y);var m=y}}]);