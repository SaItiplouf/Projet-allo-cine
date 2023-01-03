fetch('./data/moovies.json')
.then (function(response){
  return response.json()
})
.then(function(data) {
console.log('Response json : ', data)
console.log(data[0].Title)

let divMoovies = document.querySelector('.moovies')

data.forEach(moovies => {
  let randomnumber = Math.round(Math.random()* 100)
  divMoovies.innerHTML = divMoovies.innerHTML +=`
  <br>
  <br>
  <br>
  <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
  <div class="card">
      <!--Poster -->
      <div class="card-image">
      <img src="${moovies.Poster}" class="rounded mx-auto d-block" alt="poster" />
      </div>
      <!-- Fin de Poster -->

      <!-- Corp de notre carte -->
      <div class="card-body">
          <!-- Titre du film -->
          <div class="card-title">
              <h3>${moovies.Title}</h3>
          </div>
          <!-- Synopsis -->
          <div class="card-title">
          <p>${moovies.Plot}</p>
          </div>
          <div class="card-image2 d-flex shadow p-3 bg-body-tertiary rounded">
          <img src="${moovies.Images[0]}" class="mini-img img-fluid rounded" />
          <img src="${moovies.Images[1]}" class="mini-img img-fluid rounded" />
          <img src="${moovies.Images[2]}" class="mini-img img-fluid rounded" />
          <img src="${moovies.Images[3]}" class="mini-img img-fluid rounded" />
          
          </div>
<br>
<div class="height-100 container d-flex justify-content-center align-items-center">
    
    <div class="card p-3">
        <div class="d-flex justify-content-between align-items-center">
            <div class="ratings">
                <i class="fa fa-star rating-color"></i>
                <i class="fa fa-star rating-color"></i>
                <i class="fa fa-star rating-color"></i>
                <i class="fa fa-star rating-color"></i>
                <i class="fa fa-star"></i>
            </div>
            <h5 class="review-count" id='randomnumber'> ${randomnumber} Reviews</h5>
        </div>
      <br>
      <!-- Fin du corp de notre carte -->
</div>
</div>
`
})
})




//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
scrollFunction();
};

function scrollFunction() {
if (
document.body.scrollTop > 20 ||
document.documentElement.scrollTop > 20
) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}

