"use strict";(self.webpackChunkarcgis_rm=self.webpackChunkarcgis_rm||[]).push([[8923],{4279:(e,n,r)=>{r.d(n,{A:()=>I,B:()=>C,C:()=>j,D:()=>k,E:()=>L,F:()=>R,G:()=>S,H:()=>_,I:()=>q,J:()=>B,K:()=>F,a:()=>o,b:()=>f,c:()=>u,d:()=>s,e:()=>c,f:()=>a,g:()=>J,h:()=>l,i:()=>p,j:()=>N,k:()=>m,l:()=>y,m:()=>w,n:()=>v,o:()=>g,p:()=>A,q:()=>V,r:()=>h,s:()=>x,t:()=>G,u:()=>z,v:()=>b,w:()=>d,x:()=>D,y:()=>E,z:()=>H});var t=r(89067),i=r(61107);function c(e){return t.G.extendedSpatialReferenceInfo(e)}function u(e,n,r){return t.G.clip(i.N,e,n,r)}function o(e,n,r){return t.G.cut(i.N,e,n,r)}function f(e,n,r){return t.G.contains(i.N,e,n,r)}function s(e,n,r){return t.G.crosses(i.N,e,n,r)}function a(e,n,r,c){return t.G.distance(i.N,e,n,r,c)}function l(e,n,r){return t.G.equals(i.N,e,n,r)}function p(e,n,r){return t.G.intersects(i.N,e,n,r)}function G(e,n,r){return t.G.touches(i.N,e,n,r)}function d(e,n,r){return t.G.within(i.N,e,n,r)}function N(e,n,r){return t.G.disjoint(i.N,e,n,r)}function g(e,n,r){return t.G.overlaps(i.N,e,n,r)}function h(e,n,r,c){return t.G.relate(i.N,e,n,r,c)}function m(e,n){return t.G.isSimple(i.N,e,n)}function x(e,n){return t.G.simplify(i.N,e,n)}function y(e,n,r=!1){return t.G.convexHull(i.N,e,n,r)}function w(e,n,r){return t.G.difference(i.N,e,n,r)}function v(e,n,r){return t.G.symmetricDifference(i.N,e,n,r)}function A(e,n,r){return t.G.intersect(i.N,e,n,r)}function z(e,n,r=null){return t.G.union(i.N,e,n,r)}function V(e,n,r,c,u,o,f){return t.G.offset(i.N,e,n,r,c,u,o,f)}function b(e,n,r,c,u=!1){return t.G.buffer(i.N,e,n,r,c,u)}function D(e,n,r,c,u,o,f){return t.G.geodesicBuffer(i.N,e,n,r,c,u,o,f)}function E(e,n,r,c=!0){return t.G.nearestCoordinate(i.N,e,n,r,c)}function H(e,n,r){return t.G.nearestVertex(i.N,e,n,r)}function I(e,n,r,c,u){return t.G.nearestVertices(i.N,e,n,r,c,u)}function C(e,n,r,i){if(null==n||null==i)throw new Error("Illegal Argument Exception");const c=t.G.rotate(n,r,i);return c.spatialReference=e,c}function j(e,n,r){if(null==n||null==r)throw new Error("Illegal Argument Exception");const i=t.G.flipHorizontal(n,r);return i.spatialReference=e,i}function k(e,n,r){if(null==n||null==r)throw new Error("Illegal Argument Exception");const i=t.G.flipVertical(n,r);return i.spatialReference=e,i}function L(e,n,r,c,u){return t.G.generalize(i.N,e,n,r,c,u)}function R(e,n,r,c){return t.G.densify(i.N,e,n,r,c)}function S(e,n,r,c,u=0){return t.G.geodesicDensify(i.N,e,n,r,c,u)}function _(e,n,r){return t.G.planarArea(i.N,e,n,r)}function q(e,n,r){return t.G.planarLength(i.N,e,n,r)}function B(e,n,r,c){return t.G.geodesicArea(i.N,e,n,r,c)}function F(e,n,r,c){return t.G.geodesicLength(i.N,e,n,r,c)}var J=Object.freeze({__proto__:null,extendedSpatialReferenceInfo:c,clip:u,cut:o,contains:f,crosses:s,distance:a,equals:l,intersects:p,touches:G,within:d,disjoint:N,overlaps:g,relate:h,isSimple:m,simplify:x,convexHull:y,difference:w,symmetricDifference:v,intersect:A,union:z,offset:V,buffer:b,geodesicBuffer:D,nearestCoordinate:E,nearestVertex:H,nearestVertices:I,rotate:C,flipHorizontal:j,flipVertical:k,generalize:L,densify:R,geodesicDensify:S,planarArea:_,planarLength:q,geodesicArea:B,geodesicLength:F})},8923:(e,n,r)=>{r.r(n),r.d(n,{buffer:()=>t.v,clip:()=>t.c,contains:()=>t.b,convexHull:()=>t.l,crosses:()=>t.d,cut:()=>t.a,densify:()=>t.F,difference:()=>t.m,disjoint:()=>t.j,distance:()=>t.f,equals:()=>t.h,extendedSpatialReferenceInfo:()=>t.e,flipHorizontal:()=>t.C,flipVertical:()=>t.D,generalize:()=>t.E,geodesicArea:()=>t.J,geodesicBuffer:()=>t.x,geodesicDensify:()=>t.G,geodesicLength:()=>t.K,intersect:()=>t.p,intersects:()=>t.i,isSimple:()=>t.k,nearestCoordinate:()=>t.y,nearestVertex:()=>t.z,nearestVertices:()=>t.A,offset:()=>t.q,overlaps:()=>t.o,planarArea:()=>t.H,planarLength:()=>t.I,relate:()=>t.r,rotate:()=>t.B,simplify:()=>t.s,symmetricDifference:()=>t.n,touches:()=>t.t,union:()=>t.u,within:()=>t.w}),r(89067),r(61107);var t=r(4279)}}]);