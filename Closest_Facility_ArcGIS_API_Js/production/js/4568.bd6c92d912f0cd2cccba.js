"use strict";(self.webpackChunkarcgis_rm=self.webpackChunkarcgis_rm||[]).push([[4568],{86602:(e,t,i)=>{i.d(t,{eY:()=>d});var s=i(61681),r=i(1662),h=i(19710),a=i(55542),n=(i(78951),i(18567),i(39994),i(6174),i(91907),i(88338),i(17346),i(43487)),l=(i(29620),i(51118)),o=i(7349);function u(e,t,i){const s={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return t&&i&&(s.width=t,s.height=i),new n.Z(e,s)}class d extends l.s{constructor(e=null,t,i=!0){super(),this.requestRenderOnSourceChangedEnabled=i,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.blendFunction=t,this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){this._source=e,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e.context)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}_createTransforms(){return{dvs:(0,h.c)()}}setTransform(e){const t=(0,r.b)(this.transforms.dvs),[i,s]=e.toScreenNoRotation([0,0],[this.x,this.y]),h=this.resolution/this.pixelRatio/e.resolution,n=h*this.width,l=h*this.height,o=Math.PI*this.rotation/180;(0,r.c)(t,t,(0,a.f)(i,s)),(0,r.c)(t,t,(0,a.f)(n/2,l/2)),(0,r.r)(t,t,-o),(0,r.c)(t,t,(0,a.f)(-n/2,-l/2)),(0,r.j)(t,t,(0,a.f)(n,l)),(0,r.m)(this.transforms.dvs,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind(e,t){this._texture&&e.bindTexture(this._texture,t)}updateTexture(e){var t;if(!this.stage)return null==(t=this._texture)||t.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=u(e,this.sourceWidth,this.sourceHeight):this._texture=u(e));const i=this.source;if(i){if(this._texture.resize(this.sourceWidth,this.sourceHeight),(r=i)&&"render"in r)if(i instanceof o.Z){const e=i.getRenderedRasterPixels();this._texture.setData((0,s.pC)(e)?e.renderedRasterPixels:null)}else this._texture.setData(function(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}(i));else(function(e){return e&&!("render"in e)})(i)&&this._texture.setData(i);this.ready()}else this._texture.setData(null);var r}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}},15293:(e,t,i)=>{i.d(t,{s:()=>d});var s=i(24568),r=i(19710),h=i(86602),a=i(27954);class n extends a.I{constructor(e,t,i,s,r,a=null){super(e,t,i,s,r),this.bitmap=new h.eY(a,"standard",!1),this.bitmap.coordScale=[s,r],this.bitmap.once("isReady",(()=>this.ready()))}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){super.beforeRender(e),this.bitmap.beforeRender(e)}afterRender(e){super.afterRender(e),this.bitmap.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{dvs:(0,r.c)(),tileMat3:(0,r.c)()}}setTransform(e,t){super.setTransform(e,t),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}var l=i(14351),o=i(38716),u=i(70179);class d extends u.Z{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.bitmap.blendFunction))}createTile(e){const t=this._tileInfoView.getTileBounds((0,s.Ue)(),e),[i,r]=this._tileInfoView.tileInfo.size;return new n(e,t[0],t[3],i,r)}destroyTile(){}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[l.U.bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:o.jx.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===o.jx.MAP&&super.doRender(e)}}},7349:(e,t,i)=>{i.d(t,{Z:()=>r});var s=i(61681);class r{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return(0,s.pC)(this.pixelBlock)?this.pixelBlock.width:0}get height(){return(0,s.pC)(this.pixelBlock)?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if((0,s.Wi)(t))return;const i=this.filter({pixelBlock:t});if((0,s.Wi)(i.pixelBlock))return;const r=i.pixelBlock.getAsRGBA(),h=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);h.data.set(r),e.putImageData(h,0,0)}getRenderedRasterPixels(){const e=this.filter({pixelBlock:this.pixelBlock});return(0,s.Wi)(e.pixelBlock)?null:{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}},70179:(e,t,i)=>{i.d(t,{Z:()=>o});var s=i(39994),r=i(38716),h=i(10994),a=i(38448),n=i(22598);const l=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col;class o extends h.Z{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(l),this.setStencilReference(),super.renderChildren(e)}createRenderParams(e){const{state:t}=e,i=super.createRenderParams(e);return i.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,i.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),i}prepareRenderPasses(e){const t=super.prepareRenderPasses(e);return t.push(e.registerRenderPass({name:"stencil",brushes:[n.Z],drawPhase:r.jx.DEBUG|r.jx.MAP|r.jx.HIGHLIGHT,target:()=>this.getStencilTarget()})),(0,s.Z)("esri-tiles-debug")&&t.push(e.registerRenderPass({name:"tileInfo",brushes:[a.Z],drawPhase:r.jx.DEBUG,target:()=>this.children})),t}getStencilTarget(){return this.children}updateTransforms(e){for(const t of this.children){const i=this._tileInfoView.getTileResolution(t.key);t.setTransform(e,i)}}setStencilReference(){let e=1;for(const t of this.children)t.stencilRef=e++}}},27954:(e,t,i)=>{i.d(t,{I:()=>a});var s=i(1662),r=i(51118),h=i(87241);class a extends r.s{constructor(e,t,i,s,r,a=s,n=r){super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new h.Z(e),this.x=t,this.y=i,this.width=s,this.height=r,this.rangeX=a,this.rangeY=n}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}setTransform(e,t){const i=t/(e.resolution*e.pixelRatio),r=this.transforms.tileMat3,[h,a]=e.toScreenNoRotation([0,0],[this.x,this.y]),n=this.width/this.rangeX*i,l=this.height/this.rangeY*i;(0,s.s)(r,n,0,0,0,l,0,h,a,1),(0,s.m)(this.transforms.dvs,e.displayViewMat3,r)}}},13373:(e,t,i)=>{i.d(t,{Y:()=>a});var s=i(36663),r=(i(81977),i(39994),i(7283),i(13802),i(12571)),h=i(15293);const a=e=>{let t=class extends e{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new h.s(this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){this.container.removeChild(this._bitmapView),this._bitmapView.removeAllChildren()}};return t=(0,s._)([(0,r.j)("esri.views.2d.layers.BitmapTileLayerView2D")],t),t}},84568:(e,t,i)=>{i.r(t),i.d(t,{default:()=>x});var s=i(36663),r=i(44584),h=i(78668),a=i(81977),n=(i(39994),i(7283),i(13802),i(12571)),l=i(13373),o=i(80347),u=i(64970),d=i(17224),c=i(23656),p=i(26216),f=i(55068);const _=[102113,102100,3857,3785,900913];let g=class extends((0,f.y)((0,l.Y)((0,o.y)(p.Z)))){constructor(){super(...arguments),this._handles=new r.Z,this._tileStrategy=null,this._fetchQueue=null,this._tileRequests=new Map,this.layer=null}get tileMatrixSet(){if(this.layer.activeLayer.tileMatrixSetId)return this.layer.activeLayer.tileMatrixSet;const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(this.layer.activeLayer.tileMatrixSetId=e.id,e):null}hitTest(){return null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating")}attach(){if(!this.tileMatrixSet)return;const{tileInfo:e}=this.tileMatrixSet;this._tileInfoView=new u.Z(e),this._fetchQueue=new d.Z({tileInfoView:this._tileInfoView,process:e=>this.fetchTile(e)}),this._tileStrategy=new c.Z({cachePolicy:"keep",acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this._handles.add(this.watch(["layer.activeLayer.styleId","tileMatrixSet"],(()=>this._refresh()))),super.attach()}detach(){super.detach(),this._handles.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}async doRefresh(){this.updateRequested||this.suspended||this._refresh()}isUpdating(){return this._fetchQueue.length>0}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;[i.x,i.y]=this._tileInfoView.getTileCoords([0,0],t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._tileInfoView.getTileCoords(i,t.key);const s={id:e.id,fulfilled:!1,promise:this._fetchQueue.push(t.key).then((e=>{t.bitmap.source=e,t.once("attach",(()=>this.requestUpdate())),this._bitmapView.addChild(t)})).catch((e=>{(0,h.D_)(e)||(t.bitmap.source=null,t.once("attach",(()=>this.requestUpdate())),this._bitmapView.addChild(t))}))};return s.promise.finally((()=>s.fulfilled=!0)),this._tileRequests.set(t,s),this.requestUpdate(),t}releaseTile(e){const t=this._tileRequests.get(e);t.fulfilled||this._fetchQueue.abort(t.id),this._tileRequests.delete(e),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate()}async fetchTile(e){return this.layer.fetchTile(e.level,e.row,e.col)}canResume(){const e=super.canResume();return e?null!==this.tileMatrixSet:e}_refresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>{if(!e.bitmap.source)return;const t={id:e.key.id,fulfilled:!1,promise:this._fetchQueue.push(e.key).then((t=>{e.bitmap.source=t})).catch((t=>{(0,h.D_)(t)||(e.bitmap.source=null)})).finally((()=>{e.requestRender(),this.notifyChange("updating"),t.fulfilled=!0}))};this._tileRequests.set(e,t)})),this.notifyChange("updating")}_getTileMatrixSetBySpatialReference(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find((e=>e.tileInfo.spatialReference.wkid===t.wkid));return!i&&t.isWebMercator&&(i=e.tileMatrixSets.find((e=>_.indexOf(e.tileInfo.spatialReference.wkid)>-1))),i}};(0,s._)([(0,a.Cb)()],g.prototype,"suspended",void 0),(0,s._)([(0,a.Cb)({readOnly:!0})],g.prototype,"tileMatrixSet",null),g=(0,s._)([(0,n.j)("esri.views.2d.layers.WMTSLayerView2D")],g);var x=g},55068:(e,t,i)=>{i.d(t,{y:()=>o});var s=i(36663),r=i(13802),h=i(78668),a=i(15071),n=i(81977),l=(i(39994),i(7283),i(12571));const o=e=>{let t=class extends e{initialize(){this.handles.add((0,a.on)(this,"layer","refresh",(()=>{this.doRefresh().catch((e=>{(0,h.D_)(e)||r.Z.getLogger(this.declaredClass).error(e)}))})),"RefreshableLayerView")}};return(0,s._)([(0,n.Cb)()],t.prototype,"layer",void 0),t=(0,s._)([(0,l.j)("esri.layers.mixins.RefreshableLayerView")],t),t}}}]);