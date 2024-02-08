import{_ as m,o as i,c,a as t,e as y,v as b,I as v,j as h,r as u,d as p,F as _,b as C,f as k,w,t as l}from"./index-92ce0c51.js";const x={data(){return{search:""}}},A={class:"d-flex border border-success rounded-pill me-3"},$={class:"input-group"},I=t("button",{class:"btn input-group-text",type:"submit"},[t("i",{class:"fas fa-search text-black"})],-1);function S(r,e,d,f,o,a){return i(),c("form",A,[t("div",$,[y(t("input",{"onUpdate:modelValue":e[0]||(e[0]=n=>o.search=n),onInput:e[1]||(e[1]=n=>r.$emit("search",o.search)),class:"form-control rounded-pill",type:"search",placeholder:"Search","aria-label":"Search"},null,544),[[b,o.search]]),I])])}const D=m(x,[["render",S]]),j={name:"product",components:{Index:v,search:D},props:{search:String},data(){return{products:[],cart:[],jsonData:h,search:"",showAlert:!1}},mounted(){this.products=h},computed:{filteredItems(){return this.search?this.jsonData.filter(r=>r.title.toLowerCase().includes(this.search.toLowerCase())):this.jsonData}},methods:{addToCart(r){const e=this.cart.find(d=>d.id===r.id);e?e.quantity++:this.cart.push({...r,quantity:1}),localStorage.setItem("cart",JSON.stringify(this.cart)),this.showAlert=!0,setTimeout(()=>{this.showAlert=!1},2e3*2)},hideAlert(){this.showAlert=!1}}},N={style:{"margin-top":"100px"}},T={class:"card-css"},V={class:"product-list"},B={class:"product-image"},L=["src","alt"],q={class:"product-details"},F={class:"product-price"},P={class:"product-category"},E={class:"product-description"},J=["onClick"],M={key:0,class:"alert alert-success alert-dismissible fade show fixed-top my-alert",role:"alert"},O=t("strong",null,"Item added to cart!",-1),U=t("span",{"aria-hidden":"true"},"×",-1),z=[U];function G(r,e,d,f,o,a){const n=u("search"),g=u("router-link");return i(),c(_,null,[t("div",N,[p(n,{onSearch:e[0]||(e[0]=s=>o.search=s)})]),t("div",T,[t("ul",V,[(i(!0),c(_,null,C(a.filteredItems,s=>(i(),c("li",{key:s.id,class:"product-item"},[p(g,{to:{name:"product-detail",params:{id:s.id},props:{product:s}},class:"product-link"},{default:w(()=>[t("div",B,[t("img",{src:s.image,alt:s.title},null,8,L)])]),_:2},1032,["to"]),t("div",q,[t("h4",null,l(s.title),1),t("p",F,"Price: $"+l(s.price),1),t("p",P,"Category: "+l(s.category),1),t("p",E,"Description: "+l(s.description),1),t("i",{class:"fa-solid fa-circle-plus cart-icon",onClick:H=>a.addToCart(s)},null,8,J)])]))),128))]),o.showAlert?(i(),c("div",M,[O,t("button",{type:"button",class:"close",onClick:e[1]||(e[1]=(...s)=>a.hideAlert&&a.hideAlert(...s)),"aria-label":"Close"},z)])):k("",!0)])],64)}const Q=m(j,[["render",G]]);export{Q as default};