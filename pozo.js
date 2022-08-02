var content = document.getElementById('contenido');
var content2 = document.getElementById('contenido2');
var content3 = document.getElementById('contenido3');
var content4 = document.getElementById('contenido4');
var content5 = document.getElementById('contenido5');
var lat = 0;
var lon = 0;
async function init() {

  //Pedir activación de ubicación
  if (navigator.geolocation) navigator.geolocation.getCurrentPosition(function (pos) {

    //Si es aceptada guardamos lo latitud y longitud
    lat = pos.coords.latitude;
    console.log(lat)
    lon = pos.coords.longitude;
    console.log(lon)

  }, function (error) {

    //Si es rechazada enviamos de error por consola
    console.log('Ubicación no activada');
  });


  //const lat = sessionStorage.getItem('lat');
  //const long = sessionStorage.getItem('long');
  //await getUser();
  const response = await axios.get(`http://localhost:5023/api/clima/${lat}/${lon}`);
  const text_clima = response.data.data;
  //var cli = localStorage.getItem('climaFinal');
  console.log("text_clima", text_clima)
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


async function getUser() {
  try {
    const response = await axios.get('http://localhost:5023/api/clima');
    const text_clima = response.data.data;
    localStorage.setItem('climaFinal', JSON.stringify(text_clima));
    const climaFinal = JSON.parse(localStorage.getItem('climaFinal'));
    console.log(climaFinal)
  } catch (error) {
  }
}
