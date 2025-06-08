/////////////////////////user//////////////////////////////////////
let prof=document.getElementById("profile");
function VisableMenue(){
  prof.classList.toggle("open");
}

   function VisableMenue() {
    const profile = document.getElementById("profile");
    profile.classList.toggle("active"); 
  }
   document.addEventListener("click", function (e) {
    const profile = document.getElementById("profile");
    const icon = document.querySelector(".onclick");

    if (!profile.contains(e.target) && !icon.contains(e.target)) {
      profile.classList.remove("active");
    }
  });
////////////////////////user//////////////////////////////


/////////////////////// heading visibility/////////////////////////////////
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
/////////////////////// heading visibility/////////////////////////////////
 
///////////////////////////header scorll//////////////////////////////////////
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


window.addEventListener("scroll", () => {
  const header = document.getElementById("hmm");
  const mainElement = document.querySelector(".main");

  const mainBottom = mainElement.getBoundingClientRect().bottom;

  if (window.scrollY > lastScrollY && mainBottom <= 190) {

    header.classList.add("moove");
  } else {
    
    header.classList.remove("moove");
  }

  lastScrollY = window.scrollY;
});
///////////////////////////header scorll//////////////////////////////////////

/////////////////////////////like///////////////////////////////
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

/////////////////////////////like///////////////////////////////

////////////////////////////sec2 animation///////////////////////////////////
    window.addEventListener("scroll",function(){
       const sec1=this.document.getElementById("sec1");
       if(window.scrollY>50){
        sec1.classList.add("ani");

       }
       else {
        sec1.classList.remove("ani");
       }
    });
     
////////////////////////////sec2 animation///////////////////////////////////


//////////////////////////colored icon when responsive/////////////////////////////////////////
   let footer = document.getElementById("footer");
   let about = document.getElementById("about");
  let ii=document.querySelectorAll(".ii");
  let ff=document.querySelectorAll(".ff");
  let observer=new IntersectionObserver(function(entries){
    entries.forEach(entry =>{
      if(entry.isIntersecting){
        ii.forEach(el =>el.classList.add("colore"));
        ff.forEach(el =>el.classList.add("colore"));
      }
      else {
        ii.forEach(el =>el.classList.remove("colore"));
        ff.forEach(el =>el.classList.remove("colore"));
      }
    });
  },{threshold:0.7});

  observer.observe(footer);
  observer.observe(about);
//////////////////////////colored icon when responsive/////////////////////////////////////////

  
 