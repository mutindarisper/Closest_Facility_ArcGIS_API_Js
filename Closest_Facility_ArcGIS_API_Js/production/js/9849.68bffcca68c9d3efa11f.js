"use strict";(self.webpackChunkarcgis_rm=self.webpackChunkarcgis_rm||[]).push([[9849],{89849:(e,t,r)=>{r.r(t),r.d(t,{default:()=>_});var o=r(36663),i=(r(91957),r(81977)),s=r(39994),n=(r(7283),r(13802),r(34248)),a=r(12571),l=r(41633),u=r(68309),p=r(61681),d=r(47109),c=r(51211),y=r(91772);let h=class extends u.Z{constructor(e){super(e),this.type="csv"}load(e){const t=(0,p.pC)(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;null==(e=this._connection)||e.close(),this._connection=null}openPorts(){return this.load().then((()=>this._connection.openPorts()))}queryFeatures(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))).then((e=>c.default.fromJSON(e)))}queryFeaturesJSON(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)))}queryFeatureCount(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)))}queryObjectIds(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)))}queryExtent(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t))).then((e=>({count:e.count,extent:y.Z.fromJSON(e.extent)})))}querySnapping(e,t={}){return this.load(t).then((()=>this._connection.invoke("querySnapping",e,t)))}async _startWorker(e){this._connection=await(0,d.bA)("CSVSourceWorker",{strategy:(0,s.Z)("feature-layers-workers")?"dedicated":"local",signal:e});const t=await this._connection.invoke("load",{url:this.url,parsing:{columnDelimiter:this.delimiter,fields:this.fields&&this.fields.map((e=>e.toJSON())),latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference&&this.spatialReference.toJSON(),timeInfo:this.timeInfo&&this.timeInfo.toJSON()}},{signal:e});this.locationInfo=t.locationInfo,this.sourceJSON=t.layerDefinition,this.columnDelimiter=t.columnDelimiter}};(0,o._)([(0,i.Cb)()],h.prototype,"type",void 0),(0,o._)([(0,i.Cb)()],h.prototype,"url",void 0),(0,o._)([(0,i.Cb)()],h.prototype,"delimiter",void 0),(0,o._)([(0,i.Cb)()],h.prototype,"fields",void 0),(0,o._)([(0,i.Cb)()],h.prototype,"latitudeField",void 0),(0,o._)([(0,i.Cb)()],h.prototype,"longitudeField",void 0),(0,o._)([(0,i.Cb)()],h.prototype,"spatialReference",void 0),(0,o._)([(0,i.Cb)()],h.prototype,"timeInfo",void 0),(0,o._)([(0,i.Cb)()],h.prototype,"locationInfo",void 0),(0,o._)([(0,i.Cb)()],h.prototype,"sourceJSON",void 0),(0,o._)([(0,i.Cb)()],h.prototype,"columnDelimiter",void 0),h=(0,o._)([(0,a.j)("esri.layers.graphics.sources.CSVSource")],h);var m=h,f=r(40400),g=r(14136),b=r(16641),v=r(14685);let C=class extends l.default{constructor(...e){super(...e),this.capabilities=(0,f.MS)(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.customParameters=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.portalItem=null,this.spatialReference=v.Z.WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}get isTable(){return this.loaded&&null==this.geometryType}readWebMapLabelsVisible(e,t){return null!=t.showLabels?t.showLabels:!!(t.layerDefinition&&t.layerDefinition.drawingInfo&&t.layerDefinition.drawingInfo.labelingInfo)}set url(e){this._set("url",e)}async createGraphicsSource(e){const t=new m({delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference,timeInfo:this.timeInfo,url:this.url});return this._set("source",t),await t.load({signal:e}),this.read({locationInfo:t.locationInfo,columnDelimiter:t.columnDelimiter},{origin:"service",url:this.parsedUrl}),t}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(g.Z.from(e)||this.createQuery()))).then((e=>{if(null!=e&&e.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(g.Z.from(e)||this.createQuery())))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(g.Z.from(e)||this.createQuery())))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(g.Z.from(e)||this.createQuery())))}write(e,t){return super.write(e,{...t,writeLayerSchema:!0})}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};(0,o._)([(0,i.Cb)({readOnly:!0,json:{read:!1,write:!1}})],C.prototype,"capabilities",void 0),(0,o._)([(0,i.Cb)({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],C.prototype,"delimiter",void 0),(0,o._)([(0,i.Cb)({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],C.prototype,"editingEnabled",void 0),(0,o._)([(0,i.Cb)({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],C.prototype,"fields",void 0),(0,o._)([(0,i.Cb)({type:Boolean,readOnly:!0})],C.prototype,"isTable",null),(0,o._)([(0,n.r)("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],C.prototype,"readWebMapLabelsVisible",null),(0,o._)([(0,i.Cb)({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],C.prototype,"latitudeField",void 0),(0,o._)([(0,i.Cb)({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],C.prototype,"customParameters",void 0),(0,o._)([(0,i.Cb)({type:["show","hide"]})],C.prototype,"listMode",void 0),(0,o._)([(0,i.Cb)({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],C.prototype,"locationType",void 0),(0,o._)([(0,i.Cb)({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],C.prototype,"longitudeField",void 0),(0,o._)([(0,i.Cb)({type:["CSV"]})],C.prototype,"operationalLayerType",void 0),(0,o._)([(0,i.Cb)()],C.prototype,"outFields",void 0),(0,o._)([(0,i.Cb)({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],C.prototype,"path",void 0),(0,o._)([(0,i.Cb)({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],C.prototype,"portalItem",void 0),(0,o._)([(0,i.Cb)({json:{read:!1},cast:null,type:m,readOnly:!0})],C.prototype,"source",void 0),(0,o._)([(0,i.Cb)({json:{read:!1},value:"csv",readOnly:!0})],C.prototype,"type",void 0),(0,o._)([(0,i.Cb)({json:{read:b.r,write:{isRequired:!0,ignoreOrigin:!0,writer:b.w}}})],C.prototype,"url",null),C=(0,o._)([(0,a.j)("esri.layers.CSVLayer")],C);var _=C},10287:(e,t,r)=>{r.d(t,{g:()=>o});const o={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},40400:(e,t,r)=>{r.d(t,{MS:()=>p,Dm:()=>l,Hq:()=>u,bU:()=>a});var o=r(39994),i=r(67134),s=r(10287),n=r(86094);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?n.I4:"esriGeometryPolyline"===e?n.ET:n.lF}}}function l(e,t){if((0,o.Z)("csp-restrictions"))return()=>({[t]:null,...e});try{let r=`this.${t} = null;`;for(const t in e)r+=`this${t.indexOf(".")?`["${t}"]`:`.${t}`} = ${JSON.stringify(e[t])};`;const o=new Function(r);return()=>new o}catch(r){return()=>({[t]:null,...e})}}function u(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,i.d9)(e)}}]}function p(e,t){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:s.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);