 
 


fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Chinese')
  .then(response => response.json())
  .then(resObject => {
    const contALL = document.createElement('div');
    contALL.classList.add('container');
const header=document.createElement('h1');
header.textContent="Discover the Taste of China through Our Diners' Eyes";
header.classList.add('Opinion');
document.body.append(header);
    fetch('https://api.npoint.io/bfe4b8ba89ce7bc5e5f2')
      .then(res => res.json())
      .then(obj => {
        resObject.meals.forEach((dish, index) => {
          const picture = document.createElement('img');
          const name = document.createElement('h2');
          name.textContent = dish.strMeal;
          picture.setAttribute('src', dish.strMealThumb);

          const divPic = document.createElement('div');
          divPic.classList.add('picture');
          divPic.append(picture);
          divPic.append(name);

   
          const review = obj.reviews[index ];  

          if (review) {
            const rewDiv = document.createElement('div');
            rewDiv.classList.add('review');

            const nm = document.createElement('h3');
            nm.textContent = review.name;

            const date = document.createElement('h4');
            date.textContent = review.date;

            const comment = document.createElement('p');
            comment.textContent = review.comment;

            const rating = review.rating;  
            const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);
            
            const starsEl = document.createElement('p');
            starsEl.classList.add('stars');
            starsEl.textContent = stars;
          
            rewDiv.appendChild(starsEl);
            rewDiv.append(date, nm, comment,starsEl);
            divPic.append(rewDiv);
          }

          contALL.append(divPic);
        });

        document.body.append(contALL);
      });
  });
