"use strict";(self.webpackChunkarcgis_rm=self.webpackChunkarcgis_rm||[]).push([[4473],{14473:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var i=r(36663),n=r(70375),a=r(61681),s=r(81977),o=(r(39994),r(7283),r(13802),r(12571)),l=r(51211),c=r(54788),d=r(67437);function p(e,t){if((0,a.Wi)(e)&&(0,a.Wi)(t))return null;const r={};return(0,a.pC)(t)&&(r.geometry=t.toJSON()),(0,a.pC)(e)&&(r.where=e),r}let y=class extends c.default{constructor(){super(...arguments),this._enabledDataReceived=!1,this.errorString=null,this.connectionStatus="disconnected"}initialize(){this.handles.add([this.layer.watch("purgeOptions",(()=>this._update()))])}destroy(){this.connectionStatus="disconnected"}get connectionError(){if(this.errorString)return new n.Z("stream-controller",this.errorString)}on(e,t){"data-received"===e&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));const r=super.on(e,t),i=this;return{remove(){r.remove(),"data-received"===e&&(i._proxy.closed||i.hasEventListener("data-received")||i._proxy.enableEvent("data-received",!1))}}}queryLatestObservations(e,t){if(!this.layer.timeInfo.endField&&!this.layer.timeInfo.startField)throw new n.Z("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then((e=>{const t=l.default.fromJSON(e);return t.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer})),t}))}_createClientOptions(){return{...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value)}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(p(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,r=e.fields.map((e=>e.toJSON())),i=(0,d.o)(e.geometryType),n=e.timeInfo&&e.timeInfo.toJSON()||null,a=e.spatialReference?e.spatialReference.toJSON():null;return{type:"stream",fields:r,geometryType:i,objectIdField:t,timeInfo:n,source:this.layer.parsedUrl,serviceFilter:p(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:a,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval}}};(0,i._)([(0,s.Cb)()],y.prototype,"errorString",void 0),(0,i._)([(0,s.Cb)({readOnly:!0})],y.prototype,"connectionError",null),(0,i._)([(0,s.Cb)()],y.prototype,"connectionStatus",void 0),y=(0,i._)([(0,o.j)("esri.views.2d.layers.StreamLayerView2D")],y);var u=y}}]);