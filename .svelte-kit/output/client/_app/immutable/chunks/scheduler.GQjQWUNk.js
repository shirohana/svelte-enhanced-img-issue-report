function j(){}function E(t,n){for(const e in n)t[e]=n[e];return t}function q(t){return t()}function P(){return Object.create(null)}function v(t){t.forEach(q)}function S(t){return typeof t=="function"}function U(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let f;function g(t,n){return t===n?!0:(f||(f=document.createElement("a")),f.href=n,t===f.href)}function b(t){return t.split(",").map(n=>n.trim().split(" ").filter(Boolean))}function A(t,n){const e=b(t.srcset),r=b(n||"");return r.length===e.length&&r.every(([o,s],c)=>s===e[c][1]&&(g(e[c][0],o)||g(o,e[c][0])))}function C(t){return Object.keys(t).length===0}function O(t,...n){if(t==null){for(const r of n)r(void 0);return j}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function D(t,n,e){t.$$.on_destroy.push(O(n,e))}function G(t,n,e,r){if(t){const o=x(t,n,e,r);return t[0](o)}}function x(t,n,e,r){return t[1]&&r?E(e.ctx.slice(),t[1](r(n))):e.ctx}function H(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const s=[],c=Math.max(n.dirty.length,o.length);for(let a=0;a<c;a+=1)s[a]=n.dirty[a]|o[a];return s}return n.dirty|o}return n.dirty}function I(t,n,e,r,o,s){if(o){const c=x(n,e,r,s);t.p(c,o)}}function J(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}let _;function h(t){_=t}function k(){if(!_)throw new Error("Function called outside component initialization");return _}function K(t){k().$$.on_mount.push(t)}function L(t){k().$$.after_update.push(t)}const i=[],m=[];let l=[];const y=[],w=Promise.resolve();let p=!1;function M(){p||(p=!0,w.then(B))}function N(){return M(),w}function z(t){l.push(t)}const d=new Set;let u=0;function B(){if(u!==0)return;const t=_;do{try{for(;u<i.length;){const n=i[u];u++,h(n),F(n.$$)}}catch(n){throw i.length=0,u=0,n}for(h(null),i.length=0,u=0;m.length;)m.pop()();for(let n=0;n<l.length;n+=1){const e=l[n];d.has(e)||(d.add(e),e())}l.length=0}while(i.length);for(;y.length;)y.pop()();p=!1,d.clear(),h(t)}function F(t){if(t.fragment!==null){t.update(),v(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(z)}}function Q(t){const n=[],e=[];l.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),l=n}export{H as a,D as b,G as c,L as d,m as e,P as f,J as g,B as h,S as i,C as j,z as k,Q as l,_ as m,j as n,K as o,h as p,q,v as r,U as s,N as t,I as u,i as v,M as w,g as x,A as y};
