"use strict";(self.webpackChunkarcgis_rm=self.webpackChunkarcgis_rm||[]).push([[9955],{59955:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var i=n(66341),s=n(70375),r=n(61681),o=n(53736),u=n(35925),l=n(12065),a=n(4811),d=n(66069),c=n(4741),p=n(61957),y=n(40400),f=n(24366),h=n(28790),g=n(86349),m=n(17095);const b={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class I{constructor(){this._queryEngine=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){const t=[];await this._checkProjection(e.spatialReference);let n=null;e.url&&(n=(await(0,i.default)(e.url,{responseType:"json"})).data,await(0,p.O3)(n));const o=(0,p.my)(n,{geometryType:e.geometryType}),f=e.fields||o.fields||[],I=null!=e.hasZ?e.hasZ:o.hasZ,F=o.geometryType,_=e.objectIdField||("number"===o.objectIdFieldType?o.objectIdFieldName:"OBJECTID")||"OBJECTID",w=e.spatialReference||u.Zn;let E=e.timeInfo;if("string"===o.objectIdFieldType&&t.push({name:"geojson-layer:unsupported-id-type",message:"Feature ids are of type string and can't be honored."}),f===o.fields&&o.unknownFields.length>0&&t.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:o.unknownFields}}),_){let e=null;f.some((t=>t.name===_&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):f.unshift({alias:_,name:_,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const e of f){if(null==e.name&&(e.name=e.alias),null==e.alias&&(e.alias=e.name),!e.name)throw new s.Z("geojson-layer:invalid-field-name","field name is missing",{field:e});if(e.name===_&&(e.type="esriFieldTypeOID"),-1===g.v.jsonValues.indexOf(e.type))throw new s.Z("geojson-layer:invalid-field-type",`invalid type for field "${e.name}"`,{field:e})}const T={};this._requiredFields=[];for(const e of f)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable;const t=(0,m.os)(e);e.nullable||void 0!==t?T[e.name]=t:this._requiredFields.push(e)}if(this._fieldsIndex=new h.Z(f),E){if(E.startTimeField){const e=this._fieldsIndex.get(E.startTimeField);e?(E.startTimeField=e.name,e.type="esriFieldTypeDate"):E.startTimeField=null}if(E.endTimeField){const e=this._fieldsIndex.get(E.endTimeField);e?(E.endTimeField=e.name,e.type="esriFieldTypeDate"):E.endTimeField=null}if(E.trackIdField){const e=this._fieldsIndex.get(E.trackIdField);e?E.trackIdField=e.name:(E.trackIdField=null,t.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:E}}))}E.startTimeField||E.endTimeField||(t.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:E}}),E=null)}const j=F?(0,y.bU)(F):null,q={warnings:t,featureErrors:[],layerDefinition:{...b,drawingInfo:j,templates:(0,y.Hq)(T),extent:null,geometryType:F,objectIdField:_,fields:f,hasZ:!!I,timeInfo:E}};this._queryEngine=new c.Z({fields:f,geometryType:F,hasM:!1,hasZ:I,objectIdField:_,spatialReference:w,timeInfo:E,featureStore:new a.Z({geometryType:F,hasM:!1,hasZ:I}),cacheSpatialQueries:!0}),this._createDefaultAttributes=(0,y.Dm)(T,_),this._nextObjectId=o.maxObjectId+1;const S=(0,p.lG)(n,{geometryType:F,hasZ:I,objectIdField:"number"===o.objectIdFieldType?_:null});if(!(0,u.fS)(w,u.Zn))for(const e of S)(0,r.pC)(e.geometry)&&(e.geometry=(0,l.GH)((0,d.iV)((0,l.di)(e.geometry,F,I,!1),u.Zn,w)));return this._loadInitialFeatures(q,S),q}async applyEdits(e){const{spatialReference:t,geometryType:n}=this._queryEngine;return await Promise.all([(0,f.b)(t,n),(0,d._W)(e.adds,t),(0,d._W)(e.updates,t)]),this._applyEdits(e)}queryFeatures(e={},t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e={},t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e={},t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e={},t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_loadInitialFeatures(e,t){const{featureStore:n,objectIdField:i}=this._queryEngine,s=[];for(const n of t){const t=this._createDefaultAttributes(),r=(0,f.O0)(this._fieldsIndex,t,n.attributes,this._requiredFields,!0,e.warnings);r?e.featureErrors.push(r):(this._assignObjectId(t,n.attributes,!0),n.attributes=t,n.objectId=t[i],s.push(n))}if(n.addMany(s),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:n}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,n]}return e}_applyEdits(e){const{adds:t,updates:n,deletes:i}=e,s={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(s,t),n&&n.length&&this._applyUpdateEdits(s,n),i&&i.length){for(const e of i)s.deleteResults.push((0,f.d1)(e));this._queryEngine.featureStore.removeManyById(i)}return{fullExtent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:s}}_applyAddEdits(e,t){const{addResults:n}=e,{geometryType:i,hasM:s,hasZ:u,objectIdField:a,spatialReference:c,featureStore:p}=this._queryEngine,y=[];for(const s of t){if(s.geometry&&i!==(0,o.Ji)(s.geometry)){n.push((0,f.av)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),u=(0,f.O0)(this._fieldsIndex,t,s.attributes,this._requiredFields);if(u)n.push(u);else{if(this._assignObjectId(t,s.attributes),s.attributes=t,null!=s.uid){const t=s.attributes[a];e.uidToObjectId[s.uid]=t}(0,r.pC)(s.geometry)&&(s.geometry=(0,d.iV)((0,f.og)(s.geometry,c),s.geometry.spatialReference,c)),y.push(s),n.push((0,f.d1)(s.attributes[a]))}}p.addMany((0,l.Yn)([],y,i,u,s,a))}_applyUpdateEdits({updateResults:e},t){const{geometryType:n,hasM:i,hasZ:s,objectIdField:u,spatialReference:a,featureStore:c}=this._queryEngine;for(const p of t){const{attributes:t,geometry:y}=p,h=t&&t[u];if(null==h){e.push((0,f.av)(`Identifier field ${u} missing`));continue}if(!c.has(h)){e.push((0,f.av)(`Feature with object id ${h} missing`));continue}const g=(0,l.EI)(c.getFeature(h),n,s,i);if((0,r.pC)(y)){if(n!==(0,o.Ji)(y)){e.push((0,f.av)("Incorrect geometry type."));continue}g.geometry=(0,d.iV)((0,f.og)(y,a),y.spatialReference,a)}if(t){const n=(0,f.O0)(this._fieldsIndex,g.attributes,t,this._requiredFields);if(n){e.push(n);continue}}c.add((0,l.XA)(g,n,s,i,u)),e.push((0,f.d1)(h))}}_assignObjectId(e,t,n=!1){const i=this._queryEngine.objectIdField;n&&isFinite(t[i])?e[i]=t[i]:e[i]=this._nextObjectId++}async _checkProjection(e){try{await(0,d._W)(u.Zn,e)}catch{throw new s.Z("geojson-layer","Projection not supported")}}}},61957:(e,t,n)=>{n.d(t,{lG:()=>w,q9:()=>u,my:()=>_,O3:()=>F});var i=n(70375),s=n(59958),r=n(15540);const o={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function u(e){return o[e]}function*l(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*a(e){if(!e)return null;switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function d(e){for(const t of e)if(t.length>2)return!0;return!1}function c(e){let t=0;for(let n=0;n<e.length;n++){const i=e[n],s=e[(n+1)%e.length];t+=i[0]*s[1]-s[0]*i[1]}return t<=0}function p(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function y(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return g(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){for(const i of t.coordinates)g(e,i,n);return e}(e,t,n);case"MultiPolygon":return function(e,t,n){for(const i of t.coordinates){f(e,i[0],n);for(let t=1;t<i.length;t++)h(e,i[t],n)}return e}(e,t,n);case"Point":return function(e,t,n){return b(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){const i=t.coordinates;f(e,i[0],n);for(let t=1;t<i.length;t++)h(e,i[t],n);return e}(e,t,n)}}function f(e,t,n){const i=p(t);!function(e){return!c(e)}(i)?g(e,i,n):m(e,i,n)}function h(e,t,n){const i=p(t);!function(e){return c(e)}(i)?g(e,i,n):m(e,i,n)}function g(e,t,n){for(const i of t)b(e,i,n);e.lengths.push(t.length)}function m(e,t,n){for(let i=t.length-1;i>=0;i--)b(e,t[i],n);e.lengths.push(t.length)}function b(e,t,n){const[i,s,r]=t;e.coords.push(i,s),n.hasZ&&e.coords.push(r||0)}function I(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function F(e){if(!e)throw new i.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new i.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:t}=e;if(!t)return;const n="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,s=new RegExp(".*(CRS84H?|4326)$","i");if(!n||!s.test(n))throw new i.Z("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}function _(e,t={}){const n=[],i=new Set,s=new Set;let r,o=!1,c=Number.NEGATIVE_INFINITY,p=null,y=!1,{geometryType:f=null}=t,h=!1;for(const t of l(e)){const{geometry:e,properties:l,id:g}=t;if((!e||(f||(f=u(e.type)),u(e.type)===f))&&(o||(o=d(a(e))),y||(y=null!=g,y&&(r=typeof g,"number"===r&&(p=Object.keys(l).filter((e=>l[e]===g))))),y&&"number"===r&&null!=g&&(c=Math.max(c,g),p.length>1?p=p.filter((e=>l[e]===g)):1===p.length&&(p=l[p[0]]===g?p:[])),!h&&l)){let e=!0;for(const t in l){if(i.has(t))continue;const r=l[t];if(null==r){e=!1,s.add(t);continue}const o=I(r);"unknown"!==o?(s.delete(t),i.add(t),n.push({name:t,alias:t,type:o})):s.add(t)}h=e}}const g=p&&1===p.length&&p[0]||null;if(g)for(const e of n)e.name===g&&(e.type="esriFieldTypeOID");return{fields:n,geometryType:f,hasZ:o,maxObjectId:Math.max(0,c),objectIdFieldName:g,objectIdFieldType:r,unknownFields:Array.from(s)}}function w(e,t){return Array.from(function*(e,t={}){const{geometryType:n,objectIdField:i}=t;for(const l of e){var o;const{geometry:e,properties:a,id:d}=l;if(e&&u(e.type)!==n)continue;const c=a||{};let p=null!=(o=c[i])?o:null;i&&null!=d&&!c[i]&&(c[i]=p=d);const f=new s.ZP(e?y(new r.Z,e,t):null,c,null,p);yield f}}(l(e),t))}},40400:(e,t,n)=>{n.d(t,{MS:()=>d,Dm:()=>l,Hq:()=>a,bU:()=>u});var i=n(39994),s=n(67134),r=n(10287),o=n(86094);function u(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o.I4:"esriGeometryPolyline"===e?o.ET:o.lF}}}function l(e,t){if((0,i.Z)("csp-restrictions"))return()=>({[t]:null,...e});try{let n=`this.${t} = null;`;for(const t in e)n+=`this${t.indexOf(".")?`["${t}"]`:`.${t}`} = ${JSON.stringify(e[t])};`;const i=new Function(n);return()=>new i}catch(n){return()=>({[t]:null,...e})}}function a(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(e)}}]}function d(e,t){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:r.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},24366:(e,t,n)=>{n.d(t,{av:()=>u,d1:()=>a,b:()=>h,O0:()=>c,og:()=>f});var i=n(35925),s=n(17095);class r{constructor(){this.code=null,this.description=null}}class o{constructor(e){this.error=new r,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function u(e){return new o(e)}class l{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function a(e){return new l(e)}const d=new Set;function c(e,t,n,i,r=!1,o){d.clear();for(const i in n){const l=e.get(i);if(!l)continue;const a=n[i],c=p(l,a);if(c!==a&&o&&o.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:l,originalValue:a,sanitizedValue:c}}),d.add(l.name),l&&(r||l.editable)){const e=(0,s.Qc)(l,c);if(e)return u((0,s.vP)(e,l,c));t[l.name]=c}}if(i)for(const e of i)if(!d.has(e.name))return u(`missing required field "${e.name}"`);return null}function p(e,t){let n=t;return"string"==typeof t&&(0,s.H7)(e)?n=parseFloat(t):null!=t&&(0,s.qN)(e)&&"string"!=typeof t&&(n=String(t)),(0,s.Pz)(n)}let y;function f(e,t){if(!e||!(0,i.JY)(t))return e;if("rings"in e||"paths"in e){if(!y)throw new TypeError("geometry engine not loaded");return y.simplify(t,e)}return e}async function h(e,t){!(0,i.JY)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return y||(y=await Promise.all([n.e(9067),n.e(8923)]).then(n.bind(n,8923)),y)}()}}}]);