(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const v={_origin:"https://api.emailjs.com"},z=(e,t="https://api.emailjs.com")=>{v._userID=e,v._origin=t},j=(e,t,o)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!o)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class I{constructor(t){this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"}}const B=(e,t,o={})=>new Promise((r,s)=>{const n=new XMLHttpRequest;n.addEventListener("load",({target:a})=>{const f=new I(a);f.status===200||f.text==="OK"?r(f):s(f)}),n.addEventListener("error",({target:a})=>{s(new I(a))}),n.open("POST",v._origin+e,!0),Object.keys(o).forEach(a=>{n.setRequestHeader(a,o[a])}),n.send(t)}),W=(e,t,o,r)=>{const s=r||v._userID;return j(s,e,t),B("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:s,service_id:e,template_id:t,template_params:o}),{"Content-type":"application/json"})},X=e=>{let t;if(typeof e=="string"?t=document.querySelector(e):t=e,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},J=(e,t,o,r)=>{const s=r||v._userID,n=X(o);j(s,e,t);const a=new FormData(n);return a.append("lib_version","3.11.0"),a.append("service_id",e),a.append("template_id",t),a.append("user_id",s),B("/api/v1.0/email/send-form",a)},K={init:z,send:W,sendForm:J},F=document.querySelector(".introduction"),O=document.querySelector(".introduction__sign"),$=document.querySelector(".introduction__text-box"),H=document.querySelector(".info"),u=document.querySelectorAll(".hero__image"),w=document.querySelectorAll(".hero__text"),x=document.querySelector(".nav__list"),T=document.querySelector(".nav__pointer"),p=document.querySelector(".header"),U=document.querySelector(".hero"),i=document.querySelector(".nav__btn"),G=document.querySelector(".mobile-nav");document.querySelector(".contact__form");const y=document.querySelector("#name"),g=document.querySelector("#number"),h=document.querySelector("#email"),l=document.querySelectorAll(".form__radio"),b=document.querySelector("#message"),m=document.querySelector(".overlay"),Q=document.querySelector(".form__btn");function ee(){const e=L.latLng(29.627012,52.518117),t=new L.Map("map",{key:"web.f574848d3aa44718b6d57ba18c7328ec",maptype:"neshan",center:[29.627012,52.518117],zoom:8,scrollWheelZoom:!1}).flyTo(e,16);setTimeout(()=>{L.marker([29.627012,52.518117]).addTo(t).bindPopup("شرکت خدمات بار هوایی آسمان باران",{className:"info__marker"}).openPopup(),document.querySelector(".info__marker").style.opacity=1},3500),t.once("focus",function(){map.scrollWheelZoom.enable()}),t.on("click",function(){map.scrollWheelZoom.enabled()?map.scrollWheelZoom.disable():map.scrollWheelZoom.enable()})}const S=document.querySelector(".introduction__number");function k(e){S.querySelectorAll("span[data-value]").forEach((t,o)=>{t.style.transform=`translateY(-${100*parseInt(e[o])}%)`}),console.log(),setTimeout(()=>{S.style.width=`${e.length*65}px`},100)}function te(e,t){const o=Array(10).join(0).split(0).map((s,n)=>`<span>${se(n)}</span>`).join("");S.insertAdjacentHTML("beforeend",`<span style="transform: translateY(-1000%)" data-value="${e}">
        ${o}
      </span>`);const r=S.lastElementChild;setTimeout(()=>{r.className="visible"},t?0:2e3)}function oe(e){const t=e.toString().split("").join("");for(let o=0;o<t.length;o++)te("0",!0);k(["0"]),setTimeout(()=>k(t),2e3)}function se(e){var t=["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];return String(e).replace(/[0-9]/g,function(o){return t[+o]})}let V={threshold:.7};(function(){var e="rWNx9d",t=window,o=document;function r(){var s=o.createElement("script"),n="https://www.goftino.com/widget/"+e,a=localStorage.getItem("goftino_"+e);s.async=!0,s.src=a?n+"?o="+a:n,o.getElementsByTagName("head")[0].appendChild(s)}o.readyState==="complete"?r():t.attachEvent?t.attachEvent("onload",r):t.addEventListener("load",r,!1)})();function ne(e){e.forEach(t=>{t.isIntersecting&&(oe(20),D.unobserve(F),$.style.transform="translateY(0)",$.style.opacity="1",setTimeout(()=>{O.classList.remove("invisible"),O.style.transform="translateX(0)"},2e3))})}function re(e){e.forEach(t=>{t.isIntersecting&&(ee(),Y.unobserve(H))})}function ae(e){e.forEach(t=>{if(!t.isIntersecting){p.classList.add("sticky");return}if(t.isIntersecting){if(!document.querySelector(".sticky"))return;p.style.transform="translateY(0)",setTimeout(()=>{p.classList.remove("sticky"),p.style.removeProperty("transform")},150)}})}const D=new IntersectionObserver(ne,V);D.observe(F);const Y=new IntersectionObserver(re,V);Y.observe(H);const ce=new IntersectionObserver(ae,{threshold:.6});ce.observe(U);let c=-1,d=!0;const A=function(){if(c<0){c++,u[c].style.animation="scale-up 5s 5.5s ease both",w[c].classList.add("show"),d=!d;return}u[c].classList.remove("show"),w[c].classList.remove("show"),c=c===u.length-1?0:++c,u[c].classList.add("show"),w[c].classList.add("show"),d?u[c].style.animation="scale-up 5s 5.5s ease both":u[c].style.animation="scale-down 5s 5.5s ease both",d=!d},ie=function(e){const t=e.target.closest(".nav__item");t&&document.querySelectorAll(".nav__item").forEach((o,r)=>{if(o===t){const s=o.getBoundingClientRect().left-o.offsetLeft;T.style.left=`${-s+o.firstElementChild.getBoundingClientRect().left+o.firstElementChild.getBoundingClientRect().width/2}px`}})},N=function(e){const t=x.querySelector(".nav__link"),o=t.getBoundingClientRect().left-t.parentElement.offsetLeft;T.style.left=`${-o+t.getBoundingClientRect().left+t.getBoundingClientRect().width/2}px`},Z=function(){i.classList.toggle("opened"),i.setAttribute("aria-expanded",i.classList.contains("opened")),i.style.transform=i.classList.contains("opened")?"translateX(-5rem)":"translateX(0)",document.body.style.overflowY=i.classList.contains("opened")?"hidden":"auto",setTimeout(()=>G.classList.toggle("reveal"),10)},le=function(e){e.target.closest(".mobile-nav")||e.target.closest(".nav__btn")||i.classList.contains("opened")&&Z()},ue=new RegExp(/(^0\d{10}$)|(^\u06F0[\u06F0-\u06F90-9]{10}$)/),de=new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),C=e=>e.trim().length>0,M=e=>de.test(e.toLowerCase()),P=e=>ue.test(e),R=e=>e.trim().length>10,E=()=>[...l].some(e=>e.checked),_=function(e,t,o="form__input"){const r=e.parentElement;e.className=`${t(e.value)?`${o} valid`:`${o} invalid`}`,r.querySelector(".form__label").className=`${t(e.value)?"form__label":"form__label invalid"}`},me=async function(e,t,o,r,s){const n={name:e,phoneNumber:o,email:t,time:r,message:s};return await K.send("service_7zu8vdf","template_1386rx7",n,"CTfxJvdNd16uVHyMh")},q=function(e){e.target.closest(".overlay__message-box")&&e.target!==document.querySelector(".overlay__btn")||(m.classList.remove("show"),fe())},ve=async function(e){if(e.preventDefault(),console.log(E()),!C(y.value)||!P(g.value)||!M(h.value)||!R(b.value)||!E()){_(y,C),_(g,P),_(h,M),_(b,R,"form__textarea"),E()?l.forEach(o=>o.classList.remove("invalid"))||l[0].closest(".form__group").querySelector(".form__label").classList.remove("invalid"):l.forEach(o=>o.classList.add("invalid"))||l[0].closest(".form__group").querySelector(".form__label").classList.add("invalid");return}const t=[...l].filter(o=>o.checked)[0].value;try{m.classList.add("show"),await me(y.value,h.value,g.value,`${t} - ${Number(t)+2}`,b.value),m.innerHTML=`
      <div
        class="overlay__message-box overlay__message-box--success"
      >
        <div class="animation-ctn overlay__svg-box">
          <svg class="svg" xmlns="http://www.w3.org/2000/svg">
            <g class="svg__group">
              <circle class="svg__circle" cx="77" cy="77" r="72"></circle>
              <circle
                class="svg__circle svg__circle--colored"
                cx="77"
                cy="77"
                r="72"
              ></circle>
              <polyline
                class="svg__polyline"
                points="43.5,77.8 63.7,97.9 112.2,49.4 "
              />
            </g>
          </svg>
        </div>
        <h2 class="heading-secondary overlay__heading">
          پیام شما با موفقیت ارسال شد
        </h2>
        <p class="overlay__message">
          در بازه ساعتی تعیین شده با شما تماس خواهیم گرفت. <br />با احترام
          فراوان، تیم پشتیبانی آسمان باران
        </p>
        <button class="btn btn--main overlay__btn">بازگشت</button>
      </div>`,document.querySelector(".overlay__btn").addEventListener("click",q)}catch{m.innerHTML=`
        <div class="overlay__message-box overlay__message-box--fail">
        <div class="animation-ctn overlay__svg-box overlay__svg-box--fail">
          <svg class="svg" xmlns="http://www.w3.org/2000/svg">
            <g class="svg__group">
              <circle class="svg__circle" cx="77" cy="77" r="72"></circle>
              <circle
                class="svg__circle svg__circle--colored"
                cx="77"
                cy="77"
                r="72"
              ></circle>
              <polyline class="svg__polyline" points="43.5,77.8  112.2,77.8 " />
            </g>
          </svg>
        </div>
        <h2 class="heading-secondary overlay__heading">
          ارسال پیام با خطایی مواجه شده است!
        </h2>
        <p class="overlay__message">
          لطفا از طریق راه‌های ارتباطی دیگر تلاش کنید <br />با احترام فراوان،
          تیم پشتیبانی آسمان باران
        </p>
        <button class="btn btn--main overlay__btn">بازگشت</button>
      </div>
        `,document.querySelector(".overlay__btn").addEventListener("click",q)}document.querySelectorAll(".invalid").forEach(o=>o.classList.remove("invalid")||o.classList.add("valid")),document.querySelector("html").style.overflowY="hidden"},fe=function(){y.value="",h.value="",g.value="",b.value="",l.forEach(e=>e.checked=!1),document.querySelectorAll(".valid").forEach(e=>e.classList.remove("valid")),Q.disabled=!0,document.querySelector("html").style.overflowY="auto"},pe=function(){N(),setTimeout(()=>T.style.bottom="1rem",1e3),setTimeout(()=>{A(),setInterval(A,1e4)},2e3)};pe();x.addEventListener("mouseover",ie);x.addEventListener("mouseout",N);i.addEventListener("click",Z);window.addEventListener("resize",N);document.addEventListener("click",le);document.addEventListener("submit",ve);m.addEventListener("click",q);
