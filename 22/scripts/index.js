document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".header__toggle"),t=document.querySelector(".navigation"),i=e.querySelector(".header__icon--closed"),s=e.querySelector(".header__icon--opened"),c="24px",r="24px";e.addEventListener("click",()=>{let n=t.classList.toggle("opened");e.setAttribute("aria-expanded",n),e.querySelector("span.visually-hidden").textContent=n?"\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E":"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E",n?(e.style.width="18px",e.style.height="18px"):(e.style.width=c,e.style.height=r),i.style.display=n?"none":"block",s.style.display=n?"block":"none"}),document.addEventListener("click",n=>{!t.contains(n.target)&&!e.contains(n.target)&&t.classList.contains("opened")&&(t.classList.remove("opened"),e.setAttribute("aria-expanded","false"),e.style.width=c,e.style.height=r,i.style.display="block",s.style.display="none",e.querySelector("span.visually-hidden").textContent="\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E")}),document.addEventListener("keydown",n=>{n.key==="Escape"&&t.classList.contains("opened")&&(t.classList.remove("opened"),e.setAttribute("aria-expanded","false"),e.style.width=c,e.style.height=r,i.style.display="block",s.style.display="none",e.querySelector("span.visually-hidden").textContent="\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E")})});var a=document.querySelector(".example__container-slider"),l=a.querySelector(".example__slider"),y=a.querySelector(".example__slider-image--left"),p=a.querySelector(".example__slider-image--right"),o=!1,d=0;function u(e){let t=a.getBoundingClientRect(),i=e-t.left;i<0&&(i=0),i>t.width&&(i=t.width),d=i;let s=d/t.width*100;l.style.left=`${s}%`,y.style.clipPath=`inset(0 ${100-s}% 0 0)`,p.style.clipPath=`inset(0 0 0 ${s}%)`}l.addEventListener("mousedown",()=>{o=!0,d=l.offsetLeft});document.addEventListener("mousemove",e=>{o&&u(e.clientX)});document.addEventListener("mouseup",()=>{o=!1});l.addEventListener("touchstart",()=>{o=!0,d=l.offsetLeft});document.addEventListener("touchmove",e=>{o&&u(e.touches[0].clientX)});document.addEventListener("touchend",()=>{o=!1});
