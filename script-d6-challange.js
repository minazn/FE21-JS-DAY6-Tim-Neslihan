var cars = JSON.parse(carlist);

console.log(cars.length);

var tmp = (cars.length)/2;

for (i=0;i<tmp+1;i++){
    document.getElementById("car_list").innerHTML += `<div class="card col-4" style="width: 18rem;">
    <img src="` + cars[i].image + `class="card-img-top" alt="` + cars[i].brand + `">`+
    `<div class="card-body">
    <h5 class="card-title">`+ cars[i].brand +`</h5>
    <p class="card-text"> Produced: ` + cars[i].production_year + `<br> PS: ` + cars[i].PS + `<br> Price: ` + cars[i].price + `</p>
    <a href="#" class="btn btn-primary">Buy</a>
    </div>`;
}

document.getElementById("car_list").innerHTML += `<div class="card mb-3" id = "hidden_div">
<div class="row g-0">
  <div class="col-md-4">
    <img src="..." class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
</div>`

for (i=tmp+1;i<cars.length;i++){
    document.getElementById("car_list").innerHTML += `<div class="card col-4" style="width: 18rem;">
    <img src="` + cars[i].image + `class="card-img-top" alt="` + cars[i].brand + `">`+
    `<div class="card-body">
    <h5 class="card-title">`+ cars[i].brand +`</h5>
    <p class="card-text"> Produced: ` + cars[i].production_year + `<br> PS: ` + cars[i].PS + `<br> Price: ` + cars[i].price + `</p>
    <a href="#" class="btn btn-primary">Buy</a>
    </div>`;
}

var click_image = document.getElementsByTagName("img");
console.log(click_image[3]);







