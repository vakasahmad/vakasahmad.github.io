
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
if(menuBtn && nav){
  menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
}

document.querySelectorAll("img[data-fallback]").forEach(img=>{
  const fallback=()=>{
    const p=img.parentElement;
    if(!p) return;
    p.classList.add("missing-image");
    const el=p.querySelector(".fallback-copy");
    if(el) el.textContent=img.alt || "Add project image";
  };
  img.addEventListener("error", fallback);
  if(img.complete && img.naturalWidth===0) fallback();
});
