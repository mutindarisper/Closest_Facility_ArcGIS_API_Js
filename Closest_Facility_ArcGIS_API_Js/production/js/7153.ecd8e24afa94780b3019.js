"use strict";(self.webpackChunkarcgis_rm=self.webpackChunkarcgis_rm||[]).push([[7153],{26139:(e,r,i)=>{i.d(r,{G:()=>s});var t=i(70375);class s{constructor(e,r,i=""){this.major=e,this.minor=r,this._context=i}lessThan(e,r){return this.major<e||e===this.major&&this.minor<r}since(e,r){return!this.lessThan(e,r)}validate(e){if(this.major!==e.major){const r=this._context&&this._context+":",i=this._context&&this._context+" ";throw new t.Z(r+"unsupported-version",`Required major ${i}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new s(this.major,this.minor,this._context)}static parse(e,r=""){const[i,a]=e.split("."),l=/^\s*\d+\s*$/;if(!i||!i.match||!i.match(l))throw new t.Z((r&&r+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:e});if(!a||!a.match||!a.match(l))throw new t.Z((r&&r+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:e});const o=parseInt(i,10),n=parseInt(a,10);return new s(o,n,r)}}},81432:(e,r,i)=>{i.d(r,{O:()=>b});var t=i(36663),s=i(66341),a=i(78668),l=i(3466),o=i(26139),n=i(81977),y=(i(39994),i(7283),i(13802),i(34248)),u=i(12571),d=i(91772),p=i(14685),c=i(51599);const b=e=>{let r=class extends e{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=null}readCapabilities(e,r){const i=r.capabilities&&r.capabilities.split(",").map((e=>e.toLowerCase().trim()));if(!i)return{operations:{supportsQuery:!1,supportsExportMap:!1,supportsExportTiles:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const t=this.type,s=-1!==i.indexOf("query"),a=-1!==i.indexOf("map"),l=!!r.exportTilesAllowed,n=-1!==i.indexOf("tilemap"),y="tile"!==t&&!!r.supportsDynamicLayers,u="tile"!==t&&(!r.tileInfo||y),d="tile"!==t&&(!r.tileInfo||y),p="tile"!==t,c=!!r.cimVersion&&o.G.parse(r.cimVersion).since(1,4);return{operations:{supportsQuery:s,supportsExportMap:a,supportsExportTiles:l,supportsTileMap:n},exportMap:a?{supportsArcadeExpressionForLabeling:c,supportsSublayersChanges:p,supportsDynamicLayers:y,supportsSublayerVisibility:u,supportsSublayerDefinitionExpression:d}:null,exportTiles:l?{maxExportTilesCount:+r.maxExportTilesCount}:null}}readVersion(e,r){let i=r.currentVersion;return i||(i=r.hasOwnProperty("capabilities")||r.hasOwnProperty("tables")?10:r.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),i}async fetchSublayerInfo(e,r){return await this.fetchAllLayersAndTables(r),this._allLayersAndTablesMap.get(e)}async fetchAllLayersAndTables(e){await this.load(e),this._allLayersAndTablesPromise||(this._allLayersAndTablesPromise=(0,s.default)((0,l.mN)(this.url).path+"/layers",{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey}}).then((e=>{this._allLayersAndTablesMap=new Map;for(const r of e.data.layers)this._allLayersAndTablesMap.set(r.id,r);return{result:e.data}}),(e=>({error:e}))));const r=await this._allLayersAndTablesPromise;if((0,a.k_)(e),"result"in r)return r.result;throw r.error}};return(0,t._)([(0,n.Cb)({readOnly:!0})],r.prototype,"capabilities",void 0),(0,t._)([(0,y.r)("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],r.prototype,"readCapabilities",null),(0,t._)([(0,n.Cb)({json:{read:{source:"copyrightText"}}})],r.prototype,"copyright",void 0),(0,t._)([(0,n.Cb)({type:d.Z})],r.prototype,"fullExtent",void 0),(0,t._)([(0,n.Cb)(c.id)],r.prototype,"id",void 0),(0,t._)([(0,n.Cb)({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],r.prototype,"legendEnabled",void 0),(0,t._)([(0,n.Cb)(c.C_)],r.prototype,"popupEnabled",void 0),(0,t._)([(0,n.Cb)({type:p.Z})],r.prototype,"spatialReference",void 0),(0,t._)([(0,n.Cb)()],r.prototype,"version",void 0),(0,t._)([(0,y.r)("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],r.prototype,"readVersion",null),r=(0,t._)([(0,u.j)("esri.layers.mixins.ArcGISMapService")],r),r}},80002:(e,r,i)=>{i.d(r,{x:()=>g});var t=i(36663),s=i(66591),a=i(81739),l=i(70375),o=i(13802),n=i(81977),y=(i(39994),i(95620)),u=(i(7283),i(12571)),d=i(65943),p=i(23875),c=i(93698);const b=o.Z.getLogger("esri.layers.TileLayer"),f=s.Z.ofType(p.Z);function h(e,r){e&&e.forEach((e=>{r(e),e.sublayers&&e.sublayers.length&&h(e.sublayers,r)}))}const g=e=>{let r=class extends e{constructor(...e){super(...e),this.allSublayers=new a.Z({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.sublayersSourceJSON={2:{},3:{},4:{},5:{}},this.handles.add(this.watch("sublayers",((e,r)=>this._handleSublayersChange(e,r)),!0))}readSublayers(e,r){if(!r||!e)return;const{sublayersSourceJSON:i}=this,t=(0,d.M9)(r.origin);if(t<2)return;if(i[t]={context:r,visibleLayers:e.visibleLayers||i[t].visibleLayers,layers:e.layers||i[t].layers},t>2)return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:s,origin:a}=this.createSublayersForOrigin("web-document"),l=(0,y.vw)(this);l.setDefaultOrigin(a),this._set("sublayers",new f(s)),l.setDefaultOrigin("user")}findSublayerById(e){return this.allSublayers.find((r=>r.id===e))}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(e){const r=(0,d.M9)("web-document"===e?"web-map":e);let i=2,t=this.sublayersSourceJSON[2].layers,s=this.sublayersSourceJSON[2].context,a=null;const l=[3,4,5].filter((e=>e<=r));for(const e of l){const r=this.sublayersSourceJSON[e];(0,c.ac)(r.layers)&&(i=e,t=r.layers,s=r.context,r.visibleLayers&&(a={visibleLayers:r.visibleLayers,context:r.context}))}const o=[3,4,5].filter((e=>e>i&&e<=r));let n=null;for(const e of o){const{layers:r,visibleLayers:i,context:t}=this.sublayersSourceJSON[e];r&&(n={layers:r,context:t}),i&&(a={visibleLayers:i,context:t})}const y=function(e,r){const i=[],t={};return e?(e.forEach((e=>{const s=new p.Z;if(s.read(e,r),t[s.id]=s,null!=e.parentLayerId&&-1!==e.parentLayerId){const r=t[e.parentLayerId];r.sublayers||(r.sublayers=[]),r.sublayers.unshift(s)}else i.unshift(s)})),i):i}(t,s),u=new Map,b=new Set;if(n)for(const e of n.layers)u.set(e.id,e);if(a)for(const e of a.visibleLayers)b.add(e);return h(y,(e=>{n&&e.read(u.get(e.id),n.context),a&&e.read({defaultVisibility:b.has(e.id)},a.context)})),{origin:(0,d.x3)(i),sublayers:new f({items:y})}}read(e,r){super.read(e,r),this.readSublayers(e,r)}_handleSublayersChange(e,r){r&&(r.forEach((e=>{e.parent=null,e.layer=null})),this.handles.remove("sublayers-owner")),e&&(e.forEach((e=>{e.parent=this,e.layer=this})),this.handles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null}))],"sublayers-owner"),"tile"===this.type&&this.handles.add(e.on("before-changes",(e=>{b.error(new l.Z("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),e.preventDefault()})),"sublayers-owner"))}};return(0,t._)([(0,n.Cb)({readOnly:!0})],r.prototype,"allSublayers",void 0),(0,t._)([(0,n.Cb)({readOnly:!0,type:s.Z.ofType(p.Z)})],r.prototype,"serviceSublayers",void 0),(0,t._)([(0,n.Cb)({value:null,type:f,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],r.prototype,"sublayers",void 0),(0,t._)([(0,n.Cb)({readOnly:!0})],r.prototype,"sublayersSourceJSON",void 0),r=(0,t._)([(0,u.j)("esri.layers.mixins.SublayersOwner")],r),r}},23875:(e,r,i)=>{i.d(r,{Z:()=>G});var t,s=i(36663),a=(i(91957),i(80020)),l=(i(86004),i(45510),i(66908),i(2802),i(22836),i(50172),i(25634),i(72506),i(54021)),o=i(66341),n=i(95156),y=i(66591),u=i(70375),d=i(53280),p=i(86618),c=i(67134),b=i(68309),f=i(13802),h=i(61681),g=i(15842),m=i(3466),v=i(81977),I=i(95620),w=i(69236),S=(i(39994),i(34248)),_=i(12571),x=i(39835),O=i(7283),L=i(65943),C=i(18160),D=i(12512),E=i(28790),P=i(26732),j=i(94081),T=i(10743),F=i(81580),M=i(14136),N=i(10171),V=i(89280),A=i(91772);function Z(e){return e&&"esriSMS"===e.type}function k(e,r,i){var t;const s=this.originIdOf(r)>=(0,L.M9)(i.origin);return{ignoreOrigin:!0,allowNull:s,enabled:!!i&&"map-image"===(null==(t=i.layer)?void 0:t.type)&&(i.writeSublayerStructure||s)}}function J(e,r,i){var t;return{enabled:!!i&&"tile"===(null==(t=i.layer)?void 0:t.type)&&this._isOverridden(r)}}function $(e,r,i){return{ignoreOrigin:!0,enabled:i&&i.writeSublayerStructure||!1}}function q(e,r,i){return{ignoreOrigin:!0,enabled:!!i&&(i.writeSublayerStructure||this.originIdOf(r)>=(0,L.M9)(i.origin))}}const U=f.Z.getLogger("esri.layers.support.Sublayer");let B=0;const R=new Set;R.add("layer"),R.add("parent"),R.add("loaded"),R.add("loadStatus"),R.add("loadError"),R.add("loadWarnings");let Q=t=class extends((0,d.p)((0,g.R)((0,p.I)(b.Z)))){constructor(e){super(e),this.capabilities=void 0,this.fields=null,this.fullExtent=null,this.globalIdField=null,this.legendEnabled=!0,this.objectIdField=null,this.popupEnabled=!0,this.popupTemplate=null,this.sourceJSON=null,this.title=null,this.typeIdField=null,this.types=null}async load(e){return this.addResolvingPromise((async()=>{var r;if(!this.layer&&!this.url)throw new u.Z("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});let i=null;if(!this.layer||this.originIdOf("url")>2||"data-layer"===(null==(r=this.source)?void 0:r.type))i=(await(0,o.default)(this.url,{responseType:"json",query:{f:"json"},...e})).data;else{var t;let r=this.id;"map-layer"===(null==(t=this.source)?void 0:t.type)&&(r=this.source.mapLayerId),i=await this.layer.fetchSublayerInfo(r,e)}i&&(this.sourceJSON=i,this.read({layerDefinition:i},{origin:"service"}))})()),this}readCapabilities(e,r){const i=(e=(r=r.layerDefinition||r).capabilities||e)?e.toLowerCase().split(",").map((e=>e.trim())):[];return{exportMap:{supportsModification:!!r.canModifyLayer},operations:{supportsQuery:-1!==i.indexOf("query")}}}set definitionExpression(e){this._setAndNotifyLayer("definitionExpression",e)}get fieldsIndex(){return new E.Z(this.fields||[])}set floorInfo(e){this._setAndNotifyLayer("floorInfo",e)}readGlobalIdFieldFromService(e,r){if((r=r.layerDefinition||r).globalIdField)return r.globalIdField;if(r.fields)for(const e of r.fields)if("esriFieldTypeGlobalID"===e.type)return e.name}get id(){const e=this._get("id");return null==e?B++:e}set id(e){this._get("id")!==e&&(!1!==this.get("layer.capabilities.exportMap.supportsDynamicLayers")?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}set labelingInfo(e){this._setAndNotifyLayer("labelingInfo",e)}writeLabelingInfo(e,r,i,t){e&&e.length&&(r.layerDefinition={drawingInfo:{labelingInfo:e.map((e=>e.write({},t)))}})}set labelsVisible(e){this._setAndNotifyLayer("labelsVisible",e)}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((r=>r.layer=e))}set listMode(e){this._set("listMode",e)}set minScale(e){this._setAndNotifyLayer("minScale",e)}readMinScale(e,r){return r.minScale||r.layerDefinition&&r.layerDefinition.minScale||0}set maxScale(e){this._setAndNotifyLayer("maxScale",e)}readMaxScale(e,r){return r.maxScale||r.layerDefinition&&r.layerDefinition.maxScale||0}readObjectIdFieldFromService(e,r){if((r=r.layerDefinition||r).objectIdField)return r.objectIdField;if(r.fields)for(const e of r.fields)if("esriFieldTypeOID"===e.type)return e.name}set opacity(e){this._setAndNotifyLayer("opacity",e)}readOpacity(e,r){const i=r.layerDefinition;return 1-.01*(null!=i.transparency?i.transparency:i.drawingInfo.transparency)}writeOpacity(e,r,i,t){r.layerDefinition={drawingInfo:{transparency:100-100*e}}}writeParent(e,r){this.parent&&this.parent!==this.layer?r.parentLayerId=(0,O.vU)(this.parent.id):r.parentLayerId=-1}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){if(e)for(const r of e.getSymbols())if((0,n.dU)(r)){U.warn("Sublayer renderer should use 2D symbols");break}this._setAndNotifyLayer("renderer",e)}get source(){return this._get("source")||new F.R({mapLayerId:this.id})}set source(e){this._setAndNotifyLayer("source",e)}set sublayers(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e)}castSublayers(e){return(0,O.se)(y.Z.ofType(t),e)}writeSublayers(e,r,i){this.get("sublayers.length")&&(r[i]=this.sublayers.map((e=>e.id)).toArray().reverse())}readTypeIdField(e,r){let i=(r=r.layerDefinition||r).typeIdField;if(i&&r.fields){i=i.toLowerCase();const e=r.fields.find((e=>e.name.toLowerCase()===i));e&&(i=e.name)}return null}get url(){var e,r;const i=null!=(e=null==(r=this.layer)?void 0:r.parsedUrl)?e:this._lastParsedUrl,t=this.source;if(!i)return null;if(this._lastParsedUrl=i,"map-layer"===(null==t?void 0:t.type))return`${i.path}/${t.mapLayerId}`;const s={layer:JSON.stringify({source:this.source})};return`${i.path}/dynamicLayer?${(0,m.B7)(s)}`}set url(e){e?this._override("url",e):this._clearOverride("url")}set visible(e){this._setAndNotifyLayer("visible",e)}writeVisible(e,r,i,t){r[i]=this.getAtOrigin("defaultVisibility","service")||e}clone(){const{store:e}=(0,I.vw)(this),r=new t;return(0,I.vw)(r).store=e.clone(R),this.commitProperty("url"),r._lastParsedUrl=this._lastParsedUrl,r}createPopupTemplate(e){return(0,N.eZ)(this,e)}createQuery(){return new M.Z({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){var e,r;if(this.hasOwnProperty("sublayers"))return null;const t=null==(e=this.layer)?void 0:e.parsedUrl,s=new(0,(await Promise.resolve().then(i.bind(i,41633))).default)({url:t.path});return t&&this.source&&("map-layer"===this.source.type?s.layerId=this.source.mapLayerId:s.dynamicDataSource=this.source),null!=this.layer.refreshInterval&&(s.refreshInterval=this.layer.refreshInterval),this.definitionExpression&&(s.definitionExpression=this.definitionExpression),this.floorInfo&&(s.floorInfo=(0,c.d9)(this.floorInfo)),this.originIdOf("labelingInfo")>2&&(s.labelingInfo=(0,c.d9)(this.labelingInfo)),this.originIdOf("labelsVisible")>0&&(s.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>0&&(s.legendEnabled=this.legendEnabled),this.originIdOf("visible")>0&&(s.visible=this.visible),this.originIdOf("minScale")>0&&(s.minScale=this.minScale),this.originIdOf("maxScale")>0&&(s.maxScale=this.maxScale),this.originIdOf("opacity")>0&&(s.opacity=this.opacity),this.originIdOf("popupTemplate")>0&&(s.popupTemplate=(0,c.d9)(this.popupTemplate)),this.originIdOf("renderer")>2&&(s.renderer=(0,c.d9)(this.renderer)),"data-layer"===(null==(r=this.source)?void 0:r.type)&&(s.dynamicDataSource=this.source.clone()),this.originIdOf("title")>0&&(s.title=this.title),"map-image"===this.layer.type&&this.layer.originIdOf("customParameters")>0&&(s.customParameters=this.layer.customParameters),"tile"===this.layer.type&&this.layer.originIdOf("customParameters")>0&&(s.customParameters=this.layer.customParameters),s}getField(e){return this.fieldsIndex.get(e)}getFeatureType(e){const{typeIdField:r,types:i}=this;if(!r||!e)return null;const t=e.attributes?e.attributes[r]:void 0;if(null==t)return null;let s=null;return i.some((e=>{const{id:r}=e;return null!=r&&(r.toString()===t.toString()&&(s=e),!!s)})),s}getFieldDomain(e,r){const i=r&&r.feature,t=this.getFeatureType(i);if(t){const r=t.domains&&t.domains[e];if(r&&"inherited"!==r.type)return r}return this._getLayerDomain(e)}async queryFeatures(e=this.createQuery(),r){var t,s,a,l;if(await this.load(),!this.get("capabilities.operations.supportsQuery"))throw new u.Z("Sublayer.queryFeatures","this layer doesn't support queries.");const[{executeQuery:o},{default:n}]=await Promise.all([Promise.resolve().then(i.bind(i,28500)),Promise.resolve().then(i.bind(i,51211))]),y=await o(this.url,M.Z.from(e),null!=(t=null==(s=this.layer)?void 0:s.spatialReference)?t:null,{...r,query:{...null==(a=this.layer)?void 0:a.customParameters,token:null==(l=this.layer)?void 0:l.apiKey}}),d=n.fromJSON(y.data);if(null!=d&&d.features)for(const e of d.features)e.sourceLayer=this;return d}toExportImageJSON(e){var r;const i={id:this.id,source:(null==(r=this.source)?void 0:r.toJSON())||{mapLayerId:this.id,type:"mapLayer"}};if(this.definitionExpression){const r=(0,h.pC)(e)?(0,V.Hp)(e,this):this.definitionExpression;i.definitionExpression=r}else(0,h.pC)(e)&&(i.definitionExpression=e);const t=["renderer","labelingInfo","opacity","labelsVisible"].reduce(((e,r)=>(e[r]=this.originIdOf(r),e)),{}),s=Object.keys(t).some((e=>t[e]>2));if(s){const e=i.drawingInfo={};t.renderer>2&&(e.renderer=this.renderer?this.renderer.toJSON():null),t.labelsVisible>2&&(e.showLabels=this.labelsVisible),this.labelsVisible&&t.labelingInfo>2&&(e.labelingInfo=this.labelingInfo?this.labelingInfo.map((e=>e.write({},{origin:"service",layer:this.layer}))):null,e.showLabels=!0),t.opacity>2&&(e.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(e.renderer)}return i}_assignDefaultSymbolColors(e){this._forEachSimpleMarkerSymbols(e,(e=>{e.color||"esriSMSX"!==e.style&&"esriSMSCross"!==e.style||(e.outline&&e.outline.color?e.color=e.outline.color:e.color=[0,0,0,0])}))}_forEachSimpleMarkerSymbols(e,r){if(e){const i="uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:[];for(const e of i)Z(e.symbol)&&r(e.symbol);"symbol"in e&&Z(e.symbol)&&r(e.symbol),"defaultSymbol"in e&&Z(e.defaultSymbol)&&r(e.defaultSymbol)}}_setAndNotifyLayer(e,r){const i=this.layer,t=this._get(e);let s,a;switch(e){case"definitionExpression":case"floorInfo":s="supportsSublayerDefinitionExpression";case"minScale":case"maxScale":case"visible":s="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":s="supportsDynamicLayers",a="supportsModification"}const l=(0,I.vw)(this).getDefaultOrigin();if("service"!==l){if(s&&!1===this.get(`layer.capabilities.exportMap.${s}`))return void this._logLockedError(e,`capability not available 'layer.capabilities.exportMap.${s}'`);if(a&&!1===this.get(`capabilities.exportMap.${a}`))return void this._logLockedError(e,`capability not available 'capabilities.exportMap.${a}'`)}"source"!==e||"not-loaded"===this.loadStatus?(this._set(e,r),"service"!==l&&t!==r&&i&&i.emit&&i.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(e,r){r&&(r.forEach((e=>{e.parent=null,e.layer=null})),this.handles.removeAll()),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer})),this.handles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this.layer})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null})),e.on("before-changes",(e=>{const r=this.get("layer.capabilities.exportMap.supportsSublayersChanges");null==r||r||(U.error(new u.Z("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),e.preventDefault())}))]))}_logLockedError(e,r){U.error(new u.Z("sublayer:locked",`Property '${e}' can't be changed on Sublayer from the layer '${this.layer.id}'`,{reason:r,sublayer:this,layer:this.layer}))}_getLayerDomain(e){const r=this.fieldsIndex.get(e);return r?r.domain:null}};Q.test={isMapImageLayerOverridePolicy:e=>e===$||e===k,isTileImageLayerOverridePolicy:e=>e===J},(0,s._)([(0,v.Cb)({readOnly:!0})],Q.prototype,"capabilities",void 0),(0,s._)([(0,S.r)("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],Q.prototype,"readCapabilities",null),(0,s._)([(0,v.Cb)({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{overridePolicy:k}}})],Q.prototype,"definitionExpression",null),(0,s._)([(0,v.Cb)({type:[D.Z],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],Q.prototype,"fields",void 0),(0,s._)([(0,v.Cb)({readOnly:!0})],Q.prototype,"fieldsIndex",null),(0,s._)([(0,v.Cb)({type:j.Z,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:k},origins:{"web-scene":{read:!1,write:!1}}}})],Q.prototype,"floorInfo",null),(0,s._)([(0,v.Cb)({type:A.Z,json:{read:{source:"layerDefinition.extent"}}})],Q.prototype,"fullExtent",void 0),(0,s._)([(0,v.Cb)({type:String})],Q.prototype,"globalIdField",void 0),(0,s._)([(0,S.r)("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],Q.prototype,"readGlobalIdFieldFromService",null),(0,s._)([(0,v.Cb)({type:O.z8,json:{write:{ignoreOrigin:!0}}})],Q.prototype,"id",null),(0,s._)([(0,v.Cb)({value:null,type:[P.Z],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:$}}})],Q.prototype,"labelingInfo",null),(0,s._)([(0,x.c)("labelingInfo")],Q.prototype,"writeLabelingInfo",null),(0,s._)([(0,v.Cb)({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:$}}})],Q.prototype,"labelsVisible",null),(0,s._)([(0,v.Cb)({value:null})],Q.prototype,"layer",null),(0,s._)([(0,v.Cb)({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:q}}})],Q.prototype,"legendEnabled",void 0),(0,s._)([(0,v.Cb)({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],Q.prototype,"listMode",null),(0,s._)([(0,v.Cb)({type:Number,value:0,json:{write:{overridePolicy:$}}})],Q.prototype,"minScale",null),(0,s._)([(0,S.r)("minScale",["minScale","layerDefinition.minScale"])],Q.prototype,"readMinScale",null),(0,s._)([(0,v.Cb)({type:Number,value:0,json:{write:{overridePolicy:$}}})],Q.prototype,"maxScale",null),(0,s._)([(0,S.r)("maxScale",["maxScale","layerDefinition.maxScale"])],Q.prototype,"readMaxScale",null),(0,s._)([(0,v.Cb)({type:String})],Q.prototype,"objectIdField",void 0),(0,s._)([(0,S.r)("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],Q.prototype,"readObjectIdFieldFromService",null),(0,s._)([(0,v.Cb)({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:$}}})],Q.prototype,"opacity",null),(0,s._)([(0,S.r)("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],Q.prototype,"readOpacity",null),(0,s._)([(0,x.c)("opacity")],Q.prototype,"writeOpacity",null),(0,s._)([(0,v.Cb)({json:{type:O.z8,write:{target:"parentLayerId",allowNull:!0,overridePolicy:$}}})],Q.prototype,"parent",void 0),(0,s._)([(0,x.c)("parent")],Q.prototype,"writeParent",null),(0,s._)([(0,v.Cb)({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(e,r)=>!r.disablePopup},write:{target:"disablePopup",overridePolicy:q,writer(e,r,i){r[i]=!e}}}})],Q.prototype,"popupEnabled",void 0),(0,s._)([(0,v.Cb)({type:a.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:q}}})],Q.prototype,"popupTemplate",void 0),(0,s._)([(0,v.Cb)({readOnly:!0})],Q.prototype,"defaultPopupTemplate",null),(0,s._)([(0,v.Cb)({types:l.A,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:$},origins:{"web-scene":{types:l.o,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:$}}}}})],Q.prototype,"renderer",null),(0,s._)([(0,v.Cb)({types:{key:"type",base:null,typeMap:{"data-layer":T.n,"map-layer":F.R}},cast(e){if(e){if("mapLayerId"in e)return(0,O.TJ)(F.R,e);if("dataSource"in e)return(0,O.TJ)(T.n,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:$}}})],Q.prototype,"source",null),(0,s._)([(0,v.Cb)()],Q.prototype,"sourceJSON",void 0),(0,s._)([(0,v.Cb)({value:null,json:{type:[O.z8],write:{target:"subLayerIds",allowNull:!0,overridePolicy:$}}})],Q.prototype,"sublayers",null),(0,s._)([(0,w.p)("sublayers")],Q.prototype,"castSublayers",null),(0,s._)([(0,x.c)("sublayers")],Q.prototype,"writeSublayers",null),(0,s._)([(0,v.Cb)({type:String,json:{read:{source:"name"},write:{target:"name",allowNull:!0,overridePolicy:q}}})],Q.prototype,"title",void 0),(0,s._)([(0,v.Cb)({type:String})],Q.prototype,"typeIdField",void 0),(0,s._)([(0,S.r)("typeIdField",["layerDefinition.typeIdField"])],Q.prototype,"readTypeIdField",null),(0,s._)([(0,v.Cb)({type:[C.Z],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],Q.prototype,"types",void 0),(0,s._)([(0,v.Cb)({type:String,json:{read:{source:"layerUrl"},write:{target:"layerUrl",overridePolicy:J}}})],Q.prototype,"url",null),(0,s._)([(0,v.Cb)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:$}}})],Q.prototype,"visible",null),(0,s._)([(0,x.c)("visible")],Q.prototype,"writeVisible",null),Q=t=(0,s._)([(0,_.j)("esri.layers.support.Sublayer")],Q);var G=Q},93698:(e,r,i)=>{function t(e,r,i){const t=r.flatten((({sublayers:e})=>e)).length;return t!==e.length||!!e.some((e=>e.originIdOf("minScale")>i||e.originIdOf("maxScale")>i||e.originIdOf("renderer")>i||e.originIdOf("labelingInfo")>i||e.originIdOf("opacity")>i||e.originIdOf("labelsVisible")>i||e.originIdOf("source")>i))||!a(e,r)}function s(e,r,i){return!!e.some((e=>{const r=e.source;return!(!r||"map-layer"===r.type&&r.mapLayerId===e.id&&(!r.gdbVersion||r.gdbVersion===i.gdbVersion))||e.originIdOf("renderer")>2||e.originIdOf("labelingInfo")>2||e.originIdOf("opacity")>2||e.originIdOf("labelsVisible")>2}))||!a(e,r)}function a(e,r){if(!e||!e.length)return!0;const i=r.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).map((e=>e.id)).toArray();if(e.length>i.length)return!1;let t=0;const s=i.length;for(const{id:r}of e){for(;t<s&&i[t]!==r;)t++;if(t>=s)return!1}return!0}function l(e){return!!e&&e.some((e=>null!=e.minScale||e.layerDefinition&&null!=e.layerDefinition.minScale))}i.d(r,{FN:()=>s,ac:()=>l,QV:()=>t})}}]);