
const sellValue = document.getElementById("sell_price");
const update = document.getElementById("update");

const URL = "https://dolarapi.com/v1/dolares/blue";

fetch(URL)
  .then(response => response.json())
  .then(data => showPrice(data))
  .catch(error => console.log(error))


  function showPrice(data){
    document.getElementById("buy_price").textContent = data.compra;
    document.getElementById("sell_price").textContent = data.venta;

    var fechaActualizacion = new Date(data.fechaActualizacion);
    var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
    var fechaFormateada = fechaActualizacion.toLocaleDateString('es-ES', options);

    document.getElementById("update").textContent = fechaFormateada;
  }
function getDollarPrice(){
    price = (document.getElementById('dolar01').value * document.getElementById("buy_price").textContent);

    document.getElementById('peso01').value = price
}

function getPesoPrice(){
    price = (document.getElementById('peso02').value / document.getElementById("sell_price").textContent);
    price = price.toFixed(2);
    document.getElementById('dolar02').value = price;
}