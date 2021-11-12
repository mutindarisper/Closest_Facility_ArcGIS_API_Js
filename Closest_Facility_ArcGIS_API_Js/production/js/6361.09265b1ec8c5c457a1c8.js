"use strict";(self.webpackChunkarcgis_rm=self.webpackChunkarcgis_rm||[]).push([[6361],{66361:(e,a,r)=>{r.r(a),r.d(a,{fromUrl:()=>u});var t=r(66341),n=r(70375),l=r(61681),s=r(3466),i=r(20692),y=r(92557);async function u(e){var a;const t=null==(a=e.properties)?void 0:a.customParameters,s=await async function(e,a){let r=(0,i.Qc)(e);if((0,l.Wi)(r)&&(r=await d(e,a)),(0,l.Wi)(r))throw new n.Z("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:t,sublayer:s}=r;let u;const o={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(t){case"MapServer":u=null!=s?"FeatureLayer":async function(e,a){return(await h(e,a)).tileInfo}(e,a).then((e=>e?"TileLayer":"MapImageLayer"));break;case"ImageServer":u=h(e,a).then((e=>{const a=e.tileInfo&&e.tileInfo.format;return e.tileInfo?!a||"LERC"!==a.toUpperCase()||e.cacheType&&"elevation"!==e.cacheType.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"}));break;case"SceneServer":u=h(r.url.path,a).then((e=>{const a={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};if(e&&Array.isArray(e.layers)&&e.layers.length>0){const r=e.layers[0].layerType;if(null!=a[r])return a[r]}return"SceneLayer"}));break;default:u=o[t]}const c="FeatureServer"===t,b={parsedUrl:r,Constructor:null,layerOrTableId:c?s:null,sublayerIds:null,tableIds:null},w=await u;if({FeatureLayer:!0,SceneLayer:!0}[w]&&null==s){const r=await f(e,t,a);if(c&&(b.sublayerInfos=r.layerInfos,b.tableInfos=r.tableInfos),1!==r.layerIds.length+r.tableIds.length)b.sublayerIds=r.layerIds,b.tableIds=r.tableIds;else if(c){var p,L;b.layerOrTableId=null!=(p=r.layerIds[0])?p:r.tableIds[0],b.sourceJSON=null!=(L=r.layerInfos[0])?L:r.tableInfos[0]}}return b.Constructor=await async function(e){return(0,y.T[e])()}(w),b}(e.url,t),u={...e.properties,url:e.url};if(!s.sublayerIds)return null!=s.layerOrTableId&&(u.layerId=s.layerOrTableId,u.sourceJSON=s.sourceJSON),new s.Constructor(u);const c=new(0,(await r.e(6753).then(r.bind(r,56753))).default)({title:s.parsedUrl.title});return function(e,a,r){function t(e,t){const n={...r,layerId:e,sublayerTitleMode:"service-name"};return(0,l.pC)(t)&&(n.sourceJSON=t),new a.Constructor(n)}a.sublayerIds.forEach((r=>{const n=t(r,o(a.sublayerInfos,r));e.add(n)})),a.tableIds.forEach((r=>{const n=t(r,o(a.tableInfos,r));e.tables.add(n)}))}(c,s,u),c}function o(e,a){return e?e.find((e=>e.id===a)):null}async function d(e,a){var r;const t=await h(e,a);let n=null,y=null;const u=t.type;if("Feature Layer"===u||"Table"===u?(n="FeatureServer",y=t.id):"indexedVector"===u?n="VectorTileServer":t.hasOwnProperty("mapName")?n="MapServer":t.hasOwnProperty("bandCount")&&t.hasOwnProperty("pixelSizeX")?n="ImageServer":t.hasOwnProperty("maxRecordCount")&&t.hasOwnProperty("allowGeometryUpdates")?n="FeatureServer":t.hasOwnProperty("streamUrls")?n="StreamServer":c(t)?(n="SceneServer",y=t.id):t.hasOwnProperty("layers")&&c(null==(r=t.layers)?void 0:r[0])&&(n="SceneServer"),!n)return null;const o=null!=y?(0,i.DR)(e):null;return{title:(0,l.pC)(o)&&t.name||(0,s.vt)(e),serverType:n,sublayer:y,url:{path:(0,l.pC)(o)?o.serviceUrl:(0,s.mN)(e).path}}}function c(e){return(null==e?void 0:e.hasOwnProperty("store"))&&e.hasOwnProperty("id")&&"number"==typeof e.id}async function f(e,a,r){var t,n;let l,s=!1;if("FeatureServer"===a){const a=await async function(e,a){var r,t;let n=await h(e,a);n=n||{},n.layers=(null==(r=n.layers)?void 0:r.filter(b))||[];const l={serviceJSON:n};if(n.currentVersion<10.5)return l;const s=await h(e+"/layers",a);return l.layersJSON={layers:(null==s||null==(t=s.layers)?void 0:t.filter(b))||[],tables:(null==s?void 0:s.tables)||[]},l}(e,r);s=!!a.layersJSON,l=a.layersJSON||a.serviceJSON}else l=await h(e,r);const i=null==(t=l)?void 0:t.layers,y=null==(n=l)?void 0:n.tables;return{layerIds:(null==i?void 0:i.map((e=>e.id)).reverse())||[],tableIds:(null==y?void 0:y.map((e=>e.id)).reverse())||[],layerInfos:s?i:[],tableInfos:s?y:[]}}function b(e){return!e.type||"Feature Layer"===e.type}async function h(e,a){return(await(0,t.default)(e,{responseType:"json",query:{f:"json",...a}})).data}},92557:(e,a,r)=>{r.d(a,{T:()=>t});const t={BingMapsLayer:async()=>(await r.e(1968).then(r.bind(r,31968))).default,BuildingSceneLayer:async()=>(await Promise.all([r.e(2242),r.e(9871)]).then(r.bind(r,59871))).default,CSVLayer:async()=>(await r.e(9849).then(r.bind(r,89849))).default,ElevationLayer:async()=>(await r.e(5171).then(r.bind(r,45171))).default,FeatureLayer:async()=>(await Promise.resolve().then(r.bind(r,41633))).default,GroupLayer:async()=>(await r.e(6753).then(r.bind(r,56753))).default,GeoRSSLayer:async()=>(await r.e(4417).then(r.bind(r,84417))).default,ImageryLayer:async()=>(await Promise.all([r.e(1329),r.e(6493),r.e(5144),r.e(2513)]).then(r.bind(r,72513))).default,ImageryTileLayer:async()=>(await Promise.all([r.e(1329),r.e(6493),r.e(5144),r.e(7658)]).then(r.bind(r,17658))).default,IntegratedMeshLayer:async()=>(await Promise.all([r.e(2242),r.e(4110)]).then(r.bind(r,34110))).default,KMLLayer:async()=>(await r.e(693).then(r.bind(r,80693))).default,MapImageLayer:async()=>(await Promise.all([r.e(7153),r.e(2045)]).then(r.bind(r,69420))).default,MapNotesLayer:async()=>(await r.e(8414).then(r.bind(r,78414))).default,OGCFeatureLayer:async()=>(await r.e(3963).then(r.bind(r,53963))).default,OpenStreetMapLayer:async()=>(await r.e(3206).then(r.bind(r,81388))).default,PointCloudLayer:async()=>(await r.e(3108).then(r.bind(r,73108))).default,RouteLayer:async()=>(await r.e(1500).then(r.bind(r,71500))).default,SceneLayer:async()=>(await Promise.all([r.e(2242),r.e(4366)]).then(r.bind(r,74566))).default,StreamLayer:async()=>(await r.e(5609).then(r.bind(r,75609))).default,TileLayer:async()=>(await Promise.all([r.e(7153),r.e(6889)]).then(r.bind(r,75369))).default,UnknownLayer:async()=>(await r.e(81).then(r.bind(r,40081))).default,UnsupportedLayer:async()=>(await r.e(4864).then(r.bind(r,74864))).default,VectorTileLayer:async()=>(await Promise.all([r.e(3043),r.e(9429)]).then(r.bind(r,16690))).default,VoxelLayer:async()=>(await r.e(1963).then(r.bind(r,11963))).default,WebTileLayer:async()=>(await r.e(9859).then(r.bind(r,89859))).default,WFSLayer:async()=>(await r.e(4420).then(r.bind(r,84420))).default,WMSLayer:async()=>(await r.e(1936).then(r.bind(r,61936))).default,WMTSLayer:async()=>(await r.e(9862).then(r.bind(r,69862))).default}}}]);