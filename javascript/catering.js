

// ------------------NavCatering----------------
const listNav=document.querySelectorAll("#navPlates li");
const listContent=document.querySelectorAll("#ContentPlates li");
listNav.forEach((ele,ind)=>{
    ele.onclick=function(){
        listNav.forEach((el,i)=>{
            el.classList.remove("list-act");
    listContent[i].classList.remove("content-act");
        })
       ele.classList.add("list-act");
       listContent[ind].classList.add("content-act")
        
    }
    } )

    // traaaaaaaay


    fetch("https://api.npoint.io/bfe4b8ba89ce7bc5e5f2")
    .then(res => res.json())
    .then(data => {
      const allSections = document.querySelectorAll('#ContentPlates li[data-category]');
  
      allSections.forEach(section => {
        const category = section.dataset.category;  
        const items = data[category];  
        const plates = section.querySelectorAll('.PlatesImages');
        if (items && items.length > 0) {
          items.forEach((item, index) => {
            if (plates[index]) {
              const title = plates[index].querySelector('h3');
              const desc = plates[index].querySelector('p');
              title.textContent = item.name;  
              desc.textContent = item.en;    
            }
          });
        }
      });
    })
 

 