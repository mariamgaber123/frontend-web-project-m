window.addEventListener("scroll", () =>{
 const textid=document.getElementById("taxtid");
 const scrollY=window.scrollY;
 const st=0;
 const en=500;
 let opacity =1;
 if(scrollY>st){
 opacity =1-(scrollY-st)/(en-st);
 if(opacity<0)opacity=0;
 }
  textid.style.opacity=opacity;
 });

 let lastScrollY = window.scrollY;
 window.addEventListener("scroll",function (){
  let header =document.getElementById("hmm");
  if(window.scrollY>760){
    hmm.classList.add("moove"); }
    else {
     hmm.classList.remove("moove");
     
    }
});

window.addEventListener("scroll",function (){
  let header =document.getElementById("hmm");
   if(window.scrollY>50){
     header.classList.add("movvedd");
   }
    else {
     header.classList.remove("movvedd");
    }
});
// let lastScrollY = window.scrollY;
// let lastScrollY = window.scrollY; // لازم نعرفها برا الحدث

window.addEventListener("scroll", () => {
  const header = document.getElementById("hmm");
  const mainElement = document.querySelector(".main");

  const mainBottom = mainElement.getBoundingClientRect().bottom;

  if (window.scrollY > lastScrollY && mainBottom <= 190) {
    // لو نازلة لتحت و main خرجت من الشاشة تمامًا
    header.classList.add("moove");
  } else {
    // لو طالعة لفوق أو main لسه ظاهر جزء منه
    header.classList.remove("moove");
  }

  lastScrollY = window.scrollY;
});
// window.addEventListener("scroll",()=>{
//   const sec11=document.querySelectorAll(".sec1")
//     sec11.forEach((sec1)=>{
//       const sectop =sec1.getBoundingClientRect().top;
//       if(sectop<window.innerHeight-100){
//         sec1.classList.add("show");
//       }
//     })
// })

document.querySelectorAll('.im i').forEach(heart => {
  heart.addEventListener('click', () => {
    if (heart.classList.contains('bx-heart')) {
      heart.classList.remove('bx-heart');
      heart.classList.add('bxs-heart', 'liked');
    } else {
      heart.classList.remove('bxs-heart', 'liked');
      heart.classList.add('bx-heart');
    }
  });
});



    window.addEventListener("scroll",function(){
       const sec1=this.document.getElementById("sec1");
       if(window.scrollY>50){
        sec1.classList.add("ani");

       }
       else {
        sec1.classList.remove("ani");
       }
    });
