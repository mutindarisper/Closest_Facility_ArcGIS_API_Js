"use strict";(self.webpackChunkarcgis_rm=self.webpackChunkarcgis_rm||[]).push([[5007],{15007:(e,t,n)=>{n.r(t),n.d(t,{registerFunctions:()=>C});var r=n(58780),a=n(19249),i=n(94634),l=n(33455),s=n(5345),o=n(94837),u=n(45712),f=n(62700),c=n(2441),d=n(81273),p=n(40581),m=n(20155),y=n(7429),h=n(68673),g=n(62294),F=n(45573),I=n(78668),D=n(3362),E=n(41633),w=n(12512);function b(e,t,n){const r=e.getVariables();if(r.length>0){const a=[];for(let e=0;e<r.length;e++){const i={name:r[e]};a.push(t.evaluateIdentifier(n,i))}return(0,I.$6)(a).then((t=>{const n={};for(let e=0;e<r.length;e++)n[r[e]]=t[e];return e.parameters=n,e}))}return(0,I.DB)(e)}function N(e,t,n=null){for(const n in e)if(n.toLowerCase()===t.toLowerCase())return e[n];return n}function x(e){if(null===e)return null;const t={type:N(e,"type",""),name:N(e,"name","")};if("range"===t.type)t.range=N(e,"range",[]);else{t.codedValues=[];for(const n of N(e,"codedValues",[]))t.codedValues.push({name:N(n,"name",""),code:N(n,"code",null)})}return t}function A(e){if(null===e)return null;const t={},n=N(e,"wkt",null);null!==n&&(t.wkt=n);const r=N(e,"wkid",null);return null!==r&&(t.wkid=r),t}function S(e){if(null===e)return null;const t={hasZ:N(e,"hasz",!1),hasM:N(e,"hasm",!1)},n=N(e,"spatialreference",null);n&&(t.spatialReference=A(n));const r=N(e,"x",null);if(null!==r)return t.x=r,t.y=N(e,"y",null),t;const a=N(e,"rings",null);if(null!==a)return t.rings=a,t;const i=N(e,"paths",null);if(null!==i)return t.paths=i,t;const l=N(e,"points",null);if(null!==l)return t.points=l,t;for(const n of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const r=N(e,n,null);null!==r&&(t[n]=r)}return t}function C(e){"async"===e.mode&&(e.functions.getuser=function(t,n){return e.standardFunctionAsync(t,n,((e,n,i)=>{(0,o.p)(i,1,2);let l=(0,o.C)(i[1],""),u=!0===l;if(l=!0===l||!1===l?"":(0,o.d)(l),i[0]instanceof r.Z){let e=null;return t.services&&t.services.portal&&(e=t.services.portal),e=(0,s.getPortal)(i[0],e),(0,s.lookupUser)(e,l,u).then((e=>{if(e){const t=JSON.parse(JSON.stringify(e));for(const e of["lastLogin","created","modified"])void 0!==t[e]&&null!==t[e]&&(t[e]=new Date(t[e]));return a.Z.convertObjectToArcadeDictionary(t)}return null}))}let f=null;if((0,o.o)(i[0])&&(f=i[0]),f)return u=!1,l?null:f.load().then((()=>f.getOwningSystemUrl())).then((e=>{if(!e)return l?null:f.getIdentityUser().then((e=>e?a.Z.convertObjectToArcadeDictionary({username:e}):null));let n=null;return t.services&&t.services.portal&&(n=t.services.portal),n=(0,s.getPortal)(new r.Z(e),n),(0,s.lookupUser)(n,l,u).then((e=>{if(e){const t=JSON.parse(JSON.stringify(e));for(const e of["lastLogin","created","modified"])void 0!==t[e]&&null!==t[e]&&(t[e]=new Date(t[e]));return a.Z.convertObjectToArcadeDictionary(t)}return null}))}));throw new Error("Invalid Parameter")}))},e.signatures.push({name:"getuser",min:"1",max:"2"}),e.functions.featuresetbyid=function(t,n){return e.standardFunctionAsync(t,n,((e,t,n)=>{if((0,o.p)(n,2,4),n[0]instanceof l.Z){const e=(0,o.d)(n[1]);let t=(0,o.C)(n[2],null);const r=(0,o.u)((0,o.C)(n[3],!0));if(null===t&&(t=["*"]),!1===(0,o.a)(t))throw new Error("Invalid Parameter");return n[0].featureSetById(e,r,t)}throw new Error("Invalid Parameter")}))},e.signatures.push({name:"featuresetbyid",min:"2",max:"4"}),e.functions.getfeatureset=function(t,n){return e.standardFunctionAsync(t,n,((e,n,r)=>{if((0,o.p)(r,1,2),r[0]instanceof i.Z){let e=(0,o.C)(r[1],"datasource");return null===e&&(e="datasource"),e=(0,o.d)(e).toLowerCase(),(0,s.convertToFeatureSet)(r[0]._layer,e,t.lrucache,t.interceptor,t.spatialReference)}throw new Error("Invalid Parameter")}))},e.signatures.push({name:"getfeatureset",min:"1",max:"2"}),e.functions.featuresetbyportalitem=function(t,n){return e.standardFunctionAsync(t,n,((e,n,a)=>{if((0,o.p)(a,2,5),null===a[0])throw new Error("Portal is required");if(a[0]instanceof r.Z){const e=(0,o.d)(a[1]),n=(0,o.d)(a[2]);let r=(0,o.C)(a[3],null);const i=(0,o.u)((0,o.C)(a[4],!0));if(null===r&&(r=["*"]),!1===(0,o.a)(r))throw new Error("Invalid Parameter");let l=null;return t.services&&t.services.portal&&(l=t.services.portal),l=(0,s.getPortal)(a[0],l),(0,s.constructFeatureSetFromPortalItem)(e,n,t.spatialReference,r,i,l,t.lrucache,t.interceptor)}if(!1===(0,o.f)(a[0]))throw new Error("Portal is required");const i=(0,o.d)(a[0]),l=(0,o.d)(a[1]);let u=(0,o.C)(a[2],null);const f=(0,o.u)((0,o.C)(a[3],!0));if(null===u&&(u=["*"]),!1===(0,o.a)(u))throw new Error("Invalid Parameter");if(t.services&&t.services.portal)return(0,s.constructFeatureSetFromPortalItem)(i,l,t.spatialReference,u,f,t.services.portal,t.lrucache,t.interceptor);throw new Error("Portal is required")}))},e.signatures.push({name:"featuresetbyportalitem",min:"2",max:"5"}),e.functions.featuresetbyname=function(t,n){return e.standardFunctionAsync(t,n,((e,t,n)=>{if((0,o.p)(n,2,4),n[0]instanceof l.Z){const e=(0,o.d)(n[1]);let t=(0,o.C)(n[2],null);const r=(0,o.u)((0,o.C)(n[3],!0));if(null===t&&(t=["*"]),!1===(0,o.a)(t))throw new Error("Invalid Parameter");return n[0].featureSetByName(e,r,t)}throw new Error("Invalid Parameter")}))},e.signatures.push({name:"featuresetbyname",min:"2",max:"4"}),e.functions.featureset=function(t,n){return e.standardFunction(t,n,((e,n,r)=>{(0,o.p)(r,1,1);let i=r[0];const l={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if((0,o.f)(i))i=JSON.parse(i),void 0!==i.layerDefinition?(l.layerDefinition=i.layerDefinition,l.featureSet=i.featureSet,i.layerDefinition.spatialReference&&(l.layerDefinition.spatialReference=i.layerDefinition.spatialReference)):(l.featureSet.features=i.features,l.featureSet.geometryType=i.geometryType,l.layerDefinition.geometryType=l.featureSet.geometryType,l.layerDefinition.objectIdField=i.objectIdFieldName,l.layerDefinition.typeIdField=i.typeIdFieldName,l.layerDefinition.globalIdField=i.globalIdFieldName,l.layerDefinition.fields=i.fields,i.spatialReference&&(l.layerDefinition.spatialReference=i.spatialReference));else{if(!(r[0]instanceof a.Z))throw new Error("Invalid Parameter");{i=JSON.parse(r[0].castToText());const e=N(i,"layerdefinition");if(null!==e){l.layerDefinition.geometryType=N(e,"geometrytype",""),l.featureSet.geometryType=l.layerDefinition.geometryType,l.layerDefinition.globalIdField=N(e,"globalidfield",""),l.layerDefinition.objectIdField=N(e,"objectidfield",""),l.layerDefinition.typeIdField=N(e,"typeidfield","");const t=N(e,"spatialreference",null);t&&(l.layerDefinition.spatialReference=A(t));for(const t of N(e,"fields",[])){const e={name:N(t,"name",""),alias:N(t,"alias",""),type:N(t,"type",""),nullable:N(t,"nullable",!0),editable:N(t,"editable",!0),length:N(t,"length",null),domain:x(N(t,"domain"))};l.layerDefinition.fields.push(e)}const n=N(i,"featureset",null);if(n){const e={};for(const t of l.layerDefinition.fields)e[t.name.toLowerCase()]=t.name;for(const t of N(n,"features",[])){const n={},r=N(t,"attributes",{});for(const t in r)n[e[t.toLowerCase()]]=r[t];l.featureSet.features.push({attributes:n,geometry:S(N(t,"geometry",null))})}}}else{l.layerDefinition.geometryType=N(i,"geometrytype",""),l.featureSet.geometryType=l.layerDefinition.geometryType,l.layerDefinition.objectIdField=N(i,"objectidfieldname",""),l.layerDefinition.typeIdField=N(i,"typeidfieldname","");const e=N(i,"spatialreference",null);e&&(l.layerDefinition.spatialReference=A(e));for(const e of N(i,"fields",[])){const t={name:N(e,"name",""),alias:N(e,"alias",""),type:N(e,"type",""),nullable:N(e,"nullable",!0),editable:N(e,"editable",!0),length:N(e,"length",null),domain:x(N(e,"domain"))};l.layerDefinition.fields.push(t)}const t={};for(const e of l.layerDefinition.fields)t[e.name.toLowerCase()]=e.name;for(const e of N(i,"features",[])){const n={},r=N(e,"attributes",{});for(const e in r)n[t[e.toLowerCase()]]=r[e];l.featureSet.features.push({attributes:n,geometry:S(N(e,"geometry",null))})}}}}if(!1===function(e){return!!e.layerDefinition&&!!e.featureSet&&!1!==function(e,t){for(const t of["","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])if(t===e)return!0;return!1}(e.layerDefinition.geometryType)&&null!==e.layerDefinition.objectIdField&&""!==e.layerDefinition.objectIdField&&!1!==(0,o.a)(e.layerDefinition.fields)&&!1!==(0,o.a)(e.featureSet.features)}(l))throw new Error("Invalid Parameter");return m.Z.create(l,t.spatialReference)}))},e.signatures.push({name:"featureset",min:"1",max:"1"}),e.functions.filter=function(t,n){return e.standardFunctionAsync(t,n,((n,r,a)=>((0,o.p)(a,2,2),(0,o.o)(a[0])?a[0].load().then((n=>{const r=D.WhereClause.create(a[1],n.getFieldsIndex()),i=r.getVariables();if(i.length>0){const n=[];for(let r=0;r<i.length;r++){const a={name:i[r]};n.push(e.evaluateIdentifier(t,a))}return(0,I.$6)(n).then((e=>{const t={};for(let n=0;n<i.length;n++)t[i[n]]=e[n];return r.parameters=t,new f.Z({parentfeatureset:a[0],whereclause:r})}))}return(0,I.DB)(new f.Z({parentfeatureset:a[0],whereclause:r}))})):e.failDefferred("Filter cannot accept this parameter type"))))},e.signatures.push({name:"filter",min:"2",max:"2"}),e.functions.orderby=function(t,n){return e.standardFunctionAsync(t,n,((t,n,r)=>{if((0,o.p)(r,2,2),(0,o.o)(r[0])){const e=new y.Z(r[1]);return(0,I.DB)(new c.Z({parentfeatureset:r[0],orderbyclause:e}))}return e.failDefferred("Order cannot accept this parameter type")}))},e.signatures.push({name:"orderby",min:"2",max:"2"}),e.functions.top=function(t,n){return e.standardFunctionAsync(t,n,((t,n,r)=>((0,o.p)(r,2,2),(0,o.o)(r[0])?(0,I.DB)(new d.Z({parentfeatureset:r[0],topnum:r[1]})):(0,o.a)(r[0])?(0,o.t)(r[1])>=r[0].length?r[0].slice(0):r[0].slice(0,(0,o.t)(r[1])):(0,o.b)(r[0])?(0,o.t)(r[1])>=r[0].length()?r[0].slice(0):r[0].slice(0,(0,o.t)(r[1])):e.failDefferred("Top cannot accept this parameter type"))))},e.signatures.push({name:"top",min:"2",max:"2"}),e.functions.first=function(t,n){return e.standardFunctionAsync(t,n,((e,t,n)=>((0,o.p)(n,1,1),(0,o.o)(n[0])?n[0].first(e.abortSignal).then((e=>{if(null!==e){const t=i.Z.createFromGraphicLikeObject(e.geometry,e.attributes,n[0]);t._underlyingGraphic=e,e=t}return e})):(0,o.a)(n[0])?0===n[0].length?(0,I.DB)(null):(0,I.DB)(n[0][0]):(0,o.b)(n[0])?0===n[0].length()?(0,I.DB)(null):(0,I.DB)(n[0].get(0)):null)))},e.signatures.push({name:"first",min:"1",max:"1"}),e.functions.attachments=function(t,n){return e.standardFunctionAsync(t,n,((e,n,r)=>{(0,o.p)(r,1,2);const l={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(r.length>1)if(r[1]instanceof a.Z){if(r[1].hasField("minsize")&&(l.minsize=(0,o.t)(r[1].field("minsize"))),r[1].hasField("metadata")&&(l.returnMetadata=(0,o.u)(r[1].field("metadata"))),r[1].hasField("maxsize")&&(l.maxsize=(0,o.t)(r[1].field("maxsize"))),r[1].hasField("types")){const e=(0,o.T)(r[1].field("types"),!1);e.length>0&&(l.types=e)}}else if(null!==r[1])throw new Error("Invalid Parameter");if(r[0]instanceof i.Z){let e=r[0]._layer;return e instanceof E.default&&(e=(0,s.constructFeatureSet)(e,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null===e||!1===(0,o.o)(e)?[]:e.load().then((()=>e.queryAttachments(r[0].field(e.objectIdField),l.minsize,l.maxsize,l.types,l.returnMetadata)))}if(null===r[0])return[];throw new Error("Invalid Parameter")}))},e.signatures.push({name:"attachments",min:"1",max:"2"}),e.functions.featuresetbyrelationshipname=function(t,n){return e.standardFunctionAsync(t,n,((e,n,r)=>{(0,o.p)(r,2,4);const a=r[0],l=(0,o.d)(r[1]);let u=(0,o.C)(r[2],null);const f=(0,o.u)((0,o.C)(r[3],!0));if(null===u&&(u=["*"]),!1===(0,o.a)(u))throw new Error("Invalid Parameter");if(null===r[0])return null;if(!(r[0]instanceof i.Z))throw new Error("Invalid Parameter");let c=a._layer;return c instanceof E.default&&(c=(0,s.constructFeatureSet)(c,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null===c||!1===(0,o.o)(c)?null:c.load().then((e=>{const n=e.relationshipMetaData().filter((e=>e.name===l));if(0===n.length)return null;if(void 0!==n[0].relationshipTableId&&null!==n[0].relationshipTableId&&n[0].relationshipTableId>-1)return(0,s.constructFeatureSetFromRelationship)(e,n[0],a.field(e.objectIdField),e.spatialReference,u,f,t.lrucache,t.interceptor);let r=e.serviceUrl();return r?(r="/"===r.charAt(r.length-1)?r+n[0].relatedTableId.toString():r+"/"+n[0].relatedTableId.toString(),(0,s.constructFeatureSetFromUrl)(r,e.spatialReference,u,f,t.lrucache,t.interceptor).then((t=>t.load().then((()=>t.relationshipMetaData())).then((r=>{if(r=r.filter((e=>e.id===n[0].id)),!1===a.hasField(n[0].keyField)||null===a.field(n[0].keyField))return e.getFeatureByObjectId(a.field(e.objectIdField),[n[0].keyField]).then((e=>{if(e){const a=D.WhereClause.create(r[0].keyField+"= @id",t.getFieldsIndex());return a.parameters={id:e.attributes[n[0].keyField]},t.filter(a)}return new p.Z({parentfeatureset:t})}));const i=D.WhereClause.create(r[0].keyField+"= @id",t.getFieldsIndex());return i.parameters={id:a.field(n[0].keyField)},t.filter(i)}))))):null}))}))},e.signatures.push({name:"featuresetbyrelationshipname",min:"2",max:"4"}),e.functions.featuresetbyassociation=function(t,n){return e.standardFunctionAsync(t,n,((e,n,r)=>{(0,o.p)(r,2,3);const a=r[0],l=(0,o.d)((0,o.C)(r[1],"")).toLowerCase(),f=(0,o.f)(r[2])?(0,o.d)(r[2]):null;if(null===r[0])return null;if(!(r[0]instanceof i.Z))throw new Error("Invalid Parameter");let c=a._layer;return c instanceof E.default&&(c=(0,s.constructFeatureSet)(c,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null===c||!1===(0,o.o)(c)?null:c.load().then((()=>{const e=c.serviceUrl();return(0,s.constructAssociationMetaDataFeatureSetFromUrl)(e,t.spatialReference)})).then((e=>{let t=null,n=null,r=!1;if(null!==f&&""!==f&&void 0!==f){for(const t of e.terminals)t.terminalName===f&&(n=t.terminalId);null===n&&(r=!0)}const i=e.associations.getFieldsIndex(),s=i.get("TOGLOBALID").name,d=i.get("FROMGLOBALID").name,p=i.get("TOTERMINALID").name,m=i.get("FROMTERMINALID").name,y=i.get("FROMNETWORKSOURCEID").name,g=i.get("TONETWORKSOURCEID").name,F=i.get("ASSOCIATIONTYPE").name,I=i.get("ISCONTENTVISIBLE").name,E=i.get("OBJECTID").name;for(const e of c.fields)if("global-id"===e.type){t=a.field(e.name);break}let b=null,N=new u.yN(new w.Z({name:"percentalong",alias:"percentalong",type:"double"}),D.WhereClause.create("0",e.associations.getFieldsIndex())),x=new u.yN(new w.Z({name:"side",alias:"side",type:"string"}),D.WhereClause.create("''",e.associations.getFieldsIndex()));const A="globalid",S="globalId",C={};for(const t in e.lkp)C[t]=e.lkp[t].sourceId;const $=new u.TO(new w.Z({name:"classname",alias:"classname",type:"string"}),null,C);let T="";switch(l){case"midspan":{T=`((${s}='${t}') OR ( ${d}='${t}')) AND (${F} IN (5))`,$.codefield=D.WhereClause.create(`CASE WHEN (${s}='${t}') THEN ${y} ELSE ${g} END`,e.associations.getFieldsIndex());const n=(0,h.JW)(u.Xx.findField(e.associations.fields,d));n.name=A,n.alias=A,b=new u.yN(n,D.WhereClause.create(`CASE WHEN (${d}='${t}') THEN ${s} ELSE ${d} END`,e.associations.getFieldsIndex())),N=e.unVersion>=4?new u.$X(u.Xx.findField(e.associations.fields,i.get("PERCENTALONG").name)):new u.yN(new w.Z({name:"percentalong",alias:"percentalong",type:"double"}),D.WhereClause.create("0",e.associations.getFieldsIndex()));break}case"junctionedge":{T=`((${s}='${t}') OR ( ${d}='${t}')) AND (${F} IN (4,6))`,$.codefield=D.WhereClause.create(`CASE WHEN (${s}='${t}') THEN ${y} ELSE ${g} END`,e.associations.getFieldsIndex());const n=(0,h.JW)(u.Xx.findField(e.associations.fields,d));n.name=A,n.alias=A,b=new u.yN(n,D.WhereClause.create(`CASE WHEN (${d}='${t}') THEN ${s} ELSE ${d} END`,e.associations.getFieldsIndex())),x=new u.yN(new w.Z({name:"side",alias:"side",type:"string"}),D.WhereClause.create(`CASE WHEN (${F}=4) THEN 'from' ELSE 'to' END`,e.associations.getFieldsIndex()));break}case"connected":{let r=`${s}='@T'`,a=`${d}='@T'`;null!==n&&(r+=` AND ${p}=@A`,a+=` AND ${m}=@A`),T="(("+r+") OR ("+a+"))",T=(0,o.M)(T,"@T",t),r=(0,o.M)(r,"@T",t),null!==n&&(r=(0,o.M)(r,"@A",n.toString()),T=(0,o.M)(T,"@A",n.toString())),$.codefield=D.WhereClause.create("CASE WHEN "+r+` THEN ${y} ELSE ${g} END`,e.associations.getFieldsIndex());const i=(0,h.JW)(u.Xx.findField(e.associations.fields,d));i.name=A,i.alias=A,b=new u.yN(i,D.WhereClause.create("CASE WHEN "+r+` THEN ${d} ELSE ${s} END`,e.associations.getFieldsIndex()));break}case"container":T=`${s}='${t}' AND ${F} = 2`,null!==n&&(T+=` AND ${p} = `+n.toString()),$.codefield=y,T="( "+T+" )",b=new u.QP(u.Xx.findField(e.associations.fields,d),A,A);case"content":T=`(${d}='${t}' AND ${F} = 2)`,null!==n&&(T+=` AND ${m} = `+n.toString()),$.codefield=g,T="( "+T+" )",b=new u.QP(u.Xx.findField(e.associations.fields,s),A,A);break;case"structure":T=`(${s}='${t}' AND ${F} = 3)`,null!==n&&(T+=` AND ${p} = `+n.toString()),$.codefield=y,T="( "+T+" )",b=new u.QP(u.Xx.findField(e.associations.fields,d),A,S);break;case"attached":T=`(${d}='${t}' AND ${F} = 3)`,null!==n&&(T+=` AND ${m} = `+n.toString()),$.codefield=g,T="( "+T+" )",b=new u.QP(u.Xx.findField(e.associations.fields,s),A,S);break;default:throw new Error("Invalid Parameter")}return r&&(T="1 <> 1"),new u.Xx({parentfeatureset:e.associations,adaptedFields:[new u.$X(u.Xx.findField(e.associations.fields,E)),new u.$X(u.Xx.findField(e.associations.fields,I)),b,x,$,N],extraFilter:T?D.WhereClause.create(T,e.associations.getFieldsIndex()):null})}))}))},e.signatures.push({name:"featuresetbyassociation",min:"2",max:"6"}),e.functions.groupby=function(t,n){return e.standardFunctionAsync(t,n,((n,r,i)=>((0,o.p)(i,3,3),(0,o.o)(i[0])?i[0].load().then((n=>{const r=[],l=[];let s=!1,u=[];if((0,o.f)(i[1]))u.push(i[1]);else if(i[1]instanceof a.Z)u.push(i[1]);else if((0,o.a)(i[1]))u=i[1];else{if(!(0,o.b)(i[1]))return e.failDefferred("Illegal Value: GroupBy");u=i[1].toArray()}for(const t of u)if((0,o.f)(t)){const e=D.WhereClause.create((0,o.d)(t),n.getFieldsIndex()),a=!0===(0,g.y5)(e)?(0,o.d)(t):"%%%%FIELDNAME";r.push({name:a,expression:e}),"%%%%FIELDNAME"===a&&(s=!0)}else{if(!(t instanceof a.Z))return e.failDefferred("Illegal Value: GroupBy");{const a=t.hasField("name")?t.field("name"):"%%%%FIELDNAME",i=t.hasField("expression")?t.field("expression"):"";if("%%%%FIELDNAME"===a&&(s=!0),!a)return e.failDefferred("Illegal Value: GroupBy");r.push({name:a,expression:D.WhereClause.create(i||a,n.getFieldsIndex())})}}if(u=[],(0,o.f)(i[2]))u.push(i[2]);else if((0,o.a)(i[2]))u=i[2];else if((0,o.b)(i[2]))u=i[2].toArray();else{if(!(i[2]instanceof a.Z))return e.failDefferred("Illegal Value: GroupBy");u.push(i[2])}for(const t of u){if(!(t instanceof a.Z))return e.failDefferred("Illegal Value: GroupBy");{const r=t.hasField("name")?t.field("name"):"",a=t.hasField("statistic")?t.field("statistic"):"",i=t.hasField("expression")?t.field("expression"):"";if(!r||!a||!i)return e.failDefferred("Illegal Value: GroupBy");l.push({name:r,statistic:a.toLowerCase(),expression:D.WhereClause.create(i,n.getFieldsIndex())})}}if(s){const e={};for(const t of n.fields)e[t.name.toLowerCase()]=1;for(const t of r)"%%%%FIELDNAME"!==t.name&&(e[t.name.toLowerCase()]=1);for(const t of l)"%%%%FIELDNAME"!==t.name&&(e[t.name.toLowerCase()]=1);let t=0;for(const n of r)if("%%%%FIELDNAME"===n.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,n.name="FIELD_"+t.toString()}}const f=[];for(const n of r)f.push(b(n.expression,e,t));for(const n of l)f.push(b(n.expression,e,t));return f.length>0?(0,I.$6)(f).then((()=>(0,I.DB)(i[0].groupby(r,l)))):(0,I.DB)(i[0].groupby(r,l))})):e.failDefferred("Illegal Value: GroupBy"))))},e.signatures.push({name:"groupby",min:"3",max:"3"}),e.functions.distinct=function(t,n){return e.standardFunctionAsync(t,n,((n,r,i)=>(0,o.o)(i[0])?((0,o.p)(i,2,2),i[0].load().then((n=>{const r=[];let l=[];if((0,o.f)(i[1]))l.push(i[1]);else if(i[1]instanceof a.Z)l.push(i[1]);else if((0,o.a)(i[1]))l=i[1];else{if(!(0,o.b)(i[1]))return e.failDefferred("Illegal Value: GroupBy");l=i[1].toArray()}let s=!1;for(const t of l)if((0,o.f)(t)){const e=D.WhereClause.create((0,o.d)(t),n.getFieldsIndex()),a=!0===(0,g.y5)(e)?(0,o.d)(t):"%%%%FIELDNAME";r.push({name:a,expression:e}),"%%%%FIELDNAME"===a&&(s=!0)}else{if(!(t instanceof a.Z))return e.failDefferred("Illegal Value: GroupBy");{const a=t.hasField("name")?t.field("name"):"%%%%FIELDNAME",i=t.hasField("expression")?t.field("expression"):"";if("%%%%FIELDNAME"===a&&(s=!0),!a)return e.failDefferred("Illegal Value: GroupBy");r.push({name:a,expression:D.WhereClause.create(i||a,n.getFieldsIndex())})}}if(s){const e={};for(const t of n.fields)e[t.name.toLowerCase()]=1;for(const t of r)"%%%%FIELDNAME"!==t.name&&(e[t.name.toLowerCase()]=1);let t=0;for(const n of r)if("%%%%FIELDNAME"===n.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,n.name="FIELD_"+t.toString()}}const u=[];for(const n of r)u.push(b(n.expression,e,t));return u.length>0?(0,I.$6)(u).then((()=>(0,I.DB)(i[0].groupby(r,[])))):(0,I.DB)(i[0].groupby(r,[]))}))):function(e,t,n,r){if(1===r.length){if((0,o.a)(r[0]))return(0,F.t)(e,r[0],-1);if((0,o.b)(r[0]))return(0,F.t)(e,r[0].toArray(),-1)}return(0,F.t)(e,r,-1)}("distinct",0,0,i)))})}}}]);