(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();const h=document.querySelector(".introduction"),f=document.querySelector(".introduction__sign"),m=document.querySelector(".introduction__text-box"),b=document.querySelector(".info"),i=document.querySelectorAll(".hero__image"),d=document.querySelectorAll(".hero__text");document.querySelector(".hero");function w(){const o=L.latLng(29.627012,52.518117),e=new L.Map("map",{key:"web.f574848d3aa44718b6d57ba18c7328ec",maptype:"neshan",center:[29.627012,52.518117],zoom:8,scrollWheelZoom:!1}).flyTo(o,16);setTimeout(()=>{L.marker([29.627012,52.518117]).addTo(e).bindPopup("شرکت خدمات بار هوایی آسمان باران",{className:"info__marker"}).openPopup(),document.querySelector(".info__marker").style.opacity=1},3500),e.once("focus",function(){map.scrollWheelZoom.enable()}),e.on("click",function(){map.scrollWheelZoom.enabled()?map.scrollWheelZoom.disable():map.scrollWheelZoom.enable()})}const a=document.querySelector(".introduction__number");function p(o){a.querySelectorAll("span[data-value]").forEach((e,s)=>{e.style.transform=`translateY(-${100*parseInt(o[s])}%)`}),console.log(),setTimeout(()=>{a.style.width=`${o.length*65}px`},100)}function _(o,e){const s=Array(10).join(0).split(0).map((t,n)=>`<span>${O(n)}</span>`).join("");a.insertAdjacentHTML("beforeend",`<span style="transform: translateY(-1000%)" data-value="${o}">
        ${s}
      </span>`);const l=a.lastElementChild;setTimeout(()=>{l.className="visible"},e?0:2e3)}function q(o){const e=o.toString().split("").join("");for(let s=0;s<e.length;s++)_("0",!0);p(["0"]),setTimeout(()=>p(e),2e3)}function O(o){var e=["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];return String(o).replace(/[0-9]/g,function(s){return e[+s]})}let g={threshold:.7};function T(o){o.forEach(e=>{e.isIntersecting&&(q(20),v.unobserve(h),m.style.transform="translateY(0)",m.style.opacity="1",setTimeout(()=>{f.classList.remove("invisible"),f.style.transform="translateX(0)"},2e3))})}function x(o){o.forEach(e=>{e.isIntersecting&&(w(),S.unobserve(b))})}const v=new IntersectionObserver(T,g);v.observe(h);const S=new IntersectionObserver(x,g);S.observe(b);let r=-1,c=!0;const y=function(){if(r<0){r++,i[r].style.animation="scale-up 10s ease forwards",d[r].classList.add("show"),c=!c;return}i[r].classList.remove("show"),d[r].classList.remove("show"),r=r===i.length-1?0:++r,i[r].classList.add("show"),d[r].classList.add("show"),c?i[r].style.animation="scale-up 5s ease forwards":i[r].style.animation="scale-down 5s ease forwards",c=!c},I=function(){y(),setInterval(y,1e4)};I();
