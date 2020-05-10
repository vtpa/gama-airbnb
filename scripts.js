
const URL = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";

const mainDiv = document.querySelector("#main");

let acomodacoes;

function getJson(json) {
  renderAcomadations(json);
}

fetch(URL)
.then(function(response){
  response.json().then(function(data){
    getJson(data);
    });
  })
.catch(function(err){ 
  console.error('Failed retrieving information', err);
});

function renderAcomadations(ac) {
  ac.map(renderAcomadation);
}

function renderAcomadation(ac){
  const div = document.createElement("div");
  const price_form = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
                             .format(ac.price);
  div.className = "card";
  div.innerHTML=`
  <img class="card-img-top" src="${ac.photo}" alt="Imagen da acomudação">
  <div class="card-body">
    <h5>${ac.name}</h5>
    <p>${ac.property_type}</p>
    <strong>${price_form}</strong>
  </div>
  <img class="plus" src="./plus.svg" />
 `
 mainDiv.appendChild(div);
}
