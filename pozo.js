var content = document.getElementById('contenido');
var content2 = document.getElementById('contenido2');
var content3 = document.getElementById('contenido3');
var content4 = document.getElementById('contenido4');
var content5 = document.getElementById('contenido5');

async function init() {
  
  function success(pos) {
    var crd = pos.coords;
    localStorage.setItem("lon", crd.longitude);
    localStorage.setItem("lat", crd.latitude);
  };

  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };

  navigator.geolocation.getCurrentPosition(success, error);
    var latitud = localStorage.getItem("lon");
    var longitud = localStorage.getItem("lat");
    const response = await axios.get(`http://localhost:5023/api/clima/${latitud}/${longitud}`);
    console.log(response)
    const text_clima = response.data.data;
    if (text_clima == 'muy nuboso') {
      console.log("ingresando 1")
      content.style.display = "block";
    } else if (text_clima == 'cielo claro' || text_clima == 'nubes dispersas' || text_clima == 'algo de nubes') {
      console.log("ingresando 2")
      content2.style.display = "block";
    } else if (text_clima == 'nubes') {
      console.log("ingresando 3")
      content3.style.display = "block";
    } else if (text_clima == 'niebla') {
      console.log("ingresando 4")
      content4.style.display = "block";
    } else if (text_clima == 'lluvia ligera' || text_clima == 'tormenta con lluvia ligera') {
      console.log("ingresando 5")
      content5.style.display = "block";
    }

}

init();

function getClima() {
}