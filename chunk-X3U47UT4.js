import{Dc as d,Yb as n,Zb as e,gb as i,yc as t,zb as s}from"./chunk-K2HAUFYZ.js";import"./chunk-EQDQRRRY.js";var l=class r{static \u0275fac=function(o){return new(o||r)};static \u0275cmp=s({type:r,selectors:[["app-custom-js"]],decls:18,vars:6,consts:[[1,""],[1,"pb-3","d-flex","border-bottom","mb-3"],[1,"mb-0"],[1,"mb-3"],[1,"mb-3","text-dark","fs-14"],[1,"bg-light","text-gray-9","rounded-3","border"],[1,"language-markup","mb-0"],[1,"d-flex","align-items-center","justify-content-between","border-top","pt-4"],["href","javascript:void(0);",1,"btn","btn-outline-white"],["href","javascript:void(0);",1,"btn","btn-primary"]],template:function(o,a){o&1&&(n(0,"div",0)(1,"div")(2,"div",1)(3,"h6",2),t(4,"Custom JS"),e()(),n(5,"div",3)(6,"h5",4),t(7,"Write Custom JS"),e(),n(8,"div",5)(9,"pre",6)(10,"code",6),t(11),e(),t(12,`
`),e()()(),n(13,"div",7)(14,"a",8),t(15,"Cancel"),e(),n(16,"a",9),t(17,"Save Changes"),e()()()()),o&2&&(i(11),d(`
document.addEventListener("DOMContentLoaded", function () `,"{",`
const scrollers = document.querySelectorAll(".horizontal-slide");
scrollers.forEach((scroller) => `,"{",`
scroller.setAttribute("data-animated", true);
const scrollerInner = scroller.querySelector(".slide-list");
const scrollerContent = Array.from(scrollerInner.children);
scrollerContent.forEach((item) => `,"{",`
const duplicatedItem = item.cloneNode(true);
duplicatedItem.setAttribute("aria-hidden", true);
scrollerInner.appendChild(duplicatedItem);
`,"}",`);
`,"}",`); 
`,"}",`);
`))},encapsulation:2})};export{l as CustomJsComponent};
